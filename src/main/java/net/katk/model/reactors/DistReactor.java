package net.katk.model.reactors;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.xml.bind.annotation.XmlElement;

import net.katk.adapter.Reaction;
import net.katk.compute.Token;
import net.katk.model.Atom;
import net.katk.model.Example;
import net.katk.model.Param;
import net.katk.model.Reactor;
import net.katk.model.Step;

@Entity
public class DistReactor extends Reactor
{
	@XmlElement
	@Column(name="deletion")
	private int _deletion = 0;

	@SuppressWarnings("javadoc")
	public int getDeletion()
	{
		return _deletion;
	}
	
	public void setDeletion(final int deletion)
	{
		_deletion = deletion;
	}
	
	@XmlElement
	@Column(name="insertion")
	private int _insertion = 0;

	@SuppressWarnings("javadoc")
	public int getInsertion()
	{
		return _insertion;
	}
	
	public void setInsertion(final int insertion)
	{
		_insertion = insertion;
	}
	
	@XmlElement
	@ManyToOne
	@Column(name="atom")
	private Atom _atom = null;

	public Atom getAtom()
	{
		return _atom;
	}
	
	public DistReactor(){};
	public DistReactor(final Token token, final Atom atom)
	{
		_atom = atom;
		token._em.persist(this);
	}

	@Override
	public Reaction add(final Token token, final Example example, final List<Param> params,
			final Atom atom, final String result, final String evaluation, final long date, final String note) 
	{
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Reaction next(final Token token, final Example example)
	{
		return null;
	}
	
	@Override
	public Reaction back(final Token token, final Example example)
	{
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Reaction addTerminal(final Token token, final Example example)
	{
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Reaction insert(final Token token, final Example example, final Step stepA, final Step stepB)
	{
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Reaction delete(final Token token, final Example example, final Step step)
	{
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Reaction replace(final Token token, final Example example, final Step step,	final Atom atom, final String result, final String evaluation)
	{
		// TODO Auto-generated method stub
		return null;
	}
}
