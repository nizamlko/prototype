import React, { Component } from 'react';
import {
  Navigator,
  StyleSheet,  
} from 'react-native';
 
var Login = require('./components/login');
 
var ROUTES = {
  login: Login
};
 

 class Main extends Component {
	renderScene(route, navigator) {
		//var Component = ROUTES[route.name];
		return <Login route={route} navigator={navigator} />;
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