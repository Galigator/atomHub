package net.katk.adapter;

import java.util.List;

public class Reaction
{
	// Altered element. Should be reload totally or partially.
	public String _alterExamplesAtom = null;
	public String _alterStep = null;
	public String _alterExample = null;

	// Question ask to the interface. The user should answer if possible.
	// The user can choose another question/answer if he want.
	public List<Integer> _askAtomId = null;
	public List<String> _askResult = null;
	public List<String> _askEvaluation = null;
	public List<String> _askParameter = null;

	// Error signal from processing or input.
	public boolean _failure = false;
	public String _failureMessage = null;

	public String getAlterExamplesAtom()
	{
		return _alterExamplesAtom;
	}

	public void setAlterExamplesAtom(String alterExamplesAtom)
	{
		_alterExamplesAtom = alterExamplesAtom;
	}

	public String getAlterStep()
	{
		return _alterStep;
	}

	public void setAlterStep(String alterStep)
	{
		_alterStep = alterStep;
	}

	public String getAlterExample()
	{
		return _alterExample;
	}

	public void setAlterExample(String alterExample)
	{
		_alterExample = alterExample;
	}

	public List<Integer> getAskAtomId()
	{
		return _askAtomId;
	}

	public void setAskAtomId(List<Integer> askAtomId)
	{
		_askAtomId = askAtomId;
	}

	public List<String> getAskResult()
	{
		return _askResult;
	}

	public void setAskResult(List<String> askResult)
	{
		_askResult = askResult;
	}

	public List<String> getAskEvaluation()
	{
		return _askEvaluation;
	}

	public void setAskEvaluation(List<String> askEvaluation)
	{
		_askEvaluation = askEvaluation;
	}

	public List<String> getAskParameter()
	{
		return _askParameter;
	}

	public void setAskParameter(List<String> askParameter)
	{
		_askParameter = askParameter;
	}

	public boolean isFailure()
	{
		return _failure;
	}

	public void setFailure(boolean failure)
	{
		_failure = failure;
	}

	public String getFailureMessage()
	{
		return _failureMessage;
	}

	public void setFailureMessage(String failureMessage)
	{
		_failureMessage = failureMessage;
	}

	public Reaction()
	{
	}

	public Reaction(final Class<?> clazz, final String error)
	{
		_failure = true;
		_failureMessage = clazz.getCanonicalName() + error;
	}
}
