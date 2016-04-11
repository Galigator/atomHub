package net.katk.compute;

import java.util.List;
import java.util.Optional;
import java.util.logging.Logger;
import net.katk.adapter.IExample;
import net.katk.adapter.Problem;
import net.katk.adapter.Reaction;
import net.katk.model.Atom;
import net.katk.model.Example;
import net.katk.model.Reactor;
import net.katk.model.Step;
import net.katk.tools.Log;
import net.katk.tools.StackTraceInfo;

public class ExampleServices extends Token implements IExample, Reactor
{
	private transient static final Logger _logger = Log.getLogger(ExampleServices.class.getName());

	@Override
	public Example getExample(final String token, final String id) throws Problem
	{
		_logger.fine(() -> StackTraceInfo.getCurrentMethodName());
		if (!open(token))
			return null;
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
		if (!open(token))
			return null;
		try
		{
			final Optional<Example> exampleOpt = getExample(exampleId);
			if (exampleOpt.isPresent())
			{
				final Example example = exampleOpt.get();
				return getAtom(atomId).map(atom -> add(this, example, params, atom, result, evaluation, date, note)).orElse(null);
			}
			else
				return null;
		}
		finally
		{
			close();
		}
	}

	@Override
	public Reaction next(final String token, final String exampleId) throws Problem
	{
		if (!open(token))
			return null;
		try
		{
			return getExample(exampleId).map(example -> next(this, example)).orElse(null);
		}
		finally
		{
			close();
		}
	}

	@Override
	public Reaction back(final String token, final String exampleId) throws Problem
	{
		if (!open(token))
			return null;
		try
		{
			return getExample(exampleId).map(example -> back(this, example)).orElse(null);
		}
		finally
		{
			close();
		}
	}

	@Override
	public Reaction addTerminal(final String token, final String exampleId) throws Problem
	{
		if (!open(token))
			return null;
		try
		{
			return getExample(exampleId).map(example -> addTerminal(this, example)).orElse(null);
		}
		finally
		{
			close();
		}
	}

	@Override
	public Reaction insert(final String token, final String exampleId, final String stepIdA, final String stepIdB) throws Problem
	{
		if (!open(token))
			return null;
		try
		{
			final Optional<Example> exampleOption = getExample(exampleId);
			final Optional<Step> stepAOption = getStep(stepIdA);
			final Optional<Step> stepBOption = getStep(stepIdB);

			if (!exampleOption.isPresent() || !stepAOption.isPresent() || !stepBOption.isPresent())
				return null;

			return insert(this, exampleOption.get(), stepAOption.get(), stepBOption.get());
		}
		finally
		{
			close();
		}
	}

	@Override
	public Reaction remove(final String token, final String exampleId, final String stepId) throws Problem
	{
		if (!open(token))
			return null;
		try
		{
			final Optional<Example> exampleOption = getExample(exampleId);
			final Optional<Step> stepOption = getStep(stepId);

			if (!exampleOption.isPresent() || stepOption.isPresent())
				return null;

			return remove(this, exampleOption.get(), stepOption.get());
		}
		finally
		{
			close();
		}
	}

	@Override
	public Reaction replace(final String token, final String exampleId, final String stepId, final String atomId, final String result, final String evaluation) throws Problem
	{
		if (!open(token))
			return null;
		try
		{
			final Optional<Example> exampleOption = getExample(exampleId);
			final Optional<Step> stepOption = getStep(stepId);
			final Optional<Atom> atomOption = getAtom(atomId);

			if (!exampleOption.isPresent() || !stepOption.isPresent() || !atomOption.isPresent())
				return null;

			return replace(this, exampleOption.get(), stepOption.get(), atomOption.get(), result, evaluation);
		}
		finally
		{
			close();
		}
	}
}
