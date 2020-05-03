'use strict';

const defaultAdapter = require('./default');
const services = require('./../services');

module.exports = {
	default: defaultAdapter({
		services
	}),
};
