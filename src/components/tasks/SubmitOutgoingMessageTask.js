'use strict';


class SubmitOutgoingMessageTask extends ATask{
	constructor() {
   		super();    	
    }
	
	/**
    * Process message.
    * @return whether next task should continue.
    */
    process(message){
    	console.log("processing in " + this.getClass());
    	return true;
    }

	getClass(){
		return SubmitOutgoingMessageTask.CLASS;
	}

}

SubmitOutgoingMessageTask.LOG_TAG = "SubmitOutgoingMessageTask";
SubmitOutgoingMessageTask.CLASS = "SubmitOutgoingMessageTask";