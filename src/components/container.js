'use strict';
var OutgoingMessageHandler = require('./tasks/OutgoingMessageHandler.js');
var KMessageQueue = require('./queue/KMessageQueue.js');

class Container{
	static getOutgoingMessageHandler(){
		if(Container.messageHandler==null)
			Container.messageHandler = new OutgoingMessageHandler(); 
		return Container.messageHandler;
	}

	//@return KMessageQueue
	static getMessageQueue(){
		if(Container.KMessageQueue==null)
			Container.KMessageQueue = new KMessageQueue(); 
		return Container.KMessageQueue;
	}
}

Container.messageHandler=null;
Container.KMessageQueue=null;

module.exports = Container;
