'use strict';
import React, { Component } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  Image,
} from 'react-native';

const LOG = require('components/log/logger.js');
const styles = require('./styles/styles.userMessageOutlineView.js');

class UserMessageOutlineView extends Component{
    constructor(props){
		  super(props);
    }
    render(){
      LOG.v("UserMessageOutlineView display = "+this.props.display);
      LOG.v("UserMessageOutlineView message = "+this.props.message);
      var message = this.props.message;
      return(
        <View style={styles.container}>
            <RetryTextButton display={false}/>
            <View style = {styles.messageContentContainer}>
                <MessageHeader message = {this.props.message}/>
                <MessageBubble message = {this.props.message}/>
            </View>
        </View>
      );
    }
}

class MessageHeader extends Component{
  constructor(props) {
			super(props);
	}
  render(){
    LOG.v("MessageHeader display = "+this.props.display);
    LOG.v("MessageHeader message = "+this.props.message);
    if(this.props.display==false || this.props.display=="false")
      return null;
    return(
      <View style={styles.messageHeader}>
          <View style = {styles.senderNameContainer}>
              <Text>{this.props.message.getUserName()}</Text>
          </View>
          <View style = {styles.messageHeaderMetaContainer}>
              <Image source={require('components/Images/star_on_message.png')}/>
          </View>
      </View>
    );
  }
}

class MessageBubble extends Component{
  constructor(props) {
			super(props);
	}
  getMonthString(month){
    if(month ==5)
      return "JUN";
    if(month ==6)
      return "JUL"
  }
  formatDate(dateTime){
    LOG.v("UserMessageOutlineView", dateTime);
    var dateObj = new Date(dateTime);
    var month = dateObj.getMonth();
    var date = dateObj.getDate();
    var hours = dateObj.getHours();
    var min = dateObj.getMinutes();
    var amPM = hours<12? "AM":"PM";
    if(hours>12)
      hours = hours-12;

    return this.getMonthString(month)
                +" "+date
                +", "+hours
                +":"+min
                +" "+amPM;
  }

  render(){
    LOG.v("MessageBubble display = "+this.props.display);
    if(this.props.display==false || this.props.display=="false")
			return null;
    return(
      <View>
        <Text style = {styles.textContent}>{this.props.message.getContent()}</Text>
        <View style={styles.messageBubbleFooter}>
          <Text style = {styles.date}>{this.formatDate(this.props.message.getDateTime())}</Text>
          <Image source={require('components/Images/message_sent.png')}/>
        </View>
      </View>
    );
  }
}

class RetryTextButton extends Component{
  constructor(props) {
			super(props);
	}
	render(){
		LOG.v("RetryTextButton display = "+this.props.display);
		if(this.props.display==false || this.props.display=="false")
			return null;
		return(
      <View style = {styles.retryTextButton}>
        <Text>RESEND</Text>
      </View>
		);
	}
}
module.exports = UserMessageOutlineView;
