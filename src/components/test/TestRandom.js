const dbTest = require('./db/testDeviceStorage.js');
var Container = require('./../container.js');

const TestRandom = {
	test(){
		console.log("--------Test start");
		this.testDeviceStorage();
		//Container.getOutgoingMessageHandler();		
		//this.testAsyncWrapper();
		console.log("--------Test End");
	},

	testDeviceStorage(){
		dbTest.test();
	},

	async testAsyncWrapper(){
		var res  = await this.testAsync();
		console.log("testSomethingOnSend ="+res);
		console.log("testSomethingOnSend =2222");
	},

	async testAsync(){
		this.testFetch().done();
		console.log("fetch1");
		this.testFetch();
		console.log("fetch2");

		var response = await this.testFetch();
		console.log("fetch33");
		console.log("fetch33 response "+response);
		return response;
	},

	testFetch(){

		return fetch('http://api.openweathermap.org/data/2.5/forecast/daily')
			.then((response) => response.text())
			.then((responseText) => {
			  console.log(responseText);
			  return responseText;
			})
			.catch((error) => {
			  console.warn(error);
			  return error;
			});
	}
};

module.exports = TestRandom;