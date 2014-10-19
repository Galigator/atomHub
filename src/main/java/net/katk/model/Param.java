package net.katk.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Lob;
import javax.xml.bind.annotation.XmlElement;

/**
 * A param is a association name-value of use by one or many step.
 */
@Entity
public class Param extends Common
{
	@XmlElement
	@Lob
	@Column(name="name")
	private String _name = null;

	public String getName()
	{
		return _name;
	}

	public void setName(final String name_)
	{
		_name = name_;
	}

	@XmlElement
	@Lob
	@Column(name="value")
	private String _value = null;

	public String getValue()
	{
		return _value;
	}

	public void setValue(final String value_)
	{
		_value = value_;
	}
}
