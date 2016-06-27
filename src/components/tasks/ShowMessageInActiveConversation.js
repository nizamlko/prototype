'use strict';
const LOG = require('components/log/logger.js');
//TODO explore-> I have no idea why getActiveConversation is not visible here when declared in container.js 
const Container2 = require('./../container2.js');
const ATask = require('./ATask.js');
const ViewFactory = require('components/view/ViewFactory.js');


class ShowMessageInActiveConversation extends ATask{
    constructor() {
        super();
        LOG.v("ShowMessageInActiveConversation", "constructor");        
        //viewFactory:ViewFactory 
        this.viewFactory = ViewFactory.getViewFactory();

        //TODO No idea why Container.getViewFactory is not working
        //this.viewFactory = Container.getViewFactory();

    }
    
    /**
    * Process message.
    * @return whether next task should continue.
    */
    process(message){
        console.log("processing in " + this.getClass());        
        var messageType = message.getType();
        var messageSubType = message.getSubType();
        var activeConversation = Container2.getActiveConversation();

        if (message.isVisibleInChatView() && this.viewFactory.isViewDefinedFor(messageType, messageSubType)) {
            LOG.v("ShowMessageInActiveConversation", "showMessage in activeConversation");
            if(activeConversation != null){
                activeConversation.showMessage(message);    
            }
        }


        return true;
    }

    getClass(){
        return ShowMessageInActiveConversation.CLASS;
    }

}

ShowMessageInActiveConversation.LOG_TAG = "ShowMessageInActiveConversation";
ShowMessageInActiveConversation.CLASS = "ShowMessageInActiveConversation";

module.exports = ShowMessageInActiveConversation;