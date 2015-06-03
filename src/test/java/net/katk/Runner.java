package net.katk;

import javax.xml.ws.Endpoint;

import org.apache.cxf.jaxrs.JAXRSServerFactoryBean;
import org.eclipse.jetty.server.Server;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * Standalone web server for the atom orchestrator.
 */
public class Runner
{
	private static final Logger	_logger	= LoggerFactory.getLogger(Runner.class);

	private static void startRestServer(final String adress, final Class<?> clazz)
	{
		final JAXRSServerFactoryBean jaxrsServerFactory = new JAXRSServerFactoryBean();
		jaxrsServerFactory.setResourceClasses(clazz);
		jaxrsServerFactory.setAddress(adress);
		final org.apache.cxf.endpoint.Server server = jaxrsServerFactory.create();
		server.start();
	}

	/**
	 * @param args for special options
	 * @throws InterruptedException raise when something goes wrong
	 */
	public static void mainCxf(final String[] args) throws InterruptedException
	{
		System.setProperty("org.slf4j.simplelogger.defaultlog", "FINE");
		
		// Read the args.
		final int port;
		final String module, version;
		
		try
		{
			port = (args.length < 1) ? 8080 : Integer.parseInt(args[0]);
			module = (args.length < 2) ? "katk" : args[1];
			version = (args.length < 3) ? "1.0.0" : args[2];
		}
		catch(final Exception e)
		{
			System.out.println("usage : java net.katk.Runner portNumber moduleName version trustStore trustStorePassword trustStoreType");
			return;
		}
		
		// Start the server.
		final String base = "http://localhost:" + port + "/" + module + "-" + version + "/services";
		
		_logger.info("Starting server on " + base);
		
		Endpoint.publish(base + "/ExampleWS",	new net.katk.compute.ExampleServices());
		startRestServer(base + "/ExampleRS",	net.katk.compute.ExampleServices.class);
		
		Endpoint.publish(base + "/AtomWS",	new net.katk.compute.AtomServices());
		startRestServer(base + "/AtomRS",	net.katk.compute.AtomServices.class);
		
		_logger.info("Server ready");

		Thread.sleep(24 * 60 * 60 * 1000);
		_logger.info("Server exiting");
		System.exit(0);
		//http://fusesource.com/docs/framework/2.3/bind_trans/SoapOverJms-PublishWithJava.html
	}
	
	/*
	public static void mainJetty(final String[] args) throws Exception
	{
        final Server server = new Server(8080);
        server.start();
        server.join();
	}
	*/
	
	public static void main(final String[] args)
	{
		try
		{
			mainCxf(args);
			// mainJetty(args);
		}
		catch(final Exception e)
		{
			_logger.error("", e);
		}
	}
}
