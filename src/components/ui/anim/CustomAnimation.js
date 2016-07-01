import React, { Component } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  Image,
  Animated,
  TouchableHighlight,
  LayoutAnimation
} from 'react-native';

var CustomLayoutSpring = {
    duration: 3000,
    create: {
      type: LayoutAnimation.Types.spring,
      property: LayoutAnimation.Properties.scaleXY,
      springDamping: 700,
    },
    update: {
      type: LayoutAnimation.Types.spring,
      springDamping: 700,
    },
  };

// Linear with easing
var CustomLayoutLinear = {
    duration: 4000,
    create: {
      type: LayoutAnimation.Types.linear,
      property: LayoutAnimation.Properties.opacity,
    },
    update: {
      type: LayoutAnimation.Types.curveEaseInEaseOut,
    },
  };

var CustomAnimation = [
  CustomLayoutSpring,
  CustomLayoutLinear,
];

module.exports = CustomAnimation;
