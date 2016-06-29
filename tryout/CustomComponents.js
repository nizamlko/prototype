

import React, { Component } from 'react';
import {  
  StyleSheet,
  View,
  Text,
} from 'react-native';

class CustomFontButton extends Component{
	constructor(props) {		
			super(props);
	}
	render(){
		console.log("CustomFontButton display = "+this.props.display);
		if(!this.props.display)
			return null;
		return(
			<Text style={styles.nameLabel} >user2</Text>
		);
	}
}

class CustomComponents extends Component {
 	constructor(props) {
		super(props);
		this.state = {
			init:false,
			userName:'',			
		}
	}
	
 	componentDidMount() {
   	 	console.log("componentDidMount");
   	}	
	
	render() {
		console.log("MEssageView-----------");
    	var show = true;
		return (
		  <View style={styles.container} >
        	{this.getAnotherView(true)}
        	<CustomFontButton display={false}/> 
        	
  		  	<Text style={styles.nameLabel}>user3</Text>
		  </View>
		);		
	}
	getAnotherView(show){
  		if(show)
			return (<Text style={styles.nameLabel}>user1</Text>);
		return null;
  	}
}
 
var styles = StyleSheet.create({
    container: {
	    flex: 1,
	    flexDirection:'row',
	    justifyContent: 'center',
	    alignItems: 'center',
	    backgroundColor: '#F5FCFF',
  	},
	nameLabel: {
	    flex: 1,
	    fontSize: 28,
	    textAlign: 'center',
	    margin: 10,
	}
});

module.exports = CustomComponents;