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

import net.katk.compute.Token;
import net.katk.model.reactors.DistReactor;
import net.katk.model.reactors.PlanReactor;
import net.katk.model.reactors.StatReactor;
import net.katk.model.reactors.tree.TreeReactor;

/**
 * An example is a model of realization in the job world.
 */
@Entity(name="example")
public class Example extends Common
{
	@XmlIDREF
	@ManyToOne(cascade=CascadeType.PERSIST,fetch=FetchType.LAZY)
	@Column(name="origine")
	private Atom _origine = null;

	public Atom getOrigine()
	{
		return _origine;
	}

	@XmlIDREF
	@OneToMany
	@OrderColumn(name = "index")
	// @OrderBy("index")
	private List<Step> _path = new ArrayList<>();

	public List<Step> getPath()
	{
		return _path;
	}

	@XmlElement
	@Column(name="state")
	private int _state = 0; // 0 - 4

	public int getState()
	{
		return _state;
	}

	public void setState(final int state)
	{
		_state = state;
	}

	@XmlElement
	@Column(name="nominal")
	private boolean _nominal = false;

	public boolean getNominal()
	{
		return _nominal;
	}

	public void setNominal(final boolean nominal)
	{
		_nominal = nominal;
	}

	@XmlElement
	@Column(name="obselete")
	private boolean _obselete = false;

	public boolean getObselete()
	{
		return _obselete;
	}

	public void setObselete(final boolean obselete)
	{
		_obselete = obselete;
	}

	@XmlElement
	@Lob
	@Column(name="externalResourceType")
	private String _externalResourceType = null; // ex : "RTMS"

	public String getExternalResourceType()
	{
		return _externalResourceType;
	}

	public void setExternalResourceType(final Token token, final String externalResourceType)
	{
		_externalResourceType = externalResourceType;
		token._em.merge(this);
	}

	@XmlElement
	@Lob
	@Column(name="externalResourceId")
	private String _externalResourceId = null; // ex : n of RTMS ticket.

	public String getExternalResourceId()
	{
		return _externalResourceId;
	}

	public void setExternalResourceId(final Token token, final String externalResourceId)
	{
		_externalResourceId = externalResourceId;
		token._em.merge(this);
	}
	
	// @XmlElement // We don't want the user to know this.
	@OneToMany
	@OrderColumn(name = "index_reactor")
	@XmlIDREF
	private List<Reactor> _reactors = new ArrayList<>(2);

	public List<Reactor> getReactors()
	{
		return _reactors;
	}
	
	public Example(){}
	public Example(final Token token, final Atom atom)
	{
		assert token != null;
		assert atom != null;
		_origine = atom;

		setGroup(token.getGroup()); // TODO set the Party.
	
		_reactors.add(new TreeReactor(token,atom));
		_reactors.add(new DistReactor(token,atom));
		_reactors.add(new StatReactor(token,atom));
		_reactors.add(new PlanReactor(token,atom));

		token._em.persist(this);
	}
	
	public void addStep(final Token token, final Step step)
	{
		getPath().add(step);
		token._em.persist(this);
	}
}
