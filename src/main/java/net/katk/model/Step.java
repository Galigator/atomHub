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

/**
 * A step is a most little part of job that can be done using an atom in an
 * example.
 */
@Entity(name="step")
public class Step extends Common
{
	@XmlIDREF
	@OneToMany
	@OrderColumn(name = "index_params")
	// @OrderBy("index")
	private List<Param> _params = new ArrayList<Param>();

	public List<Param> getParams()
	{
		return _params;
	}

	public void setParams(final List<Param> params)
	{
		_params = params;
	}

	@XmlIDREF
	@ManyToOne(cascade=CascadeType.PERSIST,fetch=FetchType.LAZY)
	@Column(name="core")
	private Atom _core = null;

	public Atom getCore()
	{
		return _core;
	}

	public void setCore(final Atom core)
	{
		_core = core;
	}

	@XmlElement
	@Lob
	@Column(name="result")
	private String _result = null;

	public String getResult()
	{
		return _result;
	}

	public void setResult(final String result)
	{
		_result = result;
	}

	@XmlElement
	@Lob
	@Column(name="evaluation")
	private String _evaluation = null;

	public String getEvaluation()
	{
		return _evaluation;
	}

	public void setEvaluation(final String evaluation)
	{
		_evaluation = evaluation;
	}

	@XmlElement
	@Column(name="evalDate")
	private long _evalDate = 0;

	public long getEvalDate()
	{
		return _evalDate;
	}

	public void setEvalDate(final long evalDate)
	{
		_evalDate = evalDate;
	}

	@XmlElement
	@Lob
	@Column(name="note")
	private String _note = null;

	public String getNote()
	{
		return _note;
	}

	public void setNote(final String note)
	{
		_note = note;
	}

	@XmlIDREF
	@ManyToOne(cascade=CascadeType.PERSIST,fetch=FetchType.LAZY)
	@Column(name="author")
	private People _author = null;

	public People getAuthor()
	{
		return _author;
	}

	public void setAuthor(final People author)
	{
		_author = author;
	}

	public Step(final Token token, final List<Param> params, final Atom core, final String result, final String evaluation, final long date, final String note, final People author)
	{
		setGroup(token.getGroup()); // TODO set the Party.
		_params.addAll(params);
		setCore(core);
		setResult(result);
		setEvaluation(evaluation);
		setEvalDate(date);
		setNote(note);
		setAuthor(author);
		token._em.persist(this);
	}
	public Step(){}
}
