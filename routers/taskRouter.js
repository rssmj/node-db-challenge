const express = require('express');
const Task = require('../models/taskModel.js');
const router = express.Router();

router.get('/', (req, res) => {
	const task = Tasks.getTasks();
	task
		? res.status(200).json(task)
		: res
				.status(400)
				.json({ UHH: 'no tasks here' })
				.catch(() => {
					res.status(500).json({ NOPE: 'not sure' });
				});
});

module.exports = router;
