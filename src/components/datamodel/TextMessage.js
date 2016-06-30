'use strict';
const Message = require('./Message.js');
const MessageType = require('./MessageType.js');

class TextMessage extends Message{
    /*
    	@conversationId:String
    	@content:String
    */
	constructor(conversationId, userName, content, date) {
		super(conversationId, userName, MessageType.TEXT_MESSAGE);
		 this.content = content;
     this.date = date;
	}

	//@return String
	getContent(){ return this.content;}
  getDate(){
    return this.date;
  }
}

module.exports = TextMessage;
