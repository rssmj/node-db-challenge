const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const server = express();

// const projectRouter = require('../routers/projectRouter.js');
// const taskRouter = require('../routers/taskRouter.js');

server.use(express.json());
server.use(helmet());
server.use(cors());

// server.use('/api/projects', projectRouter);
// server.use('/api/tasks', taskRouter);

server.get('/', (req, res) => {
	res.send('<[--]>');
});

module.exports = server;
