package net.katk.tools.nlp;

class Triple<T, U, V>
{

	protected T first;
	protected U second;
	protected V third;

	/**
	 * Construction d'un triplet depuis un tableau de String.
	 */
	@SuppressWarnings("unchecked")
	public Triple(final Object[] tableau)
	{
		if (3 == tableau.length)
		{
			first = (T) tableau[0];
			second = (U) tableau[1];
			third = (V) tableau[2];
		}
		else
			throw new RuntimeException("new Triplet : [" + tableau.length + "]");
	}

	/**
	 * Construction d'un triplet depuis 3 valeurs.
	 */
	public Triple(final T a, final U b, final V c)
	{
		first = a;
		second = b;
		third = c;
	}
}
