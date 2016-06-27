'use strict';
const ATask = require('./ATask.js');
var Container = require('components/container.js');

class ShowMessageInActiveConversation extends ATask{
    constructor() {
        super();
        //viewFactory:ViewFactory
        //this.viewFactory = Container.getOutgoingMessageHandler();
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

module.exports = ShowMessageInActiveConversation;