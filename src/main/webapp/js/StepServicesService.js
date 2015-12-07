//
// Definitions for schema: http://adapter.katk.net/
//  http://localhost:8080/atomHub/services/StepWS?wsdl=IStep.wsdl#types1
//
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
// Constructor for XML Schema item {http://adapter.katk.net/}addStep
//
function adapter_katk_net__addStep () {
    this.typeMarker = 'adapter_katk_net__addStep';
    this._token = null;
    this._exampleId = null;
    this._atomId = null;
    this._result = null;
    this._evaluation = null;
    this._date = null;
    this._note = null;
}

//
// accessor is adapter_katk_net__addStep.prototype.getToken
// element get for token
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for token
// setter function is is adapter_katk_net__addStep.prototype.setToken
//
function adapter_katk_net__addStep_getToken() { return this._token;}

adapter_katk_net__addStep.prototype.getToken = adapter_katk_net__addStep_getToken;

function adapter_katk_net__addStep_setToken(value) { this._token = value;}

adapter_katk_net__addStep.prototype.setToken = adapter_katk_net__addStep_setToken;
//
// accessor is adapter_katk_net__addStep.prototype.getExampleId
// element get for exampleId
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for exampleId
// setter function is is adapter_katk_net__addStep.prototype.setExampleId
//
function adapter_katk_net__addStep_getExampleId() { return this._exampleId;}

adapter_katk_net__addStep.prototype.getExampleId = adapter_katk_net__addStep_getExampleId;

function adapter_katk_net__addStep_setExampleId(value) { this._exampleId = value;}

adapter_katk_net__addStep.prototype.setExampleId = adapter_katk_net__addStep_setExampleId;
//
// accessor is adapter_katk_net__addStep.prototype.getAtomId
// element get for atomId
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for atomId
// setter function is is adapter_katk_net__addStep.prototype.setAtomId
//
function adapter_katk_net__addStep_getAtomId() { return this._atomId;}

adapter_katk_net__addStep.prototype.getAtomId = adapter_katk_net__addStep_getAtomId;

function adapter_katk_net__addStep_setAtomId(value) { this._atomId = value;}

adapter_katk_net__addStep.prototype.setAtomId = adapter_katk_net__addStep_setAtomId;
//
// accessor is adapter_katk_net__addStep.prototype.getResult
// element get for result
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for result
// setter function is is adapter_katk_net__addStep.prototype.setResult
//
function adapter_katk_net__addStep_getResult() { return this._result;}

adapter_katk_net__addStep.prototype.getResult = adapter_katk_net__addStep_getResult;

function adapter_katk_net__addStep_setResult(value) { this._result = value;}

adapter_katk_net__addStep.prototype.setResult = adapter_katk_net__addStep_setResult;
//
// accessor is adapter_katk_net__addStep.prototype.getEvaluation
// element get for evaluation
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for evaluation
// setter function is is adapter_katk_net__addStep.prototype.setEvaluation
//
function adapter_katk_net__addStep_getEvaluation() { return this._evaluation;}

adapter_katk_net__addStep.prototype.getEvaluation = adapter_katk_net__addStep_getEvaluation;

function adapter_katk_net__addStep_setEvaluation(value) { this._evaluation = value;}

adapter_katk_net__addStep.prototype.setEvaluation = adapter_katk_net__addStep_setEvaluation;
//
// accessor is adapter_katk_net__addStep.prototype.getDate
// element get for date
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for date
// setter function is is adapter_katk_net__addStep.prototype.setDate
//
function adapter_katk_net__addStep_getDate() { return this._date;}

adapter_katk_net__addStep.prototype.getDate = adapter_katk_net__addStep_getDate;

function adapter_katk_net__addStep_setDate(value) { this._date = value;}

adapter_katk_net__addStep.prototype.setDate = adapter_katk_net__addStep_setDate;
//
// accessor is adapter_katk_net__addStep.prototype.getNote
// element get for note
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for note
// setter function is is adapter_katk_net__addStep.prototype.setNote
//
function adapter_katk_net__addStep_getNote() { return this._note;}

adapter_katk_net__addStep.prototype.getNote = adapter_katk_net__addStep_getNote;

function adapter_katk_net__addStep_setNote(value) { this._note = value;}

adapter_katk_net__addStep.prototype.setNote = adapter_katk_net__addStep_setNote;
//
// Serialize {http://adapter.katk.net/}addStep
//
function adapter_katk_net__addStep_serialize(cxfjsutils, elementName, extraNamespaces) {
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
     if (this._exampleId != null) {
      xml = xml + '<exampleId>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._exampleId);
      xml = xml + '</exampleId>';
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
     if (this._date != null) {
      xml = xml + '<date>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._date);
      xml = xml + '</date>';
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
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

adapter_katk_net__addStep.prototype.serialize = adapter_katk_net__addStep_serialize;

function adapter_katk_net__addStep_deserialize (cxfjsutils, element) {
    var newobject = new adapter_katk_net__addStep();
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
    cxfjsutils.trace('processing date');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'date')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setDate(item);
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
// Constructor for XML Schema item {http://adapter.katk.net/}addStepResponse
//
function adapter_katk_net__addStepResponse () {
    this.typeMarker = 'adapter_katk_net__addStepResponse';
    this._return = null;
}

//
// accessor is adapter_katk_net__addStepResponse.prototype.getReturn
// element get for return
// - element type is {http://adapter.katk.net/}step
// - optional element
//
// element set for return
// setter function is is adapter_katk_net__addStepResponse.prototype.setReturn
//
function adapter_katk_net__addStepResponse_getReturn() { return this._return;}

adapter_katk_net__addStepResponse.prototype.getReturn = adapter_katk_net__addStepResponse_getReturn;

function adapter_katk_net__addStepResponse_setReturn(value) { this._return = value;}

adapter_katk_net__addStepResponse.prototype.setReturn = adapter_katk_net__addStepResponse_setReturn;
//
// Serialize {http://adapter.katk.net/}addStepResponse
//
function adapter_katk_net__addStepResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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

adapter_katk_net__addStepResponse.prototype.serialize = adapter_katk_net__addStepResponse_serialize;

function adapter_katk_net__addStepResponse_deserialize (cxfjsutils, element) {
    var newobject = new adapter_katk_net__addStepResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing return');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'return')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = adapter_katk_net__step_deserialize(cxfjsutils, curElement);
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
// Constructor for XML Schema item {http://adapter.katk.net/}getStepResponse
//
function adapter_katk_net__getStepResponse () {
    this.typeMarker = 'adapter_katk_net__getStepResponse';
    this._return = null;
}

//
// accessor is adapter_katk_net__getStepResponse.prototype.getReturn
// element get for return
// - element type is {http://adapter.katk.net/}step
// - optional element
//
// element set for return
// setter function is is adapter_katk_net__getStepResponse.prototype.setReturn
//
function adapter_katk_net__getStepResponse_getReturn() { return this._return;}

adapter_katk_net__getStepResponse.prototype.getReturn = adapter_katk_net__getStepResponse_getReturn;

function adapter_katk_net__getStepResponse_setReturn(value) { this._return = value;}

adapter_katk_net__getStepResponse.prototype.setReturn = adapter_katk_net__getStepResponse_setReturn;
//
// Serialize {http://adapter.katk.net/}getStepResponse
//
function adapter_katk_net__getStepResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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

adapter_katk_net__getStepResponse.prototype.serialize = adapter_katk_net__getStepResponse_serialize;

function adapter_katk_net__getStepResponse_deserialize (cxfjsutils, element) {
    var newobject = new adapter_katk_net__getStepResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing return');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'return')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = adapter_katk_net__step_deserialize(cxfjsutils, curElement);
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
// Constructor for XML Schema item {http://adapter.katk.net/}getStep
//
function adapter_katk_net__getStep () {
    this.typeMarker = 'adapter_katk_net__getStep';
    this._token = null;
    this._id = null;
}

//
// accessor is adapter_katk_net__getStep.prototype.getToken
// element get for token
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for token
// setter function is is adapter_katk_net__getStep.prototype.setToken
//
function adapter_katk_net__getStep_getToken() { return this._token;}

adapter_katk_net__getStep.prototype.getToken = adapter_katk_net__getStep_getToken;

function adapter_katk_net__getStep_setToken(value) { this._token = value;}

adapter_katk_net__getStep.prototype.setToken = adapter_katk_net__getStep_setToken;
//
// accessor is adapter_katk_net__getStep.prototype.getId
// element get for id
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for id
// setter function is is adapter_katk_net__getStep.prototype.setId
//
function adapter_katk_net__getStep_getId() { return this._id;}

adapter_katk_net__getStep.prototype.getId = adapter_katk_net__getStep_getId;

function adapter_katk_net__getStep_setId(value) { this._id = value;}

adapter_katk_net__getStep.prototype.setId = adapter_katk_net__getStep_setId;
//
// Serialize {http://adapter.katk.net/}getStep
//
function adapter_katk_net__getStep_serialize(cxfjsutils, elementName, extraNamespaces) {
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

adapter_katk_net__getStep.prototype.serialize = adapter_katk_net__getStep_serialize;

function adapter_katk_net__getStep_deserialize (cxfjsutils, element) {
    var newobject = new adapter_katk_net__getStep();
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
// Definitions for service: {http://compute.katk.net/}StepServicesService
//

// Javascript for {http://adapter.katk.net/}IStep

function adapter_katk_net__IStep () {
    this.jsutils = new CxfApacheOrgUtil();
    this.jsutils.interfaceObject = this;
    this.synchronous = false;
    this.url = null;
    this.client = null;
    this.response = null;
    this.globalElementSerializers = [];
    this.globalElementDeserializers = [];
    this.globalElementSerializers['{http://adapter.katk.net/}addStep'] = adapter_katk_net__addStep_serialize;
    this.globalElementDeserializers['{http://adapter.katk.net/}addStep'] = adapter_katk_net__addStep_deserialize;
    this.globalElementSerializers['{http://adapter.katk.net/}addStepResponse'] = adapter_katk_net__addStepResponse_serialize;
    this.globalElementDeserializers['{http://adapter.katk.net/}addStepResponse'] = adapter_katk_net__addStepResponse_deserialize;
    this.globalElementSerializers['{http://adapter.katk.net/}getStepResponse'] = adapter_katk_net__getStepResponse_serialize;
    this.globalElementDeserializers['{http://adapter.katk.net/}getStepResponse'] = adapter_katk_net__getStepResponse_deserialize;
    this.globalElementSerializers['{http://adapter.katk.net/}getStep'] = adapter_katk_net__getStep_serialize;
    this.globalElementDeserializers['{http://adapter.katk.net/}getStep'] = adapter_katk_net__getStep_deserialize;
    this.globalElementSerializers['{http://adapter.katk.net/}Problem'] = adapter_katk_net__Problem_serialize;
    this.globalElementDeserializers['{http://adapter.katk.net/}Problem'] = adapter_katk_net__Problem_deserialize;
    this.globalElementSerializers['{http://adapter.katk.net/}people'] = adapter_katk_net__people_serialize;
    this.globalElementDeserializers['{http://adapter.katk.net/}people'] = adapter_katk_net__people_deserialize;
    this.globalElementSerializers['{http://adapter.katk.net/}party'] = adapter_katk_net__party_serialize;
    this.globalElementDeserializers['{http://adapter.katk.net/}party'] = adapter_katk_net__party_deserialize;
    this.globalElementSerializers['{http://adapter.katk.net/}addStep'] = adapter_katk_net__addStep_serialize;
    this.globalElementDeserializers['{http://adapter.katk.net/}addStep'] = adapter_katk_net__addStep_deserialize;
    this.globalElementSerializers['{http://adapter.katk.net/}step'] = adapter_katk_net__step_serialize;
    this.globalElementDeserializers['{http://adapter.katk.net/}step'] = adapter_katk_net__step_deserialize;
    this.globalElementSerializers['{http://adapter.katk.net/}branch'] = adapter_katk_net__branch_serialize;
    this.globalElementDeserializers['{http://adapter.katk.net/}branch'] = adapter_katk_net__branch_deserialize;
    this.globalElementSerializers['{http://adapter.katk.net/}example'] = adapter_katk_net__example_serialize;
    this.globalElementDeserializers['{http://adapter.katk.net/}example'] = adapter_katk_net__example_deserialize;
    this.globalElementSerializers['{http://adapter.katk.net/}addStepResponse'] = adapter_katk_net__addStepResponse_serialize;
    this.globalElementDeserializers['{http://adapter.katk.net/}addStepResponse'] = adapter_katk_net__addStepResponse_deserialize;
    this.globalElementSerializers['{http://adapter.katk.net/}param'] = adapter_katk_net__param_serialize;
    this.globalElementDeserializers['{http://adapter.katk.net/}param'] = adapter_katk_net__param_deserialize;
    this.globalElementSerializers['{http://adapter.katk.net/}common'] = adapter_katk_net__common_serialize;
    this.globalElementDeserializers['{http://adapter.katk.net/}common'] = adapter_katk_net__common_deserialize;
    this.globalElementSerializers['{http://adapter.katk.net/}getStepResponse'] = adapter_katk_net__getStepResponse_serialize;
    this.globalElementDeserializers['{http://adapter.katk.net/}getStepResponse'] = adapter_katk_net__getStepResponse_deserialize;
    this.globalElementSerializers['{http://adapter.katk.net/}getStep'] = adapter_katk_net__getStep_serialize;
    this.globalElementDeserializers['{http://adapter.katk.net/}getStep'] = adapter_katk_net__getStep_deserialize;
    this.globalElementSerializers['{http://adapter.katk.net/}atom'] = adapter_katk_net__atom_serialize;
    this.globalElementDeserializers['{http://adapter.katk.net/}atom'] = adapter_katk_net__atom_deserialize;
    this.globalElementSerializers['{http://adapter.katk.net/}reactor'] = adapter_katk_net__reactor_serialize;
    this.globalElementDeserializers['{http://adapter.katk.net/}reactor'] = adapter_katk_net__reactor_deserialize;
    this.globalElementSerializers['{http://adapter.katk.net/}Problem'] = adapter_katk_net__Problem_serialize;
    this.globalElementDeserializers['{http://adapter.katk.net/}Problem'] = adapter_katk_net__Problem_deserialize;
}

function adapter_katk_net__addStep_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling adapter_katk_net__addStepResponse_deserializeResponse');
     responseObject = adapter_katk_net__addStepResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

adapter_katk_net__IStep.prototype.addStep_onsuccess = adapter_katk_net__addStep_op_onsuccess;

function adapter_katk_net__addStep_op_onerror(client) {
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

adapter_katk_net__IStep.prototype.addStep_onerror = adapter_katk_net__addStep_op_onerror;

//
// Operation {http://adapter.katk.net/}addStep
// Wrapped operation.
// parameter token
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter exampleId
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter atomId
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter result
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter evaluation
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter date
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter note
// - simple type {http://www.w3.org/2001/XMLSchema}string//
function adapter_katk_net__addStep_op(successCallback, errorCallback, token, exampleId, atomId, result, evaluation, date, note) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(7);
    args[0] = token;
    args[1] = exampleId;
    args[2] = atomId;
    args[3] = result;
    args[4] = evaluation;
    args[5] = date;
    args[6] = note;
    xml = this.addStep_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.addStep_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.addStep_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

adapter_katk_net__IStep.prototype.addStep = adapter_katk_net__addStep_op;

function adapter_katk_net__addStep_serializeInput(cxfjsutils, args) {
    var wrapperObj = new adapter_katk_net__addStep();
    wrapperObj.setToken(args[0]);
    wrapperObj.setExampleId(args[1]);
    wrapperObj.setAtomId(args[2]);
    wrapperObj.setResult(args[3]);
    wrapperObj.setEvaluation(args[4]);
    wrapperObj.setDate(args[5]);
    wrapperObj.setNote(args[6]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://adapter.katk.net/' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:addStep', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

adapter_katk_net__IStep.prototype.addStep_serializeInput = adapter_katk_net__addStep_serializeInput;

function adapter_katk_net__addStepResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = adapter_katk_net__addStepResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function adapter_katk_net__getStep_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling adapter_katk_net__getStepResponse_deserializeResponse');
     responseObject = adapter_katk_net__getStepResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

adapter_katk_net__IStep.prototype.getStep_onsuccess = adapter_katk_net__getStep_op_onsuccess;

function adapter_katk_net__getStep_op_onerror(client) {
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

adapter_katk_net__IStep.prototype.getStep_onerror = adapter_katk_net__getStep_op_onerror;

//
// Operation {http://adapter.katk.net/}getStep
// Wrapped operation.
// parameter token
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter id
// - simple type {http://www.w3.org/2001/XMLSchema}string//
function adapter_katk_net__getStep_op(successCallback, errorCallback, token, id) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(2);
    args[0] = token;
    args[1] = id;
    xml = this.getStep_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.getStep_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.getStep_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

adapter_katk_net__IStep.prototype.getStep = adapter_katk_net__getStep_op;

function adapter_katk_net__getStep_serializeInput(cxfjsutils, args) {
    var wrapperObj = new adapter_katk_net__getStep();
    wrapperObj.setToken(args[0]);
    wrapperObj.setId(args[1]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://adapter.katk.net/' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:getStep', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

adapter_katk_net__IStep.prototype.getStep_serializeInput = adapter_katk_net__getStep_serializeInput;

function adapter_katk_net__getStepResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = adapter_katk_net__getStepResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function adapter_katk_net__IStep_compute_katk_net__StepServicesPort () {
  this.url = 'http://localhost:8080/atomHub/services/StepWS';
}
adapter_katk_net__IStep_compute_katk_net__StepServicesPort.prototype = new adapter_katk_net__IStep;
