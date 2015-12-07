package net.katk.compute;

import net.katk.adapter.IPeople;
import net.katk.adapter.Problem;
import net.katk.model.People;

public class PeopleServices extends Token implements IPeople
{
	@Override
	public String createPeople(final String name, final String mail) throws Problem
	{
		if (!open()) return null;
		try
		{
			return (new People(this, name, mail)).getId();
		}
		finally
		{
			close();
		}
	}
}
