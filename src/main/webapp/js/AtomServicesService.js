//
// Definitions for schema: http://adapter.katk.net/
//  http://localhost:8080/atomHub/services/AtomWS?wsdl=IAtom.wsdl#types1
//
//
// Constructor for XML Schema item {http://adapter.katk.net/}getAtom
//
function adapter_katk_net__getAtom () {
    this.typeMarker = 'adapter_katk_net__getAtom';
    this._token = null;
    this._id = null;
}

//
// accessor is adapter_katk_net__getAtom.prototype.getToken
// element get for token
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for token
// setter function is is adapter_katk_net__getAtom.prototype.setToken
//
function adapter_katk_net__getAtom_getToken() { return this._token;}

adapter_katk_net__getAtom.prototype.getToken = adapter_katk_net__getAtom_getToken;

function adapter_katk_net__getAtom_setToken(value) { this._token = value;}

adapter_katk_net__getAtom.prototype.setToken = adapter_katk_net__getAtom_setToken;
//
// accessor is adapter_katk_net__getAtom.prototype.getId
// element get for id
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for id
// setter function is is adapter_katk_net__getAtom.prototype.setId
//
function adapter_katk_net__getAtom_getId() { return this._id;}

adapter_katk_net__getAtom.prototype.getId = adapter_katk_net__getAtom_getId;

function adapter_katk_net__getAtom_setId(value) { this._id = value;}

adapter_katk_net__getAtom.prototype.setId = adapter_katk_net__getAtom_setId;
//
// Serialize {http://adapter.katk.net/}getAtom
//
function adapter_katk_net__getAtom_serialize(cxfjsutils, elementName, extraNamespaces) {
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
     if (this._token != null) {
      xml = xml + '<token>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._token);
      xml = xml + '</token>';
     }
    }
    // block for local variables
    {
     if (this._id != null) {
      xml = xml + '<id>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._id);
      xml = xml + '</id>';
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

adapter_katk_net__getAtom.prototype.serialize = adapter_katk_net__getAtom_serialize;

function adapter_katk_net__getAtom_deserialize (cxfjsutils, element) {
    var newobject = new adapter_katk_net__getAtom();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing token');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'token')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setToken(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing id');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'id')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setId(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://adapter.katk.net/}people
//
function adapter_katk_net__people () {
    this.typeMarker = 'adapter_katk_net__people';
    this.__id = null;
    this.__party = null;
    this.__date = 0;
    this._group = null;
    this.__externalResourceType = null;
    this.__externalResourceId = null;
    this.__mail = null;
    this.__name = null;
    this.__bookmarks = [];
    this._externalResourceId = null;
    this._externalResourceType = null;
    this._mail = null;
    this._name = null;
}

//
// accessor is adapter_katk_net__people.prototype.get_id
// element get for _id
// - element type is {http://www.w3.org/2001/XMLSchema}ID
// - optional element
//
// element set for _id
// setter function is is adapter_katk_net__people.prototype.set_id
//
function adapter_katk_net__people_get_id() { return this.__id;}

adapter_katk_net__people.prototype.get_id = adapter_katk_net__people_get_id;

function adapter_katk_net__people_set_id(value) { this.__id = value;}

adapter_katk_net__people.prototype.set_id = adapter_katk_net__people_set_id;
//
// accessor is adapter_katk_net__people.prototype.get_party
// element get for _party
// - element type is {http://www.w3.org/2001/XMLSchema}IDREF
// - optional element
//
// element set for _party
// setter function is is adapter_katk_net__people.prototype.set_party
//
function adapter_katk_net__people_get_party() { return this.__party;}

adapter_katk_net__people.prototype.get_party = adapter_katk_net__people_get_party;

function adapter_katk_net__people_set_party(value) { this.__party = value;}

adapter_katk_net__people.prototype.set_party = adapter_katk_net__people_set_party;
//
// accessor is adapter_katk_net__people.prototype.get_date
// element get for _date
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
//
// element set for _date
// setter function is is adapter_katk_net__people.prototype.set_date
//
function adapter_katk_net__people_get_date() { return this.__date;}

adapter_katk_net__people.prototype.get_date = adapter_katk_net__people_get_date;

function adapter_katk_net__people_set_date(value) { this.__date = value;}

adapter_katk_net__people.prototype.set_date = adapter_katk_net__people_set_date;
//
// accessor is adapter_katk_net__people.prototype.getGroup
// element get for group
// - element type is {http://adapter.katk.net/}party
// - optional element
//
// element set for group
// setter function is is adapter_katk_net__people.prototype.setGroup
//
function adapter_katk_net__people_getGroup() { return this._group;}

adapter_katk_net__people.prototype.getGroup = adapter_katk_net__people_getGroup;

function adapter_katk_net__people_setGroup(value) { this._group = value;}

adapter_katk_net__people.prototype.setGroup = adapter_katk_net__people_setGroup;
//
// accessor is adapter_katk_net__people.prototype.get_externalResourceType
// element get for _externalResourceType
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for _externalResourceType
// setter function is is adapter_katk_net__people.prototype.set_externalResourceType
//
function adapter_katk_net__people_get_externalResourceType() { return this.__externalResourceType;}

adapter_katk_net__people.prototype.get_externalResourceType = adapter_katk_net__people_get_externalResourceType;

function adapter_katk_net__people_set_externalResourceType(value) { this.__externalResourceType = value;}

adapter_katk_net__people.prototype.set_externalResourceType = adapter_katk_net__people_set_externalResourceType;
//
// accessor is adapter_katk_net__people.prototype.get_externalResourceId
// element get for _externalResourceId
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for _externalResourceId
// setter function is is adapter_katk_net__people.prototype.set_externalResourceId
//
function adapter_katk_net__people_get_externalResourceId() { return this.__externalResourceId;}

adapter_katk_net__people.prototype.get_externalResourceId = adapter_katk_net__people_get_externalResourceId;

function adapter_katk_net__people_set_externalResourceId(value) { this.__externalResourceId = value;}

adapter_katk_net__people.prototype.set_externalResourceId = adapter_katk_net__people_set_externalResourceId;
//
// accessor is adapter_katk_net__people.prototype.get_mail
// element get for _mail
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for _mail
// setter function is is adapter_katk_net__people.prototype.set_mail
//
function adapter_katk_net__people_get_mail() { return this.__mail;}

adapter_katk_net__people.prototype.get_mail = adapter_katk_net__people_get_mail;

function adapter_katk_net__people_set_mail(value) { this.__mail = value;}

adapter_katk_net__people.prototype.set_mail = adapter_katk_net__people_set_mail;
//
// accessor is adapter_katk_net__people.prototype.get_name
// element get for _name
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for _name
// setter function is is adapter_katk_net__people.prototype.set_name
//
function adapter_katk_net__people_get_name() { return this.__name;}

adapter_katk_net__people.prototype.get_name = adapter_katk_net__people_get_name;

function adapter_katk_net__people_set_name(value) { this.__name = value;}

adapter_katk_net__people.prototype.set_name = adapter_katk_net__people_set_name;
//
// accessor is adapter_katk_net__people.prototype.get_bookmarks
// element get for _bookmarks
// - element type is {http://www.w3.org/2001/XMLSchema}IDREF
// - required element
// - array
// - nillable
//
// element set for _bookmarks
// setter function is is adapter_katk_net__people.prototype.set_bookmarks
//
function adapter_katk_net__people_get_bookmarks() { return this.__bookmarks;}

adapter_katk_net__people.prototype.get_bookmarks = adapter_katk_net__people_get_bookmarks;

function adapter_katk_net__people_set_bookmarks(value) { this.__bookmarks = value;}

adapter_katk_net__people.prototype.set_bookmarks = adapter_katk_net__people_set_bookmarks;
//
// accessor is adapter_katk_net__people.prototype.getExternalResourceId
// element get for externalResourceId
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for externalResourceId
// setter function is is adapter_katk_net__people.prototype.setExternalResourceId
//
function adapter_katk_net__people_getExternalResourceId() { return this._externalResourceId;}

adapter_katk_net__people.prototype.getExternalResourceId = adapter_katk_net__people_getExternalResourceId;

function adapter_katk_net__people_setExternalResourceId(value) { this._externalResourceId = value;}

adapter_katk_net__people.prototype.setExternalResourceId = adapter_katk_net__people_setExternalResourceId;
//
// accessor is adapter_katk_net__people.prototype.getExternalResourceType
// element get for externalResourceType
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for externalResourceType
// setter function is is adapter_katk_net__people.prototype.setExternalResourceType
//
function adapter_katk_net__people_getExternalResourceType() { return this._externalResourceType;}

adapter_katk_net__people.prototype.getExternalResourceType = adapter_katk_net__people_getExternalResourceType;

function adapter_katk_net__people_setExternalResourceType(value) { this._externalResourceType = value;}

adapter_katk_net__people.prototype.setExternalResourceType = adapter_katk_net__people_setExternalResourceType;
//
// accessor is adapter_katk_net__people.prototype.getMail
// element get for mail
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for mail
// setter function is is adapter_katk_net__people.prototype.setMail
//
function adapter_katk_net__people_getMail() { return this._mail;}

adapter_katk_net__people.prototype.getMail = adapter_katk_net__people_getMail;

function adapter_katk_net__people_setMail(value) { this._mail = value;}

adapter_katk_net__people.prototype.setMail = adapter_katk_net__people_setMail;
//
// accessor is adapter_katk_net__people.prototype.getName
// element get for name
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for name
// setter function is is adapter_katk_net__people.prototype.setName
//
function adapter_katk_net__people_getName() { return this._name;}

adapter_katk_net__people.prototype.getName = adapter_katk_net__people_getName;

function adapter_katk_net__people_setName(value) { this._name = value;}

adapter_katk_net__people.prototype.setName = adapter_katk_net__people_setName;
//
// Serialize {http://adapter.katk.net/}people
//
function adapter_katk_net__people_serialize(cxfjsutils, elementName, extraNamespaces) {
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
     if (this.__id != null) {
      xml = xml + '<_id>';
      xml = xml + cxfjsutils.escapeXmlEntities(this.__id);
      xml = xml + '</_id>';
     }
    }
    // block for local variables
    {
     if (this.__party != null) {
      xml = xml + '<_party>';
      xml = xml + cxfjsutils.escapeXmlEntities(this.__party);
      xml = xml + '</_party>';
     }
    }
    // block for local variables
    {
     xml = xml + '<_date>';
     xml = xml + cxfjsutils.escapeXmlEntities(this.__date);
     xml = xml + '</_date>';
    }
    // block for local variables
    {
     if (this._group != null) {
      xml = xml + this._group.serialize(cxfjsutils, 'group', null);
     }
    }
    // block for local variables
    {
     if (this.__externalResourceType != null) {
      xml = xml + '<_externalResourceType>';
      xml = xml + cxfjsutils.escapeXmlEntities(this.__externalResourceType);
      xml = xml + '</_externalResourceType>';
     }
    }
    // block for local variables
    {
     if (this.__externalResourceId != null) {
      xml = xml + '<_externalResourceId>';
      xml = xml + cxfjsutils.escapeXmlEntities(this.__externalResourceId);
      xml = xml + '</_externalResourceId>';
     }
    }
    // block for local variables
    {
     if (this.__mail != null) {
      xml = xml + '<_mail>';
      xml = xml + cxfjsutils.escapeXmlEntities(this.__mail);
      xml = xml + '</_mail>';
     }
    }
    // block for local variables
    {
     if (this.__name != null) {
      xml = xml + '<_name>';
      xml = xml + cxfjsutils.escapeXmlEntities(this.__name);
      xml = xml + '</_name>';
     }
    }
    // block for local variables
    {
     if (this.__bookmarks != null) {
      for (var ax = 0;ax < this.__bookmarks.length;ax ++) {
       if (this.__bookmarks[ax] == null) {
        xml = xml + '<_bookmarks xsi:nil=\'true\'/>';
       } else {
        xml = xml + '<_bookmarks>';
        xml = xml + cxfjsutils.escapeXmlEntities(this.__bookmarks[ax]);
        xml = xml + '</_bookmarks>';
       }
      }
     }
    }
    // block for local variables
    {
     if (this._externalResourceId != null) {
      xml = xml + '<externalResourceId>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._externalResourceId);
      xml = xml + '</externalResourceId>';
     }
    }
    // block for local variables
    {
     if (this._externalResourceType != null) {
      xml = xml + '<externalResourceType>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._externalResourceType);
      xml = xml + '</externalResourceType>';
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
    // block for local variables
    {
     if (this._name != null) {
      xml = xml + '<name>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._name);
      xml = xml + '</name>';
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

adapter_katk_net__people.prototype.serialize = adapter_katk_net__people_serialize;

function adapter_katk_net__people_deserialize (cxfjsutils, element) {
    var newobject = new adapter_katk_net__people();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing _id');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', '_id')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.set_id(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing _party');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', '_party')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.set_party(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing _date');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = parseInt(value);
    }
    newobject.set_date(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing group');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'group')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = adapter_katk_net__party_deserialize(cxfjsutils, curElement);
     }
     newobject.setGroup(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing _externalResourceType');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', '_externalResourceType')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.set_externalResourceType(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing _externalResourceId');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', '_externalResourceId')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.set_externalResourceId(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing _mail');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', '_mail')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.set_mail(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing _name');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', '_name')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.set_name(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing _bookmarks');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', '_bookmarks')) {
     item = [];
     do  {
      var arrayItem = null;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       value = cxfjsutils.getNodeText(curElement);
       arrayItem = value;
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', '_bookmarks'));
     newobject.set_bookmarks(item);
     var item = null;
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing externalResourceId');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'externalResourceId')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setExternalResourceId(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing externalResourceType');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'externalResourceType')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setExternalResourceType(item);
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
    return newobject;
}

//
// Constructor for XML Schema item {http://adapter.katk.net/}saveDirectoryResponse
//
function adapter_katk_net__saveDirectoryResponse () {
    this.typeMarker = 'adapter_katk_net__saveDirectoryResponse';
    this._return = null;
}

//
// accessor is adapter_katk_net__saveDirectoryResponse.prototype.getReturn
// element get for return
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for return
// setter function is is adapter_katk_net__saveDirectoryResponse.prototype.setReturn
//
function adapter_katk_net__saveDirectoryResponse_getReturn() { return this._return;}

adapter_katk_net__saveDirectoryResponse.prototype.getReturn = adapter_katk_net__saveDirectoryResponse_getReturn;

function adapter_katk_net__saveDirectoryResponse_setReturn(value) { this._return = value;}

adapter_katk_net__saveDirectoryResponse.prototype.setReturn = adapter_katk_net__saveDirectoryResponse_setReturn;
//
// Serialize {http://adapter.katk.net/}saveDirectoryResponse
//
function adapter_katk_net__saveDirectoryResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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

adapter_katk_net__saveDirectoryResponse.prototype.serialize = adapter_katk_net__saveDirectoryResponse_serialize;

function adapter_katk_net__saveDirectoryResponse_deserialize (cxfjsutils, element) {
    var newobject = new adapter_katk_net__saveDirectoryResponse();
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
// Constructor for XML Schema item {http://adapter.katk.net/}party
//
function adapter_katk_net__party () {
    this.typeMarker = 'adapter_katk_net__party';
    this.__id = null;
    this.__party = null;
    this.__date = 0;
    this._group = null;
    this.__boss = null;
    this.__members = [];
    this.__admin = null;
    this.__children = [];
    this.__rwxrwxrwx = null;
}

//
// accessor is adapter_katk_net__party.prototype.get_id
// element get for _id
// - element type is {http://www.w3.org/2001/XMLSchema}ID
// - optional element
//
// element set for _id
// setter function is is adapter_katk_net__party.prototype.set_id
//
function adapter_katk_net__party_get_id() { return this.__id;}

adapter_katk_net__party.prototype.get_id = adapter_katk_net__party_get_id;

function adapter_katk_net__party_set_id(value) { this.__id = value;}

adapter_katk_net__party.prototype.set_id = adapter_katk_net__party_set_id;
//
// accessor is adapter_katk_net__party.prototype.get_party
// element get for _party
// - element type is {http://www.w3.org/2001/XMLSchema}IDREF
// - optional element
//
// element set for _party
// setter function is is adapter_katk_net__party.prototype.set_party
//
function adapter_katk_net__party_get_party() { return this.__party;}

adapter_katk_net__party.prototype.get_party = adapter_katk_net__party_get_party;

function adapter_katk_net__party_set_party(value) { this.__party = value;}

adapter_katk_net__party.prototype.set_party = adapter_katk_net__party_set_party;
//
// accessor is adapter_katk_net__party.prototype.get_date
// element get for _date
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
//
// element set for _date
// setter function is is adapter_katk_net__party.prototype.set_date
//
function adapter_katk_net__party_get_date() { return this.__date;}

adapter_katk_net__party.prototype.get_date = adapter_katk_net__party_get_date;

function adapter_katk_net__party_set_date(value) { this.__date = value;}

adapter_katk_net__party.prototype.set_date = adapter_katk_net__party_set_date;
//
// accessor is adapter_katk_net__party.prototype.getGroup
// element get for group
// - element type is {http://adapter.katk.net/}party
// - optional element
//
// element set for group
// setter function is is adapter_katk_net__party.prototype.setGroup
//
function adapter_katk_net__party_getGroup() { return this._group;}

adapter_katk_net__party.prototype.getGroup = adapter_katk_net__party_getGroup;

function adapter_katk_net__party_setGroup(value) { this._group = value;}

adapter_katk_net__party.prototype.setGroup = adapter_katk_net__party_setGroup;
//
// accessor is adapter_katk_net__party.prototype.get_boss
// element get for _boss
// - element type is {http://www.w3.org/2001/XMLSchema}IDREF
// - optional element
//
// element set for _boss
// setter function is is adapter_katk_net__party.prototype.set_boss
//
function adapter_katk_net__party_get_boss() { return this.__boss;}

adapter_katk_net__party.prototype.get_boss = adapter_katk_net__party_get_boss;

function adapter_katk_net__party_set_boss(value) { this.__boss = value;}

adapter_katk_net__party.prototype.set_boss = adapter_katk_net__party_set_boss;
//
// accessor is adapter_katk_net__party.prototype.get_members
// element get for _members
// - element type is {http://adapter.katk.net/}people
// - required element
// - array
//
// element set for _members
// setter function is is adapter_katk_net__party.prototype.set_members
//
function adapter_katk_net__party_get_members() { return this.__members;}

adapter_katk_net__party.prototype.get_members = adapter_katk_net__party_get_members;

function adapter_katk_net__party_set_members(value) { this.__members = value;}

adapter_katk_net__party.prototype.set_members = adapter_katk_net__party_set_members;
//
// accessor is adapter_katk_net__party.prototype.get_admin
// element get for _admin
// - element type is {http://www.w3.org/2001/XMLSchema}IDREF
// - optional element
//
// element set for _admin
// setter function is is adapter_katk_net__party.prototype.set_admin
//
function adapter_katk_net__party_get_admin() { return this.__admin;}

adapter_katk_net__party.prototype.get_admin = adapter_katk_net__party_get_admin;

function adapter_katk_net__party_set_admin(value) { this.__admin = value;}

adapter_katk_net__party.prototype.set_admin = adapter_katk_net__party_set_admin;
//
// accessor is adapter_katk_net__party.prototype.get_children
// element get for _children
// - element type is {http://adapter.katk.net/}party
// - required element
// - array
//
// element set for _children
// setter function is is adapter_katk_net__party.prototype.set_children
//
function adapter_katk_net__party_get_children() { return this.__children;}

adapter_katk_net__party.prototype.get_children = adapter_katk_net__party_get_children;

function adapter_katk_net__party_set_children(value) { this.__children = value;}

adapter_katk_net__party.prototype.set_children = adapter_katk_net__party_set_children;
//
// accessor is adapter_katk_net__party.prototype.get_rwxrwxrwx
// element get for _rwxrwxrwx
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for _rwxrwxrwx
// setter function is is adapter_katk_net__party.prototype.set_rwxrwxrwx
//
function adapter_katk_net__party_get_rwxrwxrwx() { return this.__rwxrwxrwx;}

adapter_katk_net__party.prototype.get_rwxrwxrwx = adapter_katk_net__party_get_rwxrwxrwx;

function adapter_katk_net__party_set_rwxrwxrwx(value) { this.__rwxrwxrwx = value;}

adapter_katk_net__party.prototype.set_rwxrwxrwx = adapter_katk_net__party_set_rwxrwxrwx;
//
// Serialize {http://adapter.katk.net/}party
//
function adapter_katk_net__party_serialize(cxfjsutils, elementName, extraNamespaces) {
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
     if (this.__id != null) {
      xml = xml + '<_id>';
      xml = xml + cxfjsutils.escapeXmlEntities(this.__id);
      xml = xml + '</_id>';
     }
    }
    // block for local variables
    {
     if (this.__party != null) {
      xml = xml + '<_party>';
      xml = xml + cxfjsutils.escapeXmlEntities(this.__party);
      xml = xml + '</_party>';
     }
    }
    // block for local variables
    {
     xml = xml + '<_date>';
     xml = xml + cxfjsutils.escapeXmlEntities(this.__date);
     xml = xml + '</_date>';
    }
    // block for local variables
    {
     if (this._group != null) {
      xml = xml + this._group.serialize(cxfjsutils, 'group', null);
     }
    }
    // block for local variables
    {
     if (this.__boss != null) {
      xml = xml + '<_boss>';
      xml = xml + cxfjsutils.escapeXmlEntities(this.__boss);
      xml = xml + '</_boss>';
     }
    }
    // block for local variables
    {
     if (this.__members != null) {
      for (var ax = 0;ax < this.__members.length;ax ++) {
       if (this.__members[ax] == null) {
        xml = xml + '<_members/>';
       } else {
        xml = xml + this.__members[ax].serialize(cxfjsutils, '_members', null);
       }
      }
     }
    }
    // block for local variables
    {
     if (this.__admin != null) {
      xml = xml + '<_admin>';
      xml = xml + cxfjsutils.escapeXmlEntities(this.__admin);
      xml = xml + '</_admin>';
     }
    }
    // block for local variables
    {
     if (this.__children != null) {
      for (var ax = 0;ax < this.__children.length;ax ++) {
       if (this.__children[ax] == null) {
        xml = xml + '<_children/>';
       } else {
        xml = xml + this.__children[ax].serialize(cxfjsutils, '_children', null);
       }
      }
     }
    }
    // block for local variables
    {
     if (this.__rwxrwxrwx != null) {
      xml = xml + '<_rwxrwxrwx>';
      xml = xml + cxfjsutils.escapeXmlEntities(this.__rwxrwxrwx);
      xml = xml + '</_rwxrwxrwx>';
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

adapter_katk_net__party.prototype.serialize = adapter_katk_net__party_serialize;

function adapter_katk_net__party_deserialize (cxfjsutils, element) {
    var newobject = new adapter_katk_net__party();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing _id');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', '_id')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.set_id(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing _party');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', '_party')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.set_party(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing _date');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = parseInt(value);
    }
    newobject.set_date(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing group');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'group')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = adapter_katk_net__party_deserialize(cxfjsutils, curElement);
     }
     newobject.setGroup(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing _boss');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', '_boss')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.set_boss(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing _members');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', '_members')) {
     item = [];
     do  {
      var arrayItem = null;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       arrayItem = adapter_katk_net__people_deserialize(cxfjsutils, curElement);
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', '_members'));
     newobject.set_members(item);
     var item = null;
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing _admin');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', '_admin')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.set_admin(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing _children');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', '_children')) {
     item = [];
     do  {
      var arrayItem = null;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       arrayItem = adapter_katk_net__party_deserialize(cxfjsutils, curElement);
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', '_children'));
     newobject.set_children(item);
     var item = null;
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing _rwxrwxrwx');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', '_rwxrwxrwx')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.set_rwxrwxrwx(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://adapter.katk.net/}removeExample
//
function adapter_katk_net__removeExample () {
    this.typeMarker = 'adapter_katk_net__removeExample';
    this._token = null;
    this._atomId = null;
    this._exampleId = null;
}

//
// accessor is adapter_katk_net__removeExample.prototype.getToken
// element get for token
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for token
// setter function is is adapter_katk_net__removeExample.prototype.setToken
//
function adapter_katk_net__removeExample_getToken() { return this._token;}

adapter_katk_net__removeExample.prototype.getToken = adapter_katk_net__removeExample_getToken;

function adapter_katk_net__removeExample_setToken(value) { this._token = value;}

adapter_katk_net__removeExample.prototype.setToken = adapter_katk_net__removeExample_setToken;
//
// accessor is adapter_katk_net__removeExample.prototype.getAtomId
// element get for atomId
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for atomId
// setter function is is adapter_katk_net__removeExample.prototype.setAtomId
//
function adapter_katk_net__removeExample_getAtomId() { return this._atomId;}

adapter_katk_net__removeExample.prototype.getAtomId = adapter_katk_net__removeExample_getAtomId;

function adapter_katk_net__removeExample_setAtomId(value) { this._atomId = value;}

adapter_katk_net__removeExample.prototype.setAtomId = adapter_katk_net__removeExample_setAtomId;
//
// accessor is adapter_katk_net__removeExample.prototype.getExampleId
// element get for exampleId
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for exampleId
// setter function is is adapter_katk_net__removeExample.prototype.setExampleId
//
function adapter_katk_net__removeExample_getExampleId() { return this._exampleId;}

adapter_katk_net__removeExample.prototype.getExampleId = adapter_katk_net__removeExample_getExampleId;

function adapter_katk_net__removeExample_setExampleId(value) { this._exampleId = value;}

adapter_katk_net__removeExample.prototype.setExampleId = adapter_katk_net__removeExample_setExampleId;
//
// Serialize {http://adapter.katk.net/}removeExample
//
function adapter_katk_net__removeExample_serialize(cxfjsutils, elementName, extraNamespaces) {
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
     if (this._token != null) {
      xml = xml + '<token>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._token);
      xml = xml + '</token>';
     }
    }
    // block for local variables
    {
     if (this._atomId != null) {
      xml = xml + '<atomId>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._atomId);
      xml = xml + '</atomId>';
     }
    }
    // block for local variables
    {
     if (this._exampleId != null) {
      xml = xml + '<exampleId>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._exampleId);
      xml = xml + '</exampleId>';
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

adapter_katk_net__removeExample.prototype.serialize = adapter_katk_net__removeExample_serialize;

function adapter_katk_net__removeExample_deserialize (cxfjsutils, element) {
    var newobject = new adapter_katk_net__removeExample();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing token');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'token')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setToken(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing atomId');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'atomId')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setAtomId(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing exampleId');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'exampleId')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setExampleId(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://adapter.katk.net/}saveRecette
//
function adapter_katk_net__saveRecette () {
    this.typeMarker = 'adapter_katk_net__saveRecette';
    this._token = null;
    this._atomId = null;
    this._recetteId = null;
}

//
// accessor is adapter_katk_net__saveRecette.prototype.getToken
// element get for token
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for token
// setter function is is adapter_katk_net__saveRecette.prototype.setToken
//
function adapter_katk_net__saveRecette_getToken() { return this._token;}

adapter_katk_net__saveRecette.prototype.getToken = adapter_katk_net__saveRecette_getToken;

function adapter_katk_net__saveRecette_setToken(value) { this._token = value;}

adapter_katk_net__saveRecette.prototype.setToken = adapter_katk_net__saveRecette_setToken;
//
// accessor is adapter_katk_net__saveRecette.prototype.getAtomId
// element get for atomId
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for atomId
// setter function is is adapter_katk_net__saveRecette.prototype.setAtomId
//
function adapter_katk_net__saveRecette_getAtomId() { return this._atomId;}

adapter_katk_net__saveRecette.prototype.getAtomId = adapter_katk_net__saveRecette_getAtomId;

function adapter_katk_net__saveRecette_setAtomId(value) { this._atomId = value;}

adapter_katk_net__saveRecette.prototype.setAtomId = adapter_katk_net__saveRecette_setAtomId;
//
// accessor is adapter_katk_net__saveRecette.prototype.getRecetteId
// element get for recetteId
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for recetteId
// setter function is is adapter_katk_net__saveRecette.prototype.setRecetteId
//
function adapter_katk_net__saveRecette_getRecetteId() { return this._recetteId;}

adapter_katk_net__saveRecette.prototype.getRecetteId = adapter_katk_net__saveRecette_getRecetteId;

function adapter_katk_net__saveRecette_setRecetteId(value) { this._recetteId = value;}

adapter_katk_net__saveRecette.prototype.setRecetteId = adapter_katk_net__saveRecette_setRecetteId;
//
// Serialize {http://adapter.katk.net/}saveRecette
//
function adapter_katk_net__saveRecette_serialize(cxfjsutils, elementName, extraNamespaces) {
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
     if (this._token != null) {
      xml = xml + '<token>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._token);
      xml = xml + '</token>';
     }
    }
    // block for local variables
    {
     if (this._atomId != null) {
      xml = xml + '<atomId>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._atomId);
      xml = xml + '</atomId>';
     }
    }
    // block for local variables
    {
     if (this._recetteId != null) {
      xml = xml + '<recetteId>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._recetteId);
      xml = xml + '</recetteId>';
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

adapter_katk_net__saveRecette.prototype.serialize = adapter_katk_net__saveRecette_serialize;

function adapter_katk_net__saveRecette_deserialize (cxfjsutils, element) {
    var newobject = new adapter_katk_net__saveRecette();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing token');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'token')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setToken(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing atomId');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'atomId')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setAtomId(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing recetteId');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'recetteId')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setRecetteId(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://adapter.katk.net/}saveObject
//
function adapter_katk_net__saveObject () {
    this.typeMarker = 'adapter_katk_net__saveObject';
    this._token = null;
    this._atomId = null;
    this._object = null;
}

//
// accessor is adapter_katk_net__saveObject.prototype.getToken
// element get for token
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for token
// setter function is is adapter_katk_net__saveObject.prototype.setToken
//
function adapter_katk_net__saveObject_getToken() { return this._token;}

adapter_katk_net__saveObject.prototype.getToken = adapter_katk_net__saveObject_getToken;

function adapter_katk_net__saveObject_setToken(value) { this._token = value;}

adapter_katk_net__saveObject.prototype.setToken = adapter_katk_net__saveObject_setToken;
//
// accessor is adapter_katk_net__saveObject.prototype.getAtomId
// element get for atomId
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for atomId
// setter function is is adapter_katk_net__saveObject.prototype.setAtomId
//
function adapter_katk_net__saveObject_getAtomId() { return this._atomId;}

adapter_katk_net__saveObject.prototype.getAtomId = adapter_katk_net__saveObject_getAtomId;

function adapter_katk_net__saveObject_setAtomId(value) { this._atomId = value;}

adapter_katk_net__saveObject.prototype.setAtomId = adapter_katk_net__saveObject_setAtomId;
//
// accessor is adapter_katk_net__saveObject.prototype.getObject
// element get for object
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for object
// setter function is is adapter_katk_net__saveObject.prototype.setObject
//
function adapter_katk_net__saveObject_getObject() { return this._object;}

adapter_katk_net__saveObject.prototype.getObject = adapter_katk_net__saveObject_getObject;

function adapter_katk_net__saveObject_setObject(value) { this._object = value;}

adapter_katk_net__saveObject.prototype.setObject = adapter_katk_net__saveObject_setObject;
//
// Serialize {http://adapter.katk.net/}saveObject
//
function adapter_katk_net__saveObject_serialize(cxfjsutils, elementName, extraNamespaces) {
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
     if (this._token != null) {
      xml = xml + '<token>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._token);
      xml = xml + '</token>';
     }
    }
    // block for local variables
    {
     if (this._atomId != null) {
      xml = xml + '<atomId>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._atomId);
      xml = xml + '</atomId>';
     }
    }
    // block for local variables
    {
     if (this._object != null) {
      xml = xml + '<object>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._object);
      xml = xml + '</object>';
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

adapter_katk_net__saveObject.prototype.serialize = adapter_katk_net__saveObject_serialize;

function adapter_katk_net__saveObject_deserialize (cxfjsutils, element) {
    var newobject = new adapter_katk_net__saveObject();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing token');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'token')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setToken(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing atomId');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'atomId')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setAtomId(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing object');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'object')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setObject(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://adapter.katk.net/}common
//
function adapter_katk_net__common () {
    this.typeMarker = 'adapter_katk_net__common';
    this.__id = null;
    this.__party = null;
    this.__date = 0;
    this._group = null;
}

//
// accessor is adapter_katk_net__common.prototype.get_id
// element get for _id
// - element type is {http://www.w3.org/2001/XMLSchema}ID
// - optional element
//
// element set for _id
// setter function is is adapter_katk_net__common.prototype.set_id
//
function adapter_katk_net__common_get_id() { return this.__id;}

adapter_katk_net__common.prototype.get_id = adapter_katk_net__common_get_id;

function adapter_katk_net__common_set_id(value) { this.__id = value;}

adapter_katk_net__common.prototype.set_id = adapter_katk_net__common_set_id;
//
// accessor is adapter_katk_net__common.prototype.get_party
// element get for _party
// - element type is {http://www.w3.org/2001/XMLSchema}IDREF
// - optional element
//
// element set for _party
// setter function is is adapter_katk_net__common.prototype.set_party
//
function adapter_katk_net__common_get_party() { return this.__party;}

adapter_katk_net__common.prototype.get_party = adapter_katk_net__common_get_party;

function adapter_katk_net__common_set_party(value) { this.__party = value;}

adapter_katk_net__common.prototype.set_party = adapter_katk_net__common_set_party;
//
// accessor is adapter_katk_net__common.prototype.get_date
// element get for _date
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
//
// element set for _date
// setter function is is adapter_katk_net__common.prototype.set_date
//
function adapter_katk_net__common_get_date() { return this.__date;}

adapter_katk_net__common.prototype.get_date = adapter_katk_net__common_get_date;

function adapter_katk_net__common_set_date(value) { this.__date = value;}

adapter_katk_net__common.prototype.set_date = adapter_katk_net__common_set_date;
//
// accessor is adapter_katk_net__common.prototype.getGroup
// element get for group
// - element type is {http://adapter.katk.net/}party
// - optional element
//
// element set for group
// setter function is is adapter_katk_net__common.prototype.setGroup
//
function adapter_katk_net__common_getGroup() { return this._group;}

adapter_katk_net__common.prototype.getGroup = adapter_katk_net__common_getGroup;

function adapter_katk_net__common_setGroup(value) { this._group = value;}

adapter_katk_net__common.prototype.setGroup = adapter_katk_net__common_setGroup;
//
// Serialize {http://adapter.katk.net/}common
//
function adapter_katk_net__common_serialize(cxfjsutils, elementName, extraNamespaces) {
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
     if (this.__id != null) {
      xml = xml + '<_id>';
      xml = xml + cxfjsutils.escapeXmlEntities(this.__id);
      xml = xml + '</_id>';
     }
    }
    // block for local variables
    {
     if (this.__party != null) {
      xml = xml + '<_party>';
      xml = xml + cxfjsutils.escapeXmlEntities(this.__party);
      xml = xml + '</_party>';
     }
    }
    // block for local variables
    {
     xml = xml + '<_date>';
     xml = xml + cxfjsutils.escapeXmlEntities(this.__date);
     xml = xml + '</_date>';
    }
    // block for local variables
    {
     if (this._group != null) {
      xml = xml + this._group.serialize(cxfjsutils, 'group', null);
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

adapter_katk_net__common.prototype.serialize = adapter_katk_net__common_serialize;

function adapter_katk_net__common_deserialize (cxfjsutils, element) {
    var newobject = new adapter_katk_net__common();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing _id');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', '_id')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.set_id(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing _party');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', '_party')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.set_party(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing _date');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = parseInt(value);
    }
    newobject.set_date(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing group');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'group')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = adapter_katk_net__party_deserialize(cxfjsutils, curElement);
     }
     newobject.setGroup(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://adapter.katk.net/}param
//
function adapter_katk_net__param () {
    this.typeMarker = 'adapter_katk_net__param';
    this.__id = null;
    this.__party = null;
    this.__date = 0;
    this._group = null;
    this.__name = null;
    this.__value = null;
    this._name = null;
    this._value = null;
}

//
// accessor is adapter_katk_net__param.prototype.get_id
// element get for _id
// - element type is {http://www.w3.org/2001/XMLSchema}ID
// - optional element
//
// element set for _id
// setter function is is adapter_katk_net__param.prototype.set_id
//
function adapter_katk_net__param_get_id() { return this.__id;}

adapter_katk_net__param.prototype.get_id = adapter_katk_net__param_get_id;

function adapter_katk_net__param_set_id(value) { this.__id = value;}

adapter_katk_net__param.prototype.set_id = adapter_katk_net__param_set_id;
//
// accessor is adapter_katk_net__param.prototype.get_party
// element get for _party
// - element type is {http://www.w3.org/2001/XMLSchema}IDREF
// - optional element
//
// element set for _party
// setter function is is adapter_katk_net__param.prototype.set_party
//
function adapter_katk_net__param_get_party() { return this.__party;}

adapter_katk_net__param.prototype.get_party = adapter_katk_net__param_get_party;

function adapter_katk_net__param_set_party(value) { this.__party = value;}

adapter_katk_net__param.prototype.set_party = adapter_katk_net__param_set_party;
//
// accessor is adapter_katk_net__param.prototype.get_date
// element get for _date
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
//
// element set for _date
// setter function is is adapter_katk_net__param.prototype.set_date
//
function adapter_katk_net__param_get_date() { return this.__date;}

adapter_katk_net__param.prototype.get_date = adapter_katk_net__param_get_date;

function adapter_katk_net__param_set_date(value) { this.__date = value;}

adapter_katk_net__param.prototype.set_date = adapter_katk_net__param_set_date;
//
// accessor is adapter_katk_net__param.prototype.getGroup
// element get for group
// - element type is {http://adapter.katk.net/}party
// - optional element
//
// element set for group
// setter function is is adapter_katk_net__param.prototype.setGroup
//
function adapter_katk_net__param_getGroup() { return this._group;}

adapter_katk_net__param.prototype.getGroup = adapter_katk_net__param_getGroup;

function adapter_katk_net__param_setGroup(value) { this._group = value;}

adapter_katk_net__param.prototype.setGroup = adapter_katk_net__param_setGroup;
//
// accessor is adapter_katk_net__param.prototype.get_name
// element get for _name
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for _name
// setter function is is adapter_katk_net__param.prototype.set_name
//
function adapter_katk_net__param_get_name() { return this.__name;}

adapter_katk_net__param.prototype.get_name = adapter_katk_net__param_get_name;

function adapter_katk_net__param_set_name(value) { this.__name = value;}

adapter_katk_net__param.prototype.set_name = adapter_katk_net__param_set_name;
//
// accessor is adapter_katk_net__param.prototype.get_value
// element get for _value
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for _value
// setter function is is adapter_katk_net__param.prototype.set_value
//
function adapter_katk_net__param_get_value() { return this.__value;}

adapter_katk_net__param.prototype.get_value = adapter_katk_net__param_get_value;

function adapter_katk_net__param_set_value(value) { this.__value = value;}

adapter_katk_net__param.prototype.set_value = adapter_katk_net__param_set_value;
//
// accessor is adapter_katk_net__param.prototype.getName
// element get for name
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for name
// setter function is is adapter_katk_net__param.prototype.setName
//
function adapter_katk_net__param_getName() { return this._name;}

adapter_katk_net__param.prototype.getName = adapter_katk_net__param_getName;

function adapter_katk_net__param_setName(value) { this._name = value;}

adapter_katk_net__param.prototype.setName = adapter_katk_net__param_setName;
//
// accessor is adapter_katk_net__param.prototype.getValue
// element get for value
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for value
// setter function is is adapter_katk_net__param.prototype.setValue
//
function adapter_katk_net__param_getValue() { return this._value;}

adapter_katk_net__param.prototype.getValue = adapter_katk_net__param_getValue;

function adapter_katk_net__param_setValue(value) { this._value = value;}

adapter_katk_net__param.prototype.setValue = adapter_katk_net__param_setValue;
//
// Serialize {http://adapter.katk.net/}param
//
function adapter_katk_net__param_serialize(cxfjsutils, elementName, extraNamespaces) {
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
     if (this.__id != null) {
      xml = xml + '<_id>';
      xml = xml + cxfjsutils.escapeXmlEntities(this.__id);
      xml = xml + '</_id>';
     }
    }
    // block for local variables
    {
     if (this.__party != null) {
      xml = xml + '<_party>';
      xml = xml + cxfjsutils.escapeXmlEntities(this.__party);
      xml = xml + '</_party>';
     }
    }
    // block for local variables
    {
     xml = xml + '<_date>';
     xml = xml + cxfjsutils.escapeXmlEntities(this.__date);
     xml = xml + '</_date>';
    }
    // block for local variables
    {
     if (this._group != null) {
      xml = xml + this._group.serialize(cxfjsutils, 'group', null);
     }
    }
    // block for local variables
    {
     if (this.__name != null) {
      xml = xml + '<_name>';
      xml = xml + cxfjsutils.escapeXmlEntities(this.__name);
      xml = xml + '</_name>';
     }
    }
    // block for local variables
    {
     if (this.__value != null) {
      xml = xml + '<_value>';
      xml = xml + cxfjsutils.escapeXmlEntities(this.__value);
      xml = xml + '</_value>';
     }
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
     if (this._value != null) {
      xml = xml + '<value>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._value);
      xml = xml + '</value>';
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

adapter_katk_net__param.prototype.serialize = adapter_katk_net__param_serialize;

function adapter_katk_net__param_deserialize (cxfjsutils, element) {
    var newobject = new adapter_katk_net__param();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing _id');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', '_id')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.set_id(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing _party');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', '_party')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.set_party(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing _date');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = parseInt(value);
    }
    newobject.set_date(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing group');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'group')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = adapter_katk_net__party_deserialize(cxfjsutils, curElement);
     }
     newobject.setGroup(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing _name');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', '_name')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.set_name(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing _value');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', '_value')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.set_value(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
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
    cxfjsutils.trace('processing value');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'value')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setValue(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://adapter.katk.net/}addExampleResponse
//
function adapter_katk_net__addExampleResponse () {
    this.typeMarker = 'adapter_katk_net__addExampleResponse';
}

//
// Serialize {http://adapter.katk.net/}addExampleResponse
//
function adapter_katk_net__addExampleResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

adapter_katk_net__addExampleResponse.prototype.serialize = adapter_katk_net__addExampleResponse_serialize;

function adapter_katk_net__addExampleResponse_deserialize (cxfjsutils, element) {
    var newobject = new adapter_katk_net__addExampleResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    return newobject;
}

//
// Constructor for XML Schema item {http://adapter.katk.net/}save
//
function adapter_katk_net__save () {
    this.typeMarker = 'adapter_katk_net__save';
    this._token = null;
    this._atomId = null;
    this._name = null;
    this._description = null;
    this._resume = null;
    this._verbe = null;
    this._object = null;
    this._branchId = null;
    this._directory = null;
    this._eventQueue = null;
    this._recetteId = null;
}

//
// accessor is adapter_katk_net__save.prototype.getToken
// element get for token
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for token
// setter function is is adapter_katk_net__save.prototype.setToken
//
function adapter_katk_net__save_getToken() { return this._token;}

adapter_katk_net__save.prototype.getToken = adapter_katk_net__save_getToken;

function adapter_katk_net__save_setToken(value) { this._token = value;}

adapter_katk_net__save.prototype.setToken = adapter_katk_net__save_setToken;
//
// accessor is adapter_katk_net__save.prototype.getAtomId
// element get for atomId
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for atomId
// setter function is is adapter_katk_net__save.prototype.setAtomId
//
function adapter_katk_net__save_getAtomId() { return this._atomId;}

adapter_katk_net__save.prototype.getAtomId = adapter_katk_net__save_getAtomId;

function adapter_katk_net__save_setAtomId(value) { this._atomId = value;}

adapter_katk_net__save.prototype.setAtomId = adapter_katk_net__save_setAtomId;
//
// accessor is adapter_katk_net__save.prototype.getName
// element get for name
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for name
// setter function is is adapter_katk_net__save.prototype.setName
//
function adapter_katk_net__save_getName() { return this._name;}

adapter_katk_net__save.prototype.getName = adapter_katk_net__save_getName;

function adapter_katk_net__save_setName(value) { this._name = value;}

adapter_katk_net__save.prototype.setName = adapter_katk_net__save_setName;
//
// accessor is adapter_katk_net__save.prototype.getDescription
// element get for description
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for description
// setter function is is adapter_katk_net__save.prototype.setDescription
//
function adapter_katk_net__save_getDescription() { return this._description;}

adapter_katk_net__save.prototype.getDescription = adapter_katk_net__save_getDescription;

function adapter_katk_net__save_setDescription(value) { this._description = value;}

adapter_katk_net__save.prototype.setDescription = adapter_katk_net__save_setDescription;
//
// accessor is adapter_katk_net__save.prototype.getResume
// element get for resume
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for resume
// setter function is is adapter_katk_net__save.prototype.setResume
//
function adapter_katk_net__save_getResume() { return this._resume;}

adapter_katk_net__save.prototype.getResume = adapter_katk_net__save_getResume;

function adapter_katk_net__save_setResume(value) { this._resume = value;}

adapter_katk_net__save.prototype.setResume = adapter_katk_net__save_setResume;
//
// accessor is adapter_katk_net__save.prototype.getVerbe
// element get for verbe
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for verbe
// setter function is is adapter_katk_net__save.prototype.setVerbe
//
function adapter_katk_net__save_getVerbe() { return this._verbe;}

adapter_katk_net__save.prototype.getVerbe = adapter_katk_net__save_getVerbe;

function adapter_katk_net__save_setVerbe(value) { this._verbe = value;}

adapter_katk_net__save.prototype.setVerbe = adapter_katk_net__save_setVerbe;
//
// accessor is adapter_katk_net__save.prototype.getObject
// element get for object
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for object
// setter function is is adapter_katk_net__save.prototype.setObject
//
function adapter_katk_net__save_getObject() { return this._object;}

adapter_katk_net__save.prototype.getObject = adapter_katk_net__save_getObject;

function adapter_katk_net__save_setObject(value) { this._object = value;}

adapter_katk_net__save.prototype.setObject = adapter_katk_net__save_setObject;
//
// accessor is adapter_katk_net__save.prototype.getBranchId
// element get for branchId
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for branchId
// setter function is is adapter_katk_net__save.prototype.setBranchId
//
function adapter_katk_net__save_getBranchId() { return this._branchId;}

adapter_katk_net__save.prototype.getBranchId = adapter_katk_net__save_getBranchId;

function adapter_katk_net__save_setBranchId(value) { this._branchId = value;}

adapter_katk_net__save.prototype.setBranchId = adapter_katk_net__save_setBranchId;
//
// accessor is adapter_katk_net__save.prototype.getDirectory
// element get for directory
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for directory
// setter function is is adapter_katk_net__save.prototype.setDirectory
//
function adapter_katk_net__save_getDirectory() { return this._directory;}

adapter_katk_net__save.prototype.getDirectory = adapter_katk_net__save_getDirectory;

function adapter_katk_net__save_setDirectory(value) { this._directory = value;}

adapter_katk_net__save.prototype.setDirectory = adapter_katk_net__save_setDirectory;
//
// accessor is adapter_katk_net__save.prototype.getEventQueue
// element get for eventQueue
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for eventQueue
// setter function is is adapter_katk_net__save.prototype.setEventQueue
//
function adapter_katk_net__save_getEventQueue() { return this._eventQueue;}

adapter_katk_net__save.prototype.getEventQueue = adapter_katk_net__save_getEventQueue;

function adapter_katk_net__save_setEventQueue(value) { this._eventQueue = value;}

adapter_katk_net__save.prototype.setEventQueue = adapter_katk_net__save_setEventQueue;
//
// accessor is adapter_katk_net__save.prototype.getRecetteId
// element get for recetteId
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for recetteId
// setter function is is adapter_katk_net__save.prototype.setRecetteId
//
function adapter_katk_net__save_getRecetteId() { return this._recetteId;}

adapter_katk_net__save.prototype.getRecetteId = adapter_katk_net__save_getRecetteId;

function adapter_katk_net__save_setRecetteId(value) { this._recetteId = value;}

adapter_katk_net__save.prototype.setRecetteId = adapter_katk_net__save_setRecetteId;
//
// Serialize {http://adapter.katk.net/}save
//
function adapter_katk_net__save_serialize(cxfjsutils, elementName, extraNamespaces) {
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
     if (this._token != null) {
      xml = xml + '<token>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._token);
      xml = xml + '</token>';
     }
    }
    // block for local variables
    {
     if (this._atomId != null) {
      xml = xml + '<atomId>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._atomId);
      xml = xml + '</atomId>';
     }
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
     if (this._description != null) {
      xml = xml + '<description>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._description);
      xml = xml + '</description>';
     }
    }
    // block for local variables
    {
     if (this._resume != null) {
      xml = xml + '<resume>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._resume);
      xml = xml + '</resume>';
     }
    }
    // block for local variables
    {
     if (this._verbe != null) {
      xml = xml + '<verbe>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._verbe);
      xml = xml + '</verbe>';
     }
    }
    // block for local variables
    {
     if (this._object != null) {
      xml = xml + '<object>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._object);
      xml = xml + '</object>';
     }
    }
    // block for local variables
    {
     if (this._branchId != null) {
      xml = xml + '<branchId>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._branchId);
      xml = xml + '</branchId>';
     }
    }
    // block for local variables
    {
     if (this._directory != null) {
      xml = xml + '<directory>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._directory);
      xml = xml + '</directory>';
     }
    }
    // block for local variables
    {
     if (this._eventQueue != null) {
      xml = xml + '<eventQueue>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._eventQueue);
      xml = xml + '</eventQueue>';
     }
    }
    // block for local variables
    {
     if (this._recetteId != null) {
      xml = xml + '<recetteId>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._recetteId);
      xml = xml + '</recetteId>';
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

adapter_katk_net__save.prototype.serialize = adapter_katk_net__save_serialize;

function adapter_katk_net__save_deserialize (cxfjsutils, element) {
    var newobject = new adapter_katk_net__save();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing token');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'token')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setToken(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing atomId');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'atomId')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setAtomId(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
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
    cxfjsutils.trace('processing description');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'description')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setDescription(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing resume');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'resume')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setResume(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing verbe');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'verbe')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setVerbe(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing object');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'object')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setObject(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing branchId');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'branchId')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setBranchId(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing directory');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'directory')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setDirectory(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing eventQueue');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'eventQueue')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setEventQueue(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing recetteId');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'recetteId')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setRecetteId(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://adapter.katk.net/}startByNameResponse
//
function adapter_katk_net__startByNameResponse () {
    this.typeMarker = 'adapter_katk_net__startByNameResponse';
    this._return = null;
}

//
// accessor is adapter_katk_net__startByNameResponse.prototype.getReturn
// element get for return
// - element type is {http://adapter.katk.net/}example
// - optional element
//
// element set for return
// setter function is is adapter_katk_net__startByNameResponse.prototype.setReturn
//
function adapter_katk_net__startByNameResponse_getReturn() { return this._return;}

adapter_katk_net__startByNameResponse.prototype.getReturn = adapter_katk_net__startByNameResponse_getReturn;

function adapter_katk_net__startByNameResponse_setReturn(value) { this._return = value;}

adapter_katk_net__startByNameResponse.prototype.setReturn = adapter_katk_net__startByNameResponse_setReturn;
//
// Serialize {http://adapter.katk.net/}startByNameResponse
//
function adapter_katk_net__startByNameResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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
      xml = xml + this._return.serialize(cxfjsutils, 'return', null);
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

adapter_katk_net__startByNameResponse.prototype.serialize = adapter_katk_net__startByNameResponse_serialize;

function adapter_katk_net__startByNameResponse_deserialize (cxfjsutils, element) {
    var newobject = new adapter_katk_net__startByNameResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing return');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'return')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = adapter_katk_net__example_deserialize(cxfjsutils, curElement);
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
// Constructor for XML Schema item {http://adapter.katk.net/}startByName
//
function adapter_katk_net__startByName () {
    this.typeMarker = 'adapter_katk_net__startByName';
    this._token = null;
    this._name = null;
}

//
// accessor is adapter_katk_net__startByName.prototype.getToken
// element get for token
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for token
// setter function is is adapter_katk_net__startByName.prototype.setToken
//
function adapter_katk_net__startByName_getToken() { return this._token;}

adapter_katk_net__startByName.prototype.getToken = adapter_katk_net__startByName_getToken;

function adapter_katk_net__startByName_setToken(value) { this._token = value;}

adapter_katk_net__startByName.prototype.setToken = adapter_katk_net__startByName_setToken;
//
// accessor is adapter_katk_net__startByName.prototype.getName
// element get for name
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for name
// setter function is is adapter_katk_net__startByName.prototype.setName
//
function adapter_katk_net__startByName_getName() { return this._name;}

adapter_katk_net__startByName.prototype.getName = adapter_katk_net__startByName_getName;

function adapter_katk_net__startByName_setName(value) { this._name = value;}

adapter_katk_net__startByName.prototype.setName = adapter_katk_net__startByName_setName;
//
// Serialize {http://adapter.katk.net/}startByName
//
function adapter_katk_net__startByName_serialize(cxfjsutils, elementName, extraNamespaces) {
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
     if (this._token != null) {
      xml = xml + '<token>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._token);
      xml = xml + '</token>';
     }
    }
    // block for local variables
    {
     if (this._name != null) {
      xml = xml + '<name>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._name);
      xml = xml + '</name>';
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

adapter_katk_net__startByName.prototype.serialize = adapter_katk_net__startByName_serialize;

function adapter_katk_net__startByName_deserialize (cxfjsutils, element) {
    var newobject = new adapter_katk_net__startByName();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing token');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'token')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setToken(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
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
    return newobject;
}

//
// Constructor for XML Schema item {http://adapter.katk.net/}atom
//
function adapter_katk_net__atom () {
    this.typeMarker = 'adapter_katk_net__atom';
    this.__id = null;
    this.__party = null;
    this.__date = 0;
    this._group = null;
    this.__name = null;
    this.__verbe = null;
    this.__object = null;
    this.__abstract = null;
    this.__description = null;
    this.__branch = null;
    this.__recette = null;
    this.__examples = [];
    this.__directory = null;
    this.__eventQueue = null;
    this.__version = 0;
    this.__level = 0;
}

//
// accessor is adapter_katk_net__atom.prototype.get_id
// element get for _id
// - element type is {http://www.w3.org/2001/XMLSchema}ID
// - optional element
//
// element set for _id
// setter function is is adapter_katk_net__atom.prototype.set_id
//
function adapter_katk_net__atom_get_id() { return this.__id;}

adapter_katk_net__atom.prototype.get_id = adapter_katk_net__atom_get_id;

function adapter_katk_net__atom_set_id(value) { this.__id = value;}

adapter_katk_net__atom.prototype.set_id = adapter_katk_net__atom_set_id;
//
// accessor is adapter_katk_net__atom.prototype.get_party
// element get for _party
// - element type is {http://www.w3.org/2001/XMLSchema}IDREF
// - optional element
//
// element set for _party
// setter function is is adapter_katk_net__atom.prototype.set_party
//
function adapter_katk_net__atom_get_party() { return this.__party;}

adapter_katk_net__atom.prototype.get_party = adapter_katk_net__atom_get_party;

function adapter_katk_net__atom_set_party(value) { this.__party = value;}

adapter_katk_net__atom.prototype.set_party = adapter_katk_net__atom_set_party;
//
// accessor is adapter_katk_net__atom.prototype.get_date
// element get for _date
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
//
// element set for _date
// setter function is is adapter_katk_net__atom.prototype.set_date
//
function adapter_katk_net__atom_get_date() { return this.__date;}

adapter_katk_net__atom.prototype.get_date = adapter_katk_net__atom_get_date;

function adapter_katk_net__atom_set_date(value) { this.__date = value;}

adapter_katk_net__atom.prototype.set_date = adapter_katk_net__atom_set_date;
//
// accessor is adapter_katk_net__atom.prototype.getGroup
// element get for group
// - element type is {http://adapter.katk.net/}party
// - optional element
//
// element set for group
// setter function is is adapter_katk_net__atom.prototype.setGroup
//
function adapter_katk_net__atom_getGroup() { return this._group;}

adapter_katk_net__atom.prototype.getGroup = adapter_katk_net__atom_getGroup;

function adapter_katk_net__atom_setGroup(value) { this._group = value;}

adapter_katk_net__atom.prototype.setGroup = adapter_katk_net__atom_setGroup;
//
// accessor is adapter_katk_net__atom.prototype.get_name
// element get for _name
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for _name
// setter function is is adapter_katk_net__atom.prototype.set_name
//
function adapter_katk_net__atom_get_name() { return this.__name;}

adapter_katk_net__atom.prototype.get_name = adapter_katk_net__atom_get_name;

function adapter_katk_net__atom_set_name(value) { this.__name = value;}

adapter_katk_net__atom.prototype.set_name = adapter_katk_net__atom_set_name;
//
// accessor is adapter_katk_net__atom.prototype.get_verbe
// element get for _verbe
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for _verbe
// setter function is is adapter_katk_net__atom.prototype.set_verbe
//
function adapter_katk_net__atom_get_verbe() { return this.__verbe;}

adapter_katk_net__atom.prototype.get_verbe = adapter_katk_net__atom_get_verbe;

function adapter_katk_net__atom_set_verbe(value) { this.__verbe = value;}

adapter_katk_net__atom.prototype.set_verbe = adapter_katk_net__atom_set_verbe;
//
// accessor is adapter_katk_net__atom.prototype.get_object
// element get for _object
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for _object
// setter function is is adapter_katk_net__atom.prototype.set_object
//
function adapter_katk_net__atom_get_object() { return this.__object;}

adapter_katk_net__atom.prototype.get_object = adapter_katk_net__atom_get_object;

function adapter_katk_net__atom_set_object(value) { this.__object = value;}

adapter_katk_net__atom.prototype.set_object = adapter_katk_net__atom_set_object;
//
// accessor is adapter_katk_net__atom.prototype.get_abstract
// element get for _abstract
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for _abstract
// setter function is is adapter_katk_net__atom.prototype.set_abstract
//
function adapter_katk_net__atom_get_abstract() { return this.__abstract;}

adapter_katk_net__atom.prototype.get_abstract = adapter_katk_net__atom_get_abstract;

function adapter_katk_net__atom_set_abstract(value) { this.__abstract = value;}

adapter_katk_net__atom.prototype.set_abstract = adapter_katk_net__atom_set_abstract;
//
// accessor is adapter_katk_net__atom.prototype.get_description
// element get for _description
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for _description
// setter function is is adapter_katk_net__atom.prototype.set_description
//
function adapter_katk_net__atom_get_description() { return this.__description;}

adapter_katk_net__atom.prototype.get_description = adapter_katk_net__atom_get_description;

function adapter_katk_net__atom_set_description(value) { this.__description = value;}

adapter_katk_net__atom.prototype.set_description = adapter_katk_net__atom_set_description;
//
// accessor is adapter_katk_net__atom.prototype.get_branch
// element get for _branch
// - element type is {http://www.w3.org/2001/XMLSchema}IDREF
// - optional element
//
// element set for _branch
// setter function is is adapter_katk_net__atom.prototype.set_branch
//
function adapter_katk_net__atom_get_branch() { return this.__branch;}

adapter_katk_net__atom.prototype.get_branch = adapter_katk_net__atom_get_branch;

function adapter_katk_net__atom_set_branch(value) { this.__branch = value;}

adapter_katk_net__atom.prototype.set_branch = adapter_katk_net__atom_set_branch;
//
// accessor is adapter_katk_net__atom.prototype.get_recette
// element get for _recette
// - element type is {http://www.w3.org/2001/XMLSchema}IDREF
// - optional element
//
// element set for _recette
// setter function is is adapter_katk_net__atom.prototype.set_recette
//
function adapter_katk_net__atom_get_recette() { return this.__recette;}

adapter_katk_net__atom.prototype.get_recette = adapter_katk_net__atom_get_recette;

function adapter_katk_net__atom_set_recette(value) { this.__recette = value;}

adapter_katk_net__atom.prototype.set_recette = adapter_katk_net__atom_set_recette;
//
// accessor is adapter_katk_net__atom.prototype.get_examples
// element get for _examples
// - element type is {http://www.w3.org/2001/XMLSchema}IDREF
// - required element
// - array
// - nillable
//
// element set for _examples
// setter function is is adapter_katk_net__atom.prototype.set_examples
//
function adapter_katk_net__atom_get_examples() { return this.__examples;}

adapter_katk_net__atom.prototype.get_examples = adapter_katk_net__atom_get_examples;

function adapter_katk_net__atom_set_examples(value) { this.__examples = value;}

adapter_katk_net__atom.prototype.set_examples = adapter_katk_net__atom_set_examples;
//
// accessor is adapter_katk_net__atom.prototype.get_directory
// element get for _directory
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for _directory
// setter function is is adapter_katk_net__atom.prototype.set_directory
//
function adapter_katk_net__atom_get_directory() { return this.__directory;}

adapter_katk_net__atom.prototype.get_directory = adapter_katk_net__atom_get_directory;

function adapter_katk_net__atom_set_directory(value) { this.__directory = value;}

adapter_katk_net__atom.prototype.set_directory = adapter_katk_net__atom_set_directory;
//
// accessor is adapter_katk_net__atom.prototype.get_eventQueue
// element get for _eventQueue
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for _eventQueue
// setter function is is adapter_katk_net__atom.prototype.set_eventQueue
//
function adapter_katk_net__atom_get_eventQueue() { return this.__eventQueue;}

adapter_katk_net__atom.prototype.get_eventQueue = adapter_katk_net__atom_get_eventQueue;

function adapter_katk_net__atom_set_eventQueue(value) { this.__eventQueue = value;}

adapter_katk_net__atom.prototype.set_eventQueue = adapter_katk_net__atom_set_eventQueue;
//
// accessor is adapter_katk_net__atom.prototype.get_version
// element get for _version
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
//
// element set for _version
// setter function is is adapter_katk_net__atom.prototype.set_version
//
function adapter_katk_net__atom_get_version() { return this.__version;}

adapter_katk_net__atom.prototype.get_version = adapter_katk_net__atom_get_version;

function adapter_katk_net__atom_set_version(value) { this.__version = value;}

adapter_katk_net__atom.prototype.set_version = adapter_katk_net__atom_set_version;
//
// accessor is adapter_katk_net__atom.prototype.get_level
// element get for _level
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
//
// element set for _level
// setter function is is adapter_katk_net__atom.prototype.set_level
//
function adapter_katk_net__atom_get_level() { return this.__level;}

adapter_katk_net__atom.prototype.get_level = adapter_katk_net__atom_get_level;

function adapter_katk_net__atom_set_level(value) { this.__level = value;}

adapter_katk_net__atom.prototype.set_level = adapter_katk_net__atom_set_level;
//
// Serialize {http://adapter.katk.net/}atom
//
function adapter_katk_net__atom_serialize(cxfjsutils, elementName, extraNamespaces) {
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
     if (this.__id != null) {
      xml = xml + '<_id>';
      xml = xml + cxfjsutils.escapeXmlEntities(this.__id);
      xml = xml + '</_id>';
     }
    }
    // block for local variables
    {
     if (this.__party != null) {
      xml = xml + '<_party>';
      xml = xml + cxfjsutils.escapeXmlEntities(this.__party);
      xml = xml + '</_party>';
     }
    }
    // block for local variables
    {
     xml = xml + '<_date>';
     xml = xml + cxfjsutils.escapeXmlEntities(this.__date);
     xml = xml + '</_date>';
    }
    // block for local variables
    {
     if (this._group != null) {
      xml = xml + this._group.serialize(cxfjsutils, 'group', null);
     }
    }
    // block for local variables
    {
     if (this.__name != null) {
      xml = xml + '<_name>';
      xml = xml + cxfjsutils.escapeXmlEntities(this.__name);
      xml = xml + '</_name>';
     }
    }
    // block for local variables
    {
     if (this.__verbe != null) {
      xml = xml + '<_verbe>';
      xml = xml + cxfjsutils.escapeXmlEntities(this.__verbe);
      xml = xml + '</_verbe>';
     }
    }
    // block for local variables
    {
     if (this.__object != null) {
      xml = xml + '<_object>';
      xml = xml + cxfjsutils.escapeXmlEntities(this.__object);
      xml = xml + '</_object>';
     }
    }
    // block for local variables
    {
     if (this.__abstract != null) {
      xml = xml + '<_abstract>';
      xml = xml + cxfjsutils.escapeXmlEntities(this.__abstract);
      xml = xml + '</_abstract>';
     }
    }
    // block for local variables
    {
     if (this.__description != null) {
      xml = xml + '<_description>';
      xml = xml + cxfjsutils.escapeXmlEntities(this.__description);
      xml = xml + '</_description>';
     }
    }
    // block for local variables
    {
     if (this.__branch != null) {
      xml = xml + '<_branch>';
      xml = xml + cxfjsutils.escapeXmlEntities(this.__branch);
      xml = xml + '</_branch>';
     }
    }
    // block for local variables
    {
     if (this.__recette != null) {
      xml = xml + '<_recette>';
      xml = xml + cxfjsutils.escapeXmlEntities(this.__recette);
      xml = xml + '</_recette>';
     }
    }
    // block for local variables
    {
     if (this.__examples != null) {
      for (var ax = 0;ax < this.__examples.length;ax ++) {
       if (this.__examples[ax] == null) {
        xml = xml + '<_examples xsi:nil=\'true\'/>';
       } else {
        xml = xml + '<_examples>';
        xml = xml + cxfjsutils.escapeXmlEntities(this.__examples[ax]);
        xml = xml + '</_examples>';
       }
      }
     }
    }
    // block for local variables
    {
     if (this.__directory != null) {
      xml = xml + '<_directory>';
      xml = xml + cxfjsutils.escapeXmlEntities(this.__directory);
      xml = xml + '</_directory>';
     }
    }
    // block for local variables
    {
     if (this.__eventQueue != null) {
      xml = xml + '<_eventQueue>';
      xml = xml + cxfjsutils.escapeXmlEntities(this.__eventQueue);
      xml = xml + '</_eventQueue>';
     }
    }
    // block for local variables
    {
     xml = xml + '<_version>';
     xml = xml + cxfjsutils.escapeXmlEntities(this.__version);
     xml = xml + '</_version>';
    }
    // block for local variables
    {
     xml = xml + '<_level>';
     xml = xml + cxfjsutils.escapeXmlEntities(this.__level);
     xml = xml + '</_level>';
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

adapter_katk_net__atom.prototype.serialize = adapter_katk_net__atom_serialize;

function adapter_katk_net__atom_deserialize (cxfjsutils, element) {
    var newobject = new adapter_katk_net__atom();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing _id');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', '_id')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.set_id(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing _party');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', '_party')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.set_party(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing _date');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = parseInt(value);
    }
    newobject.set_date(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing group');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'group')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = adapter_katk_net__party_deserialize(cxfjsutils, curElement);
     }
     newobject.setGroup(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing _name');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', '_name')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.set_name(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing _verbe');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', '_verbe')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.set_verbe(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing _object');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', '_object')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.set_object(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing _abstract');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', '_abstract')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.set_abstract(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing _description');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', '_description')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.set_description(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing _branch');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', '_branch')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.set_branch(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing _recette');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', '_recette')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.set_recette(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing _examples');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', '_examples')) {
     item = [];
     do  {
      var arrayItem = null;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       value = cxfjsutils.getNodeText(curElement);
       arrayItem = value;
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', '_examples'));
     newobject.set_examples(item);
     var item = null;
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing _directory');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', '_directory')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.set_directory(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing _eventQueue');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', '_eventQueue')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.set_eventQueue(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing _version');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = parseInt(value);
    }
    newobject.set_version(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing _level');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = parseInt(value);
    }
    newobject.set_level(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://adapter.katk.net/}getAtomResponse
//
function adapter_katk_net__getAtomResponse () {
    this.typeMarker = 'adapter_katk_net__getAtomResponse';
    this._return = null;
}

//
// accessor is adapter_katk_net__getAtomResponse.prototype.getReturn
// element get for return
// - element type is {http://adapter.katk.net/}atom
// - optional element
//
// element set for return
// setter function is is adapter_katk_net__getAtomResponse.prototype.setReturn
//
function adapter_katk_net__getAtomResponse_getReturn() { return this._return;}

adapter_katk_net__getAtomResponse.prototype.getReturn = adapter_katk_net__getAtomResponse_getReturn;

function adapter_katk_net__getAtomResponse_setReturn(value) { this._return = value;}

adapter_katk_net__getAtomResponse.prototype.setReturn = adapter_katk_net__getAtomResponse_setReturn;
//
// Serialize {http://adapter.katk.net/}getAtomResponse
//
function adapter_katk_net__getAtomResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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
      xml = xml + this._return.serialize(cxfjsutils, 'return', null);
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

adapter_katk_net__getAtomResponse.prototype.serialize = adapter_katk_net__getAtomResponse_serialize;

function adapter_katk_net__getAtomResponse_deserialize (cxfjsutils, element) {
    var newobject = new adapter_katk_net__getAtomResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing return');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'return')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = adapter_katk_net__atom_deserialize(cxfjsutils, curElement);
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
// Constructor for XML Schema item {http://adapter.katk.net/}saveDescription
//
function adapter_katk_net__saveDescription () {
    this.typeMarker = 'adapter_katk_net__saveDescription';
    this._token = null;
    this._atomId = null;
    this._description = null;
}

//
// accessor is adapter_katk_net__saveDescription.prototype.getToken
// element get for token
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for token
// setter function is is adapter_katk_net__saveDescription.prototype.setToken
//
function adapter_katk_net__saveDescription_getToken() { return this._token;}

adapter_katk_net__saveDescription.prototype.getToken = adapter_katk_net__saveDescription_getToken;

function adapter_katk_net__saveDescription_setToken(value) { this._token = value;}

adapter_katk_net__saveDescription.prototype.setToken = adapter_katk_net__saveDescription_setToken;
//
// accessor is adapter_katk_net__saveDescription.prototype.getAtomId
// element get for atomId
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for atomId
// setter function is is adapter_katk_net__saveDescription.prototype.setAtomId
//
function adapter_katk_net__saveDescription_getAtomId() { return this._atomId;}

adapter_katk_net__saveDescription.prototype.getAtomId = adapter_katk_net__saveDescription_getAtomId;

function adapter_katk_net__saveDescription_setAtomId(value) { this._atomId = value;}

adapter_katk_net__saveDescription.prototype.setAtomId = adapter_katk_net__saveDescription_setAtomId;
//
// accessor is adapter_katk_net__saveDescription.prototype.getDescription
// element get for description
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for description
// setter function is is adapter_katk_net__saveDescription.prototype.setDescription
//
function adapter_katk_net__saveDescription_getDescription() { return this._description;}

adapter_katk_net__saveDescription.prototype.getDescription = adapter_katk_net__saveDescription_getDescription;

function adapter_katk_net__saveDescription_setDescription(value) { this._description = value;}

adapter_katk_net__saveDescription.prototype.setDescription = adapter_katk_net__saveDescription_setDescription;
//
// Serialize {http://adapter.katk.net/}saveDescription
//
function adapter_katk_net__saveDescription_serialize(cxfjsutils, elementName, extraNamespaces) {
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
     if (this._token != null) {
      xml = xml + '<token>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._token);
      xml = xml + '</token>';
     }
    }
    // block for local variables
    {
     if (this._atomId != null) {
      xml = xml + '<atomId>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._atomId);
      xml = xml + '</atomId>';
     }
    }
    // block for local variables
    {
     if (this._description != null) {
      xml = xml + '<description>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._description);
      xml = xml + '</description>';
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

adapter_katk_net__saveDescription.prototype.serialize = adapter_katk_net__saveDescription_serialize;

function adapter_katk_net__saveDescription_deserialize (cxfjsutils, element) {
    var newobject = new adapter_katk_net__saveDescription();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing token');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'token')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setToken(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing atomId');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'atomId')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setAtomId(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing description');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'description')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setDescription(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://adapter.katk.net/}saveResponse
//
function adapter_katk_net__saveResponse () {
    this.typeMarker = 'adapter_katk_net__saveResponse';
    this._return = null;
}

//
// accessor is adapter_katk_net__saveResponse.prototype.getReturn
// element get for return
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for return
// setter function is is adapter_katk_net__saveResponse.prototype.setReturn
//
function adapter_katk_net__saveResponse_getReturn() { return this._return;}

adapter_katk_net__saveResponse.prototype.getReturn = adapter_katk_net__saveResponse_getReturn;

function adapter_katk_net__saveResponse_setReturn(value) { this._return = value;}

adapter_katk_net__saveResponse.prototype.setReturn = adapter_katk_net__saveResponse_setReturn;
//
// Serialize {http://adapter.katk.net/}saveResponse
//
function adapter_katk_net__saveResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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

adapter_katk_net__saveResponse.prototype.serialize = adapter_katk_net__saveResponse_serialize;

function adapter_katk_net__saveResponse_deserialize (cxfjsutils, element) {
    var newobject = new adapter_katk_net__saveResponse();
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
// Constructor for XML Schema item {http://adapter.katk.net/}saveObjectResponse
//
function adapter_katk_net__saveObjectResponse () {
    this.typeMarker = 'adapter_katk_net__saveObjectResponse';
    this._return = null;
}

//
// accessor is adapter_katk_net__saveObjectResponse.prototype.getReturn
// element get for return
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for return
// setter function is is adapter_katk_net__saveObjectResponse.prototype.setReturn
//
function adapter_katk_net__saveObjectResponse_getReturn() { return this._return;}

adapter_katk_net__saveObjectResponse.prototype.getReturn = adapter_katk_net__saveObjectResponse_getReturn;

function adapter_katk_net__saveObjectResponse_setReturn(value) { this._return = value;}

adapter_katk_net__saveObjectResponse.prototype.setReturn = adapter_katk_net__saveObjectResponse_setReturn;
//
// Serialize {http://adapter.katk.net/}saveObjectResponse
//
function adapter_katk_net__saveObjectResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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

adapter_katk_net__saveObjectResponse.prototype.serialize = adapter_katk_net__saveObjectResponse_serialize;

function adapter_katk_net__saveObjectResponse_deserialize (cxfjsutils, element) {
    var newobject = new adapter_katk_net__saveObjectResponse();
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
// Constructor for XML Schema item {http://adapter.katk.net/}startByIdResponse
//
function adapter_katk_net__startByIdResponse () {
    this.typeMarker = 'adapter_katk_net__startByIdResponse';
    this._return = null;
}

//
// accessor is adapter_katk_net__startByIdResponse.prototype.getReturn
// element get for return
// - element type is {http://adapter.katk.net/}example
// - optional element
//
// element set for return
// setter function is is adapter_katk_net__startByIdResponse.prototype.setReturn
//
function adapter_katk_net__startByIdResponse_getReturn() { return this._return;}

adapter_katk_net__startByIdResponse.prototype.getReturn = adapter_katk_net__startByIdResponse_getReturn;

function adapter_katk_net__startByIdResponse_setReturn(value) { this._return = value;}

adapter_katk_net__startByIdResponse.prototype.setReturn = adapter_katk_net__startByIdResponse_setReturn;
//
// Serialize {http://adapter.katk.net/}startByIdResponse
//
function adapter_katk_net__startByIdResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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
      xml = xml + this._return.serialize(cxfjsutils, 'return', null);
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

adapter_katk_net__startByIdResponse.prototype.serialize = adapter_katk_net__startByIdResponse_serialize;

function adapter_katk_net__startByIdResponse_deserialize (cxfjsutils, element) {
    var newobject = new adapter_katk_net__startByIdResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing return');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'return')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = adapter_katk_net__example_deserialize(cxfjsutils, curElement);
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
// Constructor for XML Schema item {http://adapter.katk.net/}saveAbstract
//
function adapter_katk_net__saveAbstract () {
    this.typeMarker = 'adapter_katk_net__saveAbstract';
    this._token = null;
    this._atomId = null;
    this._resume = null;
}

//
// accessor is adapter_katk_net__saveAbstract.prototype.getToken
// element get for token
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for token
// setter function is is adapter_katk_net__saveAbstract.prototype.setToken
//
function adapter_katk_net__saveAbstract_getToken() { return this._token;}

adapter_katk_net__saveAbstract.prototype.getToken = adapter_katk_net__saveAbstract_getToken;

function adapter_katk_net__saveAbstract_setToken(value) { this._token = value;}

adapter_katk_net__saveAbstract.prototype.setToken = adapter_katk_net__saveAbstract_setToken;
//
// accessor is adapter_katk_net__saveAbstract.prototype.getAtomId
// element get for atomId
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for atomId
// setter function is is adapter_katk_net__saveAbstract.prototype.setAtomId
//
function adapter_katk_net__saveAbstract_getAtomId() { return this._atomId;}

adapter_katk_net__saveAbstract.prototype.getAtomId = adapter_katk_net__saveAbstract_getAtomId;

function adapter_katk_net__saveAbstract_setAtomId(value) { this._atomId = value;}

adapter_katk_net__saveAbstract.prototype.setAtomId = adapter_katk_net__saveAbstract_setAtomId;
//
// accessor is adapter_katk_net__saveAbstract.prototype.getResume
// element get for resume
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for resume
// setter function is is adapter_katk_net__saveAbstract.prototype.setResume
//
function adapter_katk_net__saveAbstract_getResume() { return this._resume;}

adapter_katk_net__saveAbstract.prototype.getResume = adapter_katk_net__saveAbstract_getResume;

function adapter_katk_net__saveAbstract_setResume(value) { this._resume = value;}

adapter_katk_net__saveAbstract.prototype.setResume = adapter_katk_net__saveAbstract_setResume;
//
// Serialize {http://adapter.katk.net/}saveAbstract
//
function adapter_katk_net__saveAbstract_serialize(cxfjsutils, elementName, extraNamespaces) {
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
     if (this._token != null) {
      xml = xml + '<token>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._token);
      xml = xml + '</token>';
     }
    }
    // block for local variables
    {
     if (this._atomId != null) {
      xml = xml + '<atomId>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._atomId);
      xml = xml + '</atomId>';
     }
    }
    // block for local variables
    {
     if (this._resume != null) {
      xml = xml + '<resume>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._resume);
      xml = xml + '</resume>';
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

adapter_katk_net__saveAbstract.prototype.serialize = adapter_katk_net__saveAbstract_serialize;

function adapter_katk_net__saveAbstract_deserialize (cxfjsutils, element) {
    var newobject = new adapter_katk_net__saveAbstract();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing token');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'token')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setToken(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing atomId');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'atomId')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setAtomId(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing resume');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'resume')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setResume(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://adapter.katk.net/}saveVerbe
//
function adapter_katk_net__saveVerbe () {
    this.typeMarker = 'adapter_katk_net__saveVerbe';
    this._token = null;
    this._atomId = null;
    this._verbe = null;
}

//
// accessor is adapter_katk_net__saveVerbe.prototype.getToken
// element get for token
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for token
// setter function is is adapter_katk_net__saveVerbe.prototype.setToken
//
function adapter_katk_net__saveVerbe_getToken() { return this._token;}

adapter_katk_net__saveVerbe.prototype.getToken = adapter_katk_net__saveVerbe_getToken;

function adapter_katk_net__saveVerbe_setToken(value) { this._token = value;}

adapter_katk_net__saveVerbe.prototype.setToken = adapter_katk_net__saveVerbe_setToken;
//
// accessor is adapter_katk_net__saveVerbe.prototype.getAtomId
// element get for atomId
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for atomId
// setter function is is adapter_katk_net__saveVerbe.prototype.setAtomId
//
function adapter_katk_net__saveVerbe_getAtomId() { return this._atomId;}

adapter_katk_net__saveVerbe.prototype.getAtomId = adapter_katk_net__saveVerbe_getAtomId;

function adapter_katk_net__saveVerbe_setAtomId(value) { this._atomId = value;}

adapter_katk_net__saveVerbe.prototype.setAtomId = adapter_katk_net__saveVerbe_setAtomId;
//
// accessor is adapter_katk_net__saveVerbe.prototype.getVerbe
// element get for verbe
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for verbe
// setter function is is adapter_katk_net__saveVerbe.prototype.setVerbe
//
function adapter_katk_net__saveVerbe_getVerbe() { return this._verbe;}

adapter_katk_net__saveVerbe.prototype.getVerbe = adapter_katk_net__saveVerbe_getVerbe;

function adapter_katk_net__saveVerbe_setVerbe(value) { this._verbe = value;}

adapter_katk_net__saveVerbe.prototype.setVerbe = adapter_katk_net__saveVerbe_setVerbe;
//
// Serialize {http://adapter.katk.net/}saveVerbe
//
function adapter_katk_net__saveVerbe_serialize(cxfjsutils, elementName, extraNamespaces) {
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
     if (this._token != null) {
      xml = xml + '<token>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._token);
      xml = xml + '</token>';
     }
    }
    // block for local variables
    {
     if (this._atomId != null) {
      xml = xml + '<atomId>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._atomId);
      xml = xml + '</atomId>';
     }
    }
    // block for local variables
    {
     if (this._verbe != null) {
      xml = xml + '<verbe>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._verbe);
      xml = xml + '</verbe>';
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

adapter_katk_net__saveVerbe.prototype.serialize = adapter_katk_net__saveVerbe_serialize;

function adapter_katk_net__saveVerbe_deserialize (cxfjsutils, element) {
    var newobject = new adapter_katk_net__saveVerbe();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing token');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'token')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setToken(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing atomId');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'atomId')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setAtomId(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing verbe');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'verbe')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setVerbe(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://adapter.katk.net/}saveVerbeResponse
//
function adapter_katk_net__saveVerbeResponse () {
    this.typeMarker = 'adapter_katk_net__saveVerbeResponse';
    this._return = null;
}

//
// accessor is adapter_katk_net__saveVerbeResponse.prototype.getReturn
// element get for return
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for return
// setter function is is adapter_katk_net__saveVerbeResponse.prototype.setReturn
//
function adapter_katk_net__saveVerbeResponse_getReturn() { return this._return;}

adapter_katk_net__saveVerbeResponse.prototype.getReturn = adapter_katk_net__saveVerbeResponse_getReturn;

function adapter_katk_net__saveVerbeResponse_setReturn(value) { this._return = value;}

adapter_katk_net__saveVerbeResponse.prototype.setReturn = adapter_katk_net__saveVerbeResponse_setReturn;
//
// Serialize {http://adapter.katk.net/}saveVerbeResponse
//
function adapter_katk_net__saveVerbeResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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

adapter_katk_net__saveVerbeResponse.prototype.serialize = adapter_katk_net__saveVerbeResponse_serialize;

function adapter_katk_net__saveVerbeResponse_deserialize (cxfjsutils, element) {
    var newobject = new adapter_katk_net__saveVerbeResponse();
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
// Constructor for XML Schema item {http://adapter.katk.net/}saveBranch
//
function adapter_katk_net__saveBranch () {
    this.typeMarker = 'adapter_katk_net__saveBranch';
    this._token = null;
    this._atomId = null;
    this._branchId = null;
}

//
// accessor is adapter_katk_net__saveBranch.prototype.getToken
// element get for token
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for token
// setter function is is adapter_katk_net__saveBranch.prototype.setToken
//
function adapter_katk_net__saveBranch_getToken() { return this._token;}

adapter_katk_net__saveBranch.prototype.getToken = adapter_katk_net__saveBranch_getToken;

function adapter_katk_net__saveBranch_setToken(value) { this._token = value;}

adapter_katk_net__saveBranch.prototype.setToken = adapter_katk_net__saveBranch_setToken;
//
// accessor is adapter_katk_net__saveBranch.prototype.getAtomId
// element get for atomId
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for atomId
// setter function is is adapter_katk_net__saveBranch.prototype.setAtomId
//
function adapter_katk_net__saveBranch_getAtomId() { return this._atomId;}

adapter_katk_net__saveBranch.prototype.getAtomId = adapter_katk_net__saveBranch_getAtomId;

function adapter_katk_net__saveBranch_setAtomId(value) { this._atomId = value;}

adapter_katk_net__saveBranch.prototype.setAtomId = adapter_katk_net__saveBranch_setAtomId;
//
// accessor is adapter_katk_net__saveBranch.prototype.getBranchId
// element get for branchId
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for branchId
// setter function is is adapter_katk_net__saveBranch.prototype.setBranchId
//
function adapter_katk_net__saveBranch_getBranchId() { return this._branchId;}

adapter_katk_net__saveBranch.prototype.getBranchId = adapter_katk_net__saveBranch_getBranchId;

function adapter_katk_net__saveBranch_setBranchId(value) { this._branchId = value;}

adapter_katk_net__saveBranch.prototype.setBranchId = adapter_katk_net__saveBranch_setBranchId;
//
// Serialize {http://adapter.katk.net/}saveBranch
//
function adapter_katk_net__saveBranch_serialize(cxfjsutils, elementName, extraNamespaces) {
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
     if (this._token != null) {
      xml = xml + '<token>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._token);
      xml = xml + '</token>';
     }
    }
    // block for local variables
    {
     if (this._atomId != null) {
      xml = xml + '<atomId>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._atomId);
      xml = xml + '</atomId>';
     }
    }
    // block for local variables
    {
     if (this._branchId != null) {
      xml = xml + '<branchId>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._branchId);
      xml = xml + '</branchId>';
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

adapter_katk_net__saveBranch.prototype.serialize = adapter_katk_net__saveBranch_serialize;

function adapter_katk_net__saveBranch_deserialize (cxfjsutils, element) {
    var newobject = new adapter_katk_net__saveBranch();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing token');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'token')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setToken(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing atomId');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'atomId')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setAtomId(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing branchId');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'branchId')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setBranchId(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://adapter.katk.net/}addExample
//
function adapter_katk_net__addExample () {
    this.typeMarker = 'adapter_katk_net__addExample';
    this._token = null;
    this._atomId = null;
    this._exampleId = null;
}

//
// accessor is adapter_katk_net__addExample.prototype.getToken
// element get for token
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for token
// setter function is is adapter_katk_net__addExample.prototype.setToken
//
function adapter_katk_net__addExample_getToken() { return this._token;}

adapter_katk_net__addExample.prototype.getToken = adapter_katk_net__addExample_getToken;

function adapter_katk_net__addExample_setToken(value) { this._token = value;}

adapter_katk_net__addExample.prototype.setToken = adapter_katk_net__addExample_setToken;
//
// accessor is adapter_katk_net__addExample.prototype.getAtomId
// element get for atomId
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for atomId
// setter function is is adapter_katk_net__addExample.prototype.setAtomId
//
function adapter_katk_net__addExample_getAtomId() { return this._atomId;}

adapter_katk_net__addExample.prototype.getAtomId = adapter_katk_net__addExample_getAtomId;

function adapter_katk_net__addExample_setAtomId(value) { this._atomId = value;}

adapter_katk_net__addExample.prototype.setAtomId = adapter_katk_net__addExample_setAtomId;
//
// accessor is adapter_katk_net__addExample.prototype.getExampleId
// element get for exampleId
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for exampleId
// setter function is is adapter_katk_net__addExample.prototype.setExampleId
//
function adapter_katk_net__addExample_getExampleId() { return this._exampleId;}

adapter_katk_net__addExample.prototype.getExampleId = adapter_katk_net__addExample_getExampleId;

function adapter_katk_net__addExample_setExampleId(value) { this._exampleId = value;}

adapter_katk_net__addExample.prototype.setExampleId = adapter_katk_net__addExample_setExampleId;
//
// Serialize {http://adapter.katk.net/}addExample
//
function adapter_katk_net__addExample_serialize(cxfjsutils, elementName, extraNamespaces) {
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
     if (this._token != null) {
      xml = xml + '<token>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._token);
      xml = xml + '</token>';
     }
    }
    // block for local variables
    {
     if (this._atomId != null) {
      xml = xml + '<atomId>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._atomId);
      xml = xml + '</atomId>';
     }
    }
    // block for local variables
    {
     if (this._exampleId != null) {
      xml = xml + '<exampleId>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._exampleId);
      xml = xml + '</exampleId>';
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

adapter_katk_net__addExample.prototype.serialize = adapter_katk_net__addExample_serialize;

function adapter_katk_net__addExample_deserialize (cxfjsutils, element) {
    var newobject = new adapter_katk_net__addExample();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing token');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'token')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setToken(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing atomId');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'atomId')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setAtomId(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing exampleId');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'exampleId')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setExampleId(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://adapter.katk.net/}saveEventQueueResponse
//
function adapter_katk_net__saveEventQueueResponse () {
    this.typeMarker = 'adapter_katk_net__saveEventQueueResponse';
    this._return = null;
}

//
// accessor is adapter_katk_net__saveEventQueueResponse.prototype.getReturn
// element get for return
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for return
// setter function is is adapter_katk_net__saveEventQueueResponse.prototype.setReturn
//
function adapter_katk_net__saveEventQueueResponse_getReturn() { return this._return;}

adapter_katk_net__saveEventQueueResponse.prototype.getReturn = adapter_katk_net__saveEventQueueResponse_getReturn;

function adapter_katk_net__saveEventQueueResponse_setReturn(value) { this._return = value;}

adapter_katk_net__saveEventQueueResponse.prototype.setReturn = adapter_katk_net__saveEventQueueResponse_setReturn;
//
// Serialize {http://adapter.katk.net/}saveEventQueueResponse
//
function adapter_katk_net__saveEventQueueResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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

adapter_katk_net__saveEventQueueResponse.prototype.serialize = adapter_katk_net__saveEventQueueResponse_serialize;

function adapter_katk_net__saveEventQueueResponse_deserialize (cxfjsutils, element) {
    var newobject = new adapter_katk_net__saveEventQueueResponse();
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
// Constructor for XML Schema item {http://adapter.katk.net/}saveRecetteResponse
//
function adapter_katk_net__saveRecetteResponse () {
    this.typeMarker = 'adapter_katk_net__saveRecetteResponse';
    this._return = null;
}

//
// accessor is adapter_katk_net__saveRecetteResponse.prototype.getReturn
// element get for return
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for return
// setter function is is adapter_katk_net__saveRecetteResponse.prototype.setReturn
//
function adapter_katk_net__saveRecetteResponse_getReturn() { return this._return;}

adapter_katk_net__saveRecetteResponse.prototype.getReturn = adapter_katk_net__saveRecetteResponse_getReturn;

function adapter_katk_net__saveRecetteResponse_setReturn(value) { this._return = value;}

adapter_katk_net__saveRecetteResponse.prototype.setReturn = adapter_katk_net__saveRecetteResponse_setReturn;
//
// Serialize {http://adapter.katk.net/}saveRecetteResponse
//
function adapter_katk_net__saveRecetteResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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

adapter_katk_net__saveRecetteResponse.prototype.serialize = adapter_katk_net__saveRecetteResponse_serialize;

function adapter_katk_net__saveRecetteResponse_deserialize (cxfjsutils, element) {
    var newobject = new adapter_katk_net__saveRecetteResponse();
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
// Constructor for XML Schema item {http://adapter.katk.net/}addResult
//
function adapter_katk_net__addResult () {
    this.typeMarker = 'adapter_katk_net__addResult';
    this._token = null;
    this._atomId = null;
    this._result = null;
}

//
// accessor is adapter_katk_net__addResult.prototype.getToken
// element get for token
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for token
// setter function is is adapter_katk_net__addResult.prototype.setToken
//
function adapter_katk_net__addResult_getToken() { return this._token;}

adapter_katk_net__addResult.prototype.getToken = adapter_katk_net__addResult_getToken;

function adapter_katk_net__addResult_setToken(value) { this._token = value;}

adapter_katk_net__addResult.prototype.setToken = adapter_katk_net__addResult_setToken;
//
// accessor is adapter_katk_net__addResult.prototype.getAtomId
// element get for atomId
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for atomId
// setter function is is adapter_katk_net__addResult.prototype.setAtomId
//
function adapter_katk_net__addResult_getAtomId() { return this._atomId;}

adapter_katk_net__addResult.prototype.getAtomId = adapter_katk_net__addResult_getAtomId;

function adapter_katk_net__addResult_setAtomId(value) { this._atomId = value;}

adapter_katk_net__addResult.prototype.setAtomId = adapter_katk_net__addResult_setAtomId;
//
// accessor is adapter_katk_net__addResult.prototype.getResult
// element get for result
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for result
// setter function is is adapter_katk_net__addResult.prototype.setResult
//
function adapter_katk_net__addResult_getResult() { return this._result;}

adapter_katk_net__addResult.prototype.getResult = adapter_katk_net__addResult_getResult;

function adapter_katk_net__addResult_setResult(value) { this._result = value;}

adapter_katk_net__addResult.prototype.setResult = adapter_katk_net__addResult_setResult;
//
// Serialize {http://adapter.katk.net/}addResult
//
function adapter_katk_net__addResult_serialize(cxfjsutils, elementName, extraNamespaces) {
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
     if (this._token != null) {
      xml = xml + '<token>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._token);
      xml = xml + '</token>';
     }
    }
    // block for local variables
    {
     if (this._atomId != null) {
      xml = xml + '<atomId>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._atomId);
      xml = xml + '</atomId>';
     }
    }
    // block for local variables
    {
     if (this._result != null) {
      xml = xml + '<result>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._result);
      xml = xml + '</result>';
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

adapter_katk_net__addResult.prototype.serialize = adapter_katk_net__addResult_serialize;

function adapter_katk_net__addResult_deserialize (cxfjsutils, element) {
    var newobject = new adapter_katk_net__addResult();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing token');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'token')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setToken(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing atomId');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'atomId')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setAtomId(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing result');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'result')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setResult(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://adapter.katk.net/}saveBranchResponse
//
function adapter_katk_net__saveBranchResponse () {
    this.typeMarker = 'adapter_katk_net__saveBranchResponse';
    this._return = null;
}

//
// accessor is adapter_katk_net__saveBranchResponse.prototype.getReturn
// element get for return
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for return
// setter function is is adapter_katk_net__saveBranchResponse.prototype.setReturn
//
function adapter_katk_net__saveBranchResponse_getReturn() { return this._return;}

adapter_katk_net__saveBranchResponse.prototype.getReturn = adapter_katk_net__saveBranchResponse_getReturn;

function adapter_katk_net__saveBranchResponse_setReturn(value) { this._return = value;}

adapter_katk_net__saveBranchResponse.prototype.setReturn = adapter_katk_net__saveBranchResponse_setReturn;
//
// Serialize {http://adapter.katk.net/}saveBranchResponse
//
function adapter_katk_net__saveBranchResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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

adapter_katk_net__saveBranchResponse.prototype.serialize = adapter_katk_net__saveBranchResponse_serialize;

function adapter_katk_net__saveBranchResponse_deserialize (cxfjsutils, element) {
    var newobject = new adapter_katk_net__saveBranchResponse();
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
// Constructor for XML Schema item {http://adapter.katk.net/}saveDescriptionResponse
//
function adapter_katk_net__saveDescriptionResponse () {
    this.typeMarker = 'adapter_katk_net__saveDescriptionResponse';
    this._return = null;
}

//
// accessor is adapter_katk_net__saveDescriptionResponse.prototype.getReturn
// element get for return
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for return
// setter function is is adapter_katk_net__saveDescriptionResponse.prototype.setReturn
//
function adapter_katk_net__saveDescriptionResponse_getReturn() { return this._return;}

adapter_katk_net__saveDescriptionResponse.prototype.getReturn = adapter_katk_net__saveDescriptionResponse_getReturn;

function adapter_katk_net__saveDescriptionResponse_setReturn(value) { this._return = value;}

adapter_katk_net__saveDescriptionResponse.prototype.setReturn = adapter_katk_net__saveDescriptionResponse_setReturn;
//
// Serialize {http://adapter.katk.net/}saveDescriptionResponse
//
function adapter_katk_net__saveDescriptionResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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

adapter_katk_net__saveDescriptionResponse.prototype.serialize = adapter_katk_net__saveDescriptionResponse_serialize;

function adapter_katk_net__saveDescriptionResponse_deserialize (cxfjsutils, element) {
    var newobject = new adapter_katk_net__saveDescriptionResponse();
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
// Constructor for XML Schema item {http://adapter.katk.net/}saveDirectory
//
function adapter_katk_net__saveDirectory () {
    this.typeMarker = 'adapter_katk_net__saveDirectory';
    this._token = null;
    this._atomId = null;
    this._directory = null;
}

//
// accessor is adapter_katk_net__saveDirectory.prototype.getToken
// element get for token
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for token
// setter function is is adapter_katk_net__saveDirectory.prototype.setToken
//
function adapter_katk_net__saveDirectory_getToken() { return this._token;}

adapter_katk_net__saveDirectory.prototype.getToken = adapter_katk_net__saveDirectory_getToken;

function adapter_katk_net__saveDirectory_setToken(value) { this._token = value;}

adapter_katk_net__saveDirectory.prototype.setToken = adapter_katk_net__saveDirectory_setToken;
//
// accessor is adapter_katk_net__saveDirectory.prototype.getAtomId
// element get for atomId
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for atomId
// setter function is is adapter_katk_net__saveDirectory.prototype.setAtomId
//
function adapter_katk_net__saveDirectory_getAtomId() { return this._atomId;}

adapter_katk_net__saveDirectory.prototype.getAtomId = adapter_katk_net__saveDirectory_getAtomId;

function adapter_katk_net__saveDirectory_setAtomId(value) { this._atomId = value;}

adapter_katk_net__saveDirectory.prototype.setAtomId = adapter_katk_net__saveDirectory_setAtomId;
//
// accessor is adapter_katk_net__saveDirectory.prototype.getDirectory
// element get for directory
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for directory
// setter function is is adapter_katk_net__saveDirectory.prototype.setDirectory
//
function adapter_katk_net__saveDirectory_getDirectory() { return this._directory;}

adapter_katk_net__saveDirectory.prototype.getDirectory = adapter_katk_net__saveDirectory_getDirectory;

function adapter_katk_net__saveDirectory_setDirectory(value) { this._directory = value;}

adapter_katk_net__saveDirectory.prototype.setDirectory = adapter_katk_net__saveDirectory_setDirectory;
//
// Serialize {http://adapter.katk.net/}saveDirectory
//
function adapter_katk_net__saveDirectory_serialize(cxfjsutils, elementName, extraNamespaces) {
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
     if (this._token != null) {
      xml = xml + '<token>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._token);
      xml = xml + '</token>';
     }
    }
    // block for local variables
    {
     if (this._atomId != null) {
      xml = xml + '<atomId>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._atomId);
      xml = xml + '</atomId>';
     }
    }
    // block for local variables
    {
     if (this._directory != null) {
      xml = xml + '<directory>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._directory);
      xml = xml + '</directory>';
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

adapter_katk_net__saveDirectory.prototype.serialize = adapter_katk_net__saveDirectory_serialize;

function adapter_katk_net__saveDirectory_deserialize (cxfjsutils, element) {
    var newobject = new adapter_katk_net__saveDirectory();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing token');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'token')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setToken(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing atomId');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'atomId')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setAtomId(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing directory');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'directory')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setDirectory(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://adapter.katk.net/}saveNameResponse
//
function adapter_katk_net__saveNameResponse () {
    this.typeMarker = 'adapter_katk_net__saveNameResponse';
    this._return = null;
}

//
// accessor is adapter_katk_net__saveNameResponse.prototype.getReturn
// element get for return
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for return
// setter function is is adapter_katk_net__saveNameResponse.prototype.setReturn
//
function adapter_katk_net__saveNameResponse_getReturn() { return this._return;}

adapter_katk_net__saveNameResponse.prototype.getReturn = adapter_katk_net__saveNameResponse_getReturn;

function adapter_katk_net__saveNameResponse_setReturn(value) { this._return = value;}

adapter_katk_net__saveNameResponse.prototype.setReturn = adapter_katk_net__saveNameResponse_setReturn;
//
// Serialize {http://adapter.katk.net/}saveNameResponse
//
function adapter_katk_net__saveNameResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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

adapter_katk_net__saveNameResponse.prototype.serialize = adapter_katk_net__saveNameResponse_serialize;

function adapter_katk_net__saveNameResponse_deserialize (cxfjsutils, element) {
    var newobject = new adapter_katk_net__saveNameResponse();
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
// Constructor for XML Schema item {http://adapter.katk.net/}reactor
//
function adapter_katk_net__reactor () {
    this.typeMarker = 'adapter_katk_net__reactor';
    this.__id = null;
    this.__party = null;
    this.__date = 0;
    this._group = null;
    this.__name = null;
}

//
// accessor is adapter_katk_net__reactor.prototype.get_id
// element get for _id
// - element type is {http://www.w3.org/2001/XMLSchema}ID
// - optional element
//
// element set for _id
// setter function is is adapter_katk_net__reactor.prototype.set_id
//
function adapter_katk_net__reactor_get_id() { return this.__id;}

adapter_katk_net__reactor.prototype.get_id = adapter_katk_net__reactor_get_id;

function adapter_katk_net__reactor_set_id(value) { this.__id = value;}

adapter_katk_net__reactor.prototype.set_id = adapter_katk_net__reactor_set_id;
//
// accessor is adapter_katk_net__reactor.prototype.get_party
// element get for _party
// - element type is {http://www.w3.org/2001/XMLSchema}IDREF
// - optional element
//
// element set for _party
// setter function is is adapter_katk_net__reactor.prototype.set_party
//
function adapter_katk_net__reactor_get_party() { return this.__party;}

adapter_katk_net__reactor.prototype.get_party = adapter_katk_net__reactor_get_party;

function adapter_katk_net__reactor_set_party(value) { this.__party = value;}

adapter_katk_net__reactor.prototype.set_party = adapter_katk_net__reactor_set_party;
//
// accessor is adapter_katk_net__reactor.prototype.get_date
// element get for _date
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
//
// element set for _date
// setter function is is adapter_katk_net__reactor.prototype.set_date
//
function adapter_katk_net__reactor_get_date() { return this.__date;}

adapter_katk_net__reactor.prototype.get_date = adapter_katk_net__reactor_get_date;

function adapter_katk_net__reactor_set_date(value) { this.__date = value;}

adapter_katk_net__reactor.prototype.set_date = adapter_katk_net__reactor_set_date;
//
// accessor is adapter_katk_net__reactor.prototype.getGroup
// element get for group
// - element type is {http://adapter.katk.net/}party
// - optional element
//
// element set for group
// setter function is is adapter_katk_net__reactor.prototype.setGroup
//
function adapter_katk_net__reactor_getGroup() { return this._group;}

adapter_katk_net__reactor.prototype.getGroup = adapter_katk_net__reactor_getGroup;

function adapter_katk_net__reactor_setGroup(value) { this._group = value;}

adapter_katk_net__reactor.prototype.setGroup = adapter_katk_net__reactor_setGroup;
//
// accessor is adapter_katk_net__reactor.prototype.get_name
// element get for _name
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for _name
// setter function is is adapter_katk_net__reactor.prototype.set_name
//
function adapter_katk_net__reactor_get_name() { return this.__name;}

adapter_katk_net__reactor.prototype.get_name = adapter_katk_net__reactor_get_name;

function adapter_katk_net__reactor_set_name(value) { this.__name = value;}

adapter_katk_net__reactor.prototype.set_name = adapter_katk_net__reactor_set_name;
//
// Serialize {http://adapter.katk.net/}reactor
//
function adapter_katk_net__reactor_serialize(cxfjsutils, elementName, extraNamespaces) {
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
     if (this.__id != null) {
      xml = xml + '<_id>';
      xml = xml + cxfjsutils.escapeXmlEntities(this.__id);
      xml = xml + '</_id>';
     }
    }
    // block for local variables
    {
     if (this.__party != null) {
      xml = xml + '<_party>';
      xml = xml + cxfjsutils.escapeXmlEntities(this.__party);
      xml = xml + '</_party>';
     }
    }
    // block for local variables
    {
     xml = xml + '<_date>';
     xml = xml + cxfjsutils.escapeXmlEntities(this.__date);
     xml = xml + '</_date>';
    }
    // block for local variables
    {
     if (this._group != null) {
      xml = xml + this._group.serialize(cxfjsutils, 'group', null);
     }
    }
    // block for local variables
    {
     if (this.__name != null) {
      xml = xml + '<_name>';
      xml = xml + cxfjsutils.escapeXmlEntities(this.__name);
      xml = xml + '</_name>';
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

adapter_katk_net__reactor.prototype.serialize = adapter_katk_net__reactor_serialize;

function adapter_katk_net__reactor_deserialize (cxfjsutils, element) {
    var newobject = new adapter_katk_net__reactor();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing _id');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', '_id')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.set_id(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing _party');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', '_party')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.set_party(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing _date');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = parseInt(value);
    }
    newobject.set_date(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing group');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'group')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = adapter_katk_net__party_deserialize(cxfjsutils, curElement);
     }
     newobject.setGroup(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing _name');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', '_name')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.set_name(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://adapter.katk.net/}getAtoms
//
function adapter_katk_net__getAtoms () {
    this.typeMarker = 'adapter_katk_net__getAtoms';
    this._token = null;
    this._ids = [];
}

//
// accessor is adapter_katk_net__getAtoms.prototype.getToken
// element get for token
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for token
// setter function is is adapter_katk_net__getAtoms.prototype.setToken
//
function adapter_katk_net__getAtoms_getToken() { return this._token;}

adapter_katk_net__getAtoms.prototype.getToken = adapter_katk_net__getAtoms_getToken;

function adapter_katk_net__getAtoms_setToken(value) { this._token = value;}

adapter_katk_net__getAtoms.prototype.setToken = adapter_katk_net__getAtoms_setToken;
//
// accessor is adapter_katk_net__getAtoms.prototype.getIds
// element get for ids
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - required element
// - array
//
// element set for ids
// setter function is is adapter_katk_net__getAtoms.prototype.setIds
//
function adapter_katk_net__getAtoms_getIds() { return this._ids;}

adapter_katk_net__getAtoms.prototype.getIds = adapter_katk_net__getAtoms_getIds;

function adapter_katk_net__getAtoms_setIds(value) { this._ids = value;}

adapter_katk_net__getAtoms.prototype.setIds = adapter_katk_net__getAtoms_setIds;
//
// Serialize {http://adapter.katk.net/}getAtoms
//
function adapter_katk_net__getAtoms_serialize(cxfjsutils, elementName, extraNamespaces) {
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
     if (this._token != null) {
      xml = xml + '<token>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._token);
      xml = xml + '</token>';
     }
    }
    // block for local variables
    {
     if (this._ids != null) {
      for (var ax = 0;ax < this._ids.length;ax ++) {
       if (this._ids[ax] == null) {
        xml = xml + '<ids/>';
       } else {
        xml = xml + '<ids>';
        xml = xml + cxfjsutils.escapeXmlEntities(this._ids[ax]);
        xml = xml + '</ids>';
       }
      }
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

adapter_katk_net__getAtoms.prototype.serialize = adapter_katk_net__getAtoms_serialize;

function adapter_katk_net__getAtoms_deserialize (cxfjsutils, element) {
    var newobject = new adapter_katk_net__getAtoms();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing token');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'token')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setToken(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing ids');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'ids')) {
     item = [];
     do  {
      var arrayItem = null;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       value = cxfjsutils.getNodeText(curElement);
       arrayItem = value;
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'ids'));
     newobject.setIds(item);
     var item = null;
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://adapter.katk.net/}removeResult
//
function adapter_katk_net__removeResult () {
    this.typeMarker = 'adapter_katk_net__removeResult';
    this._token = null;
    this._atomId = null;
    this._result = null;
}

//
// accessor is adapter_katk_net__removeResult.prototype.getToken
// element get for token
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for token
// setter function is is adapter_katk_net__removeResult.prototype.setToken
//
function adapter_katk_net__removeResult_getToken() { return this._token;}

adapter_katk_net__removeResult.prototype.getToken = adapter_katk_net__removeResult_getToken;

function adapter_katk_net__removeResult_setToken(value) { this._token = value;}

adapter_katk_net__removeResult.prototype.setToken = adapter_katk_net__removeResult_setToken;
//
// accessor is adapter_katk_net__removeResult.prototype.getAtomId
// element get for atomId
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for atomId
// setter function is is adapter_katk_net__removeResult.prototype.setAtomId
//
function adapter_katk_net__removeResult_getAtomId() { return this._atomId;}

adapter_katk_net__removeResult.prototype.getAtomId = adapter_katk_net__removeResult_getAtomId;

function adapter_katk_net__removeResult_setAtomId(value) { this._atomId = value;}

adapter_katk_net__removeResult.prototype.setAtomId = adapter_katk_net__removeResult_setAtomId;
//
// accessor is adapter_katk_net__removeResult.prototype.getResult
// element get for result
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for result
// setter function is is adapter_katk_net__removeResult.prototype.setResult
//
function adapter_katk_net__removeResult_getResult() { return this._result;}

adapter_katk_net__removeResult.prototype.getResult = adapter_katk_net__removeResult_getResult;

function adapter_katk_net__removeResult_setResult(value) { this._result = value;}

adapter_katk_net__removeResult.prototype.setResult = adapter_katk_net__removeResult_setResult;
//
// Serialize {http://adapter.katk.net/}removeResult
//
function adapter_katk_net__removeResult_serialize(cxfjsutils, elementName, extraNamespaces) {
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
     if (this._token != null) {
      xml = xml + '<token>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._token);
      xml = xml + '</token>';
     }
    }
    // block for local variables
    {
     if (this._atomId != null) {
      xml = xml + '<atomId>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._atomId);
      xml = xml + '</atomId>';
     }
    }
    // block for local variables
    {
     if (this._result != null) {
      xml = xml + '<result>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._result);
      xml = xml + '</result>';
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

adapter_katk_net__removeResult.prototype.serialize = adapter_katk_net__removeResult_serialize;

function adapter_katk_net__removeResult_deserialize (cxfjsutils, element) {
    var newobject = new adapter_katk_net__removeResult();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing token');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'token')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setToken(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing atomId');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'atomId')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setAtomId(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing result');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'result')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setResult(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://adapter.katk.net/}step
//
function adapter_katk_net__step () {
    this.typeMarker = 'adapter_katk_net__step';
    this.__id = null;
    this.__party = null;
    this.__date = 0;
    this._group = null;
    this.__params = [];
    this.__core = null;
    this.__result = null;
    this.__evaluation = null;
    this.__evalDate = 0;
    this.__note = null;
    this.__author = null;
    this._author = null;
    this._core = null;
    this._evalDate = 0;
    this._evaluation = null;
    this._note = null;
    this._params = [];
    this._result = null;
}

//
// accessor is adapter_katk_net__step.prototype.get_id
// element get for _id
// - element type is {http://www.w3.org/2001/XMLSchema}ID
// - optional element
//
// element set for _id
// setter function is is adapter_katk_net__step.prototype.set_id
//
function adapter_katk_net__step_get_id() { return this.__id;}

adapter_katk_net__step.prototype.get_id = adapter_katk_net__step_get_id;

function adapter_katk_net__step_set_id(value) { this.__id = value;}

adapter_katk_net__step.prototype.set_id = adapter_katk_net__step_set_id;
//
// accessor is adapter_katk_net__step.prototype.get_party
// element get for _party
// - element type is {http://www.w3.org/2001/XMLSchema}IDREF
// - optional element
//
// element set for _party
// setter function is is adapter_katk_net__step.prototype.set_party
//
function adapter_katk_net__step_get_party() { return this.__party;}

adapter_katk_net__step.prototype.get_party = adapter_katk_net__step_get_party;

function adapter_katk_net__step_set_party(value) { this.__party = value;}

adapter_katk_net__step.prototype.set_party = adapter_katk_net__step_set_party;
//
// accessor is adapter_katk_net__step.prototype.get_date
// element get for _date
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
//
// element set for _date
// setter function is is adapter_katk_net__step.prototype.set_date
//
function adapter_katk_net__step_get_date() { return this.__date;}

adapter_katk_net__step.prototype.get_date = adapter_katk_net__step_get_date;

function adapter_katk_net__step_set_date(value) { this.__date = value;}

adapter_katk_net__step.prototype.set_date = adapter_katk_net__step_set_date;
//
// accessor is adapter_katk_net__step.prototype.getGroup
// element get for group
// - element type is {http://adapter.katk.net/}party
// - optional element
//
// element set for group
// setter function is is adapter_katk_net__step.prototype.setGroup
//
function adapter_katk_net__step_getGroup() { return this._group;}

adapter_katk_net__step.prototype.getGroup = adapter_katk_net__step_getGroup;

function adapter_katk_net__step_setGroup(value) { this._group = value;}

adapter_katk_net__step.prototype.setGroup = adapter_katk_net__step_setGroup;
//
// accessor is adapter_katk_net__step.prototype.get_params
// element get for _params
// - element type is {http://www.w3.org/2001/XMLSchema}IDREF
// - required element
// - array
// - nillable
//
// element set for _params
// setter function is is adapter_katk_net__step.prototype.set_params
//
function adapter_katk_net__step_get_params() { return this.__params;}

adapter_katk_net__step.prototype.get_params = adapter_katk_net__step_get_params;

function adapter_katk_net__step_set_params(value) { this.__params = value;}

adapter_katk_net__step.prototype.set_params = adapter_katk_net__step_set_params;
//
// accessor is adapter_katk_net__step.prototype.get_core
// element get for _core
// - element type is {http://www.w3.org/2001/XMLSchema}IDREF
// - optional element
//
// element set for _core
// setter function is is adapter_katk_net__step.prototype.set_core
//
function adapter_katk_net__step_get_core() { return this.__core;}

adapter_katk_net__step.prototype.get_core = adapter_katk_net__step_get_core;

function adapter_katk_net__step_set_core(value) { this.__core = value;}

adapter_katk_net__step.prototype.set_core = adapter_katk_net__step_set_core;
//
// accessor is adapter_katk_net__step.prototype.get_result
// element get for _result
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for _result
// setter function is is adapter_katk_net__step.prototype.set_result
//
function adapter_katk_net__step_get_result() { return this.__result;}

adapter_katk_net__step.prototype.get_result = adapter_katk_net__step_get_result;

function adapter_katk_net__step_set_result(value) { this.__result = value;}

adapter_katk_net__step.prototype.set_result = adapter_katk_net__step_set_result;
//
// accessor is adapter_katk_net__step.prototype.get_evaluation
// element get for _evaluation
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for _evaluation
// setter function is is adapter_katk_net__step.prototype.set_evaluation
//
function adapter_katk_net__step_get_evaluation() { return this.__evaluation;}

adapter_katk_net__step.prototype.get_evaluation = adapter_katk_net__step_get_evaluation;

function adapter_katk_net__step_set_evaluation(value) { this.__evaluation = value;}

adapter_katk_net__step.prototype.set_evaluation = adapter_katk_net__step_set_evaluation;
//
// accessor is adapter_katk_net__step.prototype.get_evalDate
// element get for _evalDate
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
//
// element set for _evalDate
// setter function is is adapter_katk_net__step.prototype.set_evalDate
//
function adapter_katk_net__step_get_evalDate() { return this.__evalDate;}

adapter_katk_net__step.prototype.get_evalDate = adapter_katk_net__step_get_evalDate;

function adapter_katk_net__step_set_evalDate(value) { this.__evalDate = value;}

adapter_katk_net__step.prototype.set_evalDate = adapter_katk_net__step_set_evalDate;
//
// accessor is adapter_katk_net__step.prototype.get_note
// element get for _note
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for _note
// setter function is is adapter_katk_net__step.prototype.set_note
//
function adapter_katk_net__step_get_note() { return this.__note;}

adapter_katk_net__step.prototype.get_note = adapter_katk_net__step_get_note;

function adapter_katk_net__step_set_note(value) { this.__note = value;}

adapter_katk_net__step.prototype.set_note = adapter_katk_net__step_set_note;
//
// accessor is adapter_katk_net__step.prototype.get_author
// element get for _author
// - element type is {http://www.w3.org/2001/XMLSchema}IDREF
// - optional element
//
// element set for _author
// setter function is is adapter_katk_net__step.prototype.set_author
//
function adapter_katk_net__step_get_author() { return this.__author;}

adapter_katk_net__step.prototype.get_author = adapter_katk_net__step_get_author;

function adapter_katk_net__step_set_author(value) { this.__author = value;}

adapter_katk_net__step.prototype.set_author = adapter_katk_net__step_set_author;
//
// accessor is adapter_katk_net__step.prototype.getAuthor
// element get for author
// - element type is {http://adapter.katk.net/}people
// - optional element
//
// element set for author
// setter function is is adapter_katk_net__step.prototype.setAuthor
//
function adapter_katk_net__step_getAuthor() { return this._author;}

adapter_katk_net__step.prototype.getAuthor = adapter_katk_net__step_getAuthor;

function adapter_katk_net__step_setAuthor(value) { this._author = value;}

adapter_katk_net__step.prototype.setAuthor = adapter_katk_net__step_setAuthor;
//
// accessor is adapter_katk_net__step.prototype.getCore
// element get for core
// - element type is {http://adapter.katk.net/}atom
// - optional element
//
// element set for core
// setter function is is adapter_katk_net__step.prototype.setCore
//
function adapter_katk_net__step_getCore() { return this._core;}

adapter_katk_net__step.prototype.getCore = adapter_katk_net__step_getCore;

function adapter_katk_net__step_setCore(value) { this._core = value;}

adapter_katk_net__step.prototype.setCore = adapter_katk_net__step_setCore;
//
// accessor is adapter_katk_net__step.prototype.getEvalDate
// element get for evalDate
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
//
// element set for evalDate
// setter function is is adapter_katk_net__step.prototype.setEvalDate
//
function adapter_katk_net__step_getEvalDate() { return this._evalDate;}

adapter_katk_net__step.prototype.getEvalDate = adapter_katk_net__step_getEvalDate;

function adapter_katk_net__step_setEvalDate(value) { this._evalDate = value;}

adapter_katk_net__step.prototype.setEvalDate = adapter_katk_net__step_setEvalDate;
//
// accessor is adapter_katk_net__step.prototype.getEvaluation
// element get for evaluation
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for evaluation
// setter function is is adapter_katk_net__step.prototype.setEvaluation
//
function adapter_katk_net__step_getEvaluation() { return this._evaluation;}

adapter_katk_net__step.prototype.getEvaluation = adapter_katk_net__step_getEvaluation;

function adapter_katk_net__step_setEvaluation(value) { this._evaluation = value;}

adapter_katk_net__step.prototype.setEvaluation = adapter_katk_net__step_setEvaluation;
//
// accessor is adapter_katk_net__step.prototype.getNote
// element get for note
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for note
// setter function is is adapter_katk_net__step.prototype.setNote
//
function adapter_katk_net__step_getNote() { return this._note;}

adapter_katk_net__step.prototype.getNote = adapter_katk_net__step_getNote;

function adapter_katk_net__step_setNote(value) { this._note = value;}

adapter_katk_net__step.prototype.setNote = adapter_katk_net__step_setNote;
//
// accessor is adapter_katk_net__step.prototype.getParams
// element get for params
// - element type is {http://adapter.katk.net/}param
// - required element
// - array
// - nillable
//
// element set for params
// setter function is is adapter_katk_net__step.prototype.setParams
//
function adapter_katk_net__step_getParams() { return this._params;}

adapter_katk_net__step.prototype.getParams = adapter_katk_net__step_getParams;

function adapter_katk_net__step_setParams(value) { this._params = value;}

adapter_katk_net__step.prototype.setParams = adapter_katk_net__step_setParams;
//
// accessor is adapter_katk_net__step.prototype.getResult
// element get for result
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for result
// setter function is is adapter_katk_net__step.prototype.setResult
//
function adapter_katk_net__step_getResult() { return this._result;}

adapter_katk_net__step.prototype.getResult = adapter_katk_net__step_getResult;

function adapter_katk_net__step_setResult(value) { this._result = value;}

adapter_katk_net__step.prototype.setResult = adapter_katk_net__step_setResult;
//
// Serialize {http://adapter.katk.net/}step
//
function adapter_katk_net__step_serialize(cxfjsutils, elementName, extraNamespaces) {
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
     if (this.__id != null) {
      xml = xml + '<_id>';
      xml = xml + cxfjsutils.escapeXmlEntities(this.__id);
      xml = xml + '</_id>';
     }
    }
    // block for local variables
    {
     if (this.__party != null) {
      xml = xml + '<_party>';
      xml = xml + cxfjsutils.escapeXmlEntities(this.__party);
      xml = xml + '</_party>';
     }
    }
    // block for local variables
    {
     xml = xml + '<_date>';
     xml = xml + cxfjsutils.escapeXmlEntities(this.__date);
     xml = xml + '</_date>';
    }
    // block for local variables
    {
     if (this._group != null) {
      xml = xml + this._group.serialize(cxfjsutils, 'group', null);
     }
    }
    // block for local variables
    {
     if (this.__params != null) {
      for (var ax = 0;ax < this.__params.length;ax ++) {
       if (this.__params[ax] == null) {
        xml = xml + '<_params xsi:nil=\'true\'/>';
       } else {
        xml = xml + '<_params>';
        xml = xml + cxfjsutils.escapeXmlEntities(this.__params[ax]);
        xml = xml + '</_params>';
       }
      }
     }
    }
    // block for local variables
    {
     if (this.__core != null) {
      xml = xml + '<_core>';
      xml = xml + cxfjsutils.escapeXmlEntities(this.__core);
      xml = xml + '</_core>';
     }
    }
    // block for local variables
    {
     if (this.__result != null) {
      xml = xml + '<_result>';
      xml = xml + cxfjsutils.escapeXmlEntities(this.__result);
      xml = xml + '</_result>';
     }
    }
    // block for local variables
    {
     if (this.__evaluation != null) {
      xml = xml + '<_evaluation>';
      xml = xml + cxfjsutils.escapeXmlEntities(this.__evaluation);
      xml = xml + '</_evaluation>';
     }
    }
    // block for local variables
    {
     xml = xml + '<_evalDate>';
     xml = xml + cxfjsutils.escapeXmlEntities(this.__evalDate);
     xml = xml + '</_evalDate>';
    }
    // block for local variables
    {
     if (this.__note != null) {
      xml = xml + '<_note>';
      xml = xml + cxfjsutils.escapeXmlEntities(this.__note);
      xml = xml + '</_note>';
     }
    }
    // block for local variables
    {
     if (this.__author != null) {
      xml = xml + '<_author>';
      xml = xml + cxfjsutils.escapeXmlEntities(this.__author);
      xml = xml + '</_author>';
     }
    }
    // block for local variables
    {
     if (this._author != null) {
      xml = xml + this._author.serialize(cxfjsutils, 'author', null);
     }
    }
    // block for local variables
    {
     if (this._core != null) {
      xml = xml + this._core.serialize(cxfjsutils, 'core', null);
     }
    }
    // block for local variables
    {
     xml = xml + '<evalDate>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._evalDate);
     xml = xml + '</evalDate>';
    }
    // block for local variables
    {
     if (this._evaluation != null) {
      xml = xml + '<evaluation>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._evaluation);
      xml = xml + '</evaluation>';
     }
    }
    // block for local variables
    {
     if (this._note != null) {
      xml = xml + '<note>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._note);
      xml = xml + '</note>';
     }
    }
    // block for local variables
    {
     if (this._params != null) {
      for (var ax = 0;ax < this._params.length;ax ++) {
       if (this._params[ax] == null) {
        xml = xml + '<params xsi:nil=\'true\'/>';
       } else {
        xml = xml + this._params[ax].serialize(cxfjsutils, 'params', null);
       }
      }
     }
    }
    // block for local variables
    {
     if (this._result != null) {
      xml = xml + '<result>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._result);
      xml = xml + '</result>';
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

adapter_katk_net__step.prototype.serialize = adapter_katk_net__step_serialize;

function adapter_katk_net__step_deserialize (cxfjsutils, element) {
    var newobject = new adapter_katk_net__step();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing _id');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', '_id')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.set_id(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing _party');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', '_party')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.set_party(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing _date');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = parseInt(value);
    }
    newobject.set_date(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing group');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'group')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = adapter_katk_net__party_deserialize(cxfjsutils, curElement);
     }
     newobject.setGroup(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing _params');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', '_params')) {
     item = [];
     do  {
      var arrayItem = null;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       value = cxfjsutils.getNodeText(curElement);
       arrayItem = value;
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', '_params'));
     newobject.set_params(item);
     var item = null;
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing _core');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', '_core')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.set_core(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing _result');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', '_result')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.set_result(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing _evaluation');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', '_evaluation')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.set_evaluation(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing _evalDate');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = parseInt(value);
    }
    newobject.set_evalDate(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing _note');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', '_note')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.set_note(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing _author');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', '_author')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.set_author(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing author');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'author')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = adapter_katk_net__people_deserialize(cxfjsutils, curElement);
     }
     newobject.setAuthor(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing core');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'core')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = adapter_katk_net__atom_deserialize(cxfjsutils, curElement);
     }
     newobject.setCore(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing evalDate');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = parseInt(value);
    }
    newobject.setEvalDate(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing evaluation');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'evaluation')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setEvaluation(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing note');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'note')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setNote(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing params');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'params')) {
     item = [];
     do  {
      var arrayItem = null;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       arrayItem = adapter_katk_net__param_deserialize(cxfjsutils, curElement);
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'params'));
     newobject.setParams(item);
     var item = null;
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing result');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'result')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setResult(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://adapter.katk.net/}removeExampleResponse
//
function adapter_katk_net__removeExampleResponse () {
    this.typeMarker = 'adapter_katk_net__removeExampleResponse';
}

//
// Serialize {http://adapter.katk.net/}removeExampleResponse
//
function adapter_katk_net__removeExampleResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

adapter_katk_net__removeExampleResponse.prototype.serialize = adapter_katk_net__removeExampleResponse_serialize;

function adapter_katk_net__removeExampleResponse_deserialize (cxfjsutils, element) {
    var newobject = new adapter_katk_net__removeExampleResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    return newobject;
}

//
// Constructor for XML Schema item {http://adapter.katk.net/}branch
//
function adapter_katk_net__branch () {
    this.typeMarker = 'adapter_katk_net__branch';
    this.__id = null;
    this.__party = null;
    this.__date = 0;
    this._group = null;
    this.__revisions = [];
    this.__perimeter = null;
    this.__annotations = null;
    this.__from = null;
    this.__owner = null;
    this.__watchers = [];
    this._annotations = null;
    this._from = null;
    this._owner = null;
    this._perimeter = null;
    this._revisions = [];
    this._watchers = [];
}

//
// accessor is adapter_katk_net__branch.prototype.get_id
// element get for _id
// - element type is {http://www.w3.org/2001/XMLSchema}ID
// - optional element
//
// element set for _id
// setter function is is adapter_katk_net__branch.prototype.set_id
//
function adapter_katk_net__branch_get_id() { return this.__id;}

adapter_katk_net__branch.prototype.get_id = adapter_katk_net__branch_get_id;

function adapter_katk_net__branch_set_id(value) { this.__id = value;}

adapter_katk_net__branch.prototype.set_id = adapter_katk_net__branch_set_id;
//
// accessor is adapter_katk_net__branch.prototype.get_party
// element get for _party
// - element type is {http://www.w3.org/2001/XMLSchema}IDREF
// - optional element
//
// element set for _party
// setter function is is adapter_katk_net__branch.prototype.set_party
//
function adapter_katk_net__branch_get_party() { return this.__party;}

adapter_katk_net__branch.prototype.get_party = adapter_katk_net__branch_get_party;

function adapter_katk_net__branch_set_party(value) { this.__party = value;}

adapter_katk_net__branch.prototype.set_party = adapter_katk_net__branch_set_party;
//
// accessor is adapter_katk_net__branch.prototype.get_date
// element get for _date
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
//
// element set for _date
// setter function is is adapter_katk_net__branch.prototype.set_date
//
function adapter_katk_net__branch_get_date() { return this.__date;}

adapter_katk_net__branch.prototype.get_date = adapter_katk_net__branch_get_date;

function adapter_katk_net__branch_set_date(value) { this.__date = value;}

adapter_katk_net__branch.prototype.set_date = adapter_katk_net__branch_set_date;
//
// accessor is adapter_katk_net__branch.prototype.getGroup
// element get for group
// - element type is {http://adapter.katk.net/}party
// - optional element
//
// element set for group
// setter function is is adapter_katk_net__branch.prototype.setGroup
//
function adapter_katk_net__branch_getGroup() { return this._group;}

adapter_katk_net__branch.prototype.getGroup = adapter_katk_net__branch_getGroup;

function adapter_katk_net__branch_setGroup(value) { this._group = value;}

adapter_katk_net__branch.prototype.setGroup = adapter_katk_net__branch_setGroup;
//
// accessor is adapter_katk_net__branch.prototype.get_revisions
// element get for _revisions
// - element type is {http://adapter.katk.net/}atom
// - required element
// - array
//
// element set for _revisions
// setter function is is adapter_katk_net__branch.prototype.set_revisions
//
function adapter_katk_net__branch_get_revisions() { return this.__revisions;}

adapter_katk_net__branch.prototype.get_revisions = adapter_katk_net__branch_get_revisions;

function adapter_katk_net__branch_set_revisions(value) { this.__revisions = value;}

adapter_katk_net__branch.prototype.set_revisions = adapter_katk_net__branch_set_revisions;
//
// accessor is adapter_katk_net__branch.prototype.get_perimeter
// element get for _perimeter
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for _perimeter
// setter function is is adapter_katk_net__branch.prototype.set_perimeter
//
function adapter_katk_net__branch_get_perimeter() { return this.__perimeter;}

adapter_katk_net__branch.prototype.get_perimeter = adapter_katk_net__branch_get_perimeter;

function adapter_katk_net__branch_set_perimeter(value) { this.__perimeter = value;}

adapter_katk_net__branch.prototype.set_perimeter = adapter_katk_net__branch_set_perimeter;
//
// accessor is adapter_katk_net__branch.prototype.get_annotations
// element get for _annotations
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for _annotations
// setter function is is adapter_katk_net__branch.prototype.set_annotations
//
function adapter_katk_net__branch_get_annotations() { return this.__annotations;}

adapter_katk_net__branch.prototype.get_annotations = adapter_katk_net__branch_get_annotations;

function adapter_katk_net__branch_set_annotations(value) { this.__annotations = value;}

adapter_katk_net__branch.prototype.set_annotations = adapter_katk_net__branch_set_annotations;
//
// accessor is adapter_katk_net__branch.prototype.get_from
// element get for _from
// - element type is {http://www.w3.org/2001/XMLSchema}IDREF
// - optional element
//
// element set for _from
// setter function is is adapter_katk_net__branch.prototype.set_from
//
function adapter_katk_net__branch_get_from() { return this.__from;}

adapter_katk_net__branch.prototype.get_from = adapter_katk_net__branch_get_from;

function adapter_katk_net__branch_set_from(value) { this.__from = value;}

adapter_katk_net__branch.prototype.set_from = adapter_katk_net__branch_set_from;
//
// accessor is adapter_katk_net__branch.prototype.get_owner
// element get for _owner
// - element type is {http://www.w3.org/2001/XMLSchema}IDREF
// - optional element
//
// element set for _owner
// setter function is is adapter_katk_net__branch.prototype.set_owner
//
function adapter_katk_net__branch_get_owner() { return this.__owner;}

adapter_katk_net__branch.prototype.get_owner = adapter_katk_net__branch_get_owner;

function adapter_katk_net__branch_set_owner(value) { this.__owner = value;}

adapter_katk_net__branch.prototype.set_owner = adapter_katk_net__branch_set_owner;
//
// accessor is adapter_katk_net__branch.prototype.get_watchers
// element get for _watchers
// - element type is {http://adapter.katk.net/}people
// - required element
// - array
//
// element set for _watchers
// setter function is is adapter_katk_net__branch.prototype.set_watchers
//
function adapter_katk_net__branch_get_watchers() { return this.__watchers;}

adapter_katk_net__branch.prototype.get_watchers = adapter_katk_net__branch_get_watchers;

function adapter_katk_net__branch_set_watchers(value) { this.__watchers = value;}

adapter_katk_net__branch.prototype.set_watchers = adapter_katk_net__branch_set_watchers;
//
// accessor is adapter_katk_net__branch.prototype.getAnnotations
// element get for annotations
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for annotations
// setter function is is adapter_katk_net__branch.prototype.setAnnotations
//
function adapter_katk_net__branch_getAnnotations() { return this._annotations;}

adapter_katk_net__branch.prototype.getAnnotations = adapter_katk_net__branch_getAnnotations;

function adapter_katk_net__branch_setAnnotations(value) { this._annotations = value;}

adapter_katk_net__branch.prototype.setAnnotations = adapter_katk_net__branch_setAnnotations;
//
// accessor is adapter_katk_net__branch.prototype.getFrom
// element get for from
// - element type is {http://adapter.katk.net/}branch
// - optional element
//
// element set for from
// setter function is is adapter_katk_net__branch.prototype.setFrom
//
function adapter_katk_net__branch_getFrom() { return this._from;}

adapter_katk_net__branch.prototype.getFrom = adapter_katk_net__branch_getFrom;

function adapter_katk_net__branch_setFrom(value) { this._from = value;}

adapter_katk_net__branch.prototype.setFrom = adapter_katk_net__branch_setFrom;
//
// accessor is adapter_katk_net__branch.prototype.getOwner
// element get for owner
// - element type is {http://adapter.katk.net/}party
// - optional element
//
// element set for owner
// setter function is is adapter_katk_net__branch.prototype.setOwner
//
function adapter_katk_net__branch_getOwner() { return this._owner;}

adapter_katk_net__branch.prototype.getOwner = adapter_katk_net__branch_getOwner;

function adapter_katk_net__branch_setOwner(value) { this._owner = value;}

adapter_katk_net__branch.prototype.setOwner = adapter_katk_net__branch_setOwner;
//
// accessor is adapter_katk_net__branch.prototype.getPerimeter
// element get for perimeter
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for perimeter
// setter function is is adapter_katk_net__branch.prototype.setPerimeter
//
function adapter_katk_net__branch_getPerimeter() { return this._perimeter;}

adapter_katk_net__branch.prototype.getPerimeter = adapter_katk_net__branch_getPerimeter;

function adapter_katk_net__branch_setPerimeter(value) { this._perimeter = value;}

adapter_katk_net__branch.prototype.setPerimeter = adapter_katk_net__branch_setPerimeter;
//
// accessor is adapter_katk_net__branch.prototype.getRevisions
// element get for revisions
// - element type is {http://adapter.katk.net/}atom
// - required element
// - array
// - nillable
//
// element set for revisions
// setter function is is adapter_katk_net__branch.prototype.setRevisions
//
function adapter_katk_net__branch_getRevisions() { return this._revisions;}

adapter_katk_net__branch.prototype.getRevisions = adapter_katk_net__branch_getRevisions;

function adapter_katk_net__branch_setRevisions(value) { this._revisions = value;}

adapter_katk_net__branch.prototype.setRevisions = adapter_katk_net__branch_setRevisions;
//
// accessor is adapter_katk_net__branch.prototype.getWatchers
// element get for watchers
// - element type is {http://adapter.katk.net/}people
// - required element
// - array
// - nillable
//
// element set for watchers
// setter function is is adapter_katk_net__branch.prototype.setWatchers
//
function adapter_katk_net__branch_getWatchers() { return this._watchers;}

adapter_katk_net__branch.prototype.getWatchers = adapter_katk_net__branch_getWatchers;

function adapter_katk_net__branch_setWatchers(value) { this._watchers = value;}

adapter_katk_net__branch.prototype.setWatchers = adapter_katk_net__branch_setWatchers;
//
// Serialize {http://adapter.katk.net/}branch
//
function adapter_katk_net__branch_serialize(cxfjsutils, elementName, extraNamespaces) {
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
     if (this.__id != null) {
      xml = xml + '<_id>';
      xml = xml + cxfjsutils.escapeXmlEntities(this.__id);
      xml = xml + '</_id>';
     }
    }
    // block for local variables
    {
     if (this.__party != null) {
      xml = xml + '<_party>';
      xml = xml + cxfjsutils.escapeXmlEntities(this.__party);
      xml = xml + '</_party>';
     }
    }
    // block for local variables
    {
     xml = xml + '<_date>';
     xml = xml + cxfjsutils.escapeXmlEntities(this.__date);
     xml = xml + '</_date>';
    }
    // block for local variables
    {
     if (this._group != null) {
      xml = xml + this._group.serialize(cxfjsutils, 'group', null);
     }
    }
    // block for local variables
    {
     if (this.__revisions != null) {
      for (var ax = 0;ax < this.__revisions.length;ax ++) {
       if (this.__revisions[ax] == null) {
        xml = xml + '<_revisions/>';
       } else {
        xml = xml + this.__revisions[ax].serialize(cxfjsutils, '_revisions', null);
       }
      }
     }
    }
    // block for local variables
    {
     if (this.__perimeter != null) {
      xml = xml + '<_perimeter>';
      xml = xml + cxfjsutils.escapeXmlEntities(this.__perimeter);
      xml = xml + '</_perimeter>';
     }
    }
    // block for local variables
    {
     if (this.__annotations != null) {
      xml = xml + '<_annotations>';
      xml = xml + cxfjsutils.escapeXmlEntities(this.__annotations);
      xml = xml + '</_annotations>';
     }
    }
    // block for local variables
    {
     if (this.__from != null) {
      xml = xml + '<_from>';
      xml = xml + cxfjsutils.escapeXmlEntities(this.__from);
      xml = xml + '</_from>';
     }
    }
    // block for local variables
    {
     if (this.__owner != null) {
      xml = xml + '<_owner>';
      xml = xml + cxfjsutils.escapeXmlEntities(this.__owner);
      xml = xml + '</_owner>';
     }
    }
    // block for local variables
    {
     if (this.__watchers != null) {
      for (var ax = 0;ax < this.__watchers.length;ax ++) {
       if (this.__watchers[ax] == null) {
        xml = xml + '<_watchers/>';
       } else {
        xml = xml + this.__watchers[ax].serialize(cxfjsutils, '_watchers', null);
       }
      }
     }
    }
    // block for local variables
    {
     if (this._annotations != null) {
      xml = xml + '<annotations>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._annotations);
      xml = xml + '</annotations>';
     }
    }
    // block for local variables
    {
     if (this._from != null) {
      xml = xml + this._from.serialize(cxfjsutils, 'from', null);
     }
    }
    // block for local variables
    {
     if (this._owner != null) {
      xml = xml + this._owner.serialize(cxfjsutils, 'owner', null);
     }
    }
    // block for local variables
    {
     if (this._perimeter != null) {
      xml = xml + '<perimeter>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._perimeter);
      xml = xml + '</perimeter>';
     }
    }
    // block for local variables
    {
     if (this._revisions != null) {
      for (var ax = 0;ax < this._revisions.length;ax ++) {
       if (this._revisions[ax] == null) {
        xml = xml + '<revisions xsi:nil=\'true\'/>';
       } else {
        xml = xml + this._revisions[ax].serialize(cxfjsutils, 'revisions', null);
       }
      }
     }
    }
    // block for local variables
    {
     if (this._watchers != null) {
      for (var ax = 0;ax < this._watchers.length;ax ++) {
       if (this._watchers[ax] == null) {
        xml = xml + '<watchers xsi:nil=\'true\'/>';
       } else {
        xml = xml + this._watchers[ax].serialize(cxfjsutils, 'watchers', null);
       }
      }
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

adapter_katk_net__branch.prototype.serialize = adapter_katk_net__branch_serialize;

function adapter_katk_net__branch_deserialize (cxfjsutils, element) {
    var newobject = new adapter_katk_net__branch();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing _id');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', '_id')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.set_id(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing _party');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', '_party')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.set_party(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing _date');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = parseInt(value);
    }
    newobject.set_date(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing group');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'group')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = adapter_katk_net__party_deserialize(cxfjsutils, curElement);
     }
     newobject.setGroup(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing _revisions');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', '_revisions')) {
     item = [];
     do  {
      var arrayItem = null;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       arrayItem = adapter_katk_net__atom_deserialize(cxfjsutils, curElement);
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', '_revisions'));
     newobject.set_revisions(item);
     var item = null;
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing _perimeter');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', '_perimeter')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.set_perimeter(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing _annotations');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', '_annotations')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.set_annotations(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing _from');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', '_from')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.set_from(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing _owner');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', '_owner')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.set_owner(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing _watchers');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', '_watchers')) {
     item = [];
     do  {
      var arrayItem = null;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       arrayItem = adapter_katk_net__people_deserialize(cxfjsutils, curElement);
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', '_watchers'));
     newobject.set_watchers(item);
     var item = null;
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing annotations');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'annotations')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setAnnotations(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing from');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'from')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = adapter_katk_net__branch_deserialize(cxfjsutils, curElement);
     }
     newobject.setFrom(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing owner');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'owner')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = adapter_katk_net__party_deserialize(cxfjsutils, curElement);
     }
     newobject.setOwner(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing perimeter');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'perimeter')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setPerimeter(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing revisions');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'revisions')) {
     item = [];
     do  {
      var arrayItem = null;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       arrayItem = adapter_katk_net__atom_deserialize(cxfjsutils, curElement);
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'revisions'));
     newobject.setRevisions(item);
     var item = null;
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing watchers');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'watchers')) {
     item = [];
     do  {
      var arrayItem = null;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       arrayItem = adapter_katk_net__people_deserialize(cxfjsutils, curElement);
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'watchers'));
     newobject.setWatchers(item);
     var item = null;
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://adapter.katk.net/}getAtomsResponse
//
function adapter_katk_net__getAtomsResponse () {
    this.typeMarker = 'adapter_katk_net__getAtomsResponse';
    this._return = [];
}

//
// accessor is adapter_katk_net__getAtomsResponse.prototype.getReturn
// element get for return
// - element type is {http://adapter.katk.net/}atom
// - required element
// - array
//
// element set for return
// setter function is is adapter_katk_net__getAtomsResponse.prototype.setReturn
//
function adapter_katk_net__getAtomsResponse_getReturn() { return this._return;}

adapter_katk_net__getAtomsResponse.prototype.getReturn = adapter_katk_net__getAtomsResponse_getReturn;

function adapter_katk_net__getAtomsResponse_setReturn(value) { this._return = value;}

adapter_katk_net__getAtomsResponse.prototype.setReturn = adapter_katk_net__getAtomsResponse_setReturn;
//
// Serialize {http://adapter.katk.net/}getAtomsResponse
//
function adapter_katk_net__getAtomsResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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
      for (var ax = 0;ax < this._return.length;ax ++) {
       if (this._return[ax] == null) {
        xml = xml + '<return/>';
       } else {
        xml = xml + this._return[ax].serialize(cxfjsutils, 'return', null);
       }
      }
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

adapter_katk_net__getAtomsResponse.prototype.serialize = adapter_katk_net__getAtomsResponse_serialize;

function adapter_katk_net__getAtomsResponse_deserialize (cxfjsutils, element) {
    var newobject = new adapter_katk_net__getAtomsResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing return');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'return')) {
     item = [];
     do  {
      var arrayItem = null;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       arrayItem = adapter_katk_net__atom_deserialize(cxfjsutils, curElement);
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'return'));
     newobject.setReturn(item);
     var item = null;
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://adapter.katk.net/}example
//
function adapter_katk_net__example () {
    this.typeMarker = 'adapter_katk_net__example';
    this.__id = null;
    this.__party = null;
    this.__date = 0;
    this._group = null;
    this.__origine = null;
    this.__path = [];
    this.__state = 0;
    this.__nominal = '';
    this.__obselete = '';
    this.__externalResourceType = null;
    this.__externalResourceId = null;
    this.__reactors = [];
    this._nominal = '';
    this._obselete = '';
    this._state = 0;
}

//
// accessor is adapter_katk_net__example.prototype.get_id
// element get for _id
// - element type is {http://www.w3.org/2001/XMLSchema}ID
// - optional element
//
// element set for _id
// setter function is is adapter_katk_net__example.prototype.set_id
//
function adapter_katk_net__example_get_id() { return this.__id;}

adapter_katk_net__example.prototype.get_id = adapter_katk_net__example_get_id;

function adapter_katk_net__example_set_id(value) { this.__id = value;}

adapter_katk_net__example.prototype.set_id = adapter_katk_net__example_set_id;
//
// accessor is adapter_katk_net__example.prototype.get_party
// element get for _party
// - element type is {http://www.w3.org/2001/XMLSchema}IDREF
// - optional element
//
// element set for _party
// setter function is is adapter_katk_net__example.prototype.set_party
//
function adapter_katk_net__example_get_party() { return this.__party;}

adapter_katk_net__example.prototype.get_party = adapter_katk_net__example_get_party;

function adapter_katk_net__example_set_party(value) { this.__party = value;}

adapter_katk_net__example.prototype.set_party = adapter_katk_net__example_set_party;
//
// accessor is adapter_katk_net__example.prototype.get_date
// element get for _date
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
//
// element set for _date
// setter function is is adapter_katk_net__example.prototype.set_date
//
function adapter_katk_net__example_get_date() { return this.__date;}

adapter_katk_net__example.prototype.get_date = adapter_katk_net__example_get_date;

function adapter_katk_net__example_set_date(value) { this.__date = value;}

adapter_katk_net__example.prototype.set_date = adapter_katk_net__example_set_date;
//
// accessor is adapter_katk_net__example.prototype.getGroup
// element get for group
// - element type is {http://adapter.katk.net/}party
// - optional element
//
// element set for group
// setter function is is adapter_katk_net__example.prototype.setGroup
//
function adapter_katk_net__example_getGroup() { return this._group;}

adapter_katk_net__example.prototype.getGroup = adapter_katk_net__example_getGroup;

function adapter_katk_net__example_setGroup(value) { this._group = value;}

adapter_katk_net__example.prototype.setGroup = adapter_katk_net__example_setGroup;
//
// accessor is adapter_katk_net__example.prototype.get_origine
// element get for _origine
// - element type is {http://www.w3.org/2001/XMLSchema}IDREF
// - optional element
//
// element set for _origine
// setter function is is adapter_katk_net__example.prototype.set_origine
//
function adapter_katk_net__example_get_origine() { return this.__origine;}

adapter_katk_net__example.prototype.get_origine = adapter_katk_net__example_get_origine;

function adapter_katk_net__example_set_origine(value) { this.__origine = value;}

adapter_katk_net__example.prototype.set_origine = adapter_katk_net__example_set_origine;
//
// accessor is adapter_katk_net__example.prototype.get_path
// element get for _path
// - element type is {http://www.w3.org/2001/XMLSchema}IDREF
// - required element
// - array
// - nillable
//
// element set for _path
// setter function is is adapter_katk_net__example.prototype.set_path
//
function adapter_katk_net__example_get_path() { return this.__path;}

adapter_katk_net__example.prototype.get_path = adapter_katk_net__example_get_path;

function adapter_katk_net__example_set_path(value) { this.__path = value;}

adapter_katk_net__example.prototype.set_path = adapter_katk_net__example_set_path;
//
// accessor is adapter_katk_net__example.prototype.get_state
// element get for _state
// - element type is {http://www.w3.org/2001/XMLSchema}int
// - required element
//
// element set for _state
// setter function is is adapter_katk_net__example.prototype.set_state
//
function adapter_katk_net__example_get_state() { return this.__state;}

adapter_katk_net__example.prototype.get_state = adapter_katk_net__example_get_state;

function adapter_katk_net__example_set_state(value) { this.__state = value;}

adapter_katk_net__example.prototype.set_state = adapter_katk_net__example_set_state;
//
// accessor is adapter_katk_net__example.prototype.get_nominal
// element get for _nominal
// - element type is {http://www.w3.org/2001/XMLSchema}boolean
// - required element
//
// element set for _nominal
// setter function is is adapter_katk_net__example.prototype.set_nominal
//
function adapter_katk_net__example_get_nominal() { return this.__nominal;}

adapter_katk_net__example.prototype.get_nominal = adapter_katk_net__example_get_nominal;

function adapter_katk_net__example_set_nominal(value) { this.__nominal = value;}

adapter_katk_net__example.prototype.set_nominal = adapter_katk_net__example_set_nominal;
//
// accessor is adapter_katk_net__example.prototype.get_obselete
// element get for _obselete
// - element type is {http://www.w3.org/2001/XMLSchema}boolean
// - required element
//
// element set for _obselete
// setter function is is adapter_katk_net__example.prototype.set_obselete
//
function adapter_katk_net__example_get_obselete() { return this.__obselete;}

adapter_katk_net__example.prototype.get_obselete = adapter_katk_net__example_get_obselete;

function adapter_katk_net__example_set_obselete(value) { this.__obselete = value;}

adapter_katk_net__example.prototype.set_obselete = adapter_katk_net__example_set_obselete;
//
// accessor is adapter_katk_net__example.prototype.get_externalResourceType
// element get for _externalResourceType
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for _externalResourceType
// setter function is is adapter_katk_net__example.prototype.set_externalResourceType
//
function adapter_katk_net__example_get_externalResourceType() { return this.__externalResourceType;}

adapter_katk_net__example.prototype.get_externalResourceType = adapter_katk_net__example_get_externalResourceType;

function adapter_katk_net__example_set_externalResourceType(value) { this.__externalResourceType = value;}

adapter_katk_net__example.prototype.set_externalResourceType = adapter_katk_net__example_set_externalResourceType;
//
// accessor is adapter_katk_net__example.prototype.get_externalResourceId
// element get for _externalResourceId
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for _externalResourceId
// setter function is is adapter_katk_net__example.prototype.set_externalResourceId
//
function adapter_katk_net__example_get_externalResourceId() { return this.__externalResourceId;}

adapter_katk_net__example.prototype.get_externalResourceId = adapter_katk_net__example_get_externalResourceId;

function adapter_katk_net__example_set_externalResourceId(value) { this.__externalResourceId = value;}

adapter_katk_net__example.prototype.set_externalResourceId = adapter_katk_net__example_set_externalResourceId;
//
// accessor is adapter_katk_net__example.prototype.get_reactors
// element get for _reactors
// - element type is {http://www.w3.org/2001/XMLSchema}IDREF
// - required element
// - array
// - nillable
//
// element set for _reactors
// setter function is is adapter_katk_net__example.prototype.set_reactors
//
function adapter_katk_net__example_get_reactors() { return this.__reactors;}

adapter_katk_net__example.prototype.get_reactors = adapter_katk_net__example_get_reactors;

function adapter_katk_net__example_set_reactors(value) { this.__reactors = value;}

adapter_katk_net__example.prototype.set_reactors = adapter_katk_net__example_set_reactors;
//
// accessor is adapter_katk_net__example.prototype.getNominal
// element get for nominal
// - element type is {http://www.w3.org/2001/XMLSchema}boolean
// - required element
//
// element set for nominal
// setter function is is adapter_katk_net__example.prototype.setNominal
//
function adapter_katk_net__example_getNominal() { return this._nominal;}

adapter_katk_net__example.prototype.getNominal = adapter_katk_net__example_getNominal;

function adapter_katk_net__example_setNominal(value) { this._nominal = value;}

adapter_katk_net__example.prototype.setNominal = adapter_katk_net__example_setNominal;
//
// accessor is adapter_katk_net__example.prototype.getObselete
// element get for obselete
// - element type is {http://www.w3.org/2001/XMLSchema}boolean
// - required element
//
// element set for obselete
// setter function is is adapter_katk_net__example.prototype.setObselete
//
function adapter_katk_net__example_getObselete() { return this._obselete;}

adapter_katk_net__example.prototype.getObselete = adapter_katk_net__example_getObselete;

function adapter_katk_net__example_setObselete(value) { this._obselete = value;}

adapter_katk_net__example.prototype.setObselete = adapter_katk_net__example_setObselete;
//
// accessor is adapter_katk_net__example.prototype.getState
// element get for state
// - element type is {http://www.w3.org/2001/XMLSchema}int
// - required element
//
// element set for state
// setter function is is adapter_katk_net__example.prototype.setState
//
function adapter_katk_net__example_getState() { return this._state;}

adapter_katk_net__example.prototype.getState = adapter_katk_net__example_getState;

function adapter_katk_net__example_setState(value) { this._state = value;}

adapter_katk_net__example.prototype.setState = adapter_katk_net__example_setState;
//
// Serialize {http://adapter.katk.net/}example
//
function adapter_katk_net__example_serialize(cxfjsutils, elementName, extraNamespaces) {
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
     if (this.__id != null) {
      xml = xml + '<_id>';
      xml = xml + cxfjsutils.escapeXmlEntities(this.__id);
      xml = xml + '</_id>';
     }
    }
    // block for local variables
    {
     if (this.__party != null) {
      xml = xml + '<_party>';
      xml = xml + cxfjsutils.escapeXmlEntities(this.__party);
      xml = xml + '</_party>';
     }
    }
    // block for local variables
    {
     xml = xml + '<_date>';
     xml = xml + cxfjsutils.escapeXmlEntities(this.__date);
     xml = xml + '</_date>';
    }
    // block for local variables
    {
     if (this._group != null) {
      xml = xml + this._group.serialize(cxfjsutils, 'group', null);
     }
    }
    // block for local variables
    {
     if (this.__origine != null) {
      xml = xml + '<_origine>';
      xml = xml + cxfjsutils.escapeXmlEntities(this.__origine);
      xml = xml + '</_origine>';
     }
    }
    // block for local variables
    {
     if (this.__path != null) {
      for (var ax = 0;ax < this.__path.length;ax ++) {
       if (this.__path[ax] == null) {
        xml = xml + '<_path xsi:nil=\'true\'/>';
       } else {
        xml = xml + '<_path>';
        xml = xml + cxfjsutils.escapeXmlEntities(this.__path[ax]);
        xml = xml + '</_path>';
       }
      }
     }
    }
    // block for local variables
    {
     xml = xml + '<_state>';
     xml = xml + cxfjsutils.escapeXmlEntities(this.__state);
     xml = xml + '</_state>';
    }
    // block for local variables
    {
     xml = xml + '<_nominal>';
     xml = xml + cxfjsutils.escapeXmlEntities(this.__nominal);
     xml = xml + '</_nominal>';
    }
    // block for local variables
    {
     xml = xml + '<_obselete>';
     xml = xml + cxfjsutils.escapeXmlEntities(this.__obselete);
     xml = xml + '</_obselete>';
    }
    // block for local variables
    {
     if (this.__externalResourceType != null) {
      xml = xml + '<_externalResourceType>';
      xml = xml + cxfjsutils.escapeXmlEntities(this.__externalResourceType);
      xml = xml + '</_externalResourceType>';
     }
    }
    // block for local variables
    {
     if (this.__externalResourceId != null) {
      xml = xml + '<_externalResourceId>';
      xml = xml + cxfjsutils.escapeXmlEntities(this.__externalResourceId);
      xml = xml + '</_externalResourceId>';
     }
    }
    // block for local variables
    {
     if (this.__reactors != null) {
      for (var ax = 0;ax < this.__reactors.length;ax ++) {
       if (this.__reactors[ax] == null) {
        xml = xml + '<_reactors xsi:nil=\'true\'/>';
       } else {
        xml = xml + '<_reactors>';
        xml = xml + cxfjsutils.escapeXmlEntities(this.__reactors[ax]);
        xml = xml + '</_reactors>';
       }
      }
     }
    }
    // block for local variables
    {
     xml = xml + '<nominal>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._nominal);
     xml = xml + '</nominal>';
    }
    // block for local variables
    {
     xml = xml + '<obselete>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._obselete);
     xml = xml + '</obselete>';
    }
    // block for local variables
    {
     xml = xml + '<state>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._state);
     xml = xml + '</state>';
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

adapter_katk_net__example.prototype.serialize = adapter_katk_net__example_serialize;

function adapter_katk_net__example_deserialize (cxfjsutils, element) {
    var newobject = new adapter_katk_net__example();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing _id');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', '_id')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.set_id(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing _party');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', '_party')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.set_party(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing _date');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = parseInt(value);
    }
    newobject.set_date(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing group');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'group')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = adapter_katk_net__party_deserialize(cxfjsutils, curElement);
     }
     newobject.setGroup(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing _origine');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', '_origine')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.set_origine(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing _path');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', '_path')) {
     item = [];
     do  {
      var arrayItem = null;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       value = cxfjsutils.getNodeText(curElement);
       arrayItem = value;
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', '_path'));
     newobject.set_path(item);
     var item = null;
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing _state');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = parseInt(value);
    }
    newobject.set_state(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing _nominal');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = (value == 'true');
    }
    newobject.set_nominal(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing _obselete');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = (value == 'true');
    }
    newobject.set_obselete(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing _externalResourceType');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', '_externalResourceType')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.set_externalResourceType(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing _externalResourceId');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', '_externalResourceId')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.set_externalResourceId(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing _reactors');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', '_reactors')) {
     item = [];
     do  {
      var arrayItem = null;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       value = cxfjsutils.getNodeText(curElement);
       arrayItem = value;
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', '_reactors'));
     newobject.set_reactors(item);
     var item = null;
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing nominal');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = (value == 'true');
    }
    newobject.setNominal(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing obselete');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = (value == 'true');
    }
    newobject.setObselete(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing state');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = parseInt(value);
    }
    newobject.setState(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://adapter.katk.net/}saveName
//
function adapter_katk_net__saveName () {
    this.typeMarker = 'adapter_katk_net__saveName';
    this._token = null;
    this._atomId = null;
    this._name = null;
}

//
// accessor is adapter_katk_net__saveName.prototype.getToken
// element get for token
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for token
// setter function is is adapter_katk_net__saveName.prototype.setToken
//
function adapter_katk_net__saveName_getToken() { return this._token;}

adapter_katk_net__saveName.prototype.getToken = adapter_katk_net__saveName_getToken;

function adapter_katk_net__saveName_setToken(value) { this._token = value;}

adapter_katk_net__saveName.prototype.setToken = adapter_katk_net__saveName_setToken;
//
// accessor is adapter_katk_net__saveName.prototype.getAtomId
// element get for atomId
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for atomId
// setter function is is adapter_katk_net__saveName.prototype.setAtomId
//
function adapter_katk_net__saveName_getAtomId() { return this._atomId;}

adapter_katk_net__saveName.prototype.getAtomId = adapter_katk_net__saveName_getAtomId;

function adapter_katk_net__saveName_setAtomId(value) { this._atomId = value;}

adapter_katk_net__saveName.prototype.setAtomId = adapter_katk_net__saveName_setAtomId;
//
// accessor is adapter_katk_net__saveName.prototype.getName
// element get for name
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for name
// setter function is is adapter_katk_net__saveName.prototype.setName
//
function adapter_katk_net__saveName_getName() { return this._name;}

adapter_katk_net__saveName.prototype.getName = adapter_katk_net__saveName_getName;

function adapter_katk_net__saveName_setName(value) { this._name = value;}

adapter_katk_net__saveName.prototype.setName = adapter_katk_net__saveName_setName;
//
// Serialize {http://adapter.katk.net/}saveName
//
function adapter_katk_net__saveName_serialize(cxfjsutils, elementName, extraNamespaces) {
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
     if (this._token != null) {
      xml = xml + '<token>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._token);
      xml = xml + '</token>';
     }
    }
    // block for local variables
    {
     if (this._atomId != null) {
      xml = xml + '<atomId>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._atomId);
      xml = xml + '</atomId>';
     }
    }
    // block for local variables
    {
     if (this._name != null) {
      xml = xml + '<name>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._name);
      xml = xml + '</name>';
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

adapter_katk_net__saveName.prototype.serialize = adapter_katk_net__saveName_serialize;

function adapter_katk_net__saveName_deserialize (cxfjsutils, element) {
    var newobject = new adapter_katk_net__saveName();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing token');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'token')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setToken(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing atomId');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'atomId')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setAtomId(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
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
    return newobject;
}

//
// Constructor for XML Schema item {http://adapter.katk.net/}saveEventQueue
//
function adapter_katk_net__saveEventQueue () {
    this.typeMarker = 'adapter_katk_net__saveEventQueue';
    this._token = null;
    this._atomId = null;
    this._eventQueue = null;
}

//
// accessor is adapter_katk_net__saveEventQueue.prototype.getToken
// element get for token
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for token
// setter function is is adapter_katk_net__saveEventQueue.prototype.setToken
//
function adapter_katk_net__saveEventQueue_getToken() { return this._token;}

adapter_katk_net__saveEventQueue.prototype.getToken = adapter_katk_net__saveEventQueue_getToken;

function adapter_katk_net__saveEventQueue_setToken(value) { this._token = value;}

adapter_katk_net__saveEventQueue.prototype.setToken = adapter_katk_net__saveEventQueue_setToken;
//
// accessor is adapter_katk_net__saveEventQueue.prototype.getAtomId
// element get for atomId
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for atomId
// setter function is is adapter_katk_net__saveEventQueue.prototype.setAtomId
//
function adapter_katk_net__saveEventQueue_getAtomId() { return this._atomId;}

adapter_katk_net__saveEventQueue.prototype.getAtomId = adapter_katk_net__saveEventQueue_getAtomId;

function adapter_katk_net__saveEventQueue_setAtomId(value) { this._atomId = value;}

adapter_katk_net__saveEventQueue.prototype.setAtomId = adapter_katk_net__saveEventQueue_setAtomId;
//
// accessor is adapter_katk_net__saveEventQueue.prototype.getEventQueue
// element get for eventQueue
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for eventQueue
// setter function is is adapter_katk_net__saveEventQueue.prototype.setEventQueue
//
function adapter_katk_net__saveEventQueue_getEventQueue() { return this._eventQueue;}

adapter_katk_net__saveEventQueue.prototype.getEventQueue = adapter_katk_net__saveEventQueue_getEventQueue;

function adapter_katk_net__saveEventQueue_setEventQueue(value) { this._eventQueue = value;}

adapter_katk_net__saveEventQueue.prototype.setEventQueue = adapter_katk_net__saveEventQueue_setEventQueue;
//
// Serialize {http://adapter.katk.net/}saveEventQueue
//
function adapter_katk_net__saveEventQueue_serialize(cxfjsutils, elementName, extraNamespaces) {
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
     if (this._token != null) {
      xml = xml + '<token>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._token);
      xml = xml + '</token>';
     }
    }
    // block for local variables
    {
     if (this._atomId != null) {
      xml = xml + '<atomId>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._atomId);
      xml = xml + '</atomId>';
     }
    }
    // block for local variables
    {
     if (this._eventQueue != null) {
      xml = xml + '<eventQueue>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._eventQueue);
      xml = xml + '</eventQueue>';
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

adapter_katk_net__saveEventQueue.prototype.serialize = adapter_katk_net__saveEventQueue_serialize;

function adapter_katk_net__saveEventQueue_deserialize (cxfjsutils, element) {
    var newobject = new adapter_katk_net__saveEventQueue();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing token');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'token')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setToken(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing atomId');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'atomId')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setAtomId(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing eventQueue');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'eventQueue')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setEventQueue(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://adapter.katk.net/}saveAbstractResponse
//
function adapter_katk_net__saveAbstractResponse () {
    this.typeMarker = 'adapter_katk_net__saveAbstractResponse';
    this._return = null;
}

//
// accessor is adapter_katk_net__saveAbstractResponse.prototype.getReturn
// element get for return
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for return
// setter function is is adapter_katk_net__saveAbstractResponse.prototype.setReturn
//
function adapter_katk_net__saveAbstractResponse_getReturn() { return this._return;}

adapter_katk_net__saveAbstractResponse.prototype.getReturn = adapter_katk_net__saveAbstractResponse_getReturn;

function adapter_katk_net__saveAbstractResponse_setReturn(value) { this._return = value;}

adapter_katk_net__saveAbstractResponse.prototype.setReturn = adapter_katk_net__saveAbstractResponse_setReturn;
//
// Serialize {http://adapter.katk.net/}saveAbstractResponse
//
function adapter_katk_net__saveAbstractResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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

adapter_katk_net__saveAbstractResponse.prototype.serialize = adapter_katk_net__saveAbstractResponse_serialize;

function adapter_katk_net__saveAbstractResponse_deserialize (cxfjsutils, element) {
    var newobject = new adapter_katk_net__saveAbstractResponse();
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
// Constructor for XML Schema item {http://adapter.katk.net/}addResultResponse
//
function adapter_katk_net__addResultResponse () {
    this.typeMarker = 'adapter_katk_net__addResultResponse';
}

//
// Serialize {http://adapter.katk.net/}addResultResponse
//
function adapter_katk_net__addResultResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

adapter_katk_net__addResultResponse.prototype.serialize = adapter_katk_net__addResultResponse_serialize;

function adapter_katk_net__addResultResponse_deserialize (cxfjsutils, element) {
    var newobject = new adapter_katk_net__addResultResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    return newobject;
}

//
// Constructor for XML Schema item {http://adapter.katk.net/}startById
//
function adapter_katk_net__startById () {
    this.typeMarker = 'adapter_katk_net__startById';
    this._token = null;
    this._atomId = null;
}

//
// accessor is adapter_katk_net__startById.prototype.getToken
// element get for token
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for token
// setter function is is adapter_katk_net__startById.prototype.setToken
//
function adapter_katk_net__startById_getToken() { return this._token;}

adapter_katk_net__startById.prototype.getToken = adapter_katk_net__startById_getToken;

function adapter_katk_net__startById_setToken(value) { this._token = value;}

adapter_katk_net__startById.prototype.setToken = adapter_katk_net__startById_setToken;
//
// accessor is adapter_katk_net__startById.prototype.getAtomId
// element get for atomId
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for atomId
// setter function is is adapter_katk_net__startById.prototype.setAtomId
//
function adapter_katk_net__startById_getAtomId() { return this._atomId;}

adapter_katk_net__startById.prototype.getAtomId = adapter_katk_net__startById_getAtomId;

function adapter_katk_net__startById_setAtomId(value) { this._atomId = value;}

adapter_katk_net__startById.prototype.setAtomId = adapter_katk_net__startById_setAtomId;
//
// Serialize {http://adapter.katk.net/}startById
//
function adapter_katk_net__startById_serialize(cxfjsutils, elementName, extraNamespaces) {
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
     if (this._token != null) {
      xml = xml + '<token>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._token);
      xml = xml + '</token>';
     }
    }
    // block for local variables
    {
     if (this._atomId != null) {
      xml = xml + '<atomId>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._atomId);
      xml = xml + '</atomId>';
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

adapter_katk_net__startById.prototype.serialize = adapter_katk_net__startById_serialize;

function adapter_katk_net__startById_deserialize (cxfjsutils, element) {
    var newobject = new adapter_katk_net__startById();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing token');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'token')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setToken(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing atomId');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'atomId')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setAtomId(item);
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
// Constructor for XML Schema item {http://adapter.katk.net/}removeResultResponse
//
function adapter_katk_net__removeResultResponse () {
    this.typeMarker = 'adapter_katk_net__removeResultResponse';
}

//
// Serialize {http://adapter.katk.net/}removeResultResponse
//
function adapter_katk_net__removeResultResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

adapter_katk_net__removeResultResponse.prototype.serialize = adapter_katk_net__removeResultResponse_serialize;

function adapter_katk_net__removeResultResponse_deserialize (cxfjsutils, element) {
    var newobject = new adapter_katk_net__removeResultResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    return newobject;
}

//
// Definitions for service: {http://compute.katk.net/}AtomServicesService
//

// Javascript for {http://adapter.katk.net/}IAtom

function adapter_katk_net__IAtom () {
    this.jsutils = new CxfApacheOrgUtil();
    this.jsutils.interfaceObject = this;
    this.synchronous = false;
    this.url = null;
    this.client = null;
    this.response = null;
    this.globalElementSerializers = [];
    this.globalElementDeserializers = [];
    this.globalElementSerializers['{http://adapter.katk.net/}getAtom'] = adapter_katk_net__getAtom_serialize;
    this.globalElementDeserializers['{http://adapter.katk.net/}getAtom'] = adapter_katk_net__getAtom_deserialize;
    this.globalElementSerializers['{http://adapter.katk.net/}removeExample'] = adapter_katk_net__removeExample_serialize;
    this.globalElementDeserializers['{http://adapter.katk.net/}removeExample'] = adapter_katk_net__removeExample_deserialize;
    this.globalElementSerializers['{http://adapter.katk.net/}saveDirectoryResponse'] = adapter_katk_net__saveDirectoryResponse_serialize;
    this.globalElementDeserializers['{http://adapter.katk.net/}saveDirectoryResponse'] = adapter_katk_net__saveDirectoryResponse_deserialize;
    this.globalElementSerializers['{http://adapter.katk.net/}saveRecette'] = adapter_katk_net__saveRecette_serialize;
    this.globalElementDeserializers['{http://adapter.katk.net/}saveRecette'] = adapter_katk_net__saveRecette_deserialize;
    this.globalElementSerializers['{http://adapter.katk.net/}saveObject'] = adapter_katk_net__saveObject_serialize;
    this.globalElementDeserializers['{http://adapter.katk.net/}saveObject'] = adapter_katk_net__saveObject_deserialize;
    this.globalElementSerializers['{http://adapter.katk.net/}addExampleResponse'] = adapter_katk_net__addExampleResponse_serialize;
    this.globalElementDeserializers['{http://adapter.katk.net/}addExampleResponse'] = adapter_katk_net__addExampleResponse_deserialize;
    this.globalElementSerializers['{http://adapter.katk.net/}save'] = adapter_katk_net__save_serialize;
    this.globalElementDeserializers['{http://adapter.katk.net/}save'] = adapter_katk_net__save_deserialize;
    this.globalElementSerializers['{http://adapter.katk.net/}startByNameResponse'] = adapter_katk_net__startByNameResponse_serialize;
    this.globalElementDeserializers['{http://adapter.katk.net/}startByNameResponse'] = adapter_katk_net__startByNameResponse_deserialize;
    this.globalElementSerializers['{http://adapter.katk.net/}startByName'] = adapter_katk_net__startByName_serialize;
    this.globalElementDeserializers['{http://adapter.katk.net/}startByName'] = adapter_katk_net__startByName_deserialize;
    this.globalElementSerializers['{http://adapter.katk.net/}getAtomResponse'] = adapter_katk_net__getAtomResponse_serialize;
    this.globalElementDeserializers['{http://adapter.katk.net/}getAtomResponse'] = adapter_katk_net__getAtomResponse_deserialize;
    this.globalElementSerializers['{http://adapter.katk.net/}saveDescription'] = adapter_katk_net__saveDescription_serialize;
    this.globalElementDeserializers['{http://adapter.katk.net/}saveDescription'] = adapter_katk_net__saveDescription_deserialize;
    this.globalElementSerializers['{http://adapter.katk.net/}saveResponse'] = adapter_katk_net__saveResponse_serialize;
    this.globalElementDeserializers['{http://adapter.katk.net/}saveResponse'] = adapter_katk_net__saveResponse_deserialize;
    this.globalElementSerializers['{http://adapter.katk.net/}saveObjectResponse'] = adapter_katk_net__saveObjectResponse_serialize;
    this.globalElementDeserializers['{http://adapter.katk.net/}saveObjectResponse'] = adapter_katk_net__saveObjectResponse_deserialize;
    this.globalElementSerializers['{http://adapter.katk.net/}startByIdResponse'] = adapter_katk_net__startByIdResponse_serialize;
    this.globalElementDeserializers['{http://adapter.katk.net/}startByIdResponse'] = adapter_katk_net__startByIdResponse_deserialize;
    this.globalElementSerializers['{http://adapter.katk.net/}saveAbstract'] = adapter_katk_net__saveAbstract_serialize;
    this.globalElementDeserializers['{http://adapter.katk.net/}saveAbstract'] = adapter_katk_net__saveAbstract_deserialize;
    this.globalElementSerializers['{http://adapter.katk.net/}saveVerbe'] = adapter_katk_net__saveVerbe_serialize;
    this.globalElementDeserializers['{http://adapter.katk.net/}saveVerbe'] = adapter_katk_net__saveVerbe_deserialize;
    this.globalElementSerializers['{http://adapter.katk.net/}saveVerbeResponse'] = adapter_katk_net__saveVerbeResponse_serialize;
    this.globalElementDeserializers['{http://adapter.katk.net/}saveVerbeResponse'] = adapter_katk_net__saveVerbeResponse_deserialize;
    this.globalElementSerializers['{http://adapter.katk.net/}addExample'] = adapter_katk_net__addExample_serialize;
    this.globalElementDeserializers['{http://adapter.katk.net/}addExample'] = adapter_katk_net__addExample_deserialize;
    this.globalElementSerializers['{http://adapter.katk.net/}saveBranch'] = adapter_katk_net__saveBranch_serialize;
    this.globalElementDeserializers['{http://adapter.katk.net/}saveBranch'] = adapter_katk_net__saveBranch_deserialize;
    this.globalElementSerializers['{http://adapter.katk.net/}saveEventQueueResponse'] = adapter_katk_net__saveEventQueueResponse_serialize;
    this.globalElementDeserializers['{http://adapter.katk.net/}saveEventQueueResponse'] = adapter_katk_net__saveEventQueueResponse_deserialize;
    this.globalElementSerializers['{http://adapter.katk.net/}saveRecetteResponse'] = adapter_katk_net__saveRecetteResponse_serialize;
    this.globalElementDeserializers['{http://adapter.katk.net/}saveRecetteResponse'] = adapter_katk_net__saveRecetteResponse_deserialize;
    this.globalElementSerializers['{http://adapter.katk.net/}addResult'] = adapter_katk_net__addResult_serialize;
    this.globalElementDeserializers['{http://adapter.katk.net/}addResult'] = adapter_katk_net__addResult_deserialize;
    this.globalElementSerializers['{http://adapter.katk.net/}saveBranchResponse'] = adapter_katk_net__saveBranchResponse_serialize;
    this.globalElementDeserializers['{http://adapter.katk.net/}saveBranchResponse'] = adapter_katk_net__saveBranchResponse_deserialize;
    this.globalElementSerializers['{http://adapter.katk.net/}saveDescriptionResponse'] = adapter_katk_net__saveDescriptionResponse_serialize;
    this.globalElementDeserializers['{http://adapter.katk.net/}saveDescriptionResponse'] = adapter_katk_net__saveDescriptionResponse_deserialize;
    this.globalElementSerializers['{http://adapter.katk.net/}saveNameResponse'] = adapter_katk_net__saveNameResponse_serialize;
    this.globalElementDeserializers['{http://adapter.katk.net/}saveNameResponse'] = adapter_katk_net__saveNameResponse_deserialize;
    this.globalElementSerializers['{http://adapter.katk.net/}saveDirectory'] = adapter_katk_net__saveDirectory_serialize;
    this.globalElementDeserializers['{http://adapter.katk.net/}saveDirectory'] = adapter_katk_net__saveDirectory_deserialize;
    this.globalElementSerializers['{http://adapter.katk.net/}getAtoms'] = adapter_katk_net__getAtoms_serialize;
    this.globalElementDeserializers['{http://adapter.katk.net/}getAtoms'] = adapter_katk_net__getAtoms_deserialize;
    this.globalElementSerializers['{http://adapter.katk.net/}removeResult'] = adapter_katk_net__removeResult_serialize;
    this.globalElementDeserializers['{http://adapter.katk.net/}removeResult'] = adapter_katk_net__removeResult_deserialize;
    this.globalElementSerializers['{http://adapter.katk.net/}removeExampleResponse'] = adapter_katk_net__removeExampleResponse_serialize;
    this.globalElementDeserializers['{http://adapter.katk.net/}removeExampleResponse'] = adapter_katk_net__removeExampleResponse_deserialize;
    this.globalElementSerializers['{http://adapter.katk.net/}getAtomsResponse'] = adapter_katk_net__getAtomsResponse_serialize;
    this.globalElementDeserializers['{http://adapter.katk.net/}getAtomsResponse'] = adapter_katk_net__getAtomsResponse_deserialize;
    this.globalElementSerializers['{http://adapter.katk.net/}saveName'] = adapter_katk_net__saveName_serialize;
    this.globalElementDeserializers['{http://adapter.katk.net/}saveName'] = adapter_katk_net__saveName_deserialize;
    this.globalElementSerializers['{http://adapter.katk.net/}saveEventQueue'] = adapter_katk_net__saveEventQueue_serialize;
    this.globalElementDeserializers['{http://adapter.katk.net/}saveEventQueue'] = adapter_katk_net__saveEventQueue_deserialize;
    this.globalElementSerializers['{http://adapter.katk.net/}saveAbstractResponse'] = adapter_katk_net__saveAbstractResponse_serialize;
    this.globalElementDeserializers['{http://adapter.katk.net/}saveAbstractResponse'] = adapter_katk_net__saveAbstractResponse_deserialize;
    this.globalElementSerializers['{http://adapter.katk.net/}startById'] = adapter_katk_net__startById_serialize;
    this.globalElementDeserializers['{http://adapter.katk.net/}startById'] = adapter_katk_net__startById_deserialize;
    this.globalElementSerializers['{http://adapter.katk.net/}addResultResponse'] = adapter_katk_net__addResultResponse_serialize;
    this.globalElementDeserializers['{http://adapter.katk.net/}addResultResponse'] = adapter_katk_net__addResultResponse_deserialize;
    this.globalElementSerializers['{http://adapter.katk.net/}Problem'] = adapter_katk_net__Problem_serialize;
    this.globalElementDeserializers['{http://adapter.katk.net/}Problem'] = adapter_katk_net__Problem_deserialize;
    this.globalElementSerializers['{http://adapter.katk.net/}removeResultResponse'] = adapter_katk_net__removeResultResponse_serialize;
    this.globalElementDeserializers['{http://adapter.katk.net/}removeResultResponse'] = adapter_katk_net__removeResultResponse_deserialize;
    this.globalElementSerializers['{http://adapter.katk.net/}getAtom'] = adapter_katk_net__getAtom_serialize;
    this.globalElementDeserializers['{http://adapter.katk.net/}getAtom'] = adapter_katk_net__getAtom_deserialize;
    this.globalElementSerializers['{http://adapter.katk.net/}people'] = adapter_katk_net__people_serialize;
    this.globalElementDeserializers['{http://adapter.katk.net/}people'] = adapter_katk_net__people_deserialize;
    this.globalElementSerializers['{http://adapter.katk.net/}saveDirectoryResponse'] = adapter_katk_net__saveDirectoryResponse_serialize;
    this.globalElementDeserializers['{http://adapter.katk.net/}saveDirectoryResponse'] = adapter_katk_net__saveDirectoryResponse_deserialize;
    this.globalElementSerializers['{http://adapter.katk.net/}party'] = adapter_katk_net__party_serialize;
    this.globalElementDeserializers['{http://adapter.katk.net/}party'] = adapter_katk_net__party_deserialize;
    this.globalElementSerializers['{http://adapter.katk.net/}removeExample'] = adapter_katk_net__removeExample_serialize;
    this.globalElementDeserializers['{http://adapter.katk.net/}removeExample'] = adapter_katk_net__removeExample_deserialize;
    this.globalElementSerializers['{http://adapter.katk.net/}saveRecette'] = adapter_katk_net__saveRecette_serialize;
    this.globalElementDeserializers['{http://adapter.katk.net/}saveRecette'] = adapter_katk_net__saveRecette_deserialize;
    this.globalElementSerializers['{http://adapter.katk.net/}saveObject'] = adapter_katk_net__saveObject_serialize;
    this.globalElementDeserializers['{http://adapter.katk.net/}saveObject'] = adapter_katk_net__saveObject_deserialize;
    this.globalElementSerializers['{http://adapter.katk.net/}common'] = adapter_katk_net__common_serialize;
    this.globalElementDeserializers['{http://adapter.katk.net/}common'] = adapter_katk_net__common_deserialize;
    this.globalElementSerializers['{http://adapter.katk.net/}param'] = adapter_katk_net__param_serialize;
    this.globalElementDeserializers['{http://adapter.katk.net/}param'] = adapter_katk_net__param_deserialize;
    this.globalElementSerializers['{http://adapter.katk.net/}addExampleResponse'] = adapter_katk_net__addExampleResponse_serialize;
    this.globalElementDeserializers['{http://adapter.katk.net/}addExampleResponse'] = adapter_katk_net__addExampleResponse_deserialize;
    this.globalElementSerializers['{http://adapter.katk.net/}save'] = adapter_katk_net__save_serialize;
    this.globalElementDeserializers['{http://adapter.katk.net/}save'] = adapter_katk_net__save_deserialize;
    this.globalElementSerializers['{http://adapter.katk.net/}startByNameResponse'] = adapter_katk_net__startByNameResponse_serialize;
    this.globalElementDeserializers['{http://adapter.katk.net/}startByNameResponse'] = adapter_katk_net__startByNameResponse_deserialize;
    this.globalElementSerializers['{http://adapter.katk.net/}startByName'] = adapter_katk_net__startByName_serialize;
    this.globalElementDeserializers['{http://adapter.katk.net/}startByName'] = adapter_katk_net__startByName_deserialize;
    this.globalElementSerializers['{http://adapter.katk.net/}atom'] = adapter_katk_net__atom_serialize;
    this.globalElementDeserializers['{http://adapter.katk.net/}atom'] = adapter_katk_net__atom_deserialize;
    this.globalElementSerializers['{http://adapter.katk.net/}getAtomResponse'] = adapter_katk_net__getAtomResponse_serialize;
    this.globalElementDeserializers['{http://adapter.katk.net/}getAtomResponse'] = adapter_katk_net__getAtomResponse_deserialize;
    this.globalElementSerializers['{http://adapter.katk.net/}saveDescription'] = adapter_katk_net__saveDescription_serialize;
    this.globalElementDeserializers['{http://adapter.katk.net/}saveDescription'] = adapter_katk_net__saveDescription_deserialize;
    this.globalElementSerializers['{http://adapter.katk.net/}saveResponse'] = adapter_katk_net__saveResponse_serialize;
    this.globalElementDeserializers['{http://adapter.katk.net/}saveResponse'] = adapter_katk_net__saveResponse_deserialize;
    this.globalElementSerializers['{http://adapter.katk.net/}saveObjectResponse'] = adapter_katk_net__saveObjectResponse_serialize;
    this.globalElementDeserializers['{http://adapter.katk.net/}saveObjectResponse'] = adapter_katk_net__saveObjectResponse_deserialize;
    this.globalElementSerializers['{http://adapter.katk.net/}startByIdResponse'] = adapter_katk_net__startByIdResponse_serialize;
    this.globalElementDeserializers['{http://adapter.katk.net/}startByIdResponse'] = adapter_katk_net__startByIdResponse_deserialize;
    this.globalElementSerializers['{http://adapter.katk.net/}saveAbstract'] = adapter_katk_net__saveAbstract_serialize;
    this.globalElementDeserializers['{http://adapter.katk.net/}saveAbstract'] = adapter_katk_net__saveAbstract_deserialize;
    this.globalElementSerializers['{http://adapter.katk.net/}saveVerbe'] = adapter_katk_net__saveVerbe_serialize;
    this.globalElementDeserializers['{http://adapter.katk.net/}saveVerbe'] = adapter_katk_net__saveVerbe_deserialize;
    this.globalElementSerializers['{http://adapter.katk.net/}saveVerbeResponse'] = adapter_katk_net__saveVerbeResponse_serialize;
    this.globalElementDeserializers['{http://adapter.katk.net/}saveVerbeResponse'] = adapter_katk_net__saveVerbeResponse_deserialize;
    this.globalElementSerializers['{http://adapter.katk.net/}saveBranch'] = adapter_katk_net__saveBranch_serialize;
    this.globalElementDeserializers['{http://adapter.katk.net/}saveBranch'] = adapter_katk_net__saveBranch_deserialize;
    this.globalElementSerializers['{http://adapter.katk.net/}addExample'] = adapter_katk_net__addExample_serialize;
    this.globalElementDeserializers['{http://adapter.katk.net/}addExample'] = adapter_katk_net__addExample_deserialize;
    this.globalElementSerializers['{http://adapter.katk.net/}saveEventQueueResponse'] = adapter_katk_net__saveEventQueueResponse_serialize;
    this.globalElementDeserializers['{http://adapter.katk.net/}saveEventQueueResponse'] = adapter_katk_net__saveEventQueueResponse_deserialize;
    this.globalElementSerializers['{http://adapter.katk.net/}saveRecetteResponse'] = adapter_katk_net__saveRecetteResponse_serialize;
    this.globalElementDeserializers['{http://adapter.katk.net/}saveRecetteResponse'] = adapter_katk_net__saveRecetteResponse_deserialize;
    this.globalElementSerializers['{http://adapter.katk.net/}addResult'] = adapter_katk_net__addResult_serialize;
    this.globalElementDeserializers['{http://adapter.katk.net/}addResult'] = adapter_katk_net__addResult_deserialize;
    this.globalElementSerializers['{http://adapter.katk.net/}saveBranchResponse'] = adapter_katk_net__saveBranchResponse_serialize;
    this.globalElementDeserializers['{http://adapter.katk.net/}saveBranchResponse'] = adapter_katk_net__saveBranchResponse_deserialize;
    this.globalElementSerializers['{http://adapter.katk.net/}saveDescriptionResponse'] = adapter_katk_net__saveDescriptionResponse_serialize;
    this.globalElementDeserializers['{http://adapter.katk.net/}saveDescriptionResponse'] = adapter_katk_net__saveDescriptionResponse_deserialize;
    this.globalElementSerializers['{http://adapter.katk.net/}saveDirectory'] = adapter_katk_net__saveDirectory_serialize;
    this.globalElementDeserializers['{http://adapter.katk.net/}saveDirectory'] = adapter_katk_net__saveDirectory_deserialize;
    this.globalElementSerializers['{http://adapter.katk.net/}saveNameResponse'] = adapter_katk_net__saveNameResponse_serialize;
    this.globalElementDeserializers['{http://adapter.katk.net/}saveNameResponse'] = adapter_katk_net__saveNameResponse_deserialize;
    this.globalElementSerializers['{http://adapter.katk.net/}reactor'] = adapter_katk_net__reactor_serialize;
    this.globalElementDeserializers['{http://adapter.katk.net/}reactor'] = adapter_katk_net__reactor_deserialize;
    this.globalElementSerializers['{http://adapter.katk.net/}getAtoms'] = adapter_katk_net__getAtoms_serialize;
    this.globalElementDeserializers['{http://adapter.katk.net/}getAtoms'] = adapter_katk_net__getAtoms_deserialize;
    this.globalElementSerializers['{http://adapter.katk.net/}removeResult'] = adapter_katk_net__removeResult_serialize;
    this.globalElementDeserializers['{http://adapter.katk.net/}removeResult'] = adapter_katk_net__removeResult_deserialize;
    this.globalElementSerializers['{http://adapter.katk.net/}step'] = adapter_katk_net__step_serialize;
    this.globalElementDeserializers['{http://adapter.katk.net/}step'] = adapter_katk_net__step_deserialize;
    this.globalElementSerializers['{http://adapter.katk.net/}removeExampleResponse'] = adapter_katk_net__removeExampleResponse_serialize;
    this.globalElementDeserializers['{http://adapter.katk.net/}removeExampleResponse'] = adapter_katk_net__removeExampleResponse_deserialize;
    this.globalElementSerializers['{http://adapter.katk.net/}branch'] = adapter_katk_net__branch_serialize;
    this.globalElementDeserializers['{http://adapter.katk.net/}branch'] = adapter_katk_net__branch_deserialize;
    this.globalElementSerializers['{http://adapter.katk.net/}getAtomsResponse'] = adapter_katk_net__getAtomsResponse_serialize;
    this.globalElementDeserializers['{http://adapter.katk.net/}getAtomsResponse'] = adapter_katk_net__getAtomsResponse_deserialize;
    this.globalElementSerializers['{http://adapter.katk.net/}example'] = adapter_katk_net__example_serialize;
    this.globalElementDeserializers['{http://adapter.katk.net/}example'] = adapter_katk_net__example_deserialize;
    this.globalElementSerializers['{http://adapter.katk.net/}saveName'] = adapter_katk_net__saveName_serialize;
    this.globalElementDeserializers['{http://adapter.katk.net/}saveName'] = adapter_katk_net__saveName_deserialize;
    this.globalElementSerializers['{http://adapter.katk.net/}saveEventQueue'] = adapter_katk_net__saveEventQueue_serialize;
    this.globalElementDeserializers['{http://adapter.katk.net/}saveEventQueue'] = adapter_katk_net__saveEventQueue_deserialize;
    this.globalElementSerializers['{http://adapter.katk.net/}saveAbstractResponse'] = adapter_katk_net__saveAbstractResponse_serialize;
    this.globalElementDeserializers['{http://adapter.katk.net/}saveAbstractResponse'] = adapter_katk_net__saveAbstractResponse_deserialize;
    this.globalElementSerializers['{http://adapter.katk.net/}addResultResponse'] = adapter_katk_net__addResultResponse_serialize;
    this.globalElementDeserializers['{http://adapter.katk.net/}addResultResponse'] = adapter_katk_net__addResultResponse_deserialize;
    this.globalElementSerializers['{http://adapter.katk.net/}startById'] = adapter_katk_net__startById_serialize;
    this.globalElementDeserializers['{http://adapter.katk.net/}startById'] = adapter_katk_net__startById_deserialize;
    this.globalElementSerializers['{http://adapter.katk.net/}Problem'] = adapter_katk_net__Problem_serialize;
    this.globalElementDeserializers['{http://adapter.katk.net/}Problem'] = adapter_katk_net__Problem_deserialize;
    this.globalElementSerializers['{http://adapter.katk.net/}removeResultResponse'] = adapter_katk_net__removeResultResponse_serialize;
    this.globalElementDeserializers['{http://adapter.katk.net/}removeResultResponse'] = adapter_katk_net__removeResultResponse_deserialize;
}

function adapter_katk_net__getAtom_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling adapter_katk_net__getAtomResponse_deserializeResponse');
     responseObject = adapter_katk_net__getAtomResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

adapter_katk_net__IAtom.prototype.getAtom_onsuccess = adapter_katk_net__getAtom_op_onsuccess;

function adapter_katk_net__getAtom_op_onerror(client) {
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

adapter_katk_net__IAtom.prototype.getAtom_onerror = adapter_katk_net__getAtom_op_onerror;

//
// Operation {http://adapter.katk.net/}getAtom
// Wrapped operation.
// parameter token
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter id
// - simple type {http://www.w3.org/2001/XMLSchema}string//
function adapter_katk_net__getAtom_op(successCallback, errorCallback, token, id) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(2);
    args[0] = token;
    args[1] = id;
    xml = this.getAtom_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.getAtom_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.getAtom_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

adapter_katk_net__IAtom.prototype.getAtom = adapter_katk_net__getAtom_op;

function adapter_katk_net__getAtom_serializeInput(cxfjsutils, args) {
    var wrapperObj = new adapter_katk_net__getAtom();
    wrapperObj.setToken(args[0]);
    wrapperObj.setId(args[1]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://adapter.katk.net/' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:getAtom', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

adapter_katk_net__IAtom.prototype.getAtom_serializeInput = adapter_katk_net__getAtom_serializeInput;

function adapter_katk_net__getAtomResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = adapter_katk_net__getAtomResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function adapter_katk_net__startById_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling adapter_katk_net__startByIdResponse_deserializeResponse');
     responseObject = adapter_katk_net__startByIdResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

adapter_katk_net__IAtom.prototype.startById_onsuccess = adapter_katk_net__startById_op_onsuccess;

function adapter_katk_net__startById_op_onerror(client) {
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

adapter_katk_net__IAtom.prototype.startById_onerror = adapter_katk_net__startById_op_onerror;

//
// Operation {http://adapter.katk.net/}startById
// Wrapped operation.
// parameter token
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter atomId
// - simple type {http://www.w3.org/2001/XMLSchema}string//
function adapter_katk_net__startById_op(successCallback, errorCallback, token, atomId) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(2);
    args[0] = token;
    args[1] = atomId;
    xml = this.startById_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.startById_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.startById_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

adapter_katk_net__IAtom.prototype.startById = adapter_katk_net__startById_op;

function adapter_katk_net__startById_serializeInput(cxfjsutils, args) {
    var wrapperObj = new adapter_katk_net__startById();
    wrapperObj.setToken(args[0]);
    wrapperObj.setAtomId(args[1]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://adapter.katk.net/' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:startById', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

adapter_katk_net__IAtom.prototype.startById_serializeInput = adapter_katk_net__startById_serializeInput;

function adapter_katk_net__startByIdResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = adapter_katk_net__startByIdResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function adapter_katk_net__saveAbstract_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling adapter_katk_net__saveAbstractResponse_deserializeResponse');
     responseObject = adapter_katk_net__saveAbstractResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

adapter_katk_net__IAtom.prototype.saveAbstract_onsuccess = adapter_katk_net__saveAbstract_op_onsuccess;

function adapter_katk_net__saveAbstract_op_onerror(client) {
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

adapter_katk_net__IAtom.prototype.saveAbstract_onerror = adapter_katk_net__saveAbstract_op_onerror;

//
// Operation {http://adapter.katk.net/}saveAbstract
// Wrapped operation.
// parameter token
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter atomId
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter resume
// - simple type {http://www.w3.org/2001/XMLSchema}string//
function adapter_katk_net__saveAbstract_op(successCallback, errorCallback, token, atomId, resume) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(3);
    args[0] = token;
    args[1] = atomId;
    args[2] = resume;
    xml = this.saveAbstract_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.saveAbstract_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.saveAbstract_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

adapter_katk_net__IAtom.prototype.saveAbstract = adapter_katk_net__saveAbstract_op;

function adapter_katk_net__saveAbstract_serializeInput(cxfjsutils, args) {
    var wrapperObj = new adapter_katk_net__saveAbstract();
    wrapperObj.setToken(args[0]);
    wrapperObj.setAtomId(args[1]);
    wrapperObj.setResume(args[2]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://adapter.katk.net/' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:saveAbstract', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

adapter_katk_net__IAtom.prototype.saveAbstract_serializeInput = adapter_katk_net__saveAbstract_serializeInput;

function adapter_katk_net__saveAbstractResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = adapter_katk_net__saveAbstractResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function adapter_katk_net__addResult_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling adapter_katk_net__addResultResponse_deserializeResponse');
     responseObject = adapter_katk_net__addResultResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

adapter_katk_net__IAtom.prototype.addResult_onsuccess = adapter_katk_net__addResult_op_onsuccess;

function adapter_katk_net__addResult_op_onerror(client) {
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

adapter_katk_net__IAtom.prototype.addResult_onerror = adapter_katk_net__addResult_op_onerror;

//
// Operation {http://adapter.katk.net/}addResult
// Wrapped operation.
// parameter token
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter atomId
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter result
// - simple type {http://www.w3.org/2001/XMLSchema}string//
function adapter_katk_net__addResult_op(successCallback, errorCallback, token, atomId, result) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(3);
    args[0] = token;
    args[1] = atomId;
    args[2] = result;
    xml = this.addResult_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.addResult_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.addResult_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

adapter_katk_net__IAtom.prototype.addResult = adapter_katk_net__addResult_op;

function adapter_katk_net__addResult_serializeInput(cxfjsutils, args) {
    var wrapperObj = new adapter_katk_net__addResult();
    wrapperObj.setToken(args[0]);
    wrapperObj.setAtomId(args[1]);
    wrapperObj.setResult(args[2]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://adapter.katk.net/' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:addResult', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

adapter_katk_net__IAtom.prototype.addResult_serializeInput = adapter_katk_net__addResult_serializeInput;

function adapter_katk_net__addResultResponse_deserializeResponse(cxfjsutils, partElement) {
}
function adapter_katk_net__saveDescription_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling adapter_katk_net__saveDescriptionResponse_deserializeResponse');
     responseObject = adapter_katk_net__saveDescriptionResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

adapter_katk_net__IAtom.prototype.saveDescription_onsuccess = adapter_katk_net__saveDescription_op_onsuccess;

function adapter_katk_net__saveDescription_op_onerror(client) {
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

adapter_katk_net__IAtom.prototype.saveDescription_onerror = adapter_katk_net__saveDescription_op_onerror;

//
// Operation {http://adapter.katk.net/}saveDescription
// Wrapped operation.
// parameter token
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter atomId
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter description
// - simple type {http://www.w3.org/2001/XMLSchema}string//
function adapter_katk_net__saveDescription_op(successCallback, errorCallback, token, atomId, description) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(3);
    args[0] = token;
    args[1] = atomId;
    args[2] = description;
    xml = this.saveDescription_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.saveDescription_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.saveDescription_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

adapter_katk_net__IAtom.prototype.saveDescription = adapter_katk_net__saveDescription_op;

function adapter_katk_net__saveDescription_serializeInput(cxfjsutils, args) {
    var wrapperObj = new adapter_katk_net__saveDescription();
    wrapperObj.setToken(args[0]);
    wrapperObj.setAtomId(args[1]);
    wrapperObj.setDescription(args[2]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://adapter.katk.net/' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:saveDescription', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

adapter_katk_net__IAtom.prototype.saveDescription_serializeInput = adapter_katk_net__saveDescription_serializeInput;

function adapter_katk_net__saveDescriptionResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = adapter_katk_net__saveDescriptionResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function adapter_katk_net__saveDirectory_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling adapter_katk_net__saveDirectoryResponse_deserializeResponse');
     responseObject = adapter_katk_net__saveDirectoryResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

adapter_katk_net__IAtom.prototype.saveDirectory_onsuccess = adapter_katk_net__saveDirectory_op_onsuccess;

function adapter_katk_net__saveDirectory_op_onerror(client) {
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

adapter_katk_net__IAtom.prototype.saveDirectory_onerror = adapter_katk_net__saveDirectory_op_onerror;

//
// Operation {http://adapter.katk.net/}saveDirectory
// Wrapped operation.
// parameter token
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter atomId
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter directory
// - simple type {http://www.w3.org/2001/XMLSchema}string//
function adapter_katk_net__saveDirectory_op(successCallback, errorCallback, token, atomId, directory) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(3);
    args[0] = token;
    args[1] = atomId;
    args[2] = directory;
    xml = this.saveDirectory_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.saveDirectory_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.saveDirectory_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

adapter_katk_net__IAtom.prototype.saveDirectory = adapter_katk_net__saveDirectory_op;

function adapter_katk_net__saveDirectory_serializeInput(cxfjsutils, args) {
    var wrapperObj = new adapter_katk_net__saveDirectory();
    wrapperObj.setToken(args[0]);
    wrapperObj.setAtomId(args[1]);
    wrapperObj.setDirectory(args[2]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://adapter.katk.net/' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:saveDirectory', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

adapter_katk_net__IAtom.prototype.saveDirectory_serializeInput = adapter_katk_net__saveDirectory_serializeInput;

function adapter_katk_net__saveDirectoryResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = adapter_katk_net__saveDirectoryResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function adapter_katk_net__addExample_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling adapter_katk_net__addExampleResponse_deserializeResponse');
     responseObject = adapter_katk_net__addExampleResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

adapter_katk_net__IAtom.prototype.addExample_onsuccess = adapter_katk_net__addExample_op_onsuccess;

function adapter_katk_net__addExample_op_onerror(client) {
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

adapter_katk_net__IAtom.prototype.addExample_onerror = adapter_katk_net__addExample_op_onerror;

//
// Operation {http://adapter.katk.net/}addExample
// Wrapped operation.
// parameter token
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter atomId
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter exampleId
// - simple type {http://www.w3.org/2001/XMLSchema}string//
function adapter_katk_net__addExample_op(successCallback, errorCallback, token, atomId, exampleId) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(3);
    args[0] = token;
    args[1] = atomId;
    args[2] = exampleId;
    xml = this.addExample_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.addExample_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.addExample_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

adapter_katk_net__IAtom.prototype.addExample = adapter_katk_net__addExample_op;

function adapter_katk_net__addExample_serializeInput(cxfjsutils, args) {
    var wrapperObj = new adapter_katk_net__addExample();
    wrapperObj.setToken(args[0]);
    wrapperObj.setAtomId(args[1]);
    wrapperObj.setExampleId(args[2]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://adapter.katk.net/' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:addExample', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

adapter_katk_net__IAtom.prototype.addExample_serializeInput = adapter_katk_net__addExample_serializeInput;

function adapter_katk_net__addExampleResponse_deserializeResponse(cxfjsutils, partElement) {
}
function adapter_katk_net__saveBranch_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling adapter_katk_net__saveBranchResponse_deserializeResponse');
     responseObject = adapter_katk_net__saveBranchResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

adapter_katk_net__IAtom.prototype.saveBranch_onsuccess = adapter_katk_net__saveBranch_op_onsuccess;

function adapter_katk_net__saveBranch_op_onerror(client) {
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

adapter_katk_net__IAtom.prototype.saveBranch_onerror = adapter_katk_net__saveBranch_op_onerror;

//
// Operation {http://adapter.katk.net/}saveBranch
// Wrapped operation.
// parameter token
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter atomId
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter branchId
// - simple type {http://www.w3.org/2001/XMLSchema}string//
function adapter_katk_net__saveBranch_op(successCallback, errorCallback, token, atomId, branchId) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(3);
    args[0] = token;
    args[1] = atomId;
    args[2] = branchId;
    xml = this.saveBranch_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.saveBranch_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.saveBranch_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

adapter_katk_net__IAtom.prototype.saveBranch = adapter_katk_net__saveBranch_op;

function adapter_katk_net__saveBranch_serializeInput(cxfjsutils, args) {
    var wrapperObj = new adapter_katk_net__saveBranch();
    wrapperObj.setToken(args[0]);
    wrapperObj.setAtomId(args[1]);
    wrapperObj.setBranchId(args[2]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://adapter.katk.net/' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:saveBranch', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

adapter_katk_net__IAtom.prototype.saveBranch_serializeInput = adapter_katk_net__saveBranch_serializeInput;

function adapter_katk_net__saveBranchResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = adapter_katk_net__saveBranchResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function adapter_katk_net__save_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling adapter_katk_net__saveResponse_deserializeResponse');
     responseObject = adapter_katk_net__saveResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

adapter_katk_net__IAtom.prototype.save_onsuccess = adapter_katk_net__save_op_onsuccess;

function adapter_katk_net__save_op_onerror(client) {
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

adapter_katk_net__IAtom.prototype.save_onerror = adapter_katk_net__save_op_onerror;

//
// Operation {http://adapter.katk.net/}save
// Wrapped operation.
// parameter token
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter atomId
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter name
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter description
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter resume
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter verbe
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter object
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter branchId
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter directory
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter eventQueue
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter recetteId
// - simple type {http://www.w3.org/2001/XMLSchema}string//
function adapter_katk_net__save_op(successCallback, errorCallback, token, atomId, name, description, resume, verbe, object, branchId, directory, eventQueue, recetteId) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(11);
    args[0] = token;
    args[1] = atomId;
    args[2] = name;
    args[3] = description;
    args[4] = resume;
    args[5] = verbe;
    args[6] = object;
    args[7] = branchId;
    args[8] = directory;
    args[9] = eventQueue;
    args[10] = recetteId;
    xml = this.save_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.save_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.save_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

adapter_katk_net__IAtom.prototype.save = adapter_katk_net__save_op;

function adapter_katk_net__save_serializeInput(cxfjsutils, args) {
    var wrapperObj = new adapter_katk_net__save();
    wrapperObj.setToken(args[0]);
    wrapperObj.setAtomId(args[1]);
    wrapperObj.setName(args[2]);
    wrapperObj.setDescription(args[3]);
    wrapperObj.setResume(args[4]);
    wrapperObj.setVerbe(args[5]);
    wrapperObj.setObject(args[6]);
    wrapperObj.setBranchId(args[7]);
    wrapperObj.setDirectory(args[8]);
    wrapperObj.setEventQueue(args[9]);
    wrapperObj.setRecetteId(args[10]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://adapter.katk.net/' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:save', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

adapter_katk_net__IAtom.prototype.save_serializeInput = adapter_katk_net__save_serializeInput;

function adapter_katk_net__saveResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = adapter_katk_net__saveResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function adapter_katk_net__saveEventQueue_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling adapter_katk_net__saveEventQueueResponse_deserializeResponse');
     responseObject = adapter_katk_net__saveEventQueueResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

adapter_katk_net__IAtom.prototype.saveEventQueue_onsuccess = adapter_katk_net__saveEventQueue_op_onsuccess;

function adapter_katk_net__saveEventQueue_op_onerror(client) {
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

adapter_katk_net__IAtom.prototype.saveEventQueue_onerror = adapter_katk_net__saveEventQueue_op_onerror;

//
// Operation {http://adapter.katk.net/}saveEventQueue
// Wrapped operation.
// parameter token
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter atomId
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter eventQueue
// - simple type {http://www.w3.org/2001/XMLSchema}string//
function adapter_katk_net__saveEventQueue_op(successCallback, errorCallback, token, atomId, eventQueue) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(3);
    args[0] = token;
    args[1] = atomId;
    args[2] = eventQueue;
    xml = this.saveEventQueue_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.saveEventQueue_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.saveEventQueue_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

adapter_katk_net__IAtom.prototype.saveEventQueue = adapter_katk_net__saveEventQueue_op;

function adapter_katk_net__saveEventQueue_serializeInput(cxfjsutils, args) {
    var wrapperObj = new adapter_katk_net__saveEventQueue();
    wrapperObj.setToken(args[0]);
    wrapperObj.setAtomId(args[1]);
    wrapperObj.setEventQueue(args[2]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://adapter.katk.net/' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:saveEventQueue', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

adapter_katk_net__IAtom.prototype.saveEventQueue_serializeInput = adapter_katk_net__saveEventQueue_serializeInput;

function adapter_katk_net__saveEventQueueResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = adapter_katk_net__saveEventQueueResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function adapter_katk_net__removeExample_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling adapter_katk_net__removeExampleResponse_deserializeResponse');
     responseObject = adapter_katk_net__removeExampleResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

adapter_katk_net__IAtom.prototype.removeExample_onsuccess = adapter_katk_net__removeExample_op_onsuccess;

function adapter_katk_net__removeExample_op_onerror(client) {
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

adapter_katk_net__IAtom.prototype.removeExample_onerror = adapter_katk_net__removeExample_op_onerror;

//
// Operation {http://adapter.katk.net/}removeExample
// Wrapped operation.
// parameter token
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter atomId
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter exampleId
// - simple type {http://www.w3.org/2001/XMLSchema}string//
function adapter_katk_net__removeExample_op(successCallback, errorCallback, token, atomId, exampleId) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(3);
    args[0] = token;
    args[1] = atomId;
    args[2] = exampleId;
    xml = this.removeExample_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.removeExample_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.removeExample_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

adapter_katk_net__IAtom.prototype.removeExample = adapter_katk_net__removeExample_op;

function adapter_katk_net__removeExample_serializeInput(cxfjsutils, args) {
    var wrapperObj = new adapter_katk_net__removeExample();
    wrapperObj.setToken(args[0]);
    wrapperObj.setAtomId(args[1]);
    wrapperObj.setExampleId(args[2]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://adapter.katk.net/' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:removeExample', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

adapter_katk_net__IAtom.prototype.removeExample_serializeInput = adapter_katk_net__removeExample_serializeInput;

function adapter_katk_net__removeExampleResponse_deserializeResponse(cxfjsutils, partElement) {
}
function adapter_katk_net__saveObject_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling adapter_katk_net__saveObjectResponse_deserializeResponse');
     responseObject = adapter_katk_net__saveObjectResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

adapter_katk_net__IAtom.prototype.saveObject_onsuccess = adapter_katk_net__saveObject_op_onsuccess;

function adapter_katk_net__saveObject_op_onerror(client) {
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

adapter_katk_net__IAtom.prototype.saveObject_onerror = adapter_katk_net__saveObject_op_onerror;

//
// Operation {http://adapter.katk.net/}saveObject
// Wrapped operation.
// parameter token
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter atomId
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter object
// - simple type {http://www.w3.org/2001/XMLSchema}string//
function adapter_katk_net__saveObject_op(successCallback, errorCallback, token, atomId, object) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(3);
    args[0] = token;
    args[1] = atomId;
    args[2] = object;
    xml = this.saveObject_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.saveObject_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.saveObject_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

adapter_katk_net__IAtom.prototype.saveObject = adapter_katk_net__saveObject_op;

function adapter_katk_net__saveObject_serializeInput(cxfjsutils, args) {
    var wrapperObj = new adapter_katk_net__saveObject();
    wrapperObj.setToken(args[0]);
    wrapperObj.setAtomId(args[1]);
    wrapperObj.setObject(args[2]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://adapter.katk.net/' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:saveObject', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

adapter_katk_net__IAtom.prototype.saveObject_serializeInput = adapter_katk_net__saveObject_serializeInput;

function adapter_katk_net__saveObjectResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = adapter_katk_net__saveObjectResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function adapter_katk_net__removeResult_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling adapter_katk_net__removeResultResponse_deserializeResponse');
     responseObject = adapter_katk_net__removeResultResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

adapter_katk_net__IAtom.prototype.removeResult_onsuccess = adapter_katk_net__removeResult_op_onsuccess;

function adapter_katk_net__removeResult_op_onerror(client) {
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

adapter_katk_net__IAtom.prototype.removeResult_onerror = adapter_katk_net__removeResult_op_onerror;

//
// Operation {http://adapter.katk.net/}removeResult
// Wrapped operation.
// parameter token
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter atomId
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter result
// - simple type {http://www.w3.org/2001/XMLSchema}string//
function adapter_katk_net__removeResult_op(successCallback, errorCallback, token, atomId, result) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(3);
    args[0] = token;
    args[1] = atomId;
    args[2] = result;
    xml = this.removeResult_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.removeResult_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.removeResult_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

adapter_katk_net__IAtom.prototype.removeResult = adapter_katk_net__removeResult_op;

function adapter_katk_net__removeResult_serializeInput(cxfjsutils, args) {
    var wrapperObj = new adapter_katk_net__removeResult();
    wrapperObj.setToken(args[0]);
    wrapperObj.setAtomId(args[1]);
    wrapperObj.setResult(args[2]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://adapter.katk.net/' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:removeResult', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

adapter_katk_net__IAtom.prototype.removeResult_serializeInput = adapter_katk_net__removeResult_serializeInput;

function adapter_katk_net__removeResultResponse_deserializeResponse(cxfjsutils, partElement) {
}
function adapter_katk_net__saveVerbe_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling adapter_katk_net__saveVerbeResponse_deserializeResponse');
     responseObject = adapter_katk_net__saveVerbeResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

adapter_katk_net__IAtom.prototype.saveVerbe_onsuccess = adapter_katk_net__saveVerbe_op_onsuccess;

function adapter_katk_net__saveVerbe_op_onerror(client) {
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

adapter_katk_net__IAtom.prototype.saveVerbe_onerror = adapter_katk_net__saveVerbe_op_onerror;

//
// Operation {http://adapter.katk.net/}saveVerbe
// Wrapped operation.
// parameter token
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter atomId
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter verbe
// - simple type {http://www.w3.org/2001/XMLSchema}string//
function adapter_katk_net__saveVerbe_op(successCallback, errorCallback, token, atomId, verbe) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(3);
    args[0] = token;
    args[1] = atomId;
    args[2] = verbe;
    xml = this.saveVerbe_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.saveVerbe_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.saveVerbe_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

adapter_katk_net__IAtom.prototype.saveVerbe = adapter_katk_net__saveVerbe_op;

function adapter_katk_net__saveVerbe_serializeInput(cxfjsutils, args) {
    var wrapperObj = new adapter_katk_net__saveVerbe();
    wrapperObj.setToken(args[0]);
    wrapperObj.setAtomId(args[1]);
    wrapperObj.setVerbe(args[2]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://adapter.katk.net/' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:saveVerbe', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

adapter_katk_net__IAtom.prototype.saveVerbe_serializeInput = adapter_katk_net__saveVerbe_serializeInput;

function adapter_katk_net__saveVerbeResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = adapter_katk_net__saveVerbeResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function adapter_katk_net__getAtoms_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling adapter_katk_net__getAtomsResponse_deserializeResponse');
     responseObject = adapter_katk_net__getAtomsResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

adapter_katk_net__IAtom.prototype.getAtoms_onsuccess = adapter_katk_net__getAtoms_op_onsuccess;

function adapter_katk_net__getAtoms_op_onerror(client) {
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

adapter_katk_net__IAtom.prototype.getAtoms_onerror = adapter_katk_net__getAtoms_op_onerror;

//
// Operation {http://adapter.katk.net/}getAtoms
// Wrapped operation.
// parameter token
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter ids
// - array
// - simple type {http://www.w3.org/2001/XMLSchema}string//
function adapter_katk_net__getAtoms_op(successCallback, errorCallback, token, ids) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(2);
    args[0] = token;
    args[1] = ids;
    xml = this.getAtoms_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.getAtoms_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.getAtoms_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

adapter_katk_net__IAtom.prototype.getAtoms = adapter_katk_net__getAtoms_op;

function adapter_katk_net__getAtoms_serializeInput(cxfjsutils, args) {
    var wrapperObj = new adapter_katk_net__getAtoms();
    wrapperObj.setToken(args[0]);
    wrapperObj.setIds(args[1]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://adapter.katk.net/' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:getAtoms', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

adapter_katk_net__IAtom.prototype.getAtoms_serializeInput = adapter_katk_net__getAtoms_serializeInput;

function adapter_katk_net__getAtomsResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = adapter_katk_net__getAtomsResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function adapter_katk_net__startByName_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling adapter_katk_net__startByNameResponse_deserializeResponse');
     responseObject = adapter_katk_net__startByNameResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

adapter_katk_net__IAtom.prototype.startByName_onsuccess = adapter_katk_net__startByName_op_onsuccess;

function adapter_katk_net__startByName_op_onerror(client) {
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

adapter_katk_net__IAtom.prototype.startByName_onerror = adapter_katk_net__startByName_op_onerror;

//
// Operation {http://adapter.katk.net/}startByName
// Wrapped operation.
// parameter token
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter name
// - simple type {http://www.w3.org/2001/XMLSchema}string//
function adapter_katk_net__startByName_op(successCallback, errorCallback, token, name) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(2);
    args[0] = token;
    args[1] = name;
    xml = this.startByName_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.startByName_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.startByName_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

adapter_katk_net__IAtom.prototype.startByName = adapter_katk_net__startByName_op;

function adapter_katk_net__startByName_serializeInput(cxfjsutils, args) {
    var wrapperObj = new adapter_katk_net__startByName();
    wrapperObj.setToken(args[0]);
    wrapperObj.setName(args[1]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://adapter.katk.net/' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:startByName', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

adapter_katk_net__IAtom.prototype.startByName_serializeInput = adapter_katk_net__startByName_serializeInput;

function adapter_katk_net__startByNameResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = adapter_katk_net__startByNameResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function adapter_katk_net__saveName_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling adapter_katk_net__saveNameResponse_deserializeResponse');
     responseObject = adapter_katk_net__saveNameResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

adapter_katk_net__IAtom.prototype.saveName_onsuccess = adapter_katk_net__saveName_op_onsuccess;

function adapter_katk_net__saveName_op_onerror(client) {
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

adapter_katk_net__IAtom.prototype.saveName_onerror = adapter_katk_net__saveName_op_onerror;

//
// Operation {http://adapter.katk.net/}saveName
// Wrapped operation.
// parameter token
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter atomId
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter name
// - simple type {http://www.w3.org/2001/XMLSchema}string//
function adapter_katk_net__saveName_op(successCallback, errorCallback, token, atomId, name) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(3);
    args[0] = token;
    args[1] = atomId;
    args[2] = name;
    xml = this.saveName_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.saveName_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.saveName_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

adapter_katk_net__IAtom.prototype.saveName = adapter_katk_net__saveName_op;

function adapter_katk_net__saveName_serializeInput(cxfjsutils, args) {
    var wrapperObj = new adapter_katk_net__saveName();
    wrapperObj.setToken(args[0]);
    wrapperObj.setAtomId(args[1]);
    wrapperObj.setName(args[2]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://adapter.katk.net/' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:saveName', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

adapter_katk_net__IAtom.prototype.saveName_serializeInput = adapter_katk_net__saveName_serializeInput;

function adapter_katk_net__saveNameResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = adapter_katk_net__saveNameResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function adapter_katk_net__saveRecette_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling adapter_katk_net__saveRecetteResponse_deserializeResponse');
     responseObject = adapter_katk_net__saveRecetteResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

adapter_katk_net__IAtom.prototype.saveRecette_onsuccess = adapter_katk_net__saveRecette_op_onsuccess;

function adapter_katk_net__saveRecette_op_onerror(client) {
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

adapter_katk_net__IAtom.prototype.saveRecette_onerror = adapter_katk_net__saveRecette_op_onerror;

//
// Operation {http://adapter.katk.net/}saveRecette
// Wrapped operation.
// parameter token
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter atomId
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter recetteId
// - simple type {http://www.w3.org/2001/XMLSchema}string//
function adapter_katk_net__saveRecette_op(successCallback, errorCallback, token, atomId, recetteId) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(3);
    args[0] = token;
    args[1] = atomId;
    args[2] = recetteId;
    xml = this.saveRecette_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.saveRecette_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.saveRecette_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

adapter_katk_net__IAtom.prototype.saveRecette = adapter_katk_net__saveRecette_op;

function adapter_katk_net__saveRecette_serializeInput(cxfjsutils, args) {
    var wrapperObj = new adapter_katk_net__saveRecette();
    wrapperObj.setToken(args[0]);
    wrapperObj.setAtomId(args[1]);
    wrapperObj.setRecetteId(args[2]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://adapter.katk.net/' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:saveRecette', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

adapter_katk_net__IAtom.prototype.saveRecette_serializeInput = adapter_katk_net__saveRecette_serializeInput;

function adapter_katk_net__saveRecetteResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = adapter_katk_net__saveRecetteResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function adapter_katk_net__IAtom_compute_katk_net__AtomServicesPort () {
  this.url = 'http://localhost:8080/atomHub/services/AtomWS';
}
adapter_katk_net__IAtom_compute_katk_net__AtomServicesPort.prototype = new adapter_katk_net__IAtom;
