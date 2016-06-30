'use strict';
import {
  StyleSheet
} from 'react-native';

var styles = StyleSheet.create({
    messageContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'stretch',
      backgroundColor: '#ffffff'
    },
	  view: {
	    width: 250,
	    margin: 10,
	    height: 70,
	    borderColor: '#32C5E6',
	    borderWidth: 1,
	    borderRadius: 4,
	    alignSelf: 'flex-start',
	    backgroundColor: '#ffffff'
	  },

	  text: {
	  	textDecorationLine:'none',
	    width: 250,
	    padding: 5,
	    height: 30,
	    color:'#32C5E6',
	    borderWidth: 0,
	    borderColor: '#ffffff',
	    alignSelf: 'flex-start',
	  }

  });

module.exports = styles;
