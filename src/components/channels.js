'use strict';
import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  ListView,
  TouchableHighlight,
  StyleSheet
} from 'react-native';

var sendbird = require('sendbird');
var PULLDOWN_DISTANCE = 40;

class Channels extends Component{
	constructor(props) {
		super(props);
		var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		this.state = {
			channelList: [],
			dataSource: ds.cloneWithRows([]),
			page: 0,
			next: 0,
			channelName: ''
		};
	}

	componentWillMount() {
		this.getChannelList(1);
	}
  
  
	render(){
		return (
		    <View style={styles.container}>
				<View style={styles.listContainer}>
				  <ListView
					dataSource={this.state.dataSource}
					renderRow={(rowData) =>
					  <TouchableHighlight onPress={() => this.onChannelPress(rowData.channel_url)}>
						<View style={styles.listItem}>
						  <View style={styles.listIcon}>
							<Image style={styles.channelIcon} source={{uri: rowData.cover_img_url}} />
						  </View>
						  <View style={styles.listInfo}>
							<Text style={styles.titleLabel}># {rowData.name}</Text>
							<Text style={styles.memberLabel}>{rowData.member_count} members</Text>
						  </View>
						</View>
					  </TouchableHighlight>
					}
					onEndReached={() => this.getChannelList(this.state.next)}
					onEndReachedThreshold={PULLDOWN_DISTANCE}
				  />
				</View>
			</View>
		);
	}
	
	onChannelPress(url){
		console.log(url);
		sendbird.joinChannel(
			url,
			{
			successFunc: (data) => {
				sendbird.connect({
				  successFunc: (data) => {
					sendbird.getChannelInfo((channel) => {
					  this.props.navigator.push({ name: 'chat' });
					});
				  },
				  errorFunc: (status, error) => {
					console.log(status, error);
				  }
				});
			},
			errorFunc: (status, error) => {
				console.log(status, error);
			}
			}
		 );
	}
	
	getChannelList(page) {
		if (page == 0) {
			return;
		}
		sendbird.getChannelList({
		page: page,
		limit: 20,
		successFunc : (data) => {
			this.setState({channelList: this.state.channelList.concat(data.channels)}, () => {
			this.setState({
				dataSource: this.state.dataSource.cloneWithRows(this.state.channelList),
				page: data.page,
				next: data.next
			});
			});
		},
		errorFunc: (status, error) => {
			console.log(status, error);
		}
		});
	}
	
} 

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#ffffff'
  },
  listContainer: {
    flex: 11,
    justifyContent: 'center',
    alignItems: 'stretch',
    marginTop: 10
  },
  listItem: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7f8fc',
    borderBottomWidth: 0.5,
    borderColor: '#D0DBE4',
    padding: 5
  },
  listIcon: {
    justifyContent: 'flex-start',
    paddingLeft: 10,
    paddingRight: 15
  },
  channelIcon: {
    width: 30,
    height: 30
  },
  listInfo: {
    flex: 1,
    justifyContent: 'flex-start'
  },
  titleLabel: {
    fontSize: 15,
    fontWeight: '600',
    color: '#60768b',
  },
  memberLabel: {
    fontSize: 13,
    fontWeight: '400',
    color: '#abb8c4',
  }
});

module.exports = Channels;


