package net.katk.compute;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.persistence.Query;

import net.katk.model.Atom;
import net.katk.model.Branch;
import net.katk.model.Example;
import net.katk.model.Group;
import net.katk.model.Param;
import net.katk.model.People;
import net.katk.model.Reactor;
import net.katk.model.Step;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class Token
{
	private transient static final Logger _logger = LoggerFactory.getLogger(Token.class.getName());
	protected final EntityManagerFactory _factory = Persistence.createEntityManagerFactory(null);
	
	public EntityManager _em;
	public String _token;
	public People _people;
	
	private int getIdOfToken(final String token)
	{
		try
		{
			if (token != null)
				return Integer.parseInt(token);
		}
		catch(final Exception e)
		{
			_logger.error("No Id found in token : " + token);
			
		}
		return -1;
	}
	
	protected boolean open(final String token)
	{
		_token = token;
		_em = _factory.createEntityManager();
		_em.getTransaction().begin();
		
		final int id = getIdOfToken(token);
		if (id < 0) return false;
		_people = getPeople(id);
		return true;
	}

	protected void close()
	{
		_em.getTransaction().commit();
		_em.close();
	}

	// Identification service.
	
	public People getPeople()
	{
		return null; // Search the people from token.
	}
	
	public Group getGroup()
	{
		return null; // Search the group from token.
	}
	
	// Gets Services
	
	public Atom getAtom(final int id)
	{
		return _em.find(Atom.class, id);
	}

	public List<Atom> getAtoms(final List<Integer> ids)
	{
		final List<Atom> atoms = new ArrayList<Atom>();
		for(final Integer id : ids)
		{
			final Atom atom = _em.find(Atom.class, id);
			if (atom != null)
				atoms.add(atom);
		}
		_em.close();
		return atoms;
	}
	
	public Example getExample(final int id)
	{
		return _em.find(Example.class, id);
	}

	public Branch getBranch(final int id)
	{
		return _em.find(Branch.class, id);
	}

	public Reactor getReasoner(final int id)
	{
		return _em.find(Reactor.class, id);
	}

	public People getPeople(final int id)
	{
		return _em.find(People.class, id);
	}
	
	public Group getGroup(final int id)
	{
		return _em.find(Group.class, id);
	}
	
	public Step getStep(final int id)
	{
		return _em.find(Step.class, id);
	}
	
	public Param getParam(final int id)
	{
		return _em.find(Param.class, id);
	}
	
	public Atom getAtomByName(final String name)
	{
		final String str = name.replace("\'", "").replace("(", "").replace(")", "").replace(";", "").replace("/", "").replace("--", "").replace("\"", "");
		final Query query = _em.createQuery("select id from atom where name=\'"+str+"\'");
	 	final List<?> list = query.getResultList();
	 	
		return (list.size() != 1) ? null : getAtom((Integer)list.get(0)); 
	}
}
