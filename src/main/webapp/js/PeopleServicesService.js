//
// Definitions for schema: http://adapter.katk.net/
//  http://localhost:8080/atomHub/services/PeopleWS?wsdl=IPeople.wsdl#types1
//
//
// Constructor for XML Schema item {http://adapter.katk.net/}createPeople
//
function adapter_katk_net__createPeople () {
    this.typeMarker = 'adapter_katk_net__createPeople';
    this._name = null;
    this._mail = null;
}

//
// accessor is adapter_katk_net__createPeople.prototype.getName
// element get for name
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for name
// setter function is is adapter_katk_net__createPeople.prototype.setName
//
function adapter_katk_net__createPeople_getName() { return this._name;}

adapter_katk_net__createPeople.prototype.getName = adapter_katk_net__createPeople_getName;

function adapter_katk_net__createPeople_setName(value) { this._name = value;}

adapter_katk_net__createPeople.prototype.setName = adapter_katk_net__createPeople_setName;
//
// accessor is adapter_katk_net__createPeople.prototype.getMail
// element get for mail
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for mail
// setter function is is adapter_katk_net__createPeople.prototype.setMail
//
function adapter_katk_net__createPeople_getMail() { return this._mail;}

adapter_katk_net__createPeople.prototype.getMail = adapter_katk_net__createPeople_getMail;

function adapter_katk_net__createPeople_setMail(value) { this._mail = value;}

adapter_katk_net__createPeople.prototype.setMail = adapter_katk_net__createPeople_setMail;
//
// Serialize {http://adapter.katk.net/}createPeople
//
function adapter_katk_net__createPeople_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._name != null) {
      xml = xml + '<name>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._name);
      xml = xml + '</name>';
     }
    }
    // block for local variables
    {
     if (this._mail != null) {
      xml = xml + '<mail>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._mail);
      xml = xml + '</mail>';
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

adapter_katk_net__createPeople.prototype.serialize = adapter_katk_net__createPeople_serialize;

function adapter_katk_net__createPeople_deserialize (cxfjsutils, element) {
    var newobject = new adapter_katk_net__createPeople();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing name');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'name')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setName(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing mail');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'mail')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setMail(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://adapter.katk.net/}createPeopleResponse
//
function adapter_katk_net__createPeopleResponse () {
    this.typeMarker = 'adapter_katk_net__createPeopleResponse';
    this._return = null;
}

//
// accessor is adapter_katk_net__createPeopleResponse.prototype.getReturn
// element get for return
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for return
// setter function is is adapter_katk_net__createPeopleResponse.prototype.setReturn
//
function adapter_katk_net__createPeopleResponse_getReturn() { return this._return;}

adapter_katk_net__createPeopleResponse.prototype.getReturn = adapter_katk_net__createPeopleResponse_getReturn;

function adapter_katk_net__createPeopleResponse_setReturn(value) { this._return = value;}

adapter_katk_net__createPeopleResponse.prototype.setReturn = adapter_katk_net__createPeopleResponse_setReturn;
//
// Serialize {http://adapter.katk.net/}createPeopleResponse
//
function adapter_katk_net__createPeopleResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._return != null) {
      xml = xml + '<return>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._return);
      xml = xml + '</return>';
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

adapter_katk_net__createPeopleResponse.prototype.serialize = adapter_katk_net__createPeopleResponse_serialize;

function adapter_katk_net__createPeopleResponse_deserialize (cxfjsutils, element) {
    var newobject = new adapter_katk_net__createPeopleResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing return');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'return')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setReturn(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://adapter.katk.net/}Problem
//
function adapter_katk_net__Problem () {
    this.typeMarker = 'adapter_katk_net__Problem';
    this._message = null;
}

//
// accessor is adapter_katk_net__Problem.prototype.getMessage
// element get for message
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for message
// setter function is is adapter_katk_net__Problem.prototype.setMessage
//
function adapter_katk_net__Problem_getMessage() { return this._message;}

adapter_katk_net__Problem.prototype.getMessage = adapter_katk_net__Problem_getMessage;

function adapter_katk_net__Problem_setMessage(value) { this._message = value;}

adapter_katk_net__Problem.prototype.setMessage = adapter_katk_net__Problem_setMessage;
//
// Serialize {http://adapter.katk.net/}Problem
//
function adapter_katk_net__Problem_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._message != null) {
      xml = xml + '<message>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._message);
      xml = xml + '</message>';
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

adapter_katk_net__Problem.prototype.serialize = adapter_katk_net__Problem_serialize;

function adapter_katk_net__Problem_deserialize (cxfjsutils, element) {
    var newobject = new adapter_katk_net__Problem();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing message');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'message')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setMessage(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Definitions for service: {http://compute.katk.net/}PeopleServicesService
//

// Javascript for {http://adapter.katk.net/}IPeople

function adapter_katk_net__IPeople () {
    this.jsutils = new CxfApacheOrgUtil();
    this.jsutils.interfaceObject = this;
    this.synchronous = false;
    this.url = null;
    this.client = null;
    this.response = null;
    this.globalElementSerializers = [];
    this.globalElementDeserializers = [];
    this.globalElementSerializers['{http://adapter.katk.net/}createPeople'] = adapter_katk_net__createPeople_serialize;
    this.globalElementDeserializers['{http://adapter.katk.net/}createPeople'] = adapter_katk_net__createPeople_deserialize;
    this.globalElementSerializers['{http://adapter.katk.net/}createPeopleResponse'] = adapter_katk_net__createPeopleResponse_serialize;
    this.globalElementDeserializers['{http://adapter.katk.net/}createPeopleResponse'] = adapter_katk_net__createPeopleResponse_deserialize;
    this.globalElementSerializers['{http://adapter.katk.net/}Problem'] = adapter_katk_net__Problem_serialize;
    this.globalElementDeserializers['{http://adapter.katk.net/}Problem'] = adapter_katk_net__Problem_deserialize;
    this.globalElementSerializers['{http://adapter.katk.net/}createPeople'] = adapter_katk_net__createPeople_serialize;
    this.globalElementDeserializers['{http://adapter.katk.net/}createPeople'] = adapter_katk_net__createPeople_deserialize;
    this.globalElementSerializers['{http://adapter.katk.net/}createPeopleResponse'] = adapter_katk_net__createPeopleResponse_serialize;
    this.globalElementDeserializers['{http://adapter.katk.net/}createPeopleResponse'] = adapter_katk_net__createPeopleResponse_deserialize;
    this.globalElementSerializers['{http://adapter.katk.net/}Problem'] = adapter_katk_net__Problem_serialize;
    this.globalElementDeserializers['{http://adapter.katk.net/}Problem'] = adapter_katk_net__Problem_deserialize;
}

function adapter_katk_net__createPeople_op_onsuccess(client, responseXml) {
    if (client.user_onsuccess) {
     var responseObject = null;
     var element = responseXml.documentElement;
     this.jsutils.trace('responseXml: ' + this.jsutils.traceElementName(element));
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('first element child: ' + this.jsutils.traceElementName(element));
     while (!this.jsutils.isNodeNamedNS(element, 'http://schemas.xmlsoap.org/soap/envelope/', 'Body')) {
      element = this.jsutils.getNextElementSibling(element);
      if (element == null) {
       throw 'No env:Body in message.'
      }
     }
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('part element: ' + this.jsutils.traceElementName(element));
     this.jsutils.trace('calling adapter_katk_net__createPeopleResponse_deserializeResponse');
     responseObject = adapter_katk_net__createPeopleResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

adapter_katk_net__IPeople.prototype.createPeople_onsuccess = adapter_katk_net__createPeople_op_onsuccess;

function adapter_katk_net__createPeople_op_onerror(client) {
    if (client.user_onerror) {
     var httpStatus;
     var httpStatusText;
     try {
      httpStatus = client.req.status;
      httpStatusText = client.req.statusText;
     } catch(e) {
      httpStatus = -1;
      httpStatusText = 'Error opening connection to server';
     }
     client.user_onerror(httpStatus, httpStatusText);
    }
}

adapter_katk_net__IPeople.prototype.createPeople_onerror = adapter_katk_net__createPeople_op_onerror;

//
// Operation {http://adapter.katk.net/}createPeople
// Wrapped operation.
// parameter name
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter mail
// - simple type {http://www.w3.org/2001/XMLSchema}string//
function adapter_katk_net__createPeople_op(successCallback, errorCallback, name, mail) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(2);
    args[0] = name;
    args[1] = mail;
    xml = this.createPeople_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.createPeople_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.createPeople_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

adapter_katk_net__IPeople.prototype.createPeople = adapter_katk_net__createPeople_op;

function adapter_katk_net__createPeople_serializeInput(cxfjsutils, args) {
    var wrapperObj = new adapter_katk_net__createPeople();
    wrapperObj.setName(args[0]);
    wrapperObj.setMail(args[1]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://adapter.katk.net/' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:createPeople', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

adapter_katk_net__IPeople.prototype.createPeople_serializeInput = adapter_katk_net__createPeople_serializeInput;

function adapter_katk_net__createPeopleResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = adapter_katk_net__createPeopleResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function adapter_katk_net__IPeople_compute_katk_net__PeopleServicesPort () {
  this.url = 'http://localhost:8080/atomHub/services/PeopleWS';
}
adapter_katk_net__IPeople_compute_katk_net__PeopleServicesPort.prototype = new adapter_katk_net__IPeople;
