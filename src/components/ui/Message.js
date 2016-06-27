'use strict';
import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native'; 

const styles = require('./styles.message.js');
class Message extends Component{	 
	render() {
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
}