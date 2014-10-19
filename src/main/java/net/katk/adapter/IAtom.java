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
			final @PathParam(value = "id") @WebParam(name = "id") int id);

	@POST @Path("getAtoms/{ids}")
	@WSDLDocumentation("Return the givens objects by ids")
	public List<Atom> getAtoms(
			final @CookieParam(value = "token")  @WebParam(name = "token") String token,
			final @PathParam(value = "ids") @WebParam(name = "ids") List<Integer> ids);
	
	@POST @Path("startById/{atomId}")
	@WSDLDocumentation("Start a procedure by an AtomId.")
	public Example startById(
			final @CookieParam(value = "token") @WebParam(name = "token") String token,
			final @PathParam(value = "atomId") @WebParam(name = "atomId") int atomId);

	@POST @Path("startByName/{name}")
	@WSDLDocumentation("Start a procedure by the name of an Atom.")
	public Example startByName(
			final @CookieParam(value = "token") @WebParam(name = "token") String token,
			final @PathParam(value = "name") @WebParam(name = "name") String name);

	@POST @Path("saveName/{atomId}/{name}")
	@WSDLDocumentation("")
	public int saveName(
			final @CookieParam(value = "token") @WebParam(name = "token") String token,
			final @PathParam(value = "atomId") @WebParam(name = "atomId") int atomId,
			final @PathParam(value = "name") @WebParam(name = "name") String name);

	@POST @Path("saveDescription/{atomId}/{description}")
	@WSDLDocumentation("")
	public int saveDescription(
			final @CookieParam(value = "token") @WebParam(name = "token") String token,
			final @PathParam(value = "atomId") @WebParam(name = "atomId") int atomId,
			final @PathParam(value = "description") @WebParam(name = "description") String description);
	
	@POST @Path("saveAbstract/{atomId}/{resume}")
	@WSDLDocumentation("")
	public int saveAbstract(
			final @CookieParam(value = "token") @WebParam(name = "token") String token,
			final @PathParam(value = "atomId") @WebParam(name = "atomId") int atomId,
			final @PathParam(value = "resume") @WebParam(name = "resume") String resume);
	
	@POST @Path("saveVerbe/{atomId}/{verbe}")
	@WSDLDocumentation("")
	public int saveVerbe(
			final @CookieParam(value = "token") @WebParam(name = "token") String token,
			final @PathParam(value = "atomId") @WebParam(name = "atomId") int atomId,
			final @PathParam(value = "verbe") @WebParam(name = "verbe") String verbe);
	
	@POST @Path("saveObject/{atomId}/{object}")
	@WSDLDocumentation("")
	public int saveObject(
			final @CookieParam(value = "token") @WebParam(name = "token") String token,
			final @PathParam(value = "atomId") @WebParam(name = "atomId") int atomId,
			final @PathParam(value = "object") @WebParam(name = "object") String object);

	@POST @Path("saveBranch/{atomId}/{branchId}")
	@WSDLDocumentation("")
	public int saveBranch(
			final @CookieParam(value = "token") @WebParam(name = "token") String token,
			final @PathParam(value = "atomId") @WebParam(name = "atomId") int atomId,
			final @PathParam(value = "branchId") @WebParam(name = "branchId") int branchId);
	
	@POST @Path("saveDirectory/{atomId}/{directory}")
	@WSDLDocumentation("")
	public int saveDirectory(
			final @CookieParam(value = "token") @WebParam(name = "token") String token,
			final @PathParam(value = "atomId") @WebParam(name = "atomId") int atomId,
			final @PathParam(value = "directory") @WebParam(name = "directory") String directory);

	@POST @Path("saveEventQueue/{atomId}/{eventQueue}")
	@WSDLDocumentation("")
	public int saveEventQueue(
			final @CookieParam(value = "token") @WebParam(name = "token") String token,
			final @PathParam(value = "atomId") @WebParam(name = "atomId") int atomId,
			final @PathParam(value = "eventQueue") @WebParam(name = "eventQueue") String eventQueue);
	
	@POST @Path("saveRecette/{atomId}/{recetteId}")
	@WSDLDocumentation("")
	public int saveRecette(
			final @CookieParam(value = "token") @WebParam(name = "token") String token,
			final @PathParam(value = "atomId") @WebParam(name = "atomId") int atomId,
			final @PathParam(value = "recetteId") @WebParam(name = "recetteId") int recetteId);
	
	@POST @Path("removeExample/{atomId}/{exampleId}")
	@WSDLDocumentation("")
	public void removeExample(
			final @CookieParam(value = "token") @WebParam(name = "token") String token,
			final @PathParam(value = "atomId") @WebParam(name = "atomId") int atomId,
			final @PathParam(value = "exampleId") @WebParam(name = "exampleId") int exampleId);

	@POST @Path("addExample/{atomId}/{exampleId}")
	@WSDLDocumentation("")
	public void addExample(
			final @CookieParam(value = "token") @WebParam(name = "token") String token,
			final @PathParam(value = "atomId") @WebParam(name = "atomId") int atomId,
			final @PathParam(value = "exampleId") @WebParam(name = "exampleId") int exampleId);

	@POST @Path("removeResult/{atomId}/{result}")
	@WSDLDocumentation("")
	public void removeResult(
			final @CookieParam(value = "token") @WebParam(name = "token") String token,
			final @PathParam(value = "atomId") @WebParam(name = "atomId") int atomId,
			final @PathParam(value = "result") @WebParam(name = "result") String result);

	@POST @Path("addResult/{atomId}/{result}")
	@WSDLDocumentation("")
	public void addResult(
			final @CookieParam(value = "token") @WebParam(name = "token") String token,
			final @PathParam(value = "atomId") @WebParam(name = "atomId") int atomId,
			final @PathParam(value = "result") @WebParam(name = "result") String result);
}
