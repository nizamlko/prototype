'use strict';
import React, { Component } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text
} from 'react-native';

const LOG = require('components/log/logger.js');
class UserMessageOutlineView extends Component{
    constructor(props){
		  super(props);
    }

    render(){
      var message = this.props.message;
      return(
        <View style={styles.container}>
            <RetryTextButton display={false}/>
            <View style = {styles.messageContentContainer}>
                <MessageHeader/>
                <Text>dummy text</Text>
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
    if(this.props.display==false || this.props.display=="false")
      return null;
    return(
      <View style={styles.messageHeader}>
          <Text>h1</Text>
          <Text>h2</Text>
      </View>
    );
  }
}

class RetryTextButton extends Component{
  constructor(props) {
			super(props);
	}
	render(){
		LOG.v("SendButton display = "+this.props.display);
		if(!this.props.display)
			return null;
		return(
      <View style = {styles.sendButton}>
        <Text>RESEND</Text>
      </View>
		);
	}
}

var styles = StyleSheet.create({
  container: {
      flex: 1,
      flexDirection:'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
  },
  sendButton:{
      flex:1,
  },
  messageContentContainer:{
    flex:1,
  },
  messageHeader:{
    flex:1,
    flexDirection:'row'
  },
	nameLabel: {
	    flex: 1,
	    fontSize: 28,
	    textAlign: 'center',
	    margin: 10,
	}
});

module.exports = UserMessageOutlineView;
