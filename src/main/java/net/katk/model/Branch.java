package net.katk.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OrderColumn;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlIDREF;

/**
 * The branch(s) are representation of atoms serial's chain
 */
@Entity(name="branch")
public class Branch extends Common
{
	@XmlElement
	@OneToMany
	@OrderColumn(name = "index_revisions")
	// @OrderBy("index_revisions")
	private List<Atom> _revisions = new ArrayList<>();

	public List<Atom> getRevisions()
	{
		return _revisions;
	}

	public void setRevisions(final List<Atom> revisions_)
	{
		_revisions = revisions_;
	}

	// Expr<MisiElem>
	@XmlElement
	@Column(name="perimeter")
	private String _perimeter = null;

	public String getPerimeter()
	{
		return _perimeter;
	}

	public void setPerimeter(final String perimeter_)
	{
		_perimeter = perimeter_;
	}

	// Expr<String>
	@XmlElement
	@Lob
	@Column(name="annotations")
	private String _annotations = null;

	public String getAnnotations()
	{
		return _annotations;
	}

	public void setAnnotations(final String annotations_)
	{
		_annotations = annotations_;
	}

	@XmlIDREF
	@ManyToOne(cascade=CascadeType.PERSIST,fetch=FetchType.LAZY)
	@Column(name="from")
	private Branch _from = null;

	public Branch getFrom()
	{
		return _from;
	}

	public void setFrom(final Branch from_)
	{
		_from = from_;
	}

	@XmlIDREF
	@ManyToOne(cascade=CascadeType.PERSIST,fetch=FetchType.LAZY)
	@Column(name="owner")
	private Party _owner = null;

	public Party getOwner()
	{
		return _owner;
	}

	public void setOwner(final Party owner_)
	{
		_owner = owner_;
	}

	@XmlElement
	@OneToMany
	@OrderColumn(name = "index_watchers")
	// @OrderBy("index_watchers")
	private List<People> _watchers = new ArrayList<>();

	public List<People> getWatchers()
	{
		return _watchers;
	}

	public void setWatchers(final List<People> watchers_)
	{
		_watchers = watchers_;
	}
}
