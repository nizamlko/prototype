
'use strict';


import React, { Component } from 'react';
import {
  StyleSheet,
  LayoutAnimation,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';

class AddRemoveExample extends Component{
    constructor(props) {
      super(props);
      this.state = {
        views: [],
      }
  }
  componentWillUpdate() {
     LayoutAnimation.easeInEaseOut();
  }
  _onPressAddView() {
     this.setState((state) => ({views: [...state.views, {}]}));
     //this.setState( {views: [...this.state.views, {}]});
  }

  _onPressRemoveView() {
      this.setState((state) => ({views: state.views.slice(0, -1)}));
      //this.setState({views: this.state.views.slice(0, -1)});
  }

  render() {
    const views = this.state.views.map((view, i) =>
      <View key={i} style={styles.view}>
        <Text>{i}</Text>
      </View>
    );
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this._onPressAddView.bind(this)}>
          <View style={styles.button}>
            <Text>Add view</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._onPressRemoveView.bind(this)}>
          <View style={styles.button}>
            <Text>Remove view</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.viewContainer}>
          {views}
        </View>
      </View>
    );
  }
}

/*
const GreenSquare = (
  <View style={styles.greenSquare}>
    <Text>Green square</Text>
  </View>);

const BlueSquare = (
  <View style={styles.blueSquare}>
    <Text>Blue square</Text>
  </View>);

CrossFadeExample extends Component{
  constructor(props) {
    super(props);
    this.state = {
      toggled: false,
    }
  }

  _onPressToggle() {
    LayoutAnimation.easeInEaseOut();
    this.setState((state) => ({toggled: !state.toggled}));
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this._onPressToggle}>
          <View style={styles.button}>
            <Text>Toggle</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.viewContainer}>
          {
            this.state.toggled ?
            <GreenSquare /> :
            <BlueSquare />
          }
        </View>
      </View>
    );
  }
}
*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    borderRadius: 5,
    backgroundColor: '#eeeeee',
    padding: 10,
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 16,
  },
  viewContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  view: {
    height: 54,
    width: 54,
    backgroundColor: 'red',
    margin: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  greenSquare: {
    width: 150,
    height: 150,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  blueSquare: {
    width: 150,
    height: 150,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

module.exports = AddRemoveExample;
