'use strict';

const db = require('./deviceStorage.js');

const TestDeviceStorage = {	
	test(){
		console.log("testDS2");
		var ts = new Date().getTime();
 		//AsyncStorage.setItem("user1", this.state.message);
 		let data = {};
 		data[ts] = "message";

 		var ts2 = new Date().getTime()+10;
 		//AsyncStorage.setItem("user1", this.state.message);
 		let data2 = {};
 		data2[ts2] = "message2";

		db
  		.save('tea', data)
		  .then(() => db.get('tea'))
		  .then((tea) => {		  	
		    console.log("tea= "+tea);
		  })
		  .then(() => db.update('tea', data2))
		  .then(() => db.get('tea'))
		  .then(tea => {
		  	data[ts] = "message3";
		    console.log("tea= "+tea);		    
		  })
		  .then(() => db.update('tea', data))
		  .then(() => db.get('tea'))
		  .then(tea => {
		    console.log("tea= "+tea);
		    return db.delete('tea');
		  })
		  .then(() => db.get('tea'))
		  .then(tea => {
		    console.log("tea= "+tea);
		  })
		  .catch(error => {
		    console.error(error.message);
		  });
	}
};

module.exports = TestDeviceStorage;

