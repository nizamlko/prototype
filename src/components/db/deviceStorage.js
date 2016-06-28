'use strict';

import { AsyncStorage } from 'react-native';
const LOG = require('components/log/logger.js');

const DeviceStorage = {
	get(key) {
		LOG.v("DeviceStorage","get key = "+key);
		return AsyncStorage.getItem(key).then(value => {
			return JSON.parse(value);
		});
	},

	save(key, value) {
		LOG.v("DeviceStorage","save value = "+value);
		return AsyncStorage.setItem(key, JSON.stringify(value));
	},	
	//merge
	update(key, value){
		LOG.v("DeviceStorage","key = "+key+", value = "+value);
		return AsyncStorage.mergeItem(key, JSON.stringify(value));
	},
	delete(key) {
		LOG.v("DeviceStorage","delete key = "+key);
		return AsyncStorage.removeItem(key);
	}
};

module.exports = DeviceStorage;