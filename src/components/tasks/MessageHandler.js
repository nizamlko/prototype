'use-strick'
class MessageHandler{
	constructor() {
		this.startingTask =null;
		initTaskList();
	}


	initTaskList(){
    	if(this instanceof MessageHandler)
    		throw new TypeError("initTaskList is abstract method");
    }

    process(String jsonString) {
        if (TextUtils.isEmpty(jsonString)) return;

        process(deserializer.deserialize(jsonString));
    }

    //message @Message or String
    process(Message messageIn) {
    	var message;

    	//TODO handle deserialization
    	if(messageIn instanceof String){
    		//if(messageIn == null || messageIn.length ==0)
    		message =null;
    	}else if(messageIn instanceof String){
    		message = messageIn;
    	}
        if (message == null) 
        	return;        

        startingTask.execute(message);
    }

}

module.exports = MessageHandler;
