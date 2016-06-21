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
	constructor(props) {
		super(props);
		this.state = {
			title:'A user5 ',
			message:'',
			messageList:[{user:"user1", message:"Message 1"}, {user:"user1", message:"Message 1"}, {user:"user1", message:"Message 1"}, {user:"user1", message:"Message 1"}, {user:"user1", message:"Message 1"}]
		}
	}
	
	render() {
    
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
	
	componentWillMount() {	  
	  console.log("componentWillMount");
	  this.getMessages();
	}
	
	componentDidMount(){
		console.log("componentDidMount");
	}
	
	getMessages() {
		console.log("getMessages");
	}
	
	onBackPress() {
	  console.log("onBackPress");
      this.props.navigator.pop();
    }
    onSendPress() {
       console.log("onSendPress: "+this.state.message);
       this.storeMessage(this.state.message);
       this.insertMessage(this.state.message);
	   this.setState({message: ''});
    }

    onCustomPress(){
    	console.log("onCustomPress"+this.state.message);
    }

    insertMessage(message){

    }
	
	storeMessage(message){
 		var ts = new Date().getTime();
 		//AsyncStorage.setItem("user1", this.state.message);
 		let data = {};
 		data[ts] = message;
 		//var jsonData = JSON.stringify({data});
 		var jsonData = JSON.stringify(data);
 		
 		AsyncStorage.mergeItem('user1', jsonData, () => {
 			AsyncStorage.getItem('user1', (err, result) => {
 				console.log("success2: "+result);
 				var json = eval("(" + result + ")");
 			});
 		});
 		
 	} 

	
}
 

module.exports =Chat;