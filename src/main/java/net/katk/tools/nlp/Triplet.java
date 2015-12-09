package net.katk.tools.nlp;

class Triplet<T, U, V>
{

	protected T first;
	protected U second;
	protected V third;

	/**
	 * Construction d'un triplet depuis un tableau de String.
	 */
	@SuppressWarnings("unchecked")
	public Triplet(final String[] tableau)
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
	public Triplet(T a, U b, V c)
	{
		first = a;
		second = b;
		third = c;
	}
}
