'use strict';
import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableHighlight,
  TextInput,
  ScrollView,
  Dimensions,
  StyleSheet
} from 'react-native';

const LOG = require('components/log/logger.js');
const styles = require('./styles.chat.js');
const db = require('./db/deviceStorage.js');
var windowSize = Dimensions.get('window');
var Container = require('./container.js');
var Container2 = require('./container2.js');
const TextMessage = require('components/datamodel/TextMessage.js');
const MessageView = require('components/ui/MessageView.js');
const UserMessageOutlineView = require('components/ui/UserMessageOutlineView.js');
const ViewFactory = require('components/view/ViewFactory.js');
const randomTest = require('./test/TestRandom.js');

class Chat extends Component{
	userName:String;
	constructor(props) {
		super(props);
		this.state = {
			message:'',
			messageList:[new TextMessage(this.conversationId, "user1", "message1", new Date().getTime())]

		}

		this.userName = this.props.userName;
		LOG.v("Chat constructor : "+this.userName);
		this.messageHandler = Container.getOutgoingMessageHandler();
		this.conversationId = "123";
		this.title = this.props.userName?this.props.userName:"Unknown",
		Container2.setActiveConversation(this);
		this.viewFactory = ViewFactory.getViewFactory();
	}

	async testSomethingOnSend(){
		randomTest.test(this.userName);
	}

	checkForPopulateDummyData(message){
		if(message == "populate")
			randomTest.populateChats(this.userName, 5000);
	}

    _log(msg){
    	LOG.d("CHAT : "+msg);
    }

	insertMessage(message, insertIfAbsent, insertAtFront){
    	LOG.v("CHAT", "insertMessage ->");
    	if(insertIfAbsent && this.state.messageList.indexOf(message)>-1)
    		return;
    	this.setState({messageList: this.state.messageList.concat([message])});
    }


    // message:Message
    showMessage(message){
    	LOG.v("CHAT", message);
    	if(!(this.conversationId == message.getConversationId()))
    		return;
    	this.insertMessage(message, false, false);
    	LOG.v("CHAT", "message2");

    }

	sendMessage(content){
		if(!content)
			return;

		this._log("sendMessage - "+content);
		this.messageHandler.process(new TextMessage(this.conversationId, this.userName, content, new Date().getTime()));
	}

	componentWillMount() {
	  console.log("componentWillMount");
	  //var message ={user:"user2", message:"Message 22"};
	  var message = new TextMessage(this.conversationId, "user2", "message2", new Date().getTime());
	  this.setState({messageList: this.state.messageList.concat([message])});
	  this.loadMessages();
	}

	componentDidMount(){
		console.log("componentDidMount");
	}

	loadMessages() {
		console.log("getMessages");
		db.get(this.userName).then(value => {
			console.log("loadMessages "+value);
        	if(!value)
        		return;
        	var _messageList = [];
        	for (var key in value) {            
  				//_messageList.push({user:this.userName, message:value[key]});
          _messageList.push(new TextMessage(this.conversationId, this.userName, value[key], new Date(Number(key)).getTime()));
			}
			this.setState({messageList: this.state.messageList.concat(_messageList)});
		}).done();
	}

	onBackPress() {
	  console.log("onBackPress");
      this.props.navigator.pop();
    }
    onSendPress() {

    	this.testSomethingOnSend();
    	if(!this.state.message)
    		return;
       console.log("onSendPress: "+this.state.message);
       this.checkForPopulateDummyData(this.state.message);
       //this.storeMessage(this.state.message);
       this.sendMessage(this.state.message);
	   this.setState({message: ''});
    }

    onCustomPress(){
    	console.log("onCustomPress"+this.state.message);
    }

 	render() {
    console.log("chat.render passprops "+this.props);
	  var list = this.state.messageList.map((message, index) => {
          LOG.v("CHAT render list message = "+message);
		      //TODO fix the factory and use that
          return (<UserMessageOutlineView message = {message} key={index}/>);
          //var view = this.viewFactory.getView(index, message);
		      //return view;
      		//WTH
      		//return (<MessageView key={index} user="user1" message = "message1"/>);
      		/*
      		return(
      				<View key={index}/>
      				//<MessageView key={index} user="user1" message = "message1"/>
      				//<MessageView key={index} user={message.getUserName()} message = {message.getContent()}/>
      			);
      		*/
      		/*
      		return (
      		  <View
      			style={styles.messageContainer}
      			key={index}
      			>
      			<Text style={this.nameLabel}>
      			  {message.getUserName()}
      			  <Text style={styles.messageLabel}> : {message.getContent()}</Text>
      			</Text>
      		  </View>
      		);
      		*/
	  });

	  return (
		<View style={styles.container}>
		  <View style={styles.topContainer}>
			<TouchableHighlight
			  underlayColor={'#4fad54'}
			  onPress={this.onBackPress.bind(this)}
			  style={{marginLeft: 15}}
			  >
			  <Text style={{color: '#fff'}}>{this.title}</Text>
			</TouchableHighlight>
		  </View>
		  <View style={styles.chatContainer}>
		    <Image source={require('./Images/default_background.png')} style={styles.bgImage}>
				<ScrollView
				  ref={(c) => this._scrollView = c}
				  onScroll={this.handleScroll}
				  scrollEventThrottle={16}
				  onContentSizeChange={(e) => {}}
				>
				{list}
				</ScrollView>
			</Image>

		  </View>
		  <View style={styles.inputContainer}>
			<View style={styles.addCustomContainer}>
			  <TouchableHighlight onPress={() => this.onCustomPress()} >
				<Image source={require('./Images/add_custom_message.png')} />
			  </TouchableHighlight>
			</View>
			<View style={styles.textContainer}>
			  <TextInput
				style={styles.input}
				value={this.state.message}
				onChangeText={(text) => this.setState({message: text})}
				/>
			</View>
			<View style={styles.sendContainer}>
			  <TouchableHighlight onPress={() => this.onSendPress()}>
				<Image source={require('./Images/send_blue.png')} />
			  </TouchableHighlight>
			</View>
		  </View>
		</View>
	  );
	}
}
module.exports =Chat;
