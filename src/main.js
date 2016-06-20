import React, { Component } from 'react';
import {
  Navigator,
  StyleSheet,  
} from 'react-native';
 
var Chat = require('./components/chat');
 
var ROUTES = {
  chat: Chat
};
 

 class Main extends Component {
	renderScene(route, navigator) {
		var Component = ROUTES[route.name];
		return <Component route={route} navigator={navigator} />;
	}
	
	render() {		
		return (
		  <Navigator
			style={ styles.container }
			initialRoute={ {name: 'chat'} }
			renderScene={this.renderScene.bind(this)}
			configureScene={ (route) => { return Navigator.SceneConfigs.FloatFromRight; } }
		  />
		);		
	}
}
 
var styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

module.exports = Main;