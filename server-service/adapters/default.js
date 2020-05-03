'use strict';

const defaultWrapper = () => {

	const fakeResponse = [
		{
			time: '18:00',
			date: '',
			customerId: 4
		},
		{
			time: '17:00',
			date: '',
			customerId: 3
		},
		{
			time: '16:00',
			date: '',
			customerId: 2
		},
		{
			time: '15:00',
			date: '',
			customerId: 1
		}
	];

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
