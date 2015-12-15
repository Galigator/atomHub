package net.katk.model;

import java.util.List;
import java.util.Optional;
import java.util.Vector;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OrderColumn;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlIDREF;
import net.katk.compute.Token;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * An atom is a part knowledge that can't be cut without resulting in a loose of
 * information in a given context.
 */
@Entity(name = "atom")
public class Atom extends Common
{
	private transient static final Logger _logger = LoggerFactory.getLogger(Atom.class.getName());

	@XmlElement
	@Lob
	@Column(name = "name")
	private String _name = null;

	public String getName()
	{
		return _name;
	}

	@XmlElement
	@Lob
	@Column(name = "verbe")
	private String _verbe = null;

	public String getVerbe()
	{
		return _verbe;
	}

	@XmlElement
	@Lob
	@Column(name = "object")
	private String _object = null;

	public String getObject()
	{
		return _object;
	}

	@XmlElement
	@Lob
	@Column(name = "abstract")
	private String _abstract = null;

	public String getAbstract()
	{
		return _abstract;
	}

	@XmlElement
	@Lob
	@Column(name = "description")
	private String _description = null;

	public String getDescription()
	{
		return _description;
	}

	@XmlIDREF
	@XmlElement
	// The user don't need this, as it is too mush large.
	@ManyToOne(cascade = CascadeType.PERSIST, fetch = FetchType.LAZY)
	@Column(name = "branch")
	private Branch _branch = null;

	public Branch getBranch()
	{
		return _branch;
	}

	@XmlElement
	@XmlIDREF
	@ManyToOne(cascade = CascadeType.PERSIST, fetch = FetchType.LAZY)
	@Column(name = "recette")
	private Example _recette = null;

	public Example getRecette()
	{
		return _recette;
	}

	//@XmlElement // We don't want to give the user the full database at each query
	@OneToMany
	@OrderColumn(name = "index_examples")
	// @OrderBy("index")
	@XmlIDREF
	private List<Example> _examples = new Vector<>(1);

	public List<Example> getExamples()
	{
		return _examples;
	}

	protected void setExamples(final List<Example> examples)
	{
		_examples = examples;
	}

	@XmlElement
	@Lob
	@Column(name = "directory")
	private String _directory = null;

	public String getDirectory()
	{
		return _directory;
	}

	// private Situation goal;

	@XmlElement
	@Lob
	@Column(name = "eventQueue")
	private String _eventQueue = null;

	public String getEventQueue()
	{
		return _eventQueue;
	}

	// private OwlProfile profile;
	// private OwlGrounding grounding;

	@ElementCollection
	@OrderColumn(name = "index_results")
	@Column(name = "results")
	// TODO : Check the size of the strings in Element Collection.
	private List<String> _results = new Vector<>();

	public List<String> getResults()
	{
		return _results;
	}

	protected void setResults(final List<String> results)
	{
		_results = results;
	}

	@XmlElement
	@Column(name = "version")
	private long _version = 0;

	public long getVersion()
	{
		return _version;
	}

	@XmlElement
	@Column(name = "level")
	private long _level = 0;

	public long getLevel()
	{
		return _level;
	}

	protected void setLevel(final long level)
	{
		_level = level;
	}

	public Atom()
	{
	}

	protected Atom(final Atom old)
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

		_branch = new Branch(); // TODO set the Party and Owner to the branch.
		setGroup(token.getGroup()); // TODO set the Party.

		save(token, field, value);
	}

	// Methods that need Atom versionning.

	public Atom(final Token token, final String name, final String description, final String resume, final String verbe, final String object, final String branchId, final String directory, final String eventQueue, final String recetteId)
	{
		_branch = new Branch(); // TODO set the Party and Owner to the branch.
		setGroup(token.getGroup()); // TODO set the Party.
		save(token, name, description, resume, verbe, object, branchId, directory, eventQueue, recetteId);
	}

	public enum Field
	{
		Name, Object, Verbe, Abstract, Description, Branch, Directory, EventQueue, Recette
	}

	private void save(final Token token, final String name, final String description, final String resume, final String verbe, final String object, final String branchId, final String directory, final String eventQueue, final String recetteId)
	{
		if (_logger.isTraceEnabled())
			_logger.trace("Token:" + token + "\tsave all");

		_name = name;
		_verbe = verbe;
		_object = object;
		_abstract = resume;
		_description = description;
		_directory = directory;
		_eventQueue = eventQueue;

		if (branchId != null && !branchId.equals(""))
		{
			final Optional<Branch> branchOption = token.getBranch(branchId);
			if (branchOption.isPresent())
				_branch = branchOption.get();
		}

		if (recetteId != null && !recetteId.equals(""))
		{
			final Optional<Example> exampleOption = token.getExample(recetteId);
			if (exampleOption.isPresent())
				_recette = exampleOption.get();
		}

		if (_logger.isDebugEnabled())
			_logger.debug("persisting : " + this);

		token._em.persist(this);
	}

	private void save(final Token token, final Field field, final Object value)
	{
		if (_logger.isTraceEnabled())
			_logger.trace("Token:" + token + "\tField:" + field + "\tObject:" + value);

		switch (field)
		{
			case Name:
			{
				_name = (String) value;
				break;
			}
			case Verbe:
			{
				_verbe = (String) value;
				break;
			}
			case Object:
			{
				_object = (String) value;
				break;
			}
			case Abstract:
			{
				_abstract = (String) value;
				break;
			}
			case Description:
			{
				_description = (String) value;
				break;
			}
			case Directory:
			{
				_directory = (String) value;
				break;
			}
			case EventQueue:
			{
				_eventQueue = (String) value;
				break;
			}
			case Branch:
			{
				if (value instanceof String)
				{
					final Optional<Branch> branchOption = token.getBranch((String) value);
					if (branchOption.isPresent())
						_branch = branchOption.get();
				}
				else
					_logger.error("Save recette format error.");
				break;
			}
			case Recette:
			{
				if (value instanceof Integer)
				{
					final Optional<Example> exampleOption = token.getExample((String) value);
					if (exampleOption.isPresent())
						_recette = exampleOption.get();
				}
				else
					_logger.error("Save recette format error.");
				break;
			}
			default:
				_logger.error("Unkown field case in switch : " + field);
				break;
		}

		if (_logger.isDebugEnabled())
			_logger.debug("persisting : " + this);

		token._em.persist(this);
	}

	public Atom update(final Token token, final Field field, final Object value)
	{
		assert field != null;
		final Atom atom_new = new Atom(this);
		atom_new.save(token, field, value);
		return atom_new;
	}

	public Atom update(final Token token, final String name, final String description, final String resume, final String verbe, final String object, final String branchId, final String directory, final String eventQueue, final String recetteId)
	{
		final Atom atom_new = new Atom(this);
		atom_new.save(token, name, description, resume, verbe, object, branchId, directory, eventQueue, recetteId);
		return atom_new;
	}

	// Methods that don't need Atom versionning.

	public void removeExample(final Token token, final String exampleId)
	{
		final Optional<Example> exampleOption = token.getExample(exampleId);
		if (exampleOption.isPresent())
			if (!_examples.contains(exampleOption.get()))
				_examples.remove(exampleOption.get());
	}

	public void addExample(final Token token, final String exampleId)
	{
		final Optional<Example> exampleOption = token.getExample(exampleId);
		if (exampleOption.isPresent())
			if (!_examples.contains(exampleOption.get()))
				_examples.add(exampleOption.get());
	}

	public void removeResult(@SuppressWarnings("unused") final Token token, final String result)
	{
		if (result != null)
			if (!_results.contains(result))
				_results.remove(result);
	}

	public void addResult(@SuppressWarnings("unused") final Token token, final String result)
	{
		if (result != null)
			if (!_results.contains(result))
				_results.add(result);
	}
}
