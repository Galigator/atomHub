package net.katk.tools.nlp;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

/**
 * Algorithme de la distance d'edition pour les strings.
 */
public class DistanceDEdition extends De<Character>
{

	/**
	 * Constructeur avec progression par default. De base, l'ajout ou la
	 * supression d'une lettre coute deux fois plus que l'operation normal.
	 */
	public DistanceDEdition()
	{
	}

	/**
	 * Constructeur avec initialisation des parametres de progression.
	 */
	public DistanceDEdition(final Collection<Coeffs> c)
	{
		super(c);
	}

	/**
	 * Parametres pour la distance entre deux caracteres.
	 */
	public static final String[] tab = { "aàâä@", "eéèêë€", "iîï", "uûüµ", "oôö", "yŷÿ", "cç©", " _-\t\n\r", "0123456787", "({[", ")}]", "+/-*", "£$ø", "\"'" };

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
	@SuppressWarnings("unused")
	private void print_sub(final List<Coeffs> chemin)
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
	 * Les modifications possible que l'on deduis depuis le chemin de la
	 * distance d'edition.
	 */
	public enum Action
	{
		SUPRESSION, ADDITION, SUBSTITUTION, CONSERVATION
	};

	/**
	 * Cree une encapsulation pour les actions de SUBSTITUTION ou CONSERVATION.
	 */

	private Couple<Couple<Action, Float>, Couple<Character, Character>> build_action_simple(final char a, final char b, final float c)
			{
		final Action ac = (a == b) ? Action.CONSERVATION : Action.SUBSTITUTION;
		return new Couple<>(new Couple<>(ac, c), new Couple<>(new Character(a), new Character(b)));
			}

	/**
	 * Annote la chaine d'edition.
	 */
	public List<Couple<Couple<Action, Float>, Couple<Character, Character>>> annote(final List<Coeffs> chemin, final String a, final String b)
			{
		final List<Couple<Couple<Action, Float>, Couple<Character, Character>>> resultat = new ArrayList<>(chemin.size());
		final char[] str_a = a.toCharArray();
		final char[] str_b = b.toCharArray();
		Coeffs pred = null;
		for (final Coeffs t : chemin)
		{
			final Couple<Couple<Action, Float>, Couple<Character, Character>> ac = build_action_simple(str_a[t.second], str_b[t.third], t.first);
			if (pred != null)
			{
				final int x = t.second.compareTo(pred.second);
				final int y = t.third.compareTo(pred.third);
				if (x > 0 && y > 0)
				{
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
	protected void print(final List<Couple<Couple<Action, Float>, Couple<Character, Character>>> l)
	{
		for (final Couple<Couple<Action, Float>, Couple<Character, Character>> m : l)
			System.out.println(m.first.first.toString() + " : " + m.first.second.toString() + " : " + m.second.first + " : " + m.second.second);
	}

	/**
	 * Fonction de tests. Ne pas utiliser cette fonction sans les conseils de
	 * votre medecin.
	 */
	public static void main(String[] argv)
	{

		final Collection<Coeffs> coeffs = new ArrayList<>();
		final Coeffs[] ta = { new Coeffs((float) 0.9, 1, 0), new Coeffs((float) 1.0, 1, 1), new Coeffs((float) 0.9, 0, 1) };
		for (final Coeffs t : ta)
			coeffs.add(t);

		final DistanceDEdition d = new DistanceDEdition(coeffs);
		final List<Couple<String, String>> l = new ArrayList<>(3);
		l.add(new Couple<>("Bonjour", "Bonour"));
		l.add(new Couple<>("Bonjour", "Bonguour"));
		l.add(new Couple<>("Bonjour", "Aonjour"));
		l.add(new Couple<>("Bonjour", "Bonjour"));

		for (final Couple<String, String> c : l)
		{
			final List<Coeffs> chemin = d.run(c.first, c.second);
			final List<Couple<Couple<Action, Float>, Couple<Character, Character>>> lm = d.annote(chemin, c.first, c.second);
			d.print(lm);
			System.out.println();
		}
	}
}
