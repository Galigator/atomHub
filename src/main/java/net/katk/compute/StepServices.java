package net.katk.compute;

import static net.katk.tools.StackTraceInfo.getCurrentMethodName;

import java.util.Optional;

import net.katk.adapter.IStep;
import net.katk.adapter.Problem;
import net.katk.model.Atom;
import net.katk.model.Example;
import net.katk.model.Step;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class StepServices extends Token implements IStep
{
	private transient static final Logger _logger = LoggerFactory.getLogger(Step.class.getName());

	public Step getStep(final String token, final String id) throws Problem
	{
		_logger.info(getCurrentMethodName());
		if (!open(token)) return null;
		try
		{
			return getStep(id).orElse(null);
		}
		finally
		{
			close();
		}
	}

	public Step addStep(final String token, final String exampleId, final String atomId, final String result, final String evaluation, final String date, final String note) throws Problem
	{
		_logger.info(getCurrentMethodName());
		if (!open(token)) return null;
		try
		{
			final Optional<Example> example = getExample(exampleId);
			final Optional<Atom> atom = getAtom(atomId);
			
			
			// Step(token, params, atom, result, evaluation, date, note, author);
			
			// example.getPath()
			return null;
		}
		finally
		{
			close();
		}
	}
	
}
