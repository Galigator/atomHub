package net.katk.adapter;

import javax.xml.ws.WebFault;

@WebFault
public class Problem extends Exception
{
	private static final long serialVersionUID = 1828436171483869439L;

	public Problem(final String message)
	{
		super(message);
	}
}
