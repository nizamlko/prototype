'use strict';
'use strict';
var A = require('components/test/a/A.js');
var B = require('components/test/B.js');
class C extends B{
	constructor(){
		super();
	}
	static fun1(){
		console.log("fun1 in C");
		A.fun1();
	}
	fun2(){
		console.log("fun2 in C");
		A.fun2();
	}
}

module.exports = C;