function ExampleServices()
{
	this.service = new adapter_katk_net__IExample();

	this.init = function(token)
	{
		// this.service.url = 'http://localhost:8080/katk-1.0.0/services/ExampleWS';
		// this.service.url = 'http://localhost:8080/atomHub-0.0.1-SNAPSHOT/services/ExampleWS';
		this.service.url = 'http://localhost:8080/atomHub/services/ExampleWS';
		this.token = token;
	};

	/**
	 *  Return the given object by id 
	 *  @GET @Path("getExample/{id}") 
	 */
	this.getExample = function(id)
	{
		this.service.getExample(this.getExampleResponse, this.getExampleError, this.token, id);
	};
	this.getExampleResponse = function(response)
	{
		alert("getExampleResponse " + response);
	};
	this.getExampleError = function(error)
	{
		alert("getExampleError " + error);
	};
	
	/**
	 *  Add a step at the end of an example. 
	 *  @POST @Path("add/{exampleId}/{atomId}/{result}/{evaluation}/{date}/{note}/{params}") 
	 */
	this.add = function(exampleId, atomId, result, evaluation, date, note, params)
	{
		this.service.add(this.addResponse, this.addError, this.token, atomId, result, evaluation, date, note, params);
	};
	this.addResponse = function(response)
	{
		alert("addResponse " + response);
	};
	this.addError = function(error)
	{
		alert("addError " + error);
	};
	
	/**
	 *  Compute the next suggestions. 
	 *  @POST @Path("next/{exampleId}") 
	 */
	this.next = function(example)
	{
//		this.service.next(this.nextResponse, this.nextError, this.token, exampleId);
		this.service.next(
				function(response) // response : Reaction
				{
					if (response.__failure)
					{
						alert("Failure of next suggestion : " + response.__failureMessage + " on " + example.__id);
					}
					else
					{
						if (typeof response.__askAtomId !== 'undefined')
						{
							for(var i = 0; i < response.__askAtomId.length; i++)
								exampleServices.addSuggestion(example,response.__askAtomId[i]);
						}
						else
						{
							exampleServices.addDefaultSuggestion(example);
						}
					}
				},
				this.nextError,
				this.token, example.__id);
	};
	this.nextResponse = function(response)
	{
		alert("nextResponse " + response);
	};
	this.nextError = function(error)
	{
		alert("nextError " + error);
	};
	
	/**
	 *  Backtrack the example by just one step. 
	 *  @POST @Path("back/{exampleId}") 
	 */
	this.back = function(exampleId)
	{
		this.service.back(this.backResponse, this.backError, this.token, exampleId);
	};
	this.backResponse = function(response)
	{
		alert("backResponse " + response);
	};
	this.backError = function(error)
	{
		alert("backError " + error);
	};
	
	/**
	 *  Change and example at a particular step. 
	 *  @POST @Path("addTerminal/{exampleId}")
	 */
	this.addTerminal = function(exampleId)
	{
		this.service.addTerminal(this.addTerminalResponse, this.addTerminalError, this.token, exampleId);
	};
	this.addTerminalResponse = function(response)
	{
		alert("addTerminalResponse " + response);
	};
	this.addTerminalError = function(error)
	{
		alert("addTerminalError " + error);
	};
	
	/**
	 *  Insert a atom between two step in the given example. 
	 *  @POST @Path("insert/{exampleId}/{stepIdA}/step{IdB}")
	 */
	this.insert = function(exampleId, stepIdA, stepIdB)
	{
		this.service.insert(this.insertResponse, this.insertError, this.token, exampleId, stepIdA, stepIdB);
	};
	this.insertResponse = function(response)
	{
		alert("insertResponse " + response);
	};
	this.insertError = function(error)
	{
		alert("insertError " + error);
	};

	/**
	 *  Remove a step in the given example. The step must not be the last step unless it is the terminal step. 
	 *  @POST @Path("remove/{exampleId}/{stepId}")
	 */
	this.remove = function(exampleId,stepId)
	{
		this.service.remove(this.removeResponse, this.removeError, this.token, exampleId, stepId);
	};
	this.removeResponse = function(response)
	{
		alert("removeResponse " + response);
	};
	this.removeError = function(error)
	{
		alert("removeError " + error);
	};
	
	/**
	 *  @WSDLDocumentation("Replace the atom of a step by another one.") 
	 *  @POST @Path("replace/{exampleId}/{stepId}/{atomId}/{result}/{evaluation}")
	 */
	this.replace = function(exampleId,stepId,atomId,result,evaluation)
	{
		this.service.replace(this.replaceResponse, this.replaceError, this.token, exampleId,stepId,atomId,result,evaluation);
	};
	this.replaceResponse = function(response)
	{
		alert("removeResponse " + response);
	};
	this.replaceError = function(error)
	{
		alert("replaceError " + error);
	};
	
	var mainExample = null;
	
	this.clearMainExample = function()
	{
		$(mainExample.doc).remove();
	};
	
	// Set main and unique example.
	this.setMainExample = function(example)
	{
		if (this.mainExample != null && this.mainExample.doc != null)
			clearMainExample();
		
		this.mainExample = example;

		$("#root").append($(".templates .example").clone());
		$("#root > .example").attr("id", example.__id);
		stepServices.setSteps(example.__id, example.__path);
		$("#"+example.__id+" > .usability").html(example.__usability);
		$("#"+example.__id+" > .env").html(example.__env);
		$("#"+example.__id+" > .externalResources").html(example.__externalResources);
		if (example.__state != 4)
			exampleServices.next(example);
	};
	
	this.addSuggestion = function(example, atomId)
	{
		atomServices.service.getAtom(
				function (response) { atomServices.setAtomAt("#"+example.__id+" > .nextsAtoms", response);  },
				function (error) { alert("getAtom " + error); },
				this.token, atomId);
	}
	
	this.addDefaultSuggestion = function(example)
	{
		var atom = {__id:0, __name:'default', __object:'none', __verbe:'none', __abstract:'empty', __description:'empty'};
		atomServices.setAtomAt("#"+example.__id+" > .nextsAtoms", atom);
	}
}
