package net.katk.tools;

public enum Difference
{
	Equal(0),        // Exactly the same object.
	None(1),         // No difference at display, except time.
	Minor(2),        // Exact inclusion of environment, version can be different.
	Correction(3),   // Small spelling change.
	Refinement(4),   // More text, sub-procedure add.
	Syntaxic(5),     // Reordering of text or Atom.
	Fonctionnal(6);  // Major spelling change, Atom diseapearance, web service change.

	private int _level = 0; 
	
	Difference(final int level)
	{
		_level = level;
	}
	
	public int getLevel()
	{
		return _level;
	}
	
	public static Difference toDifference(final int level)
	{
		switch(level)
		{
			case 0: return Equal;
			case 1: return None;
			case 2: return Minor;
			case 3: return Correction;
			case 4: return Refinement;
			case 5: return Syntaxic;
			case 6: return Fonctionnal;
			default:return (level < 0)? Equal: Fonctionnal;
		}
	}
}
