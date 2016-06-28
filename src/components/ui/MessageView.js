'use strict';
import React, { Component } from 'react';
import {
  View,
  TextInput,
  Text
} from 'react-native'; 

const styles = require('./styles.messageView.js');
class MessageView extends Component{
	render() {
		console.log("MEssageView-----------");
		return (
		  <View
			style={styles.messageContainer}
			key={index}
			>
			<Text style={this.nameLabel}>
			  {this.props.user}
			  <Text style={styles.messageLabel}> : {this.props.message}</Text>
			</Text>
		  </View>
		);		
	}

	static getView(index, message){
		return(
			<View key = {index}	style={styles.view}>
				<TextInput   style={styles.input}
        	    	value={message.getUserName()}
            		maxLength={12}
            		multiline={false}
            	/>
            	<TextInput  style={styles.input}  	        	
        	    	value={message.getContent()}
            		maxLength={12}
            		multiline={false}
            	/>
        	</View>
 
		);
	}


	static getView2(index, message) {
		console.log("getView-----------");
		return (
		  <View			
			key={index}
			>
			<Text>
			  {message.getUserName()}
			  <Text> : {message.getContent()}</Text>
			</Text>
		  </View>
		);		
	}				
}

module.exports = MessageView;
