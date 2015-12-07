package net.katk.model;

import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.Lob;
import javax.xml.bind.annotation.XmlElement;
import net.katk.adapter.Reaction;
import net.katk.compute.Token;

/**
 * 
 * Reasoning is done by class
 *
 */
@Entity
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
public abstract class Reactor extends Common
{
	@XmlElement
	@Lob
	@Column(name = "name")
	private String _name = null;

	public String getName()
	{
		return _name;
	}

	protected void setName(final String name)
	{
		_name = name;
	}

	public abstract Reaction add(final Token token, final Example example, final List<Param> params, final Atom atom, final String result, final String evaluation, final long date, final String note);

	public abstract Reaction addTerminal(final Token token, final Example example);

	public abstract Reaction next(final Token token, final Example example);

	public abstract Reaction back(final Token token, final Example example);

	public abstract Reaction insert(final Token token, final Example example, final Step stepA, final Step stepB);

	public abstract Reaction remove(final Token token, final Example example, final Step step);

	public abstract Reaction replace(final Token token, final Example example, final Step step, final Atom atom, final String result, final String evaluation);
}
