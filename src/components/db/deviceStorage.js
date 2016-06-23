'use strict';

import { AsyncStorage } from 'react-native';

const DeviceStorage = {
	get(key) {
		return AsyncStorage.getItem(key).then(value => {
			return JSON.parse(value);
		});
	},

	save(key, value) {
		return AsyncStorage.setItem(key, JSON.stringify(value));
	},	
	//merge
	update(key, value){
		return AsyncStorage.mergeItem(key, JSON.stringify(value));
	},
	delete(key) {
		return AsyncStorage.removeItem(key);
	}
};

module.exports = DeviceStorage;