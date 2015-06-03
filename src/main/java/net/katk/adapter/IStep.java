package net.katk.adapter;

import javax.jws.WebParam;
import javax.jws.WebService;
import javax.ws.rs.Consumes;
import javax.ws.rs.CookieParam;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;

import net.katk.model.Step;

import org.apache.cxf.annotations.WSDLDocumentation;

@WebService
@Consumes({"application/json","application/xml","text/plain"})
@Produces({"application/json","application/xml","text/plain"})
public interface IStep
{
	@GET @Path("getStep/{id}")
	@WSDLDocumentation("Return the given object by id")
	public Step getStep(
			final @CookieParam(value = "token")  @WebParam(name = "token") String token,
			final @PathParam(value = "id") @WebParam(name = "id") String id)
					 throws Problem;
	
	@GET @Path("setStep/{exampleId}/{atomId}/{result}/{evaluation}/{date}/{note}")
	@WSDLDocumentation("Add a new step to the given example.")
	public Step addStep(
			final @CookieParam(value = "token")  @WebParam(name = "token") String token,
			final @PathParam(value = "exampleId") @WebParam(name = "exampleId") String exampleId,
			final @PathParam(value = "atomId") @WebParam(name = "atomId") String atomId,
			final @PathParam(value = "result") @WebParam(name = "result") String result,
			final @PathParam(value = "evaluation") @WebParam(name = "evaluation") String evaluation,
			final @PathParam(value = "date") @WebParam(name = "date") String date,
			final @PathParam(value = "note") @WebParam(name = "note") String note)
					throws Problem;
}
