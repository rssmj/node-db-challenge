const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const server = express().use(express.json());

const projectRouter = require('./routers/projectRouter.js');
const resourceRouter = require('./routers/resourceRouter.js');
const taskRouter = require('./routers/taskRouter.js');

server.use(helmet());
server.use(cors());

server.use('/api/projects', projectRouter);
server.use('/api/resources', resourceRouter);
server.use('/api/tasks', taskRouter);

server.get('/', (req, res) => {
	res.status(418).json({ ['--> --> -->']: '[+_[-__-]_+]' });
});

module.exports = server;
