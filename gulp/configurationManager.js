/**
 * Created by RobertSabiryanov on 24.06.15.
 */
var gulp = require('gulp');
var config = require('./config/config.json');

var assign = require('lodash.assign');

module.exports.set= function set(customConfig){
	assign(config, customConfig);
};

module.exports.get= function get(){
	return config;
};

