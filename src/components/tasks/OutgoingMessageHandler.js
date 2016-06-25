'use strict';
const SubmitOutgoingMessageTask = require('components/tasks/SubmitOutgoingMessageTask.js');
const MessageHandler = require('./MessageHandler.js');
const PersistenceTask = require('./PersistenceTask.js');
const ShowMessageInActiveConversation = require('./ShowMessageInActiveConversation.js');


class OutgoingMessageHandler extends MessageHandler{
	constructor() {
		super();
		this.startingTask;
		console.log("OutgoingMessageHandler is getting created");
	}
	fun(){
		console.log("fun in OutgoingMessageHandler");
	}

	//@Override
	// @return void
	//TODO include LiveMessageCorrelationTask and PersistenceTask
    initTaskList() {
        this.startingTask = new PersistenceTask();
        this.startingTask
                .followedBy(new SubmitOutgoingMessageTask())                
                .followedBy(new ShowMessageInActiveConversation());
    }
}

module.exports = OutgoingMessageHandler;