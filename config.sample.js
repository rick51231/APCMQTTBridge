// Rename this file to the config.js

//Do not remove this block
var config = {};
config.core = {};
config.mqtt = {};
config.devices = {};

//Core settings
config.core.snmpPort = 162; //SNMP trap server bind port
config.core.snmpAddress = '127.0.0.1'; //SNMP trap server bind address

//MQTT settings
config.mqtt.host = ''; //MQTT server host
config.mqtt.port = 1883; //MQTT server port
config.mqtt.username = ''; //MQTT server username
config.mqtt.password = ''; //MQTT server password
config.mqtt.prefix = 'ups'; //MQTT topic prefix
config.mqtt.retain = true; //MQTT retain flag

//Example device:
config.devices.apc3000 = {
    ip: '192.168.1.10', //ups ip address
    community: 'public', //ups snmpv1 community
    interval: 30 //Query interval
};

module.exports = config; //This should be the last line
