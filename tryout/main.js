import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';


var CustomComponents = require('./CustomComponents');
var MessageView = require('./MessageView');
var UserMessageOutlineView = require('./UserMessageOutlineView');
var SimpleAnimation = require('./SimpleAnimation');
var AddRemoveExample = require('./AddRemoveExample');

class Main extends Component {

render(){
  return(
    <AddRemoveExample/>
  );
}
  render3(){
		return(
			<MessageView/>
		);
	}

	render2() {
		return (
		  <CustomComponents/>
		);
	}
}

module.exports = Main;
