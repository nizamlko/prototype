'use strict';
import React, { Component } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  Image,
  Animated,
  TouchableHighlight,
  LayoutAnimation
} from 'react-native';

const LOG = require('components/log/logger.js');
const styles = require('./styles/styles.userMessageOutlineView.js');
const CAnimation = require('./anim/CustomAnimation.js');

class UserMessageOutlineView extends Component{
    constructor(props){
		  super(props);
      var display = true;
      if(this.props.display==false || this.props.display=="false")
        display  = false;
      this.state = {
        display:display
      }
    }
    componentDidMount(){
      /*  Animated.timing(this.state._rowOpacity, {
            toValue: 1,
            duration: 1000,
        }).start();
        */
    }
    componentWillUpdate() {
        LOG.d("CHAT","componentWillUpdate");
        //LayoutAnimation.spring();
        LayoutAnimation.configureNext(CAnimation[1]);
    }
    onHeaderDelete() {
      console.log("----------------------onHeaderDelete");
      LayoutAnimation.configureNext(CAnimation[0]);
      this.setState({display:false});
    }
    render(){
      if(!this.state.display)
        return null;
      LOG.v("UserMessageOutlineView display = "+this.props.display);
      LOG.v("UserMessageOutlineView message = "+this.props.message);
      var message = this.props.message;
      return(
        <View style={styles.container}>
            <RetryTextButton display={false}/>
            <View style = {styles.messageContentContainer}>
                <MessageHeader message = {this.props.message} chat = {this.props.chat} onDelete = {this.onHeaderDelete.bind(this)}/>
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
  onPress() {
    this.props.chat.deleteMessage(this.props.message);
    this.props.onDelete();
  }
  render(){
    if(this.props.display==false || this.props.display=="false")
      return null;
    return(
      <View style={styles.messageHeader}>
          <View style = {styles.senderNameContainer}>
              <Text>{this.props.message.getUserName()}</Text>
          </View>
          <TouchableHighlight onPress={this.onPress.bind(this)}>
              <View style = {styles.messageHeaderMetaContainer}>
                  <Image source={require('components/Images/star_on_message.png')}/>
              </View>
          </TouchableHighlight>
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
 constructor(props){
    super(props);
    var display = true;
    if(this.props.display==false || this.props.display=="false")
          display  = false;
    this.state = {display:display}
}

 render(){
		LOG.v("RetryTextButton display = "+this.props.display);
		if(!this.state.display)
			return null;
		return(
      <View style = {styles.retryTextButton}>
        <Text>RESEND</Text>
      </View>
		);
	}
}
module.exports = UserMessageOutlineView;
