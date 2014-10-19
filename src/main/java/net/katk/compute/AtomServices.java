package net.katk.compute;

import static net.katk.tools.StackTraceInfo.getCurrentMethodName;

import java.util.List;

import net.katk.adapter.IAtom;
import net.katk.model.Atom;
import net.katk.model.Example;
import net.katk.model.Atom.Field;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class AtomServices extends Token implements IAtom
{
	private transient static final Logger _logger = LoggerFactory.getLogger(Atom.class.getName());
	
	public Atom getAtom(final String token, final int id)
	{
		_logger.info(getCurrentMethodName());
		if (!open(token)) return null;
		final Atom out = (token == null)? null : getAtom(id);
		close();
		return out;
	}
	
	public List<Atom> getAtoms(final String token, final List<Integer> ids)
	{
		_logger.info(getCurrentMethodName());
		if (!open(token)) return null;
		final List<Atom> out = (token == null)? null : getAtoms(ids);
		close();
		return out;
	}
	
	
	private int save(final String token, final int id, final Field field, final Object value)
	{
		if (!open(token)) return 0;
		final Atom atom = getAtom(id);
		final int out =
				(atom != null?
					atom.update(this, field, value):
					new Atom(this, field, value)).getId();
		close();
		return out;
	}
	
	public int saveName(final String token, final int id, final String value)
	{
		return save(token, id, Field.Name, value);
	}
	
	public int saveDescription(final String token, final int id, final String value)
	{
		return save(token, id, Field.Description, value);
	}
	
	public int saveAbstract(final String token, final int id, final String value)
	{
		return save(token, id, Field.Abstract, value);
	}
	
	public int saveVerbe(final String token, final int id, final String value)
	{
		return save(token, id, Field.Verbe, value);
	}
	
	public int saveObject(final String token, final int id, final String value)
	{
		return save(token, id, Field.Object, value);
	}

	public int saveBranch(final String token, final int id, final int value)
	{
		return save(token, id, Field.Branch, value);
	}
	
	public int saveDirectory(final String token, final int id, final String value)
	{
		return save(token, id, Field.Directory, value);
	}

	public int saveEventQueue(final String token, final int id, final String value)
	{
		return save(token, id, Field.EventQueue, value);
	}
	
	public int saveRecette(final String token, final int id, final int value)
	{
		return save(token, id, Field.Recette, value);
	}
	
	public void removeExample(final String token, final int atomId, final int exampleId)
	{
		if (!open(token)) return;
		final Atom atom = getAtom(atomId);
		if (atom != null)
			atom.removeExample(this, exampleId);
		close();
	}

	public void addExample(final String token, final int atomId, final int exampleId)
	{
		if (!open(token)) return;
		final Atom atom = getAtom(atomId);
		if (atom != null)
			atom.addExample(this, exampleId);
		close();
	}

	public void removeResult(final String token, final int atomId, final String result)
	{
		if (!open(token)) return;
		final Atom atom = getAtom(atomId);
		if (atom != null)
			atom.addResult(token, result);
		close();
	}

	public void addResult(final String token, final int atomId, final String result)
	{
		if (!open(token)) return;
		final Atom atom = getAtom(atomId);
		if (atom != null)
			atom.removeResult(token, result);
		close();
	}

	@Override
	public Example startById(final String token, final int atomId)
	{
		if (!open(token)) return null;
		final Atom atom = getAtom(atomId);
		Example example = null;
		if (atom != null)
			example = new Example(this, atom);
		close();
		return example;
	}

	@Override
	public Example startByName(final String token, final String name)
	{
		if (!open(token)) return null;
		final Atom atom = getAtomByName(name);
		Example example = null;
		if (atom != null)
			example = new Example(this, atom);
		close();
		return example;
	}
}
