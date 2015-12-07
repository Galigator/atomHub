package net.katk.adapter;

import javax.jws.WebService;
import javax.ws.rs.Consumes;
import javax.ws.rs.Produces;

@WebService
@Consumes({ "application/json", "application/xml", "text/plain" })
@Produces({ "application/json", "application/xml", "text/plain" })
public interface IBranch
{
	//
}
