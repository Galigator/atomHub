function StepServices()
{
	this.service = new adapter_katk_net__IStep();

	this.init = function(token)
	{
		// this.service.url = 'http://localhost:8080/katk-1.0.0/services/StepWS';
		// this.service.url = 'http://localhost:8080/atomHub-0.0.1-SNAPSHOT/services/StepWS';
		this.service.url = 'http://localhost:8080/atomHub/services/StepWS';
		this.token = token;
	};
	
	this.getStepOfExample = function(exampleId, stepId)
	{
		this.service.getStep(
				function(response) { exampleServices.setStep(exampleId, response._return); },
				this.getStepError,
				this.token, stepId);
	}
	
	this.getStep = function(stepId)
	{
		this.service.getStep(this.getStepResponse(), this.getStepError, this.token, stepId);
	};
	this.getStepResponse = function(response)
	{
		exampleServices.setStep(response._return);
	};
	this.getStepError = function(error)
	{
		alert("getStepError " + error);
	};
	
	this.setStep = function(exampleId, step)
	{
		alert("setStep");
		$("#"+exampleId+" > .path").append($(".templates .step").clone())
		$("#"+exampleId+" > .path > .step").attr("id", step.__id);
		atomServices.setAtom(step, step.__core);
		$("#"+step.__id+" > .core").append(step.__core);
		$("#"+step.__id+" > .author").html(step.__author);
		$("#"+step.__id+" > .evalDate").html(step.__evalDate);
		$("#"+step.__id+" > .evaluation").html(step.__evaluation);
		$("#"+step.__id+" > .note").html(step.__note);
		$("#"+step.__id+" > .params").html(step.__params);
		$("#"+step.__id+" > .result").html(step.__result);
	};

	this.setSteps = function(exampleId, steps)
	{
		for(var i = 0; i < steps.length; i++)
			getStepOfExample(exampleId, steps[i]);
	};
}
