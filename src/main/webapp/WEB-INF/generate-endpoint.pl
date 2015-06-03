#!/usr/bin/perl

open(OUT,">endpoints.xml");

my %h = (
  "Atom" => "net.katk.compute.AtomServices",
  "Step" => "net.katk.compute.StepServices",
  "Example" => "net.katk.compute.ExampleServices",
  "People" => "net.katk.compute.PeopleServices"
);



sub displayEndPoints($$)
{
my ($name,$class) = @_;

my $jms_name  = $name . "JMS";
my $rs_name   = $name . "RS";
my $ws_name   = $name . "WS";
my $bean_name = $name . "Bean";

# print OUT	"<bean id=\"theJmsConfig".$name."\" class=\"org.apache.cxf.transport.jms.JMSConfiguration\"\n";
# print OUT	"	p:connectionFactory-ref=\"jmsConnectionFactory\"\n";
# print OUT	"	p:targetDestination=\"\${LOCALPROPERTIES.PROJECTNAME}.\${LOCALPROPERTIES.INPUTQUEUE}.\${ADAPTERPROPERTIES.NAME}.\${ADAPTERPROPERTIES.VERSION}.".$name."\"\n";
# print OUT	"/>\n";
# print OUT	"<jaxws:endpoint id=\"$jms_name\" address=\"jms:queue:\${LOCALPROPERTIES.PROJECTNAME}.\${LOCALPROPERTIES.OUTPUTQUEUE}.\${ADAPTERPROPERTIES.NAME}.\${ADAPTERPROPERTIES.VERSION}.".$name."//\"\n";
# print OUT	"	implementor=\"#$bean_name\">\n";
# print OUT	"	<jaxws:features>\n";
# print OUT	"		<bean class=\"org.apache.cxf.transport.jms.JMSConfigFeature\" p:jmsConfig-ref=\"theJmsConfig".$name."\" />\n";
# print OUT	"	</jaxws:features>\n";
# print OUT	"	<jaxws:properties>\n";
# print OUT	"		<entry key=\"faultStackTraceEnabled\" value=\"true\" />\n";
# print OUT	"		<entry key=\"exceptionMessageCauseEnabled\" value=\"true\" />\n";
# print OUT	"	</jaxws:properties>\n";
# print OUT	"</jaxws:endpoint>\n";
print OUT	"<jaxrs:server id=\"$rs_name\" address=\"/$rs_name\">\n";
print OUT	"	<jaxrs:serviceBeans>\n";
print OUT	"		<ref bean=\"$bean_name\"/>\n";
print OUT	"	</jaxrs:serviceBeans>\n";
print OUT	"</jaxrs:server>\n";
print OUT	"<jaxws:endpoint id=\"$ws_name\" address=\"/$ws_name\" implementor=\"#$bean_name\">\n";
print OUT	"	<jaxws:properties>\n";
print OUT	"		<entry key=\"faultStackTraceEnabled\" value=\"true\" />\n";
print OUT	"		<entry key=\"exceptionMessageCauseEnabled\" value=\"true\" />\n";
print OUT	"	</jaxws:properties>\n";
print OUT	"</jaxws:endpoint>\n";
print OUT	"<bean id=\"$bean_name\" class=\"$class\"/>\n";
print OUT   "\n\n";
}


print OUT "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n";
print OUT "<beans\n";
print OUT " xmlns=      \"http://www.springframework.org/schema/beans\"\n";
print OUT "	xmlns:p=    \"http://www.springframework.org/schema/p\"\n";
print OUT "	xmlns:xsi=  \"http://www.w3.org/2001/XMLSchema-instance\"\n";
print OUT "	xmlns:cxf=  \"http://cxf.apache.org/core\"\n";
print OUT "	xmlns:jms=  \"http://cxf.apache.org/transports/jms\"\n";
print OUT "	xmlns:ct=   \"http://cxf.apache.org/configuration/types\"\n";
print OUT "	xmlns:jaxrs=\"http://cxf.apache.org/jaxrs\"\n";
print OUT "	xmlns:jaxws=\"http://cxf.apache.org/jaxws\"\n";
print OUT "	xmlns:camel=\"http://camel.apache.org/schema/spring\"\n";
print OUT "	xsi:schemaLocation=\"\n";
print OUT "	http://cxf.apache.org/jaxrs http://cxf.apache.org/schemas/jaxrs.xsd\n";
print OUT "	http://cxf.apache.org/jaxws http://cxf.apache.org/schemas/jaxws.xsd\n";
print OUT "	http://cxf.apache.org/transports/jms http://cxf.apache.org/schemas/configuration/jms.xsd\n";
print OUT "	http://cxf.apache.org/transports/camel http://cxf.apache.org/transports/camel.xsd\n";
print OUT "	http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd\n";
print OUT "	http://camel.apache.org/schema/spring http://camel.apache.org/schema/spring/camel-spring.xsd\">\n";
print OUT "\n\n";
foreach my $k (keys %h)
{
  displayEndPoints($k,$h{$k});
}
print OUT	 "</beans>\n";
close(OUT);
