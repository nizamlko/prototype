'use strict';
const LOG = require('components/log/logger.js');
const ViewLayouts = require('components/view/ViewLayouts');
const MessageType = require('components/datamodel/MessageType.js');
const MessageView = require('components/ui/MessageView.js');

class ViewFactory{

	constructor() {
        LOG.v("ViewFactory", "constructor");
        this.viewLayouts = new ViewLayouts();
        this.viewLayouts.add(MessageType.TEXT_MESSAGE, MessageView);
    }

    static getViewFactory(){
    	LOG.v("ViewFactory", "getViewFactory");
    	return ViewFactory.INSTANCE;
    }
    
    /*
		MessageType type, MessageType subMessageType
    */
    isViewDefinedFor(messageType, subMessageType){
    	return this.viewLayouts.isLayoutDefinedFor(messageType, subMessageType);

    }

    getView(index, message){
        var messageType = message.getType();
        var subMessageType = message.getSubType();
        LOG.d("ViewFactory", "getView messageType = "+messageType);
        if(!this.isViewDefinedFor(messageType, subMessageType)){
            LOG.d("No view defined for message type: " + messageType);
            //throw new TypeError("No view defined for message type: " + messageType); //WTH
        }

        //TODO make it generic
        var messageLayOut = this.viewLayouts.getLayout(messageType);
        return messageLayOut.getView(index, message);
        //return (<messageLayOut user={message.getUserName()} message = {message.getContent()}/>);

    }
}
ViewFactory.INSTANCE = new ViewFactory();

module.exports = ViewFactory;

 
