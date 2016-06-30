'use strict';
const Message = require('./Message.js');
const MessageType = require('./MessageType.js');

class TextMessage extends Message{
    /*
    	@conversationId:String
    	@content:String
    */
	constructor(conversationId, userName, content, dateTime) {
		super(conversationId, userName, MessageType.TEXT_MESSAGE);
		 this.content = content;
     this.dateTime = dateTime;
	}

	//@return String
	getContent(){ return this.content;}
  getDateTime(){ return this.dateTime;}
}

module.exports = TextMessage;
