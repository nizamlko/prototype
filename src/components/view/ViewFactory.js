'use strict';
const LOG = require('components/log/logger.js');
const ViewLayouts = require('components/view/ViewLayouts');
const MessageType = require('components/datamodel/MessageType.js');

class ViewFactory{
	constructor() {       
        LOG.v("ViewFactory", "constructor");
        this.viewLayouts = new ViewLayouts();
        this.viewLayouts.add(MessageType.TEXT_MESSAGE, R.layout.message);
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
}
ViewFactory.INSTANCE = new ViewFactory();

module.exports = ViewFactory;

 
