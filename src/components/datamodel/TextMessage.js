'use strict';
const Message = require('./Message.js');
const MessageType = require('./MessageType.js');

class TextMessage extends Message{
    /*
    	@conversationId:String
    	@content:String
    */
	constructor(conversationId, userName, content) {
		super(conversationId, userName, MessageType.TEXT_MESSAGE);
		 this.content = content;
	}

	//@return String
	getContent(){ return this.content;}	
}

module.exports = TextMessage;