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

import net.katk.model.Example;

import org.apache.cxf.annotations.WSDLDocumentation;

@WebService
@Consumes({"application/json","application/xml","text/plain"})
@Produces({"application/json","application/xml","text/plain"})
public interface IExample
{
	@GET @Path("getExample/{id}")
	@WSDLDocumentation("Return the given object by id")
	public Example getExample(
			final @CookieParam(value = "token") @WebParam(name = "token") String token,
			final @PathParam(value = "id") @WebParam(name = "id") int id);

	@POST @Path("add/{exampleId}/{atomId}/{result}/{evaluation}/{date}/{note}/{params}")
	@WSDLDocumentation("Add a step at the end of an example.")
	public Reaction add(
			final @CookieParam(value = "token") @WebParam(name = "token") String token,
			final @PathParam(value = "exampleId") @WebParam(name = "exampleId") int exampleId,
			final @PathParam(value = "atomId") @WebParam(name = "atomId") int atomId,
			final @PathParam(value = "result") @WebParam(name = "result") String result,
			final @PathParam(value = "evaluation") @WebParam(name = "evaluation") String evaluation,
			final @PathParam(value = "date") @WebParam(name = "date") long date,
			final @PathParam(value = "note") @WebParam(name = "note") String note,
			final @PathParam(value = "params") @WebParam(name = "params") List<net.katk.model.Param> params);	

	@POST @Path("next/{exampleId}")
	@WSDLDocumentation("Compute the next suggestions.")
	public Reaction next(
			final @CookieParam(value = "token") @WebParam(name = "token") String token,
			final @PathParam(value = "exampleId") @WebParam(name = "exampleId") int exampleId);
	
	@POST @Path("back/{exampleId}")
	@WSDLDocumentation("Backtrack the example by just one step.")
	public Reaction back(
			final @CookieParam(value = "token") @WebParam(name = "token") String token,
			final @PathParam(value = "exampleId") @WebParam(name = "exampleId") int exampleId);

	@POST @Path("addTerminal/{exampleId}")
	@WSDLDocumentation("Change and example at a particular step. If the step is new in the example use -1 for stepId.")
	public Reaction addTerminal(
			final @CookieParam(value = "token") @WebParam(name = "token") String token,
			final @PathParam(value = "exampleId") @WebParam(name = "exampleId") int exampleId);
	
	@POST @Path("insert/{exampleId}/{stepIdA}/step{IdB}")
	@WSDLDocumentation("Insert a granule between two step in the given example.")
	public Reaction insert(
			final @CookieParam(value = "token") @WebParam(name = "token") String token,
			final @PathParam(value = "exampleId") @WebParam(name = "exampleId") int exampleId,
			final @PathParam(value = "stepIdA") @WebParam(name = "stepIdA") int stepIdA,
			final @PathParam(value = "stepIdB") @WebParam(name = "stepIdB") int stepIdB);

	@POST @Path("delete/{exampleId}/{stepId}")
	@WSDLDocumentation("Delete a step in the given example. The step must not be the last step unless it is the terminal step.")
	public Reaction delete(
			final @CookieParam(value = "token") @WebParam(name = "token") String token,
			final @PathParam(value = "exampleId") @WebParam(name = "exampleId") int exampleId,
			final @PathParam(value = "stepId") @WebParam(name = "stepId") int stepId);

	@POST @Path("replace/{exampleId}/{stepId}/{atomId}/{result}/{evaluation}")
	@WSDLDocumentation("Replace the atom of a step by another one.")
	public Reaction replace(
			final @CookieParam(value = "token") @WebParam(name = "token") String token,
			final @PathParam(value = "exampleId") @WebParam(name = "exampleId") int exampleId,
			final @PathParam(value = "stepId") @WebParam(name = "stepId") int stepId,
			final @PathParam(value = "atomId") @WebParam(name = "atomId") int atomId,
			final @PathParam(value = "result") @WebParam(name = "result") String result,
			final @PathParam(value = "evaluation") @WebParam(name = "evaluation") String evaluation);
}
