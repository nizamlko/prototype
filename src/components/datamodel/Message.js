'use-strick'
class Message{

	/*
    	@conversationId:String
    	@type:String
    	@subType:String
    */
	constructor(conversationId, type, subType, isPersistent, isReliable, isSentAckNeeded, isVisibleInChatView) {
		this.startingTask =null;
		this.type = type;
		this.subType = subType? subType:null;
		this.isPersistent = (isPersistent==false)?false:true;
		this.isReliable = (isReliable==false)?false:true;
		this.isSentAckNeeded =  (isSentAckNeeded==false)?false:true;
		this.visibleInChatView = (isVisibleInChatView==false)?false:true;

	}

	getType(){
		return this.type;
	}

	getSubType(){
		return this.subType;
	}

	isVisibleInChatView(){
		return this.visibleInChatView;
	}



}
module.exports = Message;
