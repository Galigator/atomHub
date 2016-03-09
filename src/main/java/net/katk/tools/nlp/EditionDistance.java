package net.katk.tools.nlp;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

/**
 * Algorithme de la distance d'edition pour les strings.
 */
public class EditionDistance implements DTW<Character>
{
	/**
	 * Chaque triplet contient dans l'ordre . : first : Le coefficiants de
	 * ponderation. second : La progression en X third : La progression en Y
	 */
	private volatile Collection<Coeffs> _coeffs;

	/**
	 * Le poids de tous les elements de chemins
	 */
	protected volatile float[][] _paths;

	@Override
	public Collection<Coeffs> getCoeffs()
	{
		return _coeffs;
	}

	@Override
	public void setCoeffs(final Collection<Coeffs> coeffs)
	{
		_coeffs = coeffs;
	}

	@Override
	public float[][] getPaths()
	{
		return _paths;
	}

	@Override
	public void setPaths(final float[][] paths)
	{
		_paths = paths;
	}

	/**
	 * Constructeur avec progression par default. De base, l'ajout ou la
	 * supression d'une lettre coute deux fois plus que l'operation normal.
	 */
	public EditionDistance()
	{
		autoInit();
	}

	/**
	 * Constructeur avec initialisation des parametres de progression.
	 */
	public EditionDistance(final Collection<Coeffs> c)
	{
		init(c);
	}

	/**
	 * Parametres pour la distance entre deux caracteres.
	 */
	public static final String[] tab = { //
	/*	  */"aàâä@", //
			"eéèêë€", //
			"iîï", //
			"uûüµ", //
			"oôö", //
			"yŷÿ", //
			"cç©", //
			" _-\t\n\r", //
			"0123456787",  //
			"({[", //
			")}]", //
			"+/-*", //
			"£$ø", //
			"\"'" };

	/**
	 * Vrai si la String contient le caractere passe en parametres.
	 */
	public static boolean contain(final String str, final char ch)
	{
		for (final char c : str.toCharArray())
			if (c == ch)
				return true;
		return false;
	}

	/**
	 * Calcule la distance entre deux char. Cette fonction contient des donnees
	 * linguistiques. Il faut choisir ces cout en accord avec les coeficiants de
	 * progressions.
	 */
	public static float distance(final char a, final char b)
	{
		if (a == b || Character.toLowerCase(a) == Character.toLowerCase(b))
			return 0;
		else
			for (final String idem : tab)
				if (contain(idem, a) && contain(idem, b))
					return 1;
		return 2;
	}

	/**
	 * Calcule la distance entre deux Character(s).
	 */
	@Override
	public float distance(final Character ca, final Character cb)
	{
		return distance(ca.charValue(), cb.charValue());
	}

	/**
	 * Convertion char par char en des Character(s).
	 */
	private static Character[] string2CharacterArray(final String str)
	{
		final Character[] str_c = new Character[str.length()];
		final char[] ca = str.toCharArray();
		for (int i = 0; i < ca.length; i++)
			str_c[i] = new Character(ca[i]);
		return str_c;
	}

	/**
	 * Calcule de la distance d'edition entre deux String. Utilisation de
	 * l'algorithme de dynamique time warping.
	 */
	public float dtw(final String a, final String b)
	{
		return dtw(string2CharacterArray(a), string2CharacterArray(b));
	}

	/**
	 * Affiche un chemin de substitution.
	 */
	void print_sub(final List<Coeffs> chemin)
	{
		for (final Coeffs t : chemin)
			System.out.println(" i = " + t.second + " : j = " + t.third + " : Cost = " + t.first);
	}

	/**
	 * Fait tourner le DTW puis le backtrack. Le cout est disponible dans le
	 * first du dernier element de la liste.
	 */
	public List<Coeffs> run(final String da, final String db)
	{
		dtw(da, db);
		return backtrack();
	}

	/**
	 * Annote la chaine d'edition.
	 */
	public List<Pair<Pair<Action, Float>, Pair<Character, Character>>> annote(final List<Coeffs> chemin, final String a, final String b)
	{
		final List<Pair<Pair<Action, Float>, Pair<Character, Character>>> resultat = new ArrayList<>(chemin.size());
		final char[] str_a = a.toCharArray();
		final char[] str_b = b.toCharArray();
		Coeffs pred = null;
		for (final Coeffs t : chemin)
		{
			final Pair<Pair<Action, Float>, Pair<Character, Character>> ac = buildActionSimple(str_a[t.second], str_b[t.third], t.first);
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

	/**
	 * Affiche un chemin annote.
	 */
	protected void print(final List<Pair<Pair<Action, Float>, Pair<Character, Character>>> l)
	{
		for (final Pair<Pair<Action, Float>, Pair<Character, Character>> m : l)
			System.out.println(m.first.first.toString() + " : " + m.first.second.toString() + " : " + m.second.first + " : " + m.second.second);
	}

	/**
	 * Fonction de tests. Ne pas utiliser cette fonction sans les conseils de
	 * votre medecin.
	 */
	public static void main(final String[] argv)
	{

		final Collection<Coeffs> coeffs = new ArrayList<>();
		final Coeffs[] ta = { new Coeffs((float) 0.9, 1, 0), new Coeffs((float) 1.0, 1, 1), new Coeffs((float) 0.9, 0, 1) };
		for (final Coeffs t : ta)
			coeffs.add(t);

		final EditionDistance d = new EditionDistance(coeffs);
		final List<Pair<String, String>> l = new ArrayList<>(3);
		l.add(new Pair<>("Bonjour", "Bonour"));
		l.add(new Pair<>("Bonjour", "Bonguour"));
		l.add(new Pair<>("Bonjour", "Aonjour"));
		l.add(new Pair<>("Bonjour", "Bonjour"));

		for (final Pair<String, String> c : l)
		{
			final List<Coeffs> chemin = d.run(c.first, c.second);
			final List<Pair<Pair<Action, Float>, Pair<Character, Character>>> lm = d.annote(chemin, c.first, c.second);
			d.print(lm);
			System.out.println();
		}
	}
}
