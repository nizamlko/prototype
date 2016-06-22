'use strict';
import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableHighlight,
  AsyncStorage,
  StyleSheet
} from 'react-native';

const styles = require('./styles.login.js');
class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: ''			
		};
	}
	
	onPress() {
    if(this.state.username ==null || this.state.username =='')
      return;
		this.createUser(this.state.username);
	}

  createUser(userName){
    AsyncStorage.setItem('userName', userName, () => {
      console.log('userName '+userName+" created");
        this.props.navigator.push({ name: 'chat' });    
    });
  }
	render() {
    return (
       <View style={styles.container}>
        <View style={styles.loginContainer}>
          <TextInput
            style={styles.input}
            value={this.state.username}
            onChangeText={(text) => this.setState({username: text})}
            placeholder={'Enter User name'}
            maxLength={12}
            multiline={false}
            />
 
          <TouchableHighlight
            style={styles.button}
            underlayColor={'#328FE6'}
            onPress={this.onPress.bind(this)}
            >
            <Text style={styles.label}>LOGIN</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
	}
} 

module.exports = Login;