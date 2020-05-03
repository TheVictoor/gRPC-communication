'use strict';

const fakeResponse = {
	time: '18:00',
	date: '2020-05-05',
	customerId: 4
};

const appointmentWrapper = ({
	grpc,
	config,
	protoLoader
}) => {

	const protoPath = `${__dirname}/../protos/appointments.proto`;
	
	const definition = protoLoader.loadSync(
		protoPath, {
			keepCase: true,
			logs: String,
			enums: String,
			defaults: true,
			oneofs: true,
		}
	);

	const proto = grpc.loadPackageDefinition(definition).appointments;

	const Scheduled = (call, callback) => {
		console.log('rpc is working');
		callback(null, fakeResponse);
	};

	return () => {
		const server = new grpc.Server();

		server.addService(proto.Appointments.service, { Scheduled });
		server.bind(`${config.RPC_HOST}:${config.RPC_PORT}`, grpc.ServerCredentials.createInsecure());
		server.start();
	};
};

module.exports = appointmentWrapper;