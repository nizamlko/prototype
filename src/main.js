import React, { Component } from 'react';
import {
  Navigator,
  StyleSheet,
  AsyncStorage
} from 'react-native';
 
var Chat = require('./components/chat');
var Login = require('./components/login');
 
var ROUTES = {
	login: Login,
  	chat: Chat
};
 

 class Main extends Component {
 	constructor(props) {
		super(props);
		this.state = {
			init:false,
			userName:'',			
		}
	}

	async getUserId() {
	    try {
	      var value = await AsyncStorage.getItem("userName");      
	      console.log("username "+value);
	       this.setState({userName: value});
	       this.setState({init:true});
	    } catch (error) {
	      console.log('AsyncStorage error: ' + error.message);
	    }
  	}

 	componentDidMount() { 	 
   	 this.getUserId().done();   	 
   }

	renderScene(route, navigator) {
		var Component = ROUTES[route.name];
		return <Component route={route} navigator={navigator} {...route.passProps}/>;

	}
	
	render() {
		console.log("start render");
		var component = 'chat';
		if(!this.state.init)
			return null;
		if(!this.state.userName)
			component = 'login';
		
		return (
			<Navigator
				style={ styles.container }
				initialRoute={ {name:component } }
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