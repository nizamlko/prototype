'use strict';
import {
  StyleSheet
} from 'react-native';

var styles = StyleSheet.create({
  container: {
      flex: 0,
      flexDirection:'row',
      paddingTop:2,
      paddingBottom:2,
      paddingRight:10,
      paddingLeft:10,
      justifyContent: 'center',
      alignSelf:'flex-end'
  },
  retryTextButton:{
      flex:1,
       backgroundColor:'transparent'
  },
  messageContentContainer:{
    //flex:1,
    backgroundColor: '#c0e3cb',
    width:250,
    alignSelf:'flex-start'
  },
  messageHeader:{
    flex:1,
    flexDirection:'row',
    width:250
  },
	textContent: {
	    flex: 1,
	    fontSize: 14,
	    textAlign: 'left',
	    margin: 10,
      alignSelf:'flex-start',
      width:250
	},
  messageBubbleFooter:{
      flexDirection:'row',
      alignSelf:'flex-end',
  },
  date:{
    flex: 1,
    fontSize: 12,
    alignSelf:'flex-end',
    padding:2
  },
  headerLabel: {
      fontSize: 14,
      textAlign: 'center',
      margin: 10,
      width:50
  },
  senderNameContainer:{
      flex:1
  },
  messageHeaderMetaContainer:{
      flexDirection:'row',
      alignSelf:'flex-end',
      marginTop:0
  }
});
module.exports = styles;
