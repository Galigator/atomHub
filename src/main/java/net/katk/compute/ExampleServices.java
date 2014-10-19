package net.katk.compute;

import static net.katk.tools.StackTraceInfo.getCurrentMethodName;

import java.util.Iterator;
import java.util.List;

import net.katk.adapter.IExample;
import net.katk.adapter.Reaction;
import net.katk.model.Atom;
import net.katk.model.Example;
import net.katk.model.Reactor;
import net.katk.model.Step;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;


public class ExampleServices extends Token implements IExample
{
	private transient static final Logger _logger = LoggerFactory.getLogger(Example.class.getName());
	
	@Override
	public Example getExample(final String token, final int id)
	{
		_logger.info(getCurrentMethodName());
		if (!open(token)) return null;
		final Example out = (token == null)? null : getExample(id);
		close();
		return out;
	}

	@Override
	public Reaction add(final String token, final int exampleId, final int atomId, final String result, final String evaluation, final long date, final String note, final List<net.katk.model.Param> params)
	{
		if (!open(token)) return null;
		final Example example = getExample(exampleId);
		final Atom atom = getAtom(atomId);
		
		final Iterator<Reactor> reactorIterator = example.getReactors().iterator();
		
		Reaction reaction = null;
		while((reaction == null || reaction._failure) && reactorIterator.hasNext())
		{
			final Reactor reactor = reactorIterator.next();
			reaction = reactor.add(this, example, params, atom, result, evaluation, date, note);
		}
		close();
		return reaction;
	}

	@Override
	public Reaction next(final String token, final int exampleId)
	{
		if (!open(token)) return null;
		final Example example = getExample(exampleId);

		final Iterator<Reactor> reactorIterator = example.getReactors().iterator();
		
		Reaction reaction = null;
		while((reaction == null || reaction._failure) && reactorIterator.hasNext())
		{
			final Reactor reactor = reactorIterator.next();
			reaction = reactor.next(this, example);
		}
		close();
		return reaction;
	}
	
	@Override
	public Reaction back(final String token, final int exampleId)
	{
		if (!open(token)) return null;
		final Example example = getExample(exampleId);

		final Iterator<Reactor> reactorIterator = example.getReactors().iterator();
		
		Reaction reaction = null;
		while((reaction == null || reaction._failure) && reactorIterator.hasNext())
		{
			final Reactor reactor = reactorIterator.next();
			reaction = reactor.back(this, example);
		}
		close();
		return reaction;
	}

	@Override
	public Reaction addTerminal(final String token, final int exampleId)
	{
		if (!open(token)) return null;
		final Example example = getExample(exampleId);

		final Iterator<Reactor> reactorIterator = example.getReactors().iterator();
		
		Reaction reaction = null;
		while((reaction == null || reaction._failure) && reactorIterator.hasNext())
		{
			final Reactor reactor = reactorIterator.next();
			reaction = reactor.addTerminal(this, example);
		}
		close();
		return reaction;
	}

	@Override
	public Reaction insert(final String token, final int exampleId, final int stepIdA, final int stepIdB)
	{
		if (!open(token)) return null;
		final Example example = getExample(exampleId);
		final Step stepA = getStep(stepIdA);
		final Step stepB = getStep(stepIdB);

		final Iterator<Reactor> reactorIterator = example.getReactors().iterator();
		
		Reaction reaction = null;
		while((reaction == null || reaction._failure) && reactorIterator.hasNext())
		{
			final Reactor reactor = reactorIterator.next();
			reaction = reactor.insert(this, example, stepA, stepB);
		}
		close();
		return reaction;
	}

	@Override
	public Reaction delete(final String token, final int exampleId, final int stepId)
	{
		if (!open(token)) return null;
		final Example example = getExample(exampleId);
		final Step step = getStep(stepId);

		final Iterator<Reactor> reactorIterator = example.getReactors().iterator();
		
		Reaction reaction = null;
		while((reaction == null || reaction._failure) && reactorIterator.hasNext())
		{
			final Reactor reactor = reactorIterator.next();
			reaction = reactor.delete(this, example, step);
		}
		close();
		return reaction;
	}

	@Override
	public Reaction replace(final String token, final int exampleId, final int stepId, final int atomId, final String result, final String evaluation)
	{
		if (!open(token)) return null;
		final Example example = getExample(exampleId);
		final Step step = getStep(stepId);
		final Atom atom = getAtom(atomId);

		final Iterator<Reactor> reactorIterator = example.getReactors().iterator();
		
		Reaction reaction = null;
		while((reaction == null || reaction._failure) && reactorIterator.hasNext())
		{
			final Reactor reactor = reactorIterator.next();
			reaction = reactor.replace(this, example, step, atom, result, evaluation);
		}
		close();
		return reaction;
	}

}
