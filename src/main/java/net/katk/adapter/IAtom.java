package net.katk.adapter;

import java.util.List;

import javax.jws.WebParam;
import javax.jws.WebService;
import javax.ws.rs.Consumes;
import javax.ws.rs.CookieParam;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;

import net.katk.model.Atom;
import net.katk.model.Example;

import org.apache.cxf.annotations.WSDLDocumentation;

@WebService
@Consumes({"application/json","application/xml","text/plain"})
@Produces({"application/json","application/xml","text/plain"})
public interface IAtom
{
	@GET @Path("getAtom/{id}")
	@WSDLDocumentation("Return the given object by id")
	public Atom getAtom(
			final @CookieParam(value = "token")  @WebParam(name = "token") String token,
			final @PathParam(value = "id") @WebParam(name = "id") String id)
					 throws Problem;

	@POST @Path("getAtoms/{ids}")
	@WSDLDocumentation("Return the givens objects by ids")
	public List<Atom> getAtoms(
			final @CookieParam(value = "token")  @WebParam(name = "token") String token,
			final @PathParam(value = "ids") @WebParam(name = "ids") List<String> ids)
					throws Problem;
	
	@POST @Path("startById/{atomId}")
	@WSDLDocumentation("Start a procedure by an AtomId.")
	public Example startById(
			final @CookieParam(value = "token") @WebParam(name = "token") String token,
			final @PathParam(value = "atomId") @WebParam(name = "atomId") String atomId)
					 throws Problem;

	@POST @Path("startByName/{name}")
	@WSDLDocumentation("Start a procedure by the name of an Atom.")
	public Example startByName(
			final @CookieParam(value = "token") @WebParam(name = "token") String token,
			final @PathParam(value = "name") @WebParam(name = "name") String name)
					 throws Problem;

	@POST @Path("save/{atomId}/{name}/{description}/{resume}/{verbe}/{object}/{branchId}/{directory}/{eventQueue}/{recetteId}")
	@WSDLDocumentation("Save all attributes at once.")
	public String save(
			final @CookieParam(value = "token") @WebParam(name = "token") String token,
			final @PathParam(value = "atomId") @WebParam(name = "atomId") String atomId,
			final @PathParam(value = "name") @WebParam(name = "name") String name,
			final @PathParam(value = "description") @WebParam(name = "description") String description,
			final @PathParam(value = "resume") @WebParam(name = "resume") String resume,
			final @PathParam(value = "verbe") @WebParam(name = "verbe") String verbe,
			final @PathParam(value = "object") @WebParam(name = "object") String object,
			final @PathParam(value = "branchId") @WebParam(name = "branchId") String branchId,
			final @PathParam(value = "directory") @WebParam(name = "directory") String directory,
			final @PathParam(value = "eventQueue") @WebParam(name = "eventQueue") String eventQueue,
			final @PathParam(value = "recetteId") @WebParam(name = "recetteId") String recetteId)
					 throws Problem;
	
	@POST @Path("saveName/{atomId}/{name}")
	@WSDLDocumentation("")
	public String saveName(
			final @CookieParam(value = "token") @WebParam(name = "token") String token,
			final @PathParam(value = "atomId") @WebParam(name = "atomId") String atomId,
			final @PathParam(value = "name") @WebParam(name = "name") String name)
					 throws Problem;

	@POST @Path("saveDescription/{atomId}/{description}")
	@WSDLDocumentation("")
	public String saveDescription(
			final @CookieParam(value = "token") @WebParam(name = "token") String token,
			final @PathParam(value = "atomId") @WebParam(name = "atomId") String atomId,
			final @PathParam(value = "description") @WebParam(name = "description") String description)
					 throws Problem;
	
	@POST @Path("saveAbstract/{atomId}/{resume}")
	@WSDLDocumentation("")
	public String saveAbstract(
			final @CookieParam(value = "token") @WebParam(name = "token") String token,
			final @PathParam(value = "atomId") @WebParam(name = "atomId") String atomId,
			final @PathParam(value = "resume") @WebParam(name = "resume") String resume)
					 throws Problem;
	
	@POST @Path("saveVerbe/{atomId}/{verbe}")
	@WSDLDocumentation("")
	public String saveVerbe(
			final @CookieParam(value = "token") @WebParam(name = "token") String token,
			final @PathParam(value = "atomId") @WebParam(name = "atomId") String atomId,
			final @PathParam(value = "verbe") @WebParam(name = "verbe") String verbe)
					 throws Problem;
	
	@POST @Path("saveObject/{atomId}/{object}")
	@WSDLDocumentation("")
	public String saveObject(
			final @CookieParam(value = "token") @WebParam(name = "token") String token,
			final @PathParam(value = "atomId") @WebParam(name = "atomId") String atomId,
			final @PathParam(value = "object") @WebParam(name = "object") String object)
					 throws Problem;

	@POST @Path("saveBranch/{atomId}/{branchId}")
	@WSDLDocumentation("")
	public String saveBranch(
			final @CookieParam(value = "token") @WebParam(name = "token") String token,
			final @PathParam(value = "atomId") @WebParam(name = "atomId") String atomId,
			final @PathParam(value = "branchId") @WebParam(name = "branchId") String branchId)
					 throws Problem;
	
	@POST @Path("saveDirectory/{atomId}/{directory}")
	@WSDLDocumentation("")
	public String saveDirectory(
			final @CookieParam(value = "token") @WebParam(name = "token") String token,
			final @PathParam(value = "atomId") @WebParam(name = "atomId") String atomId,
			final @PathParam(value = "directory") @WebParam(name = "directory") String directory)
					 throws Problem;

	@POST @Path("saveEventQueue/{atomId}/{eventQueue}")
	@WSDLDocumentation("")
	public String saveEventQueue(
			final @CookieParam(value = "token") @WebParam(name = "token") String token,
			final @PathParam(value = "atomId") @WebParam(name = "atomId") String atomId,
			final @PathParam(value = "eventQueue") @WebParam(name = "eventQueue") String eventQueue)
					 throws Problem;
	
	@POST @Path("saveRecette/{atomId}/{recetteId}")
	@WSDLDocumentation("")
	public String saveRecette(
			final @CookieParam(value = "token") @WebParam(name = "token") String token,
			final @PathParam(value = "atomId") @WebParam(name = "atomId") String atomId,
			final @PathParam(value = "recetteId") @WebParam(name = "recetteId") String recetteId)
					 throws Problem;
	
	@POST @Path("removeExample/{atomId}/{exampleId}")
	@WSDLDocumentation("")
	public void removeExample(
			final @CookieParam(value = "token") @WebParam(name = "token") String token,
			final @PathParam(value = "atomId") @WebParam(name = "atomId") String atomId,
			final @PathParam(value = "exampleId") @WebParam(name = "exampleId") String exampleId)
					 throws Problem;

	@POST @Path("addExample/{atomId}/{exampleId}")
	@WSDLDocumentation("")
	public void addExample(
			final @CookieParam(value = "token") @WebParam(name = "token") String token,
			final @PathParam(value = "atomId") @WebParam(name = "atomId") String atomId,
			final @PathParam(value = "exampleId") @WebParam(name = "exampleId") String exampleId)
					 throws Problem;

	@POST @Path("removeResult/{atomId}/{result}")
	@WSDLDocumentation("")
	public void removeResult(
			final @CookieParam(value = "token") @WebParam(name = "token") String token,
			final @PathParam(value = "atomId") @WebParam(name = "atomId") String atomId,
			final @PathParam(value = "result") @WebParam(name = "result") String result)
					 throws Problem;

	@POST @Path("addResult/{atomId}/{result}")
	@WSDLDocumentation("")
	public void addResult(
			final @CookieParam(value = "token") @WebParam(name = "token") String token,
			final @PathParam(value = "atomId") @WebParam(name = "atomId") String atomId,
			final @PathParam(value = "result") @WebParam(name = "result") String result)
					 throws Problem;
}
