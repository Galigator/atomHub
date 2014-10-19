package net.katk.tools.nlp;

/**
 * Implentation des coefficients de progression de la distance d'edition.
 */
public class Coeffs extends Triplet<Float, Integer, Integer>
{

	public Coeffs(Float n, int a, int b)
	{
		super(n, new Integer(a), new Integer(b));
	}
}
