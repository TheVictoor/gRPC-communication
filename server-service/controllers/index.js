'use strict';

const adapters = require('./../adapters');

module.exports = {
	default: (request, response) => {
		return adapters.default({
			payload: {
				...request.payload,
				...request.params,
				...request.query,
			},
			header: request.header,
			onSuccess: ({ data, code }) => {
				return response.response(data).code(code);
			},
			onError: ({ data, code }) => {
				return response.response(data).code(code);
			},
		})
	},
	travelServicesWithGRPC: (request, response) => {},
	travelServicesWithoutGRPC: (request, response) => {},
};
