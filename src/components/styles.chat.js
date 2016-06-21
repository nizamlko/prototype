'use strict';
import React, { Component } from 'react';
import {    
  Dimensions,
  StyleSheet
} from 'react-native'; 


var windowSize = Dimensions.get('window');

var styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'stretch',
      backgroundColor: '#ffffff'
    },
	bgImage: {
        flex: 1,
		width: null,
		height:null,
		backgroundColor:'rgba(0,0,0,0)',
    },
    topContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      backgroundColor: '#4fad54',
      paddingTop: 20,
    },
    chatContainer: {
      flex: 11,
      justifyContent: 'center',
      alignItems: 'stretch'
    },
    inputContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      backgroundColor: '#ffffff',
	  paddingTop:0,
		paddingBottom:0
    },
    textContainer: {
	  //flex: 1,		
      justifyContent: 'center'
    },
    sendContainer: {
      justifyContent: 'flex-end',
	  backgroundColor: '#ffffff',
      paddingRight: 0
    },
	addCustomContainer:{		
		justifyContent: 'flex-end',
		backgroundColor: '#4fad54',
		paddingRight:8,
		paddingLeft:8,
		paddingTop:10,
		paddingBottom:10,
		
	},
    sendLabel: {
      color: '#ffffff',
      fontSize: 15
    },
    input: {
      width: windowSize.width - 120,
      color: '#555555',
      paddingRight: 10,
      paddingLeft: 10,
      paddingTop: 5,
      height: 32,
      borderColor: '#4fad54',
      borderWidth: 1,
      borderRadius: 2,
      alignSelf: 'center',
      backgroundColor: '#ffffff'
    },
  });

module.exports = styles;