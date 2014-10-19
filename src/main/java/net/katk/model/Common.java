package net.katk.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.xml.bind.annotation.XmlElement;

/**
 * Commons are fields shared by all objects of this model.
 */
@Entity
public abstract class Common
{
	@XmlElement
	@Id
	@GeneratedValue
	@Column(name="id")
	private int _id;

	@SuppressWarnings("javadoc")
	public int getId()
	{
		return _id;
	}

	@XmlElement
	@OneToOne
	@Column(name="group")
	private Group _group = null;

	@SuppressWarnings("javadoc")
	public Group getGroup()
	{
		return _group;
	}

	@SuppressWarnings("javadoc")
	public void setGroup(final Group group_)
	{
		_group = group_;
	}

	@XmlElement
	@Column(name="date")
	private long _date = System.currentTimeMillis();

	@SuppressWarnings("javadoc")
	public long getDate()
	{
		return _date;
	}
	
	public Common(){}
	protected Common(final Common old)
	{
		_group = old._group;
	}
}
