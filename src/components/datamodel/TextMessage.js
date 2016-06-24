'use strict';
const Message = require('./Message.js');
class TextMessage extends Message{
    /*
    	@conversationId:String
    	@content:String
    */
	constructor(conversationId, content) {
		super(conversationId, MessageType.TEXT_MESSAGE);
		 this.content = content;
	}

	//@return String
	getContent(){ return this.content;}
	

}