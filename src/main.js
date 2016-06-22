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
		console.log(route.passProps);
		var Component = ROUTES[route.name];
		return <Component route={route} navigator={navigator} {...route.passProps}/>;

	}
	
	render() {
		console.log("start render");
		var component = 'login';
		var _passProps = {};
		if(!this.state.init)
			return null;
		if(this.state.userName){
			component = 'chat';
			_passProps["userName"] = this.state.userName;
		}
		
		return (
			<Navigator
				style={ styles.container }
				initialRoute={ {name:component, passProps:_passProps } }
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