const express = require('express');
const Task = require('../models/taskModel.js');
const router = express.Router();

router.get('/', (req, res) => {
	const task = Task.getTasks();
	task
		? res.status(200).json(task)
		: res
				.status(400)
				.json({ UHH: 'no tasks here' })
				.catch(() => {
					res.status(500).json({ NOPE: 'not sure' });
				});
});

router.get('/:id', (req, res) => {
	const { id } = req.params;
	const task = Task.getTaskById(id);
	task
	? res.status(200).json({
		INCOMING: `task: ${id},`,
		SEE: task,
  })
: res
		.status(400)
		.json({ MISSING: `task: ${id} is not here`, })
		.catch(() => {
			res.status(500).json({ NOPE: 'not sure' });
		});
});

router.post('/', (req, res) => {
	const { id } = req.params;
	const body = req.body;
	const task = Task.addTask(body, id);
	task
		? res.status(201).json({ RECIEVING: `new task: ${id}`, DETAILS: body })
		: res
				.status(400)
				.json({ LOST: 'task' })
				.catch(() => {
					res.status(500).json({ OOPS: 'task crash' });
				});
});

router.delete('/:id', (req, res) => {
	const { id } = req.params;
	const task = Task.removeTask(id);
	task
		? res.status(201).json({ POOF: `task id: ${id} - gone` })
		: res
				.status(400)
				.json({ SORRY: 'no deleting this task' })
				.catch(() => {
					res.status(500).json({ NOTHING: 'broken' });
				});
});

module.exports = router;
