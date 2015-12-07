package net.katk.adapter;

import javax.jws.WebParam;
import javax.jws.WebService;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;

import org.apache.cxf.annotations.WSDLDocumentation;

@WebService
@Consumes({"application/json","application/xml","text/plain"})
@Produces({"application/json","application/xml","text/plain"})
public interface IPeople
{
	@GET @Path("createPeople/{id}")
	@WSDLDocumentation("Return the token of the newle created people.")
	public String createPeople(
			final @PathParam(value = "name") @WebParam(name = "name") String name,
			final @PathParam(value = "mail") @WebParam(name = "mail") String mail)
					 throws Problem;
}
