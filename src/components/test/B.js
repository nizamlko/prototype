'use strict';
var A = require('components/test/a/A.js');
class B {
	constructor(){

	}
	static fun1(){
		console.log("fun1 in B");
		A.fun1();
	}
	fun2(){
		console.log("fun2 in B");
		A.fun2();
	}
}

module.exports = B;