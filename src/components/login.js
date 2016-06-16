'use strict';
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{color: 'white'}}>Dummy Text!</Text>
      </View>
    );
  }
}
 
var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#6E5BAA'
  }
});

module.exports = Login;