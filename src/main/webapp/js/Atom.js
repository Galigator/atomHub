function AtomServices()
{
	this.service = new adapter_katk_net__IAtom();

	this.init = function(token)
	{
		// this.service.url = 'http://localhost:8080/katk-1.0.0/services/AtomWS';
		// this.service.url = 'http://localhost:8080/atomHub-0.0.1-SNAPSHOT/services/AtomWS';
		this.service.url = 'http://localhost:8080/atomHub/services/AtomWS'; // run from eclipse : http://localhost:8080/atomHub/services/AtomWS?wsdl
		this.token = token;
	};
	
	/**
	 *  Return the given object by id 
	 *  @GET @Path("getAtom/{id}") 
	 */
	this.getAtom = function(id)
	{
		this.service.getAtom(this.getAtomResponse, this.getAtomError, this.token, id);
	};
	this.getAtomResponse = function(response)
	{
		alert("getAtomResponse " + response);
	};
	this.getAtomError = function(error)
	{
		alert("getAtomError " + error);
	};

	/**
	 *  Return the givens objects by ids
	 *  @POST @Path("getAtoms/{ids}") 
	 */
	this.getAtoms = function(ids)
	{
		this.service.getAtoms(this.getAtomsResponse, this.getAtomsError, this.token, ids);
	};
	this.getAtomsResponse = function(response)
	{
		alert("getAtomsResponse " + response);
	};
	this.getAtomsError = function(error)
	{
		alert("getAtomsError " + error);
	};

	/**
	 *  Start a procedure by an AtomId.
	 *  @POST @Path("startById/{atomId}")
	 */
	this.startById = function(atomId)
	{
		this.service.startById(this.startByIdResponse, this.startByIdError, this.token, atomId);
	};
	this.startByIdResponse = function(response)
	{
		alert("startByIdResponse " + response);
	};
	this.startByIdError = function(error)
	{
		alert("startByIdError " + error);
	};

	/**
	 *  Start a procedure by the name of an Atom.
	 *  @POST @Path("startByName/{name}")
	 */
	this.startByName = function(name)
	{
		this.service.startByName(this.startByNameResponse, this.startByNameError, this.token, name);
	};
	this.startByNameResponse = function(response)
	{
		exampleServices.setMainExample(response._return);
	};
	this.startByNameError = function(error)
	{
		alert("startByNameError " + error);
	};

	/**
	 *  @POST @Path("save/{atomId}/{name}/{description}/{resume}/{verbe}/{object}/{branchId}/{directory}/{eventQueue}/{recetteId}")
	 */
	this.save = function(atomId, name, description, resume, verbe, object, branchId, directory, eventQueue, recetteId)
	{
		this.service.save(this.saveResponse, this.saveError, this.token, atomId, name, description, resume, verbe, object, branchId, directory, eventQueue, recetteId);
	};
	this.saveResponse = function(response)
	{
		alert("saveResponse " + response);
	};
	this.saveError = function(error)
	{
		alert("saveError " + error);
	};
	
	/**
	 *  @POST @Path("saveName/{atomId}/{name}")
	 */
	this.saveName = function(atomId, name)
	{
		this.service.saveName(this.saveNameResponse, this.saveNameError, this.token, atomId, name);
	};
	this.saveNameResponse = function(response)
	{
		alert("saveNameResponse " + response);
	};
	this.saveNameError = function(error)
	{
		alert("saveNameError " + error);
	};

	/**
	 *  @POST @Path("saveDescription/{atomId}/{description}")
	 */
	this.saveDescription = function(atomId, description)
	{
		this.service.saveDescription(this.saveDescriptionResponse, this.saveDescriptionError, this.token, atomId, description);
	};
	this.saveDescriptionResponse = function(response)
	{
		alert("saveDescriptionResponse " + response);
	};
	this.saveDescriptionError = function(error)
	{
		alert("saveDescriptionError " + error);
	};

	/**
	 *  @POST @Path("saveAbstract/{atomId}/{resume}")
	 */
	this.saveAbstract = function(atomId, resume)
	{
		this.service.saveAbstract(this.saveAbstractResponse, this.saveAbstractError, this.token, atomId, resume);
	};
	this.saveAbstractResponse = function(response)
	{
		alert("saveAbstractResponse " + response);
	};
	this.saveAbstractError = function(error)
	{
		alert("saveAbstractError " + error);
	};

	/**
	 *  @POST @Path("saveVerbe/{atomId}/{verbe}")
	 */
	this.saveVerbe = function(atomId, verbe)
	{
		this.service.saveVerbe(this.saveVerbeResponse, this.saveVerbeError, this.token, atomId, verbe);
	};
	this.saveVerbeResponse = function(response)
	{
		alert("saveVerbeResponse " + response);
	};
	this.saveVerbeError = function(error)
	{
		alert("saveVerbeError " + error);
	};

	/**
	 *  @POST @Path("saveObject/{atomId}/{object}")
	 */
	this.saveObject = function(atomId, object)
	{
		this.service.saveObject(this.saveObjectResponse, this.saveObjectError, this.token, atomId, object);
	};
	this.saveObjectResponse = function(response)
	{
		alert("saveObjectResponse " + response);
	};
	this.saveObjectError = function(error)
	{
		alert("saveObjectError " + error);
	};

	/**
	 *  @POST @Path("saveBranch/{atomId}/{branch}")
	 */
	this.saveBranch = function(atomId, branchId)
	{
		this.service.saveBranch(this.saveBranchResponse, this.saveBranchError, this.token, atomId, branchId);
	};
	this.saveBranchResponse = function(response)
	{
		alert("saveBranchResponse " + response);
	};
	this.saveObjectError = function(error)
	{
		alert("saveBranchError " + error);
	};
	
	/**
	 *  @POST @Path("saveDirectory/{atomId}/{directory}")
	 */
	this.saveDirectory = function(atomId, directory)
	{
		this.service.saveDirectory(this.saveDirectoryResponse, this.saveDirectoryError, this.token, atomId, directory);
	};
	this.saveDirectoryResponse = function(response)
	{
		alert("saveDirectoryResponse " + response);
	};
	this.saveDirectoryError = function(error)
	{
		alert("saveDirectoryError " + error);
	};
	
	/**
	 *  @POST @Path("saveEventQueue/{atomId}/{eventQueue}")
	 */
	this.saveEventQueue = function(atomId, eventQueue)
	{
		this.service.saveEventQueue(this.saveEventQueueResponse, this.saveEventQueueError, this.token, atomId, eventQueue);
	};
	this.saveEventQueueResponse = function(response)
	{
		alert("saveDirectoryResponse " + response);
	};
	this.saveEventQueueError = function(error)
	{
		alert("saveEventQueueError " + error);
	};
	
	/**
	 *  @POST @Path("saveRecette/{atomId}/{recetteId}")
	 */
	this.saveRecette = function(atomId, recetteId)
	{
		this.service.saveRecette(this.saveRecetteResponse, this.saveRecetteError, this.token, atomId, recetteId);
	};
	this.saveRecetteResponse = function(response)
	{
		alert("saveRecetteResponse " + response);
	};
	this.saveRecetteError = function(error)
	{
		alert("saveRecetteError " + error);
	};
	
	/**
	 *  @POST @Path("removeExample/{atomId}/{exampleId}")
	 */
	this.removeExample = function(atomId, exampleId)
	{
		this.service.removeExample(this.removeExampleResponse, this.removeExampleError, this.token, atomId, exampleId);
	};
	this.removeExampleResponse = function(response)
	{
		alert("removeExampleResponse " + response);
	};
	this.removeExampleError = function(error)
	{
		alert("removeExampleError " + error);
	};
	
	/**
	 *  @POST @Path("addExample/{atomId}/{exampleId}")
	 */
	this.addExample = function(atomId, exampleId)
	{
		this.service.addExample(this.addExampleResponse, this.addExampleError, this.token, atomId, exampleId);
	};
	this.addExampleResponse = function(response)
	{
		alert("addExampleResponse " + response);
	};
	this.addExampleError = function(error)
	{
		alert("addExampleError " + error);
	};
	
	/**
	 *  @POST @Path("removeResult/{atomId}/{result}")
	 */
	this.removeResult = function(atomId, result)
	{
		this.service.removeResult(this.removeResultResponse, this.removeResultError, this.token, atomId, result);
	};
	this.removeResultResponse = function(response)
	{
		alert("removeResultResponse " + response);
	};
	this.removeResultError = function(error)
	{
		alert("removeResultError " + error);
	};

	/**
	 *  @POST @Path("addResult/{atomId}/{result}")
	 */
	this.addResult = function(atomId, result)
	{
		this.service.addResult(this.addResultResponse, this.addResultError, this.token, atomId, result);
	};
	this.addResultResponse = function(response)
	{
		alert("addResultResponse " + response);
	};
	this.addResultError = function(error)
	{
		alert("addResultError " + error);
	};

	this.setAtomAt = function(path, atom)
	{
		$(path).append($(".templates .atom").clone());
		$(path+" .atom").attr("id", atom.__id);
		$(path+" .name").append(atom.__name);
		$(path+" .object").append(atom.__object);
		$(path+" .verbe").append(atom.__verbe);
		$(path+" .abstract").append(atom.__abstract);
		$(path+" .description").append(atom.__description);
		
		//$(path+" .name").focus(function(){ alert("focused"); } );
		
		var edit = 
			function()
			{
				$(path + " .atom .editorControl").remove();
    			$(path + " .atom").append($(".templates .editorControl").clone());
    			$(path + " .editorControl").show(1000); // TODO : remove
			}
		;
		
		$(path+" .name").on("focus", null, edit);
		$(path+" .verbe").on("focus", null, edit);
		$(path+" .object").on("focus", null, edit);
		
		$(path+" .name").on("blur keyup paste input", null, edit);
		
		// save
		var saveAttributes =
			function()
			{
				alert("coucou");
				// atomServices.save(atom.__id, name, description, resume, verbe, object, branchId, directory, eventQueue, recetteId);
			}
		;
		
		console.log(path);  // "#8404 > .nextsAtoms"
		$(path+" .editorControl > .save").click(saveAttributes);
	}
	
	this.setAtom = function(root, atom)
	{
		this.setAtomAt("#"+root.__id, atom);
	};
}
