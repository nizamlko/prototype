'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';


class MessageView extends Component {
 	constructor(props){
		super(props);
		this.state = {init:false}
	}
	render() {
		return (
		  <View style={styles.container}>
          <View style = {styles.sendButton}>
            <Text>button
            </Text>
          </View>
          <View style = {styles.messageContentContainer}>
              <View style={styles.messageHeader}>
                  <Text>h1</Text>
                  <Text>h2</Text>
              </View>
              <Text>dummy text</Text>

          </View>
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

module.exports = MessageView;
