package net.katk.model;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;
import javax.persistence.OneToOne;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlID;
import javax.xml.bind.annotation.XmlIDREF;

/**
 * Commons are fields shared by all objects of this model.
 */
@MappedSuperclass
public abstract class Common implements Comparable<Common>
{
	@XmlElement
	@XmlID
	@Id
	@GeneratedValue
	@Column(name = "id")
	private String _id;

	public String getId()
	{
		return _id;
	}

	@XmlIDREF
	@XmlElement
	@OneToOne
	@Column(name = "group")
	private Party _party = null;

	public Party getGroup()
	{
		return _party;
	}

	public void setGroup(final Party group_)
	{
		_party = group_;
	}

	@XmlElement
	@Column(name = "date")
	private long _date = System.currentTimeMillis();

	public long getDate()
	{
		return _date;
	}

	protected void setDate(final long date)
	{
		_date = date;
	}

	public Common()
	{
	}

	protected Common(final Common old)
	{
		_party = old._party;
	}

	@Override
	public int compareTo(final Common that)
	{
		return that._id.compareTo(_id);
	}
}
