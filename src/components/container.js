'use strict';
var OutgoingMessageHandler = require('./tasks/OutgoingMessageHandler.js');
var KMessageQueue = require('./queue/KMessageQueue.js');
const ViewFactory = require('components/view/ViewFactory.js');
class Container{
	static getOutgoingMessageHandler(){
		console.log("Container.getOutgoingMessageHandler Container.messageHandler==null ? "+(Container.messageHandler==null));
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

	static getViewFactory(){
		if(Container.viewFactory==null)
			Container.viewFactory = new ViewFactory(); 
		return Container.viewFactory;
	}
}

Container.messageHandler=null;
Container.KMessageQueue=null;
Container.viewFactory=null;

module.exports = Container;
