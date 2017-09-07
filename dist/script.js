'use strict';

/*
 * Either assign object to already 
 established object or start over!!!
 */

var ecmaSix = window.ecmaSix || {};

var ecmaSix = {

	theText: document.getElementById('theText'),

	init: function init() {
		var nums = [1, 2, 3];
		var doubleNums = nums.map(function (e) {
			return e * 2;
		});
		//
		theText.innerHTML = 'nameBuilder ' + doubleNums;
		console.log('doubleNums ', doubleNums);
		//
		return doubleNums;
	},

	run: function run() {},

	//es6 params
	nameBuilder: function nameBuilder() {
		var firstName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'john';
		var lastnName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'doe';

		console.log(firstName, ' ', lastnName);
	}
};

//Load Content
document.addEventListener('DOMContentLoaded', function (event) {
	ecmaSix.init();
});