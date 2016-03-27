package net.katk.compute;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Persistence;
import javax.persistence.Query;
import net.katk.adapter.Problem;
import net.katk.model.Atom;
import net.katk.model.Branch;
import net.katk.model.Example;
import net.katk.model.Param;
import net.katk.model.Party;
import net.katk.model.People;
import net.katk.model.Reactor;
import net.katk.model.Step;
import net.katk.tools.StackTraceInfo;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class Token implements AutoCloseable
{
	private transient static final Logger _logger = LoggerFactory.getLogger(Token.class.getName());
	protected final EntityManagerFactory _factory = Persistence.createEntityManagerFactory(null);

	public EntityManager _em;
	public String _token;
	public People _people;

	private String getIdOfToken(final String token)
	{
		try
		{
			if (token != null && _token != null) //FIXME TODO Convert the cookie into id of people.
				return token;
		}
		catch (final Exception e)
		{
			_logger.error("No Id found in token : " + token);
		}
		return null;
	}

	private Optional<People> getPeopleOfToken(final String token) throws Problem
	{
		final String id = getIdOfToken(token);
		if (id == null)
		{
			close();
			throw new Problem(token + " isn't allow");
		}

		return getPeople(id);
	}

	protected boolean open() throws Problem
	{
		if (_logger.isDebugEnabled())
			_logger.debug(StackTraceInfo.getCurrentMethodName());
		try
		{
			_em = _factory.createEntityManager();
			_em.getTransaction().begin();
		}
		catch (final Exception e)
		{
			_logger.error("@Opening DB session.", e);
			throw new Problem(e.getMessage());
		}
		return true;
	}

	protected boolean open(final String token) throws Problem
	{
		if (_logger.isDebugEnabled())
			_logger.debug(StackTraceInfo.getCurrentMethodName());
		_token = token;
		try
		{
			_em = _factory.createEntityManager();
			_em.getTransaction().begin();
		}
		catch (final Exception e)
		{
			_logger.error("@Opening DB session.", e);
			throw new Problem(e.getMessage());
		}

		final Optional<People> people = getPeopleOfToken(token);
		if (people.isPresent())
		{
			_people = people.get();
			return true;
		}
		else
		{
			close();
			throw new Problem(token + " isn't allow");
		}
	}

	@Override
	public void close() throws Problem
	{
		if (_logger.isDebugEnabled())
			_logger.debug(StackTraceInfo.getCurrentMethodName());

		if (_em == null)
			throw new Problem("The entity manager is null.");

		final EntityTransaction transaction = _em.getTransaction();
		if (transaction != null)
			transaction.commit();
		else
			throw new Problem("The transaction is null");
		_em.close();
	}

	// Identification service.

	public People getPeople()
	{
		return _people;
	}

	public Party getGroup()
	{
		return _people.getGroup();
	}

	// Gets Services

	public Optional<Atom> getAtom(final String id)
	{
		return Optional.ofNullable(_em.find(Atom.class, id));
	}

	public List<Atom> getAtoms(final List<String> ids)
	{
		final List<Atom> atoms = new ArrayList<>();
		for (final String id : ids)
		{
			final Atom atom = _em.find(Atom.class, id);
			if (atom != null)
				atoms.add(atom);
		}
		_em.close();
		return atoms;
	}

	public Optional<Example> getExample(final String id)
	{
		return Optional.ofNullable(_em.find(Example.class, id));
	}

	public Optional<Branch> getBranch(final String id)
	{
		return Optional.ofNullable(_em.find(Branch.class, id));
	}

	public Optional<Reactor> getReasoner(final String id)
	{
		return Optional.ofNullable(_em.find(Reactor.class, id));
	}

	public Optional<People> getPeople(final String id)
	{
		return Optional.ofNullable(_em.find(People.class, id));
	}

	public Optional<Party> getGroup(final String id)
	{
		return Optional.ofNullable(_em.find(Party.class, id));
	}

	public Optional<Step> getStep(final String id)
	{
		return Optional.ofNullable(_em.find(Step.class, id));
	}

	public Optional<Param> getParam(final String id)
	{
		return Optional.ofNullable(_em.find(Param.class, id));
	}

	public Optional<Atom> getAtomByName(final String name)
	{
		// FIXME : Only the people with the good authorization should be allow to execute this procedure.
		final String str = name.replace("\'", "").replace("(", "").replace(")", "").replace(";", "").replace("/", "").replace("--", "").replace("\"", "");

		// Object arg1; _em.find(Atom.class, arg1);
		final Query query = _em.createNativeQuery("select id from atom where name=\'" + str + "\'");

		@SuppressWarnings("unchecked")
		final List<String> list = query.getResultList();

		return (list.size() != 1) ? Optional.empty() : getAtom(list.get(0));
	}
}
