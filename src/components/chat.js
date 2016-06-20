'use strict';
import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableHighlight,
  TextInput,
  ScrollView,
  Dimensions,
  StyleSheet
} from 'react-native'; 

var windowSize = Dimensions.get('window');

class Chat extends Component{
	constructor(props) {
		super(props);
		this.state = {
			title:'A user5 ',
			message:'',
			messageList:[{user:"user1", message:"Message 1"}, {user:"user1", message:"Message 1"}, {user:"user1", message:"Message 1"}, {user:"user1", message:"Message 1"}, {user:"user1", message:"Message 1"}]
		}
	}
	
	render() {
    
	var list = this.state.messageList.map((item, index) => {
		return (
		  <View
			style={styles.messageContainer}
			key={index}
			>
			<Text style={this.nameLabel}>
			  {item.user}
			  <Text style={styles.messageLabel}> : {item.message}</Text>
			</Text>
		  </View>
		);
	  });
 
	  return (
		<View style={styles.container}>		
		  <View style={styles.topContainer}>
			<TouchableHighlight
			  underlayColor={'#4fad54'}
			  onPress={this.onBackPress.bind(this)}
			  style={{marginLeft: 15}}
			  >
			  <Text style={{color: '#fff'}}>{this.state.title}</Text>
			</TouchableHighlight>
		  </View>
		  <View style={styles.chatContainer}>
		    <Image source={require('./Images/default_background.png')} style={styles.bgImage}>
				<ScrollView
				  ref={(c) => this._scrollView = c}
				  onScroll={this.handleScroll}
				  scrollEventThrottle={16}
				  onContentSizeChange={(e) => {}}
				>
				{list}
				</ScrollView>
			</Image>
			
		  </View>
		  <View style={styles.inputContainer}>
			<View style={styles.addCustomContainer}>
			  <TouchableHighlight onPress={() => this.onSendPress()} >
				<Image source={require('./Images/add_custom_message.png')} />							
			  </TouchableHighlight>
			</View>
			<View style={styles.textContainer}>
			  <TextInput
				style={styles.input}
				value={this.state.message}
				onChangeText={(text) => this.setState({message: text})}
				/>
			</View>
			<View style={styles.sendContainer}>
			  <TouchableHighlight onPress={() => this.onSendPress()}>
				<Image source={require('./Images/send_blue.png')} />							
			  </TouchableHighlight>
			</View>
		  </View>
		</View>
	  );
	}
	
	componentWillMount() {	  
	  this.getMessages();
	}
	
	getMessages() {
		console.log("getMessages");
	}
	
	onBackPress() {
	  console.log("onBackPress");
      this.props.navigator.pop();
    }
	
	onSendPress() {
       console.log("onSendPress"+this.state.message);	   
	   this.setState({message: ''});
    }
}
 var styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'stretch',
      backgroundColor: '#ffffff'
    },
	bgImage: {
        flex: 1,
		width: null,
		height:null,
		backgroundColor:'rgba(0,0,0,0)',
    },
    topContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      backgroundColor: '#4fad54',
      paddingTop: 20,
    },
    chatContainer: {
      flex: 11,
      justifyContent: 'center',
      alignItems: 'stretch'
    },
    inputContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      backgroundColor: '#ffffff',
	  paddingTop:0,
		paddingBottom:0
    },
    textContainer: {
	  //flex: 1,		
      justifyContent: 'center'
    },
    sendContainer: {
      justifyContent: 'flex-end',
	  backgroundColor: '#ffffff',
      paddingRight: 0
    },
	addCustomContainer:{		
		justifyContent: 'flex-end',
		backgroundColor: '#4fad54',
		paddingRight:8,
		paddingLeft:8,
		paddingTop:10,
		paddingBottom:10,
		
	},
    sendLabel: {
      color: '#ffffff',
      fontSize: 15
    },
    input: {
      width: windowSize.width - 120,
      color: '#555555',
      paddingRight: 10,
      paddingLeft: 10,
      paddingTop: 5,
      height: 32,
      borderColor: '#4fad54',
      borderWidth: 1,
      borderRadius: 2,
      alignSelf: 'center',
      backgroundColor: '#ffffff'
    },
  });

module.exports =Chat;