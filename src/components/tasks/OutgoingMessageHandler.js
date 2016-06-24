'use strict';
class OutgoingMessageHandler{
	constructor() {
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
        startingTask = new PersistenceTask();
        startingTask
                .followedBy(new SubmitOutgoingMessageTask())                
                .followedBy(new ShowMessageInActiveConversation(context));
    }
}

module.exports = OutgoingMessageHandler;