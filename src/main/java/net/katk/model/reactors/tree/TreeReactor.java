package net.katk.model.reactors.tree;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.ManyToOne;
import javax.xml.bind.annotation.XmlElement;
import net.katk.adapter.Reaction;
import net.katk.compute.Token;
import net.katk.model.Atom;
import net.katk.model.Example;
import net.katk.model.Param;
import net.katk.model.Reactor;
import net.katk.model.Step;

@Entity(name = "treereactor")
public class TreeReactor extends Reactor
{
	@XmlElement
	@ManyToOne(cascade = CascadeType.PERSIST, fetch = FetchType.LAZY)
	@Column(name = "atom")
	private Atom _atom = null;

	public Atom getAtom()
	{
		return _atom;
	}

	public TreeReactor()
	{
	}

	public TreeReactor(final Token token, final Atom atom)
	{
		_atom = atom;
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

	private Reaction next(@SuppressWarnings("unused") final Token token, final Example example, final Reaction reaction)
	{
		final Reaction out = (reaction == null) ? new Reaction() : reaction;

		// Compare to the tree
		final Atom atom = getAtom();
		final List<Example> examples = TreeCompareFunctions.filter(atom.getExamples(), example);

		final Set<Atom> atoms = new HashSet<>();
		examples.forEach(e ->
		{
			final List<Step> p = e.getPath();
			if (!p.isEmpty())
				atoms.add(p.get(p.size() - 1).getCore());
		});

		out._askAtomId = new ArrayList<>(atoms.size());
		atoms.forEach(a -> out._askAtomId.add(Integer.parseInt(a.getId())));

		// Select the next step in the tree
		@SuppressWarnings("unused")
		final Step nextStepInTree = null;

		return out;
	}

	@Override
	public Reaction next(final Token token, final Example example)
	{
		final Reaction reaction = new Reaction();
		if (token == null || example == null)
		{
			reaction._failure = true;
			reaction._failureMessage = TreeReactor.class.getCanonicalName() + ".add() invalid input.";
			return reaction;
		}
		return next(token, example, reaction);
	}

	@Override
	public Reaction back(final Token token, final Example example)
	{
		// TODO Auto-generated method stub
		return null;
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
