'use strict';


class ATask{
	constructor() {
   		if (new.target === ATask) {
      			throw new TypeError("ATask is abstract class");
    	}
    	this.nextTask; // :ATask
    }

	//@message:Message
	execute(message) {
		this._log(this.getClass()+ " is processing message");
		var shouldContinue = this.process(message);
		if(shouldContinue && this.nextTask)
			nextTask.execute(message);
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

	_log(tag, msg){
		console.log(tag+" : "+msg);
	}
	_log(msg){
		console.log(ATask.LOG_TAG+" : "+msg);	
	}

	getClass(){
		return ATaskCLASS;
	}

}

ATask.LOG_TAG = "Task";
ATask.CLASS = "ATask";