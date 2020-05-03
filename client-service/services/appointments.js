'use strict';

const appointmentsWrapper = ({
	grpc,
	config,
	protoLoader,
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

	console.log(config);

	const appointmentsProto = grpc.loadPackageDefinition(definition).appointments;
	const appointmentsClient = new appointmentsProto.Appointments(config.RPC_HOST_SERVICE, grpc.credentials.createInsecure());

	const appointmentsInterface = (request) => {
		return new Promise((resolve, reject) => {
			
			appointmentsClient.scheduled(request.payload, function (err, response) {
				if (err) 
					return reject(err);

				return resolve(response);
			});
			
		});
	};

	return appointmentsInterface;
};

module.exports = appointmentsWrapper;
