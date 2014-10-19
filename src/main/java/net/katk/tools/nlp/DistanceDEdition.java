package net.katk.tools.nlp;

import java.lang.Character;
import java.util.Collection;
import java.util.List;
import java.util.ArrayList;

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
	{}

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
	public static final String[] tab =
	{
			"aàâä@",
			"eéèêë€",
			"iîï",
			"uûüµ",
			"oôö",
			"yŷÿ",
			"cç©",
			" _-\t\n\r",
			"0123456787",
			"({[",
			")}]",
			"+/-*",
			"£$ø",
			"\"'"
	};

	/**
	 * Vrai si la String contient le caractere passe en parametres.
	 */
	public static boolean contain(final String str, final char ch)
	{
		for (char c : str.toCharArray())
			if (c == ch) return true;
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
			for (String idem : tab)
				if (contain(idem, a) && contain(idem, b)) return 1;
		return 2;
	}

	/**
	 * Calcule la distance entre deux Character(s).
	 */
	public float distance(final Character ca, final Character cb)
	{
		return distance(ca.charValue(), cb.charValue());
	}

	/**
	 * Convertion char par char en des Character(s).
	 */
	private static Character[] string2CharacterArray(final String str)
	{
		Character[] str_c = new Character[str.length()];
		char[] ca = str.toCharArray();
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
		for (Coeffs t : chemin)
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

	private Couple<Couple<Action, Float>, Couple<Character, Character>> build_action_simple(
			final char a, final char b, final float c)
	{
		Action ac = (a == b) ? Action.CONSERVATION : Action.SUBSTITUTION;
		return new Couple<Couple<Action, Float>, Couple<Character, Character>>(
				new Couple<Action, Float>(ac, c),
				new Couple<Character, Character>(new Character(a),
						new Character(b)));
	}

	/**
	 * Annote la chaine d'edition.
	 */
	public List<Couple<Couple<Action, Float>, Couple<Character, Character>>> annote(
			final List<Coeffs> chemin, final String a, final String b)
	{
		List<Couple<Couple<Action, Float>, Couple<Character, Character>>> resultat = new ArrayList<Couple<Couple<Action, Float>, Couple<Character, Character>>>(
				chemin.size());
		char[] str_a = a.toCharArray();
		char[] str_b = b.toCharArray();
		Coeffs pred = null;
		for (Coeffs t : chemin)
		{
			Couple<Couple<Action, Float>, Couple<Character, Character>> ac = build_action_simple(
					str_a[t.second], str_b[t.third], t.first);
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

	/**
	 * Affiche un chemin annote.
	 */
	protected void print(
			final List<Couple<Couple<Action, Float>, Couple<Character, Character>>> l)
	{
		for (Couple<Couple<Action, Float>, Couple<Character, Character>> m : l)
			System.out.println(m.first.first.toString() + " : "
					+ m.first.second.toString() + " : " + m.second.first
					+ " : " + m.second.second);
	}

	/**
	 * Fonction de tests. Ne pas utiliser cette fonction sans les conseils de
	 * votre medecin.
	 */
	public static void main(String[] argv)
	{

		Collection<Coeffs> coeffs = new ArrayList<Coeffs>();
		Coeffs[] ta =
		{
				new Coeffs((float) 0.9, (int) 1, (int) 0),
				new Coeffs((float) 1.0, (int) 1, (int) 1),
				new Coeffs((float) 0.9, (int) 0, (int) 1)
		};
		for (Coeffs t : ta)
			coeffs.add(t);

		DistanceDEdition d = new DistanceDEdition(coeffs);
		List<Couple<String, String>> l = new ArrayList<Couple<String, String>>(
				3);
		l.add(new Couple<String, String>("Bonjour", "Bonour"));
		l.add(new Couple<String, String>("Bonjour", "Bonguour"));
		l.add(new Couple<String, String>("Bonjour", "Aonjour"));
		l.add(new Couple<String, String>("Bonjour", "Bonjour"));

		for (Couple<String, String> c : l)
		{
			List<Coeffs> chemin = d.run(c.first, c.second);
			List<Couple<Couple<Action, Float>, Couple<Character, Character>>> lm = d
					.annote(chemin, c.first, c.second);
			d.print(lm);
			System.out.println();
		}
	}
}
