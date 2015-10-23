'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _bemClassnames = require('bem-classnames');

var _bemClassnames2 = _interopRequireDefault(_bemClassnames);

var suitCx = function suitCx(settings) {
	var params = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	var className = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

	var classes = (0, _bemClassnames2['default'])(settings, params, className);
	var parentName = settings.name;

	return function () {
		for (var _len = arguments.length, decendants = Array(_len), _key = 0; _key < _len; _key++) {
			decendants[_key] = arguments[_key];
		}

		return decendants.length && parentName ? decendants.map(function (child) {
			return parentName + '-' + child;
		}).join(' ') : classes;
	};
};

exports['default'] = suitCx;
module.exports = exports['default'];