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

  render(){
    LOG.v("MessageBubble display = "+this.props.display);
    if(this.props.display==false || this.props.display=="false")
			return null;
    return(
      <Text style = {styles.nameLabel}>{this.props.message.getContent()}</Text>
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

var styles = StyleSheet.create({
  container: {
      flex: 1,
      flexDirection:'row',
      paddingTop:2,
      paddingBottom:2,
      paddingRight:10,
      paddingLeft:10,
      justifyContent: 'center',
      alignSelf:'flex-end'
  },
  retryTextButton:{
      flex:1,
       backgroundColor:'transparent'
  },
  messageContentContainer:{
    //flex:1,
    backgroundColor: '#c0e3cb',
    width:250,
    alignSelf:'flex-start'
  },
  messageHeader:{
    flex:1,
    flexDirection:'row',
    width:250
  },
	nameLabel: {
	    flex: 1,
	    fontSize: 14,
	    textAlign: 'center',
	    margin: 10,
      width:250
	},
  headerLabel: {
      fontSize: 14,
      textAlign: 'center',
      margin: 10,
      width:50
  },
  senderNameContainer:{
      flex:1
  },
  messageHeaderMetaContainer:{
      flexDirection:'row',
      alignSelf:'flex-end',
      marginTop:0
  }
});

module.exports = UserMessageOutlineView;
