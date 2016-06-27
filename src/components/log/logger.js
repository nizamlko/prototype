'use strict';

const LOGLEVEL ={
  VERBOSE:2,
  DEBUG:3,
  INFO:4,
  WARN:5,
  ERROR:6,
  ASSERT:7
};
const LOGGINGLEVEL = LOGLEVEL.VERBOSE;

const log = {	
	v(tag, msg){
		this._log(LOGLEVEL.VERBOSE, tag, msg);
	},	
	d(tag, msg){
		this._log(LOGLEVEL.DEBUG, tag, msg);
	},	
	i(tag, msg){
		this._log(LOGLEVEL.INFO, tag, msg);
	},		
	w(tag, msg){
		this._log(LOGLEVEL.WARN, tag, msg);
	},
	
	e(tag, msg){
		this._log(LOGLEVEL.ERROR, tag, msg);
	},

	_log(loglevel, tag, msg){
		if(loglevel <LOGGINGLEVEL)
			return;
		var prefix='';
		if(loglevel == LOGLEVEL.VERBOSE)
			prefix = "VERBOSE: "
		else if(loglevel == LOGLEVEL.DEBUG)
			prefix = "DEBUG: "
		else if(loglevel == LOGLEVEL.INFO)
			prefix = "INFO: "
		else if(loglevel == LOGLEVEL.WARN)
			prefix = "WARN: "
		else if(loglevel == LOGLEVEL.ERROR)
			prefix = "ERROR: "
		else if(loglevel == LOGLEVEL.ASSERT)
			prefix = "ASSERT: "
		
		if(tag)
			prefix = prefix + tag +" : ";

		console.log(prefix+msg);
	}
};

module.exports = log;

