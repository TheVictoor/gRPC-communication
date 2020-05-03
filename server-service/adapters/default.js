'use strict';

const fakeResponse = require('../database');

const defaultWrapper = () => {

	const defaultFunction = ({
		paylaod,
		headers,
		onSuccess,
		onError,
	}) => {
		return onSuccess({
			data: fakeResponse,
			code: 200
		});
	};

	return defaultFunction;
};

module.exports = defaultWrapper;
