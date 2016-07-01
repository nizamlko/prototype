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
  LayoutAnimation,
  TouchableOpacity,
  ListView,
  Animated,
  StyleSheet
} from 'react-native';

var PAGE_SIZE = 4;
var THUMB_URLS = ['https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-ash3/t39.1997/p128x128/851549_767334479959628_274486868_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851561_767334496626293_1958532586_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-ash3/t39.1997/p128x128/851579_767334503292959_179092627_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851589_767334513292958_1747022277_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851563_767334559959620_1193692107_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851593_767334566626286_1953955109_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851591_767334523292957_797560749_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851567_767334529959623_843148472_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851548_767334489959627_794462220_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851575_767334539959622_441598241_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-ash3/t39.1997/p128x128/851573_767334549959621_534583464_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851583_767334573292952_1519550680_n.png'];
var NUM_SECTIONS = 100;
var NUM_ROWS_PER_SECTION = 10;

class Thumb extends Component{
  constructor(props) {
		super(props);
		this.state = {
		    thumbIndex: this._getThumbIdx(),
        dir: 'row'
    }
  }

  _getThumbIdx() {
    return Math.floor(Math.random() * THUMB_URLS.length);
  }

  _onPressThumb() {
    //var config = layoutAnimationConfigs[this.state.thumbIndex % layoutAnimationConfigs.length];
    var config = layoutAnimationConfigs[1];
    LayoutAnimation.configureNext(config);
    this.setState({
      thumbIndex: this._getThumbIdx(),
      dir: this.state.dir === 'row' ? 'column' : 'row',
    });
  }
  render() {
    return (
      <TouchableOpacity onPress={this._onPressThumb.bind(this)}>
        <View style={[styles.buttonContents, {flexDirection: this.state.dir}]}>
          <Image style={styles.img} source={{uri: THUMB_URLS[this.state.thumbIndex]}} />
          <Image style={styles.img} source={{uri: THUMB_URLS[this.state.thumbIndex]}} />
          <Image style={styles.img} source={{uri: THUMB_URLS[this.state.thumbIndex]}} />
          {this.state.dir === 'column' ?
            <Text>
              Oooo, look at this new text!  So awesome it may just be crazy.
              Let me keep typing here so it wraps at least one line.
            </Text> :
            <Text />
          }
        </View>
      </TouchableOpacity>
    );
  }
}


class ListAnimation extends Component{
  constructor(props) {
    super(props);
    var getSectionData = (dataBlob, sectionID) => {
     return dataBlob[sectionID];
   };
   var getRowData = (dataBlob, sectionID, rowID) => {
     return dataBlob[rowID];
   };

   var dataSource = new ListView.DataSource({
     getRowData: getRowData,
     getSectionHeaderData: getSectionData,
     rowHasChanged: (row1, row2) => row1 !== row2,
     sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
   });

   var dataBlob = {};
   var sectionIDs = [];
   var rowIDs = [];
   for (var ii = 0; ii < NUM_SECTIONS; ii++) {
     var sectionName = 'Section ' + ii;
     sectionIDs.push(sectionName);
     dataBlob[sectionName] = sectionName;
     rowIDs[ii] = [];

     for (var jj = 0; jj < NUM_ROWS_PER_SECTION; jj++) {
       var rowName = 'S' + ii + ', R' + jj;
       rowIDs[ii].push(rowName);
       dataBlob[rowName] = rowName;
     }
   }
    this.state = {
        dataSource: dataSource.cloneWithRowsAndSections(dataBlob, sectionIDs, rowIDs),
        headerPressCount: 0,
    }
  }

  render() {
    return (
      <ListView
        style={styles.listview}
        dataSource={this.state.dataSource}
        onChangeVisibleRows={(visibleRows, changedRows) => console.log({visibleRows, changedRows})}
        renderRow={this.renderRow}
        initialListSize={10}
        pageSize={PAGE_SIZE}
        scrollRenderAheadDistance={2000}
      />
    );
  }

  renderRow(rowData: string, sectionID: string, rowID: string) {
    return (<Thumb text={rowData}/>);
  }


  _onPressHeader(){
    console.log("_onPressHeader");
    var config = layoutAnimationConfigs[Math.floor(this.state.headerPressCount / 2) % layoutAnimationConfigs.length];
    LayoutAnimation.configureNext(config);
    this.setState({headerPressCount: this.state.headerPressCount + 1});
  }
}

var styles = StyleSheet.create({
  listview: {
    backgroundColor: '#B0C4DE',
  },
  header: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3B5998',
    flexDirection: 'row',
  },
  text: {
    color: 'white',
    paddingHorizontal: 8,
  },
  rowText: {
    color: '#888888',
  },
  thumbText: {
    fontSize: 20,
    color: '#888888',
  },
  buttonContents: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    marginVertical: 3,
    padding: 5,
    backgroundColor: '#EAEAEA',
    borderRadius: 3,
    paddingVertical: 10,
  },
  img: {
    width: 64,
    height: 64,
    marginHorizontal: 10,
  },
  section: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 6,
    backgroundColor: '#5890ff',
  },
});

var animations = {
  layout: {
    spring: {
      duration: 7500,
      create: {
        duration: 3000,
        type: LayoutAnimation.Types.easeInEaseOut,
        property: LayoutAnimation.Properties.opacity,
      },
      update: {
        type: LayoutAnimation.Types.spring,
        springDamping: 4000,
      },
    },
    easeInEaseOut: {
      duration: 3000,
      create: {
        type: LayoutAnimation.Types.easeInEaseOut,
        property: LayoutAnimation.Properties.scaleXY,
      },
      update: {
        delay: 1000,
        type: LayoutAnimation.Types.easeInEaseOut,
      },
    },
  },
};

var layoutAnimationConfigs = [
  animations.layout.spring,
  animations.layout.easeInEaseOut,
];

module.exports = ListAnimation;
