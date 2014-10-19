package net.katk.adapter;

import java.util.List;

public class Reaction
{
	// Altered element. Should be reload totally or partially.
	public int _alterExamplesAtomId = 0;
	public int _alterExample = 0;
	public int _alterStep = 0;
	
	// Question ask to the interface. The user should answer if possible.
	// The user can choose another question/answer if he want.
	public List<Integer> _askAtomId = null;
	public List<String> _askResult = null;
	public List<String> _askEvaluation = null;
	public List<String> _askParameter = null;
	
	// Error signal from processing or input.
	public boolean _failure = false;
	public String _failureMessage = null;
}
