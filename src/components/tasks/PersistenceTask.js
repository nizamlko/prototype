'use strict';


class PersistenceTask extends ATask{
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
		return PersistenceTask.CLASS;
	}

}

PersistenceTask.LOG_TAG = "PersistenceTask";
PersistenceTask.CLASS = "PersistenceTask";