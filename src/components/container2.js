'use strict';
var OutgoingMessageHandler = require('./tasks/OutgoingMessageHandler.js');
var KMessageQueue = require('./queue/KMessageQueue.js');
const ViewFactory = require('components/view/ViewFactory.js');
class Container2{
	constructor2() {
		this.activeConversation = null;
	}	

	static setActiveConversation(activeConversation) {
        this.activeConversation = activeConversation;
    }

    static getActiveConversation(){
    	return this.activeConversation;
    }   
    fun(){}
}

module.exports = Container2;
