package net.katk.tools.nlp;

import java.util.Collection;
import java.util.Collections;
import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;

/**
 * Calcule de la distance d'edition
 */
abstract class De<T/* implements Comparable */>
{

	/**
	 * Le maximum est definie comme la plus grande valeur representable divise
	 * par deux. C'est pour eviter les depassements de capacite dans les
	 * calcules.
	 */
	private final static float max_num = Float.MAX_VALUE / 2;

	/**
	 * Chaque triplet contient dans l'ordre . : first : Le coefficiants de
	 * ponderation. second : La progression en X third : La progression en Y
	 */
	private Collection<Coeffs> coeffs;

	/**
	 * La valeur d'initialisation des chemins. Elle doit etre plus petites que
	 * toutes les autres valeurs utiliser.
	 */
	private final float initial_cost = 0;

	/**
	 * Le poids de tous les elements de chemins
	 */
	protected float[][] paths;

	/**
	 * Initiliseur regle avec une progression lineaire moins couteuse que les
	 * progressions indirectes.
	 */
	public De()
	{
		coeffs = new LinkedList<>();
		Coeffs[] ta =
		{
				new Coeffs((float) 2, (int) 1, (int) 0),
				new Coeffs((float) 1, (int) 1, (int) 1),
				new Coeffs((float) 2, (int) 0, (int) 1)
		};
		for (Coeffs t : ta)
			coeffs.add(t);
	}

	/**
	 * Initiliseur avec calcule de chemin minimum regle par le parametre.
	 */
	public De(final Collection<Coeffs> c)
	{
		coeffs = c;
	}

	/**
	 * Cherche le minimum des distances en tenant comptes des coefficiants.
	 * Calcule a l'aide de la formule general de progression. Attention une
	 * partie de cette formule est duplique dans une sous fonction du backtrack
	 * (get_min).
	 */
	private float direction(final int i, final int j)
	{
		float m = max_num, tmp = max_num;
		for (Coeffs c : coeffs)
		{
			if (i >= c.second && j >= c.third)
			{
				tmp = c.first * paths[i][j] + paths[i - c.second][j - c.third];
				if (tmp < m) m = tmp;
			}
		}
		return (m >= max_num) ? 0 : m;
	}

	/**
	 * Retourne la distance entre 2 constituants elementaires.
	 */
	public abstract float distance(T a, T b);

	/**
	 * Construit un nouveau tableau de calcule des distances. Certains calcules
	 * risque de faire des axes exterieurs a la matrices, Il faut donc
	 * determiner un criteres d'encapsulation de la matrice.
	 */
	public float[][] make_matrice(final T[] da, final T[] db)
	{
		float[][] d = new float[da.length][db.length];
		for (int i = 0; i < d.length; i++)
			for (int j = 0; j < d[i].length; j++)
				d[i][j] = max_num;
		d[0][0] = initial_cost;
		return d;
	}

	/**
	 * Calcule de la distance d'edition entre deux tableau de T. Utilisation de
	 * l'algorithme DTW.
	 */
	public float dtw(final T[] da, final T[] db)
	{
		paths = make_matrice(da, db);
		for (int i = 0; i < da.length; i++)
			for (int j = 0; j < db.length; j++)
				paths[i][j] = this.distance(da[i], db[j]);
		for (int i = 0; i < da.length; i++)
			for (int j = 0; j < db.length; j++)
				paths[i][j] += this.direction(i, j);
		return paths[da.length - 1][db.length - 1];
	}

	/**
	 * Retourne les coordonnees du chemin de la case la moins chere a proximite
	 * de la case passee en parametres. Le dernier parametres est le poid de
	 * cette case la moins chere.
	 */
	private Coeffs get_min(final Coeffs start)
	{
		Coeffs min = start;
		for (Coeffs n : coeffs)
			if (start.second - n.second >= 0 && start.third - n.third >= 0)
			{
				float cost = paths[start.second - n.second][start.third
						- n.third];
				if (cost <= min.first)
					min = new Coeffs(cost, start.second - n.second, start.third
							- n.third);
			}
		return min;
	}

	/**
	 * Reconstruit le chemin depuis le calcule de distance. Le chainage arriere
	 * commence par l'element retourne par dtw.
	 */
	public List<Coeffs> backtrack()
	{
		if (paths == null) return null;
		final int i = paths.length - 1;
		final int j = paths[i].length - 1;
		List<Coeffs> l = new LinkedList<>();
		Coeffs node = new Coeffs(paths[i][j], i, j);
		l.add(node);
		boolean stop = false;
		while (!stop)
		{
			Coeffs last = node;
			node = get_min(node);
			if (!(stop = (node.second == last.second && node.third == last.third)))
				l.add(node);
		}
		Collections.reverse(l);
		return l;
	}

	/**
	 * Fait tourner le DTW puis le backtrack. Le cout est disponible dans le
	 * first du dernier element de la liste.
	 */
	public List<Coeffs> run(final T[] da, final T[] db)
	{
		dtw(da, db);
		return backtrack();
	}

	/**
	 * Les modifications possible que l'on deduis depuis le chemin de la
	 * distance d'edition.
	 */
	public enum Action
	{
		SUPRESSION, ADDITION, SUBSTITUTION, CONSERVATION
	};

	/**
	 * Cree une encapsulation pour les actions de SUBSTITUTION ou CONSERVATION.
	 * Note que la conservation est decider pour une distance de 0.
	 */
	private Couple<Couple<Action, Float>, Couple<T, T>> build_action_simple(
			final T a, final T b, final float c)
	{
		Action ac = (0.0 == distance(a, b)) ? Action.CONSERVATION
				: Action.SUBSTITUTION;
		return new Couple<>(
				new Couple<>(ac, c), new Couple<>(a, b));
	}

	/**
	 * Annote la chaine d'edition.
	 */
	public List<Couple<Couple<Action, Float>, Couple<T, T>>> annote(
			final List<Coeffs> chemin, final T[] a, final T[] b)
	{
		List<Couple<Couple<Action, Float>, Couple<T, T>>> resultat = new ArrayList<>(
				chemin.size());
		Coeffs pred = null;
		for (Coeffs t : chemin)
		{
			Couple<Couple<Action, Float>, Couple<T, T>> ac = build_action_simple(
					a[t.second], b[t.third], t.first);
			if (pred != null)
			{
				int x = t.second.compareTo(pred.second);
				int y = t.third.compareTo(pred.third);
				if (x > 0 && y > 0)
				{}
				else
					if (x > 0 && y == 0)
					{
						ac.first.first = Action.ADDITION;
						ac.second.second = null;
					}
					else
						if (y > 0 && x == 0)
						{
							ac.first.first = Action.SUPRESSION;
							ac.second.first = null;
						}
						else
							System.err.println("Erreur : " + x + " : " + y);

			}
			resultat.add(ac);
			pred = t;
		}
		return resultat;
	}

}
