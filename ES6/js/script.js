'use strict'

/*
 * Either assign object to already 
 established object or start over!!!
 */
var ecmaSix = window.ecmaSix || {};

var ecmaSix = {
	init: function(){

	},

	run: function(){

	},

	//es6 params
	nameBuilder: function (firstName = 'john', lastnName = 'doe'){
		console.log(firstName, ' ',lastnName);
	}
};

//Load Content
document.addEventListener('DOMContentLoaded', function(event) {
	ecmaSix.init();
});