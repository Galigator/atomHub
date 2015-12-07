package net.katk.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OrderColumn;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlIDREF;

/**
 * A people group is an abstraction that aim at put together peoples.
 */
@Entity(name="party")
public class Party extends Common
{
	@XmlIDREF
	@ManyToOne(cascade=CascadeType.PERSIST,fetch=FetchType.LAZY)
	@Column(name="boss")
	private People _boss = null;

	public People getBoss()
	{
		return _boss;
	}

	@XmlElement
	@OneToMany @OrderColumn(name = "index_members")
	private List<People> _members = new ArrayList<>(); // boss must also be a members.

	public List<People> getMembers()
	{
		return _members;
	}

	@XmlIDREF
	@ManyToOne(cascade=CascadeType.PERSIST,fetch=FetchType.LAZY)
	@Column(name="admin")
	private Party _admin = null; // L'admin à des droits étendu sur les sous groupes.

	public Party getAdmin()
	{
		return _admin;
	}

	@XmlElement
	@OneToMany @OrderColumn(name = "index_children")
	private List<Party> _children = new ArrayList<>();

	public List<Party> getChidren()
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
