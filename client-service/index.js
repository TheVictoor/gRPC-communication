'use strict';

require('dotenv').config();

const server = require('./server');

const init = async () => {
	try {
		const serverInstance = await server;
    await serverInstance.start();
  } catch (error) {
    console.log({ message: `App failed to start ${error.message}` });
  }
};

module.exports = init();