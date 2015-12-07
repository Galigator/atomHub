function PeopleServices()
{
	this.service = new adapter_katk_net__IPeople();

	this.init = function(token)
	{
		// this.service.url = 'http://localhost:8080/katk-1.0.0/services/StepWS';
		// this.service.url = 'http://localhost:8080/atomHub-0.0.1-SNAPSHOT/services/StepWS';
		this.service.url = 'http://localhost:8080/atomHub/services/PeopleWS';
		this.token = token;
	};
	
	/**
	 *  Return the token of the newle created people. 
	 *  @GET @Path("createPeople/{id}")
	 */
	this.createPeople = function(name, mail)
	{
		this.service.createPeople(this.createPeopleResponse, this.createPeopleError, name, mail);
	};
	this.createPeopleResponse = function(response)
	{
		alert("createPeopleResponse " + response);
	};
	this.createPeopleError = function(error)
	{
		alert("createPeopleError " + error);
	};
}
