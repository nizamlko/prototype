'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Animated
} from 'react-native';

class SimpleAnimation extends Component{
  constructor(props) {
    super(props);
    this.state = {
      bounceValue: new Animated.Value(0),
    }
  }
  render2(){
    return(
      <Text>aaaa</Text>
    );
  }
  componentDidMount() {
      this.state.bounceValue.setValue(1.5);     // Start large
      Animated.spring(                          // Base: spring, decay, timing
        this.state.bounceValue,                 // Animate `bounceValue`
        {
          toValue: 0.8,                         // Animate to smaller size
          friction: 1,                          // Bouncier spring
        }
      ).start();
    }


  render() {
   return (
     <Animated.Image                         // Base: Image, Text, View
       source={{uri: 'http://i.imgur.com/XMKOH81.jpg'}}
       style={{
         flex: 1,
         transform: [                        // `transform` is an ordered array
           {scale: this.state.bounceValue},  // Map `bounceValue` to `scale`
         ]
       }}
     />
   );
 }
}

module.exports = SimpleAnimation;
