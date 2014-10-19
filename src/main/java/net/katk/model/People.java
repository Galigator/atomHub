package net.katk.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Lob;
import javax.persistence.OneToMany;
import javax.persistence.OrderColumn;
import javax.xml.bind.annotation.XmlElement;

/**
 * A people is the abstraction of a physical person.
 */
@Entity
public class People extends Common
{
	@XmlElement
	@Lob
	@Column(name="externalResourceType")
	private String _externalResourceType = null; // ex : "RTMS"

	public String getExternalResourceType()
	{
		return _externalResourceType;
	}

	public void setExternalResourceType(final String externalResourceType_)
	{
		_externalResourceType = externalResourceType_;
	}

	@XmlElement
	@Lob
	@Column(name="externalResourceId")
	private String _externalResourceId = null; // ex : n of RTMS ticket.

	public String getExternalResourceId()
	{
		return _externalResourceId;
	}

	public void setExternalResourceId(final String externalResourceId_)
	{
		_externalResourceId = externalResourceId_;
	}

	@XmlElement
	@Lob
	@Column(name="mail")
	private String _mail = null;

	public String getMail()
	{
		return _mail;
	}

	public void setMail(final String mail_)
	{
		_mail = mail_;
	}

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
	@OneToMany
	@OrderColumn(name = "index_bookmarks")
	@Column(name="bookmarks")
	// @OrderBy("index")
	private List<Example> _bookmarks = new ArrayList<Example>();

	@SuppressWarnings("javadoc")
	public List<Example> getBookmarks()
	{
		return _bookmarks;
	}
}
