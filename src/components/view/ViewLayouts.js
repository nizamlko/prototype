'use strict';
const LOG = require('components/log/logger.js');
const MessageType = require('components/datamodel/MessageType.js');

class ViewLayouts{
	constructor() {       
        LOG.v("ViewLayouts", "constructor");
        this.viewableMessages = [];
        this.layouts = {};
    }

    /*
        @return void 
        MessageType messageType, int layout 
    */
    add(messageType, layout) {
        this.viewableMessages.push(messageType);        
        this.layouts[messageType] = layout;
    }

    /*
        @return int
    */
    getLayoutsCount() {
        return this.viewableMessages.length;
    }

    /*
        @return int
        MessageType type
    */
    getViewType(type) {
        return this.viewableMessages.indexOf(type);
    }

    /*
        @return int
        MessageType type
    */

    getLayout(type) {
        return this.layouts[type];
    }
    
    /*
        @return boolean
		MessageType type, MessageType subMessageType
    */
    isLayoutDefinedFor(messageType, subMessageType){
        if(messageType == MessageType.GENERIC_MESSAGE)
            return this.layouts.hasOwnProperty(subMessageType);
        return this.layouts.hasOwnProperty(messageType);
    }
}


module.exports = ViewLayouts;

 
