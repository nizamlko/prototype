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
			<View style={styles.view} key = {index}>
				<Text style={styles.text} maxLength={12} multiline={false}>
            		{message.getUserName()}
            	</Text>
            	<Text style={styles.text} maxLength={12} multiline={false}>
            		{message.getContent()}
            	</Text>
        	</View>
 
		);
	}


	static getView2(index, message) {
		console.log("getView2-----------");
		return(
			<View style={styles.view} key = {index}>
				<Text style={styles.text} maxLength={12} multiline={false}>
            		{message.getUserName()}
            	</Text>
            	<Text style={styles.text} maxLength={12} multiline={false}>
            		{message.getContent()}
            	</Text>
        	</View>
 
		);	
	}				
}

module.exports = MessageView;
