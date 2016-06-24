'use strict';


class ShowMessageInActiveConversation extends ATask{
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
        return ShowMessageInActiveConversation.CLASS;
    }

}

ShowMessageInActiveConversation.LOG_TAG = "ShowMessageInActiveConversation";
ShowMessageInActiveConversation.CLASS = "ShowMessageInActiveConversation";