package net.katk.compute;

import static net.katk.tools.StackTraceInfo.getCurrentMethodName;

import java.util.List;
import java.util.Optional;
import java.util.logging.Logger;
import net.katk.adapter.IAtom;
import net.katk.adapter.Problem;
import net.katk.model.Atom;
import net.katk.model.Atom.Field;
import net.katk.model.Example;
import net.katk.tools.Log;

public class AtomServices extends Token implements IAtom
{
	private transient static final Logger _logger = Log.getLogger(AtomServices.class.getName());

	@Override
	public Atom getAtom(final String token, final String id) throws Problem
	{
		_logger.info(() -> getCurrentMethodName());
		if (!open(token))
			return null;
		try
		{
			return getAtom(id).orElse(null);
		}
		finally
		{
			close();
		}
	}

	@Override
	public List<Atom> getAtoms(final String token, final List<String> ids) throws Problem
	{
		_logger.info(() -> getCurrentMethodName());
		if (!open(token))
			return null;
		try
		{
			return getAtoms(ids);
		}
		finally
		{
			close();
		}
	}

	private String save(final String token, final String id, final Field field, final Object value) throws Problem
	{
		if (!open(token))
			return null;
		try
		{
			final Optional<Atom> atomOption = getAtom(id);

			if (atomOption.isPresent())
				return atomOption.get().update(this, field, value).getId();
			else
				return new Atom(this, field, value).getId();
		}
		finally
		{
			close();
		}
	}

	@Override
	public String save(final String token, final String id, final String name, final String description, final String resume, final String verbe, final String object, final String branchId, final String directory, final String eventQueue, final String recetteId) throws Problem
	{
		if (!open(token))
			return null;
		try
		{
			final Optional<Atom> atomOption = getAtom(id);

			if (atomOption.isPresent())
				return atomOption.get().update(this, name, description, resume, verbe, object, branchId, directory, eventQueue, recetteId).getId();
			else
				return new Atom(this, name, description, resume, verbe, object, branchId, directory, eventQueue, recetteId).getId();
		}
		finally
		{
			close();
		}
	}

	@Override
	public String saveName(final String token, final String id, final String value) throws Problem
	{
		return save(token, id, Field.Name, value);
	}

	@Override
	public String saveDescription(final String token, final String id, final String value) throws Problem
	{
		return save(token, id, Field.Description, value);
	}

	@Override
	public String saveAbstract(final String token, final String id, final String value) throws Problem
	{
		return save(token, id, Field.Abstract, value);
	}

	@Override
	public String saveVerbe(final String token, final String id, final String value) throws Problem
	{
		return save(token, id, Field.Verbe, value);
	}

	@Override
	public String saveObject(final String token, final String id, final String value) throws Problem
	{
		return save(token, id, Field.Object, value);
	}

	@Override
	public String saveBranch(final String token, final String id, final String value) throws Problem
	{
		return save(token, id, Field.Branch, value);
	}

	@Override
	public String saveDirectory(final String token, final String id, final String value) throws Problem
	{
		return save(token, id, Field.Directory, value);
	}

	@Override
	public String saveEventQueue(final String token, final String id, final String value) throws Problem
	{
		return save(token, id, Field.EventQueue, value);
	}

	@Override
	public String saveRecette(final String token, final String id, final String value) throws Problem
	{
		return save(token, id, Field.Recette, value);
	}

	@Override
	public void removeExample(final String token, final String atomId, final String exampleId) throws Problem
	{
		if (!open(token))
			return;
		try
		{
			getAtom(atomId).ifPresent(atom -> atom.removeExample(this, exampleId));
		}
		finally
		{
			close();
		}
	}

	@Override
	public void addExample(final String token, final String atomId, final String exampleId) throws Problem
	{
		if (!open(token))
			return;
		try
		{
			getAtom(atomId).ifPresent(atom -> atom.addExample(this, exampleId));
		}
		finally
		{
			close();
		}
	}

	@Override
	public void removeResult(final String token, final String atomId, final String result) throws Problem
	{
		if (!open(token))
			return;
		try
		{
			getAtom(atomId).ifPresent(atom -> atom.addResult(this, result));
		}
		finally
		{
			close();
		}
	}

	@Override
	public void addResult(final String token, final String atomId, final String result) throws Problem
	{
		if (!open(token))
			return;
		try
		{
			getAtom(atomId).ifPresent(atom -> atom.removeResult(this, result));
		}
		finally
		{
			close();
		}
	}

	@Override
	public Example startById(final String token, final String atomId) throws Problem
	{
		if (!open(token))
			return null;
		try
		{
			final Optional<Atom> atomOption = getAtom(atomId);
			if (atomOption.isPresent())
				return new Example(this, atomOption.get());
			return null;
		}
		finally
		{
			close();
		}
	}

	@Override
	public Example startByName(final String token, final String name) throws Problem
	{
		if (!open(token))
			return null;
		try
		{
			return new Example(this, getAtomByName(name).orElse(new Atom(this, Field.Name, name)));
		}
		finally
		{
			close();
		}
	}

}
