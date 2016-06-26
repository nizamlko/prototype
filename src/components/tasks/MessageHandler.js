'use-strick'
const LOG = require('components/log/logger.js');
const TextMessage = require('components/datamodel/TextMessage.js');

class MessageHandler{
	constructor() {
        LOG.v("constructor : MessageHandler")
		this.startingTask =null;
		this.initTaskList();
	}

	initTaskList(){
    	if(this instanceof MessageHandler)
    		throw new TypeError("initTaskList is abstract method");
    }

    process(jsonString) {
        LOG.v("MessageHandler.process with jsonString");
        if (TextUtils.isEmpty(jsonString)) 
            return;

        process(deserializer.deserialize(jsonString));
    }

    //message @Message or String
    process(messageIn) {
        LOG.v("MessageHandler.process with messageIn : " + (messageIn instanceof TextMessage));
    	var message;

    	//TODO handle deserialization
    	if(messageIn instanceof String){
    		//if(messageIn == null || messageIn.length ==0)
    		message =null;
    	}else if(messageIn instanceof TextMessage){
    		message = messageIn;
    	}
        if (message == null) 
        	return;        

        this.startingTask.execute(message);
    }

}

module.exports = MessageHandler;
