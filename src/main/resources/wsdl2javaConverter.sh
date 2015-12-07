#!/bin/sh
cd ~/opt/apache-cxf-3.0.1/bin
export JAVA_HOME=/usr/lib/jvm/java-7-openjdk-amd64/
wsdl2js http://localhost:8080/atomHub/services/AtomWS?wsdl
wsdl2js http://localhost:8080/atomHub/services/StepWS?wsdl
wsdl2js http://localhost:8080/atomHub/services/ExampleWS?wsdl
wsdl2js http://localhost:8080/atomHub/services/PeopleWS?wsdl
mv *.js ~/atomHub/src/main/webapp/js/
