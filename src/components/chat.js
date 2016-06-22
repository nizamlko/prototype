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
  AsyncStorage,
  StyleSheet
} from 'react-native'; 

const styles = require('./styles.chat.js');

var windowSize = Dimensions.get('window');

class Chat extends Component{
	userName:String;
	constructor(props) {
		super(props);
		this.userName = this.props.userName;
		console.log("constructor : "+this.userName);
		this.state = {
			title:this.props.userName?this.props.userName:"Unknown",
			message:'',
			messageList:[{user:"user1", message:"Message 1"}]
		}
	}

	
	componentWillMount() {	  
	  console.log("componentWillMount");
	  var message ={user:"user2", message:"Message 22"};
	  this.setState({messageList: this.state.messageList.concat([message])});
	  this.loadMessages();
	}
	
	componentDidMount(){
		console.log("componentDidMount");
	}
	
	loadMessages() {
		console.log("getMessages");
		AsyncStorage.getItem(this.userName).then((value) => {
        	console.log("loadMessages "+value);
        	if(!value)
        		return;
        	var jsonVal = eval("(" + value + ")");
        	var _messageList = [];
        	for (var key in jsonVal) {
  				_messageList.push({user:this.userName, message:jsonVal[key]});
			}
			this.setState({messageList: this.state.messageList.concat(_messageList)});
    	}).done();

	}
	
	onBackPress() {
	  console.log("onBackPress");
      this.props.navigator.pop();
    }
    onSendPress() {
    	if(!this.state.message)
    		return;
       console.log("onSendPress: "+this.state.message);
       this.storeMessage(this.state.message);
       this.insertMessage(this.state.message);
	   this.setState({message: ''});
    }

    onCustomPress(){
    	console.log("onCustomPress"+this.state.message);
    }

    insertMessage(message){
    	var msg ={user:this.userName, message:message};
    	this.setState({messageList: this.state.messageList.concat([msg])});
    }
	
	storeMessage(message){
 		var ts = new Date().getTime();
 		//AsyncStorage.setItem("user1", this.state.message);
 		let data = {};
 		data[ts] = message;
 		//var jsonData = JSON.stringify({data});
 		var jsonData = JSON.stringify(data);
 		if(message =="clear"){
 			AsyncStorage.removeItem(this.userName,()=>{});
 			return;
 		}
 		
 		AsyncStorage.mergeItem(this.userName, jsonData, () => {
 			AsyncStorage.getItem(this.userName, (err, result) => {
 				console.log("success2: "+result);
 				var json = eval("(" + result + ")");
 			});
 		});
 		
 	} 

 	render() {
    console.log("render passprops "+this.props);
	var list = this.state.messageList.map((item, index) => {
		return (
		  <View
			style={styles.messageContainer}
			key={index}
			>
			<Text style={this.nameLabel}>
			  {item.user}
			  <Text style={styles.messageLabel}> : {item.message}</Text>
			</Text>
		  </View>
		);
	  });
 
	  return (
		<View style={styles.container}>		
		  <View style={styles.topContainer}>
			<TouchableHighlight
			  underlayColor={'#4fad54'}
			  onPress={this.onBackPress.bind(this)}
			  style={{marginLeft: 15}}
			  >
			  <Text style={{color: '#fff'}}>{this.state.title}</Text>
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