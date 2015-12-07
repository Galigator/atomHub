package net.katk.tools.nlp;

/**
 *
 * Survival functions for Java
 * FileOutput FileInput
 *
 * Compile with : javac -Xlint:deprecation -Xlint:unchecked  kstd.java
 * To use it : import static Kstd.*; then use the fonctions without prefix by Kstd.
 */

import static java.lang.Math.max;

import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.InputStreamReader;
import java.io.PrintStream;
import java.util.Collection;
import java.util.List;
import java.util.Vector;

// import static java.lang.Math.min;

class Kstd
{

	/**
	 * Error Levels: Nothing = no error at all are printed All = Evry error is
	 * fatal with maximum output.
	 */
	private static int debug_level = 0;

	/**
	 * Control the printing of information that is allow.
	 */
	public static void set_debug(int level)
	{
		Kstd.debug_level = max(level, debug_level);
	}

	/**
	 * Do what is need to conform errors specifications for each debug state.
	 */
	public static void handle_errors(Exception error)
	{
		switch (Kstd.debug_level)
		{
			case 0:
			{
				break;
			}
			case 1:
			{
				error.printStackTrace();
				System.exit(debug_level);
				break;
			}
			default:
			{
				handle_errors("handle_errors(Exception error)");
			}
		}
	}

	/**
	 * Do what is need to conform errors specifications for each debug state.
	 * This function is to be use when no errors was raise but a assertion is in
	 * failure.
	 */
	public static void handle_errors(String error)
	{
		switch (Kstd.debug_level)
		{
			case 0:
			{
				break;
			}
			case 1:
			{
				System.err.println(error);
				System.exit(debug_level);
				break;
			}
			default:
			{
				System.err.println("Warning: Unknow debug level : "
						+ Kstd.debug_level + " :" + error);
			}
		}
	}

	/**
	 * Print some information into a file. Each element is print on a new line.
	 * Note : The order of the ouput is the one of the set implementation.
	 */
	public static void output(String filename, List<String> set)
	{
		PrintStream p;
		try
		{
			p = new PrintStream(new FileOutputStream(filename));
			for (String element : set)
				p.println(element);
			p.close();
		}
		catch (Exception error)
		{
			System.err.println("Error writing into file : " + filename);
			handle_errors(error);
		}

	}

	/**
	 * Read information from a file. Put the information in the set, whitch can
	 * be none empty if wanted. Each element is read from a single line. Note :
	 * The order of the set is the one of the set implementation.
	 */
	public static List<String> input(String filename, List<String> set)
	{
		try
		{
			BufferedReader in = new BufferedReader(new InputStreamReader(
					new FileInputStream(filename)));
			while (in.ready())
			{
				set.add((String) in.readLine());
			}
			in.close();
		}
		catch (Exception error)
		{
			System.err.println("File reading from file : " + filename);
			handle_errors(error);
		}
		return set;
	}

	/**
	 * Read information from a file. Each element is read from a single line.
	 */
	public static List<String> input(String filename)
	{
		return Kstd.input(filename, new Vector<String>());
	}

	/**
	 * Print a vector into a file. Each element is print on a new line.
	 */
	public static void output_vector(String filename, Vector<String> data)
	{
		Kstd.output(filename, data);
	}

	/**
	 * Read a vector from a file. Each element is read from a single line.
	 */
	public static Vector<String> input_vector(String filename)
	{
		Vector<String> data = (Vector<String>) Kstd.input(filename);
		data.trimToSize();
		return data;
	}

	/**
	 * Affiche une matrice de nombre.
	 */
	public static void print(float[][] d)
	{
		for (int i = 0; i < d.length; i++)
		{
			for (int j = 0; j < d[i].length; j++)
				System.out.print(d[i][j] + " ");
			System.out.println("");
		}
	}

	/**
	 * Fonction d'acces au systeme.
	 */
	public static List<String> run(String com)
	{
		Vector<String> res = new Vector<>();
		String line = null;
		try
		{
			String[] c = {"sh", "-c", com};
			BufferedReader buf = (new BufferedReader(new InputStreamReader(
					Runtime.getRuntime().exec(c).getInputStream())));
			while ((line = buf.readLine()) != null)
				res.add(line);
		}
		catch (Exception error)
		{
			System.err.println("Error while running command : " + com);
			handle_errors(error);
		}
		return (List<String>) res;
	}

	/**
	 * Realise la jointure d'une collection de String. Le second element
	 * s'intercale entre chaque string sauf la derniere. Quand la collection est
	 * vide join retourne une chaine vide.
	 */
	public static String join(Collection<String> c, String sep)
	{
		if (c.isEmpty()) return "";
		int sep_size = sep.length(); // Calcule vague de la taille du resultat.
		int size = 0;
		for (String str : c)
			size += str.length() + sep_size;
		StringBuffer buf = new StringBuffer(size);
		for (String str : c)
		{
			buf.append(str);
			buf.append(sep);
		}
		return buf.substring(0, size - sep_size);
	}

	/**
	 * Fonction de tests. Ne pas utiliser cette fonction sans les conseils de
	 * votre medecin.
	 */
	public static void main(String argv[])
	{
		System.out.println("<test>");
		Kstd.set_debug(1);

		String file = Kstd.class.getCanonicalName()+".java";
		for (String element : Kstd.input(file))
			System.out.println(element + "\n");
		Kstd.output(file + ".tmp", Kstd.input(file));

		List<?> d = Kstd.run("pwd");
		List<String> les = Kstd.run("ls " + d.get(0));
		System.out.println(Kstd.join(les, "%\n"));
		System.out.println("Dir is : " + d.get(0));

		System.exit(0);
	}
}
