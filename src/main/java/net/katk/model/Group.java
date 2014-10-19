package net.katk.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OrderColumn;
import javax.xml.bind.annotation.XmlElement;

/**
 * A people group is an abstraction that aim at put together peoples.
 */
@Entity
public class Group extends Common
{
	@XmlElement
	@ManyToOne
	@Column(name="boss")
	private People _boss = null;

	public People getBoss()
	{
		return _boss;
	}

	@XmlElement
	@OneToMany @OrderColumn(name = "index_members")
	@Column(name="members")
	private List<People> _members = new ArrayList<People>(); // boss must also be a members.

	public List<People> getMembers()
	{
		return _members;
	}

	@XmlElement
	@ManyToOne
	@Column(name="admin")
	private Group _admin = null; // L'admin à des droits étendu sur les sous groupes.

	public Group getAdmin()
	{
		return _admin;
	}

	@XmlElement
	@OneToMany @OrderColumn(name = "index_children")
	@Column(name="children")
	private List<Group> _children = new ArrayList<Group>();

	public List<Group> getChidren()
	{
		return _children;
	}

	@XmlElement // StringVar[9]
	@Column(name="rwxrwxrwx")
	private String _rwxrwxrwx = "rwxrwxr_x";

	public String getRwxrwxrwx()
	{
		return _rwxrwxrwx;
	}
}
