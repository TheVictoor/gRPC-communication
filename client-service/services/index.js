'use strict';

const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');
const config = require('../config');

const appointmentsWrapper = require('./appointments');

module.exports = {
	appointments: appointmentsWrapper({
		grpc,
		config,
		protoLoader,
	})
}