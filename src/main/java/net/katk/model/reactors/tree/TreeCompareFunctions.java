package net.katk.model.reactors.tree;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import net.katk.model.Atom;
import net.katk.model.Common;
import net.katk.model.Example;
import net.katk.model.Param;
import net.katk.model.Party;
import net.katk.model.Step;
import net.katk.tools.Difference;
import net.katk.tools.nlp.Coeffs;
import net.katk.tools.nlp.DistanceDEdition;

public class TreeCompareFunctions
{
	private final static Collection<Coeffs> _coeffs = new ArrayList<>();
	Coeffs[] ta = { new Coeffs((float) 0.9, 1, 0), new Coeffs((float) 1.0, 1, 1), new Coeffs((float) 0.9, 0, 1) };

	private final static DistanceDEdition _d = new DistanceDEdition(_coeffs);

	final static int _smallDateDifference = 500000;

	private static Difference compare(final Step alpha, final Step beta)
	{
		final Difference max = Difference.None;
		if (beta.getId() == alpha.getId())
			return Difference.Equal;
		if (beta.getCore() == alpha.getCore())
			if (Math.abs(beta.getDate() - alpha.getDate()) < _smallDateDifference)

				// TODO : check environment.
				return max;

		if (distance(alpha.getEvaluation(), beta.getEvaluation()) > 0.1)
			max(max, Difference.Fonctionnal);

		if (distance(alpha.getResult(), beta.getResult()) > 0.1)
			max(max, Difference.Fonctionnal);

		max(max, compare(alpha.getCore(), beta.getCore()));

		// alpha.getDate(); // For steps Date aren't very important
		// alpha.getGroup(); // same
		// alpha.getNote(); // same

		// Pas de comparaison pour les parametres. Les comparaisons sont rendu explicite par l'ajout de granule de branchement les utilisants.

		return Difference.Fonctionnal;
	}

	private static Difference compare(final Atom alpha, final Atom beta)
	{
		if (beta.getId() == alpha.getId())
			return Difference.Equal;

		return Difference.Fonctionnal;
	}

	@SuppressWarnings("unused")
	private static Difference compare(final Param alpha, final Param beta)
	{
		if (beta.getId() == alpha.getId())
			return Difference.Equal;

		Difference max = Difference.None;

		final double distanceName = distance(alpha.getName(), beta.getName());

		if (distanceName > 0.1)
			max = max(Difference.Syntaxic, max);

		final double distanceValue = distance(alpha.getValue(), beta.getValue());

		if (distanceValue > 0.1)
			max = max(Difference.Syntaxic, max);

		if ((distanceName + distanceValue > 0.1))
			max = max(Difference.Fonctionnal, max);

		max = max(compare(alpha.getGroup(), beta.getGroup()), max);

		if (Math.abs(alpha.getDate() - beta.getDate()) < _smallDateDifference)
			max = max(Difference.Minor, max);

		return max;
	}

	private static Difference compare(final Party alpha, final Party beta)
	{

		if (alpha.getId() == beta.getId())
			return Difference.Equal;

		Difference max = Difference.None;

		if (distance(alpha.getRwxrwxrwx(), beta.getRwxrwxrwx()) > 0.1)
			max = max(Difference.Refinement, max);

		if (alpha.getBoss().getId() == beta.getBoss().getId())
			max = max(Difference.Fonctionnal, max);

		if (alpha.getAdmin().getId() == beta.getAdmin().getId())
			max = max(Difference.Fonctionnal, max);

		max = max(max, differenceInSet(alpha.getMembers(), beta.getMembers()));
		max = max(max, differenceInSet(alpha.getChidren(), beta.getChidren()));

		return max;
	}

	private static <T extends Common> int differenceInSet(final List<T> alpha, final List<T> beta)
	{
		int count = 0;
		for (final T alphaElement : alpha)
			if (null == exist(beta, alphaElement.getId()))
				count++;
		return count;
	}

	private static Difference max(final Difference alpha, final Difference beta)
	{
		return (alpha.getLevel() < beta.getLevel()) ? beta : alpha;
	}

	private static Difference max(final Difference alpha, final int number)
	{
		return max(alpha, Difference.toDifference(number));
	}

	private static double distance(final String alphaName, final String betaName)
	{
		if (alphaName != null && betaName != null && alphaName.length() > 0 && betaName.length() > 0)
			return _d.dtw(alphaName, betaName) / Math.sqrt(alphaName.length() * alphaName.length() + betaName.length() * betaName.length());
		return 1.0;
	}

	private static <T extends Common> T exist(final List<T> commons, final String id)
	{
		for (final T common : commons)
			if (common.getId().equals(id))
				return common;
		return null;
	}

	public static List<Example> filter(final List<Example> examples, final Example example)
	{
		final List<Step> path = example.getPath();
		final List<Example> out = new ArrayList<>();
		final int size = path.size();
		for (final Example e : examples)
		{
			final List<Step> p = e.getPath();
			if (p.size() >= size)
			{
				boolean match = true;
				for (int i = 0; i < size && match; i++)
				{
					final Step step = path.get(i);
					final Difference difference = compare(step, p.get(i));
					match = difference.getLevel() <= Difference.Refinement.getLevel();
				}
				if (match)
					out.add(e);
			}
		}
		return out;
	}
}
