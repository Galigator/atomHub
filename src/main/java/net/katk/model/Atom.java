package net.katk.model;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OrderColumn;
import javax.xml.bind.annotation.XmlElement;

import net.katk.compute.Token;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * An atom is a part knowledge that can't be cut without resulting in a loose of
 * information in a given context.
 */
@Entity
public class Atom extends Common 
{
	private transient static final Logger _logger = LoggerFactory.getLogger(Atom.class.getName());
	
	@XmlElement
	@Lob
	@Column(name="name")
	private String _name = null;

	@SuppressWarnings("javadoc")
	public String getName()
	{
		return _name;
	}

	@XmlElement
	@Lob
	@Column(name="verbe")
	private String _verbe = null;

	@SuppressWarnings("javadoc")
	public String getVerbe()
	{
		return _verbe;
	}

	@XmlElement
	@Lob
	@Column(name="object")
	private String _object = null;

	@SuppressWarnings("javadoc")
	public String getObject()
	{
		return _object;
	}

	@XmlElement
	@Lob
	@Column(name="abstract")
	private String _abstract = null;

	@SuppressWarnings("javadoc")
	public String getAbstract()
	{
		return _abstract;
	}

	@XmlElement
	@Lob
	@Column(name="description")
	private String _description = null;

	@SuppressWarnings("javadoc")
	public String getDescription()
	{
		return _description;
	}

	@XmlElement
	@ManyToOne
	@Column(name="branch")
	private Branch _branch = null;

	@SuppressWarnings("javadoc")
	public Branch getBranch()
	{
		return _branch;
	}

	@XmlElement
	@ManyToOne
	@Column(name="recette")
	private Example _recette = null;

	@SuppressWarnings("javadoc")
	public Example getRecette()
	{
		return _recette;
	}

	@XmlElement
	@OneToMany
	@OrderColumn(name = "index_examples")
	@Column(name="examples")
	// @OrderBy("index")
	private List<Example> _examples = new ArrayList<Example>(1);

	@SuppressWarnings("javadoc")
	public List<Example> getExamples()
	{
		return _examples;
	}

	@XmlElement
	@Lob
	@Column(name="directory")
	private String _directory = null;

	@SuppressWarnings("javadoc")
	public String getDirectory()
	{
		return _directory;
	}

	// private Situation goal;

	@XmlElement
	@Lob
	@Column(name="eventQueue")
	private String _eventQueue = null;

	@SuppressWarnings("javadoc")
	public String getEventQueue()
	{
		return _eventQueue;
	}

	// private OwlProfile profile;
	// private OwlGrounding grounding;

	@XmlElement
	@ElementCollection
	@Column(name="results")
	// TODO : Check the size of the strings in Element Collection.
	private Set<String> _results = new HashSet<String>();

	@SuppressWarnings("javadoc")
	public Set<String> getResults()
	{
		return _results;
	}

	@XmlElement
	@Column(name="version")
	private long _version = 0;

	@SuppressWarnings("javadoc")
	public long getVersion()
	{
		return _version;
	}

	@XmlElement
	@Column(name="level")
	private long _level = 0;

	@SuppressWarnings("javadoc")
	public long getLevel()
	{
		return _level;
	}

	public Atom(){}
	public Atom(final Atom old)
	{
		super(old);
		_name = old._name;
		_object = old._object;
		_verbe = old._verbe;
		_abstract = old._abstract;
		_description = old._description;
		_branch = old._branch;
		_directory = old._directory;
		_eventQueue = old._eventQueue;
		_recette = old._recette;
		_examples.addAll(old._examples);
		_results.addAll(old._results);
		_version = old._version + 1;
	}

	public Atom(final Token token, final Field field, final Object value)
	{
		assert field != null;
		assert value != null;
		
		_branch = new Branch(); // TODO set the Group and Group to the branch.
		setGroup(token.getGroup()); // TODO set the Group.
		
		save(token, field, value);
	}
	
	// Methods that need Atom versionning.

	public enum Field
	{
		Name,
		Object,
		Verbe,
		Abstract,
		Description,
		Branch,
		Directory,
		EventQueue,
		Recette
	}

	private void save(final Token token, final Field field, final Object value)
	{
		if (_logger.isTraceEnabled())
			_logger.trace("Token:"+token+"\tField:"+field+"\tObject:"+value);
		
		switch(field)
		{
			case Name : { _name = (String) value; break; }
			case Verbe : { _verbe = (String) value; break; }
			case Object : { _object = (String) value; break; }
			case Abstract : { _abstract = (String) value; break; }
			case Description : { _description = (String) value; break; }
			case Directory : { _directory = (String) value; break; }
			case EventQueue : { _eventQueue = (String) value; break; }
			case Branch : 
			{
				int id = 0;
				if (value instanceof Integer)
				{
					id = ((Integer) value).intValue();
					_branch = token.getBranch(id);;
				}
				else
					_logger.error("Save recette format error.");
				break;
			}
			case Recette : 
			{
				int id = 0;
				if (value instanceof Integer)
				{
					id = ((Integer) value).intValue();
					_recette = token.getExample(id);;
				}
				else
					_logger.error("Save recette format error.");
				break;
			}
		}
		
		token._em.persist(this);
	}
	
	public Atom update(final Token token, final Field field, final Object value)
	{
		assert field != null;
		final Atom atom_new = new Atom(this);
		atom_new.save(token, field, value);
		return atom_new;
	}
	
	// Methods that don't need Atom versionning.
	
	public void removeExample(final Token token, final int exampleId)
	{
		final Example example = token.getExample(exampleId);
		if (example != null)
			if (!_examples.contains(example))
				_examples.remove(example);
	}
	
	public void addExample(final Token token, final int exampleId)
	{
		final Example example = token.getExample(exampleId);
		if (example != null)
			if (!_examples.contains(example))
				_examples.add(example);
	}

	public void removeResult(final String token, final String result)
	{
		if (result != null)
			if (!_results.contains(result))
				_results.remove(result);
	}

	public void addResult(final String token, final String result)
	{
		if (result != null)
			if (!_results.contains(result))
				_results.add(result);
	}
}

