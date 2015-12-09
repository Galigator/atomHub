package net.katk.tools.nlp;

import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.InputStreamReader;
import java.io.PrintStream;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import java.util.stream.Collectors;
import net.katk.tools.Log;

public interface Kstd
{
	public static final Logger _logger = Log.getLogger(Kstd.class);

	/**
	 * Print some information into a file. Each element is print on a new line.
	 * Note : The order of the ouput is the one of the set implementation.
	 */
	default public void output(final String filename, final Collection<String> set)
	{
		try (final PrintStream p = new PrintStream(new FileOutputStream(filename)))
		{
			for (final String element : set)
				p.println(element);
		}
		catch (final Exception e)
		{
			_logger.log(Level.SEVERE, "Error writing into file : " + filename, e);
		}

	}

	/**
	 * Read information from a file. Put the information in the set, it can
	 * be none empty if wanted. Each element is read from a single line. Note :
	 * The order of the set is the one of the set implementation.
	 */
	default public <T extends Collection<String>> T input(final String filename, final T set)
	{
		try (final BufferedReader in = new BufferedReader(new InputStreamReader(new FileInputStream(filename))))
		{
			while (in.ready())
				set.add(in.readLine());
		}
		catch (final Exception e)
		{
			_logger.log(Level.SEVERE, "File reading from file : " + filename, e);
		}
		return set;
	}

	default public List<String> input(final String filename)
	{
		return input(filename, new ArrayList<String>());
	}

	/**
	 * Display a matrix.
	 * 
	 * @param d is the matrix.
	 */
	public static <T> void print(final T[][] d)
	{
		for (final T[] fa : d)
		{
			for (final T fb : fa)
				System.out.print(fb + " ");
			System.out.println("");
		}
	}

	/**
	 * @param com is the command to run on system.
	 */
	default public List<String> run(final String com)
	{
		final List<String> res = new ArrayList<>();
		final String[] c = { "sh", "-c", com };
		try (final BufferedReader buf = (new BufferedReader(new InputStreamReader(Runtime.getRuntime().exec(c).getInputStream()))))
		{
			String line = null;
			while ((line = buf.readLine()) != null)
				res.add(line);
		}
		catch (final Exception e)
		{
			_logger.log(Level.SEVERE, "Error while running command : " + com, e);
		}
		return res;
	}

	/**
	 * Realise la jointure d'une collection de String. Le second element
	 * s'intercale entre chaque string sauf la derniere. Quand la collection est
	 * vide join retourne une chaine vide.
	 */
	default public <T> String join(final Collection<T> c, final CharSequence sep)
	{
		return c.stream().map(x -> x.toString()).collect(Collectors.joining(sep));
	}
}
