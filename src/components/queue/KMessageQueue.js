'use strict';

const db = require('./../db/deviceStorage.js');
class KMessageQueue {
	constructor() {
        console.log("constructor KMessageQueue");
   		//this.db = SnappyDB.getInstance(context);
        this.store = Container.getInstance().getStore(); 
    }
	
	/**
    * @message:Message
    * @return whether next task should continue.
    */
    add(message){
        var messageId = message.getId();
        _log("Add new message "+messageId)
    }

    _log(tag, msg){
        console.log(tag+" : "+msg);
    }
    _log(msg){
        console.log(KMessageQueue.LOG_TAG+" : "+msg);   
    }

	getClass(){
		return KMessageQueue.CLASS;
	}

}

KMessageQueue.LOG_TAG = "KMessageQueue";
KMessageQueue.CLASS = "KMessageQueue";