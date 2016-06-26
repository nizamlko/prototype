'use strict';
const LOG = require('components/log/logger.js');

class ATask{
	constructor() {
   		if (new.target === ATask) {
      			throw new TypeError("ATask is abstract class");
    	}
    	this.nextTask; // :ATask
    }

	//@message:Message
	execute(message) {
		LOG.d(ATask.LOG_TAG, this.getClass()+ " is processing message")		
		var shouldContinue = this.process(message);
		if(shouldContinue && this.nextTask)
			this.nextTask.execute(message);
	}

	/**
    * Process message.
    * @return whether next task should continue.
    */
    process(message){
    	if(this instanceof ATask)
    		throw new TypeError("process is abstract method");
    }

    /*
    @nextTask:ATask
	@return ATask
    */
    followedBy(nextTask) {
        this.nextTask = nextTask;
        return nextTask;
    }
    
	getClass(){
		return ATaskCLASS;
	}

}

ATask.LOG_TAG = "Task";
ATask.CLASS = "ATask";
module.exports = ATask;