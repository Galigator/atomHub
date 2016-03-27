package net.katk.model.reactors.tree;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import javax.persistence.Entity;
import net.katk.adapter.Reaction;
import net.katk.compute.Token;
import net.katk.model.Atom;
import net.katk.model.Example;
import net.katk.model.Param;
import net.katk.model.People;
import net.katk.model.Reactor;
import net.katk.model.Step;

@Entity(name = "treereactor")
public class TreeReactor extends Reactor
{
	public TreeReactor()
	{
	}

	public TreeReactor(final Token token)
	{
		token._em.persist(this);
	}

	@Override
	public Reaction add(final Token token, final Example example, final List<Param> params, final Atom atom, final String result, final String evaluation, final long date, final String note)
	{
		final Reaction reaction = new Reaction();
		if (token == null || example == null || atom == null || (result == null && evaluation == null))
		{
			reaction._failure = true;
			reaction._failureMessage = TreeReactor.class.getCanonicalName() + ".add() invalid input.";
			return reaction;
		}

		// Create Step
		final Step step = new Step(token, params, atom, result, evaluation, date, note, token._people);

		// Add Step
		example.getPath().add(step);
		token._em.persist(example);

		// Return this step.
		reaction._alterExample = example.getId();
		reaction._alterStep = step.getId();

		// nextStepInTree
		return reaction;
	}

	private static Reaction next(final Token token, final Example example, final Reaction reaction)
	{
		final Reaction out = (reaction == null) ? new Reaction() : reaction;

		// Compare to the tree
		final List<Example> examples = TreeCompareFunctions.filter(example.getOrigine().getExamples(), example);

		out._askAtomId = examples.stream().map(Example::getPath).filter(p -> !p.isEmpty()).map(p -> p.get(p.size() - 1).getCore()).map(Atom::getId).map(Integer::parseInt).collect(Collectors.toList());

		// Select the next step in the tree
		final List<Param> params = new ArrayList<>();
		final Atom core = example.getOrigine();
		final String result = "";
		final String evaluation = "";
		final long date = System.currentTimeMillis();
		final String note = "";
		final People author = token.getPeople();
		final Step nextStepInTree = new Step(token, params, core, result, evaluation, date, note, author);

		example.addStep(token, nextStepInTree);

		out.setAlterExample(example.getId());
		out.setAlterStep(nextStepInTree.getId());

		return out;
	}

	@Override
	public Reaction next(final Token token, final Example example)
	{
		if (token == null || example == null)
			return new Reaction(getClass(), ".next() invalid input.");
		return next(token, example, new Reaction());
	}

	private static Reaction back(final Token token, final Example example, final Reaction reaction)
	{
		final Reaction out = (reaction == null) ? new Reaction() : reaction;

		example.removeStep(token);
		out.setAlterExample(example.getId());
		final int lastIndex = example.getPath().size() - 1;
		if (lastIndex >= 0)
		{
			out.setAlterStep(example.getPath().get(lastIndex).getId());

		}
		else
		{
			final Atom atom = example.getOrigine();
			if (atom.getLevel() > 0) // Back while no atom selected and intricate path.
			{
				// example.get
			}
		}
		return out;
	}

	@Override
	public Reaction back(final Token token, final Example example)
	{
		if (token == null || example == null)
			return new Reaction(getClass(), ".back() invalid input.");

		return back(token, example, new Reaction());
	}

	@Override
	public Reaction addTerminal(final Token token, final Example example)
	{
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Reaction insert(final Token token, final Example example, final Step stepA, final Step stepB)
	{
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Reaction remove(final Token token, final Example example, final Step step)
	{
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Reaction replace(final Token token, final Example example, final Step step, final Atom atom, final String result, final String evaluation)
	{
		// TODO Auto-generated method stub
		return null;
	}

}
