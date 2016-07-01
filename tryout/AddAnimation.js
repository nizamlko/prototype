'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Animated,
  Image,
  Text
} from 'react-native';

class AddAnimation extends Component{
  constructor(props) {
    super(props);
    this.state = {
       opacity: new Animated.Value(0)
    }
  }

  componentDidMount() {
        Animated.timing(this.state.opacity, {
            toValue: 1,
            duration: 1000,
        }).start();
}
  render(){
    return (
        <Animated.View style={[styles.wrapper, {opacity: this.state.opacity}]}>
          <Image source={{uri: 'http://placehold.it/150x150'}} style={styles.image}/>
                  <Text style={styles.text}>
                      Text
                  </Text>
              </Animated.View>
          );
  }
}

var styles = StyleSheet.create({
  wrapper: {
       flex: 1,
       flexDirection: 'row',
       justifyContent: 'flex-start',
       alignItems: 'center',
   },
   image: {
       height: 40,
       width: 40,
       marginRight: 16,
       backgroundColor: '#C9D5E6'
   },
   text: {
       fontSize: 20
   }
});
module.exports = AddAnimation;
