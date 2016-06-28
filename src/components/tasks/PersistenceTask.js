'use strict';
const LOG = require('components/log/logger.js');
const ATask = require('./ATask.js');
const MessageBO = require('components/storage/MessageBO.js');
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
    	MessageBO.getInstance().addNew(message);
        return true;
    }   
    

	getClass(){
		return PersistenceTask.CLASS;
	}

}

PersistenceTask.LOG_TAG = "PersistenceTask";
PersistenceTask.CLASS = "PersistenceTask";

module.exports = PersistenceTask;