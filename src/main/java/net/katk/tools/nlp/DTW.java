package net.katk.tools.nlp;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.Collections;
import java.util.List;

/**
 * Calcul de la distance d'edition
 */
public interface DTW<T>
{

	/**
	 * Le maximum est definie comme la plus grande valeur representable divise
	 * par deux. C'est pour eviter les depassements de capacite dans les
	 * calcules.
	 */
	public final static float MAX_NUM = Float.MAX_VALUE / 2;

	/**
	 * La valeur d'initialisation des chemins. Elle doit etre plus petites que
	 * toutes les autres valeurs utiliser.
	 */
	public final static float INITIAL_COST = 0;

	public Collection<Coeffs> getCoeffs();

	public void setCoeffs(final Collection<Coeffs> coeffs);

	public float[][] getPaths();

	public void setPaths(float[][] paths);

	/**
	 * Initialiseur regle avec une progression lineaire moins couteuse que les
	 * progressions indirectes.
	 */
	default void autoInit()
	{
		setCoeffs(Arrays.asList(new Coeffs((float) 2, 1, 0), new Coeffs((float) 1, 1, 1), new Coeffs((float) 2, 0, 1)));
	}

	/**
	 * Initiliseur avec calcul de chemin minimum regle par le parametre.
	 */
	default void init(final Collection<Coeffs> c)
	{
		setCoeffs(c);
	}

	/**
	 * Cherche le minimum des distances en tenant comptes des coefficiants.
	 * Calcule a l'aide de la formule general de progression. Attention une
	 * partie de cette formule est duplique dans une sous fonction du backtrack
	 * (get_min).
	 */
	default float direction(final int i, final int j)
	{
		float m = MAX_NUM, tmp = MAX_NUM;
		for (final Coeffs c : getCoeffs())
			if (i >= c.second && j >= c.third)
			{
				tmp = c.first * getPaths()[i][j] + getPaths()[i - c.second][j - c.third];
				if (tmp < m)
					m = tmp;
			}
		return (m >= MAX_NUM) ? 0 : m;
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
	default public float[][] makeMatrix(final T[] da, final T[] db)
	{
		final float[][] d = new float[da.length][db.length];
		for (int i = 0; i < d.length; i++)
			for (int j = 0; j < d[i].length; j++)
				d[i][j] = MAX_NUM;
		d[0][0] = INITIAL_COST;
		return d;
	}

	/**
	 * Calcule de la distance d'edition entre deux tableau de T. Utilisation de
	 * l'algorithme DTW.
	 * 
	 * @return the distance between the two word
	 */
	default public float dtw(final T[] da, final T[] db)
	{
		setPaths(makeMatrix(da, db));
		for (int i = 0; i < da.length; i++)
			for (int j = 0; j < db.length; j++)
				getPaths()[i][j] = this.distance(da[i], db[j]);
		for (int i = 0; i < da.length; i++)
			for (int j = 0; j < db.length; j++)
				getPaths()[i][j] += this.direction(i, j);
		return getPaths()[da.length - 1][db.length - 1];
	}

	/**
	 * Retourne les coordonnees du chemin de la case la moins chere a proximite
	 * de la case passee en parametres. Le dernier parametres est le poid de
	 * cette case la moins chere.
	 */
	default Coeffs getMin(final Coeffs start)
	{
		Coeffs min = start;
		for (final Coeffs n : getCoeffs())
			if (start.second - n.second >= 0 && start.third - n.third >= 0)
			{
				final float cost = getPaths()[start.second - n.second][start.third - n.third];
				if (cost <= min.first)
					min = new Coeffs(cost, start.second - n.second, start.third - n.third);
			}
		return min;
	}

	/**
	 * Reconstruit le chemin depuis le calcule de distance. Le chainage arriere
	 * commence par l'element retourne par dtw.
	 */
	default public List<Coeffs> backtrack()
	{
		if (getPaths() == null)
			return null;
		final int i = getPaths().length - 1;
		final int j = getPaths()[i].length - 1;
		final List<Coeffs> l = new ArrayList<>(3);
		Coeffs node = new Coeffs(getPaths()[i][j], i, j);
		l.add(node);
		boolean stop = false;
		while (!stop)
		{
			final Coeffs last = node;
			node = getMin(node);
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
	default public List<Coeffs> run(final T[] da, final T[] db)
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
	}

	/**
	 * Cree une encapsulation pour les actions de SUBSTITUTION ou CONSERVATION.
	 * Note que la conservation est decider pour une distance de 0.
	 */
	default Pair<Pair<Action, Float>, Pair<T, T>> buildActionSimple(final T a, final T b, final float c)
	{
		final Action ac = (0.0 == distance(a, b)) ? Action.CONSERVATION : Action.SUBSTITUTION;
		return new Pair<>(new Pair<>(ac, c), new Pair<>(a, b));
	}

	/**
	 * Annote la chaine d'edition.
	 */
	default public List<Pair<Pair<Action, Float>, Pair<T, T>>> annote(final List<Coeffs> chemin, final T[] a, final T[] b)
	{
		final List<Pair<Pair<Action, Float>, Pair<T, T>>> resultat = new ArrayList<>(chemin.size());
		Coeffs pred = null;
		for (final Coeffs t : chemin)
		{
			final Pair<Pair<Action, Float>, Pair<T, T>> ac = buildActionSimple(a[t.second], b[t.third], t.first);
			if (pred != null)
			{
				final int x = t.second.compareTo(pred.second);
				final int y = t.third.compareTo(pred.third);
				if (x > 0 && y > 0)
				{
					//
				}
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
