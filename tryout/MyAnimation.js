'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Animated
} from 'react-native';

var {
  width,
  height
} 
var SQUARE_DIMENSIONS = 30;

class MyAnimation extends Component{
  constructor(props) {
    super(props);
    this.state = {
      pan: new Animated.ValueXY()
    }
  }

  getStyle(){
    return (
            styles.square,
            {transform: this.state.pan.getTranslateTransform()}
          );
  }
  render(){
    return (
      <View style={styles.container}>
        <Animated.View style={this.getStyle()} />
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1
  },
  square: {
    width: SQUARE_DIMENSIONS,
    height: SQUARE_DIMENSIONS,
    backgroundColor: 'blue'
  }
});
module.exports = MyAnimation;
