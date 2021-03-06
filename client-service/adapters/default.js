'use strict';

const defaultWrapper = ({
	services
}) => {
	
	const defaultFunction = async ({
		paylaod,
		headers,
		onSuccess,
		onError,
	}) => {

		const response = await services.appointments({ payload: {} });

		return onSuccess({
			data: {
				data: response
			},
			code: 200
		});
	};

	return defaultFunction;
};

module.exports = defaultWrapper;
