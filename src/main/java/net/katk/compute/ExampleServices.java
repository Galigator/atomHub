package net.katk.compute;

import static net.katk.tools.StackTraceInfo.getCurrentMethodName;

import java.util.Iterator;
import java.util.List;
import java.util.Optional;

import net.katk.adapter.IExample;
import net.katk.adapter.Problem;
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
	public Example getExample(final String token, final String id) throws Problem
	{
		_logger.info(getCurrentMethodName());
		if (!open(token)) return null;
		try
		{
			return getExample(id).orElse(null);
		}
		finally
		{
			close();
		}
	}

	@Override
	public Reaction add(final String token, final String exampleId, final String atomId, final String result, final String evaluation, final long date, final String note, final List<net.katk.model.Param> params) throws Problem
	{
		if (!open(token)) return null;
		try
		{
			final Optional<Example> exampleOption = getExample(exampleId);
			final Optional<Atom> atomOption = getAtom(atomId);
			if (!exampleOption.isPresent() || !atomOption.isPresent())
				return null;

			final Example example = exampleOption.get();
			final Atom atom = atomOption.get();
			
			final Iterator<Reactor> reactorIterator = example.getReactors().iterator();
			
			Reaction reaction = null;
			while((reaction == null || reaction._failure) && reactorIterator.hasNext())
				reaction = reactorIterator.next().add(this, example, params, atom, result, evaluation, date, note);
			return reaction;
		}
		finally
		{
			close();
		}
	}

	@Override
	public Reaction next(final String token, final String exampleId) throws Problem
	{
		if (!open(token)) return null;
		try
		{
			final Optional<Example> exampleOption = getExample(exampleId);
			if (!exampleOption.isPresent())
				return null;
			final Example example = exampleOption.get();
	
			final Iterator<Reactor> reactorIterator = example.getReactors().iterator();
			
			Reaction reaction = null;
			while((reaction == null || reaction._failure) && reactorIterator.hasNext())
				reaction = reactorIterator.next().next(this, example);
			return reaction;
		}
		finally
		{
			close();
		}
	}
	
	@Override
	public Reaction back(final String token, final String exampleId) throws Problem
	{
		if (!open(token)) return null;
		try
		{
			final Optional<Example> exampleOption = getExample(exampleId);
			if (!exampleOption.isPresent())
				return null;
			final Example example = exampleOption.get();
	
			final Iterator<Reactor> reactorIterator = example.getReactors().iterator();
			
			Reaction reaction = null;
			while((reaction == null || reaction._failure) && reactorIterator.hasNext())
				reaction = reactorIterator.next().back(this, example);
			return reaction;		
		}
		finally
		{
			close();
		}
	}

	@Override
	public Reaction addTerminal(final String token, final String exampleId) throws Problem
	{
		if (!open(token)) return null;
		try
		{
			final Optional<Example> exampleOption = getExample(exampleId);
			if (!exampleOption.isPresent())
				return null;
			final Example example = exampleOption.get();
			final Iterator<Reactor> reactorIterator = example.getReactors().iterator();
			
			Reaction reaction = null;
			while((reaction == null || reaction._failure) && reactorIterator.hasNext())
				reaction = reactorIterator.next().addTerminal(this, example);
			return reaction;		
		}
		finally
		{
			close();
		}
	}

	@Override
	public Reaction insert(final String token, final String exampleId, final String stepIdA, final String stepIdB) throws Problem
	{
		if (!open(token)) return null;
		try
		{
			final Optional<Example> exampleOption = getExample(exampleId);
			final Optional<Step> stepAOption = getStep(stepIdA);
			final Optional<Step> stepBOption = getStep(stepIdB);
	
			if (!exampleOption.isPresent() || !stepAOption.isPresent() || !stepBOption.isPresent())
				return null;

			final Example example = exampleOption.get();
			final Step stepA = stepAOption.get();
			final Step stepB = stepBOption.get();
			
			final Iterator<Reactor> reactorIterator = example.getReactors().iterator();
			
			Reaction reaction = null;
			while((reaction == null || reaction._failure) && reactorIterator.hasNext())
				reaction = reactorIterator.next().insert(this, example, stepA, stepB);
			return reaction;		
		}
		finally
		{
			close();
		}
	}

	@Override
	public Reaction remove(final String token, final String exampleId, final String stepId) throws Problem
	{
		if (!open(token)) return null;
		try
		{
			final Optional<Example> exampleOption = getExample(exampleId);
			final Optional<Step> stepOption = getStep(stepId);
			
			if (!exampleOption.isPresent() || stepOption.isPresent())
				return null;
			
			final Example example = exampleOption.get();
			final Step step = stepOption.get();
			
			final Iterator<Reactor> reactorIterator = example.getReactors().iterator();
			
			Reaction reaction = null;
			while((reaction == null || reaction._failure) && reactorIterator.hasNext())
				reaction = reactorIterator.next().remove(this, example, step);
			return reaction;
		}
		finally
		{
			close();
		}
	}

	@Override
	public Reaction replace(final String token, final String exampleId, final String stepId, final String atomId, final String result, final String evaluation) throws Problem
	{
		if (!open(token)) return null;
		final Optional<Example> exampleOption = getExample(exampleId);
		final Optional<Step> stepOption = getStep(stepId);
		final Optional<Atom> atomOption = getAtom(atomId);

		if (!exampleOption.isPresent() || !stepOption.isPresent() || !atomOption.isPresent())
			return null;
		
		final Example example = exampleOption.get();
		final Step step = stepOption.get();
		final Atom atom = atomOption.get();
		
		final Iterator<Reactor> reactorIterator = example.getReactors().iterator();
		
		Reaction reaction = null;
		while((reaction == null || reaction._failure) && reactorIterator.hasNext())
			reaction = reactorIterator.next().replace(this, example, step, atom, result, evaluation);
		close();
		return reaction;
	}

}
