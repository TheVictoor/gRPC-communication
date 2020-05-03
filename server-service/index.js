'use strict';

require('dotenv').config();

const server = require('./server');
const services = require('./services');

const init = async () => {
	try {
    services.appointments();

    const serverInstance = await server;
    
    await serverInstance.start();
  } catch (error) {
    console.log({ message: `App failed to start ${error.message}` });
  }
};

module.exports = init();