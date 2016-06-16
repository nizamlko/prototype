'use strict';
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight
} from 'react-native';
 
var sendbird = require('sendbird');
 

class Chat extends Component{
	constructor(props) {
		super(props);
	}
	
	render() {
    
	return (
        <View style={styles.container}>
          <View style={styles.topContainer}>
            <TouchableHighlight
              underlayColor={'#4e4273'}
              onPress={this.onBackPress.bind(this)}
              style={{marginLeft: 15}}
              >
              <Text style={{color: '#fff'}}>&lt; Back</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.chatContainer}>
            <Text style={{color: '#000'}}>Chat</Text>
          </View>
          <View style={styles.inputContainer}>
            <Text style={{color: '#000'}}>Input</Text>
          </View>
        </View>
		);
	}
	
	onBackPress() {
      this.props.navigator.pop();
    }
}
 
var styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'stretch',
      backgroundColor: '#ffffff'
    },
    topContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      backgroundColor: '#6E5BAA',
      paddingTop: 20,
    },
    chatContainer: {
      flex: 11,
      justifyContent: 'center',
      alignItems: 'stretch'
    },
    inputContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'stretch'
    }
  });

module.exports =Chat;