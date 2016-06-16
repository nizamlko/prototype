import React, { Component } from 'react';
import {
  Navigator,
  StyleSheet,  
} from 'react-native';
 
var Login = require('./components/login');
var Channels = require('./components/channels');
 
var ROUTES = {
  login: Login,
  channels: Channels
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
			initialRoute={ {name: 'login'} }
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