import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';


var CustomComponents = require('./CustomComponents');
var MessageView = require('./MessageView');
var UserMessageOutlineView = require('./UserMessageOutlineView');


class Main extends Component {

render(){
  return(
    <UserMessageOutlineView/>
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
