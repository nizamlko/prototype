'use strict';
const LOG = require('components/log/logger.js');
const db = require('components/db/deviceStorage.js');

class MessageBO{
	
    constructor() {LOG.v("MessageBO", "constructor");}

    static getInstance(){
        if(MessageBO.INSTANCE ==null)
            MessageBO.INSTANCE = new MessageBO();
        return MessageBO.INSTANCE;
    }

    addNew(message){    
        var userName = message.getUserName();
        var content = message.getContent();
        if(content =="clear"){
            db.delete(userName);           
            return;
        }
        var ts = new Date().getTime();
        //AsyncStorage.setItem("user1", this.state.message);
        let data = {};
        data[ts] = content;

        db.update(userName, data)
        .then( () => db.get(userName))
        .then(value => {
            console.log("success2: "+value);
        });     
        
    
    }
	
	/**
    * Process message.
    * @return whether next task should continue.
    */
    

	getClass(){
		return MessageBO.CLASS;
	}

}

MessageBO.LOG_TAG = "MessageBO";
MessageBO.CLASS = "MessageBO";
MessageBO.INSTANCE = null;

module.exports = MessageBO;