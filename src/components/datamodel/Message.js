'use-strick'
class Message{

	/*
    	@conversationId:String
    	@type:String
    	@subType:String
    */
	constructor(conversationId, type, subType, isPersistent, isReliable, isSentAckNeeded, isVisibleInChatView) {
		this.startingTask =null;
	}

}
module.exports = Message;
