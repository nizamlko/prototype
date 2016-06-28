'use strict';
import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native'; 

const styles = require('./styles.message.js');
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

	static getView(index, message) {
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
