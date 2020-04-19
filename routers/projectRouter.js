const express = require('express');
const Project = require('../models/projectModel.js');
const router = express.Router();

router.get('/', (req, res) => {
	const project = Project.getProjects();
	project
		? res.status(200).json(project)
		: res
				.status(400)
				.json({ UHH: 'no projects here' })
				.catch(() => {
					res.status(500).json({ NOPE: 'not sure' });
				});
});

router.get('/:id', (req, res) => {
	const { id } = req.params;
	const project = Project.getProjectById(id);
	project
		? res.status(200).json({
				INCOMING: `project: ${id},`,
				SEE: project,
		  })
		: res
				.status(400)
				.json({ MISSING: `project: ${id} is not here` })
				.catch(() => {
					res.status(500).json({ NOPE: 'not sure' });
				});
});

router.post('/', (req, res) => {
	const { id } = req.params;
	const body = req.body;
	const project = Project.addProject(body, id);
	project
		? res.status(201).json({ RECIEVING: `new project: ${id}`, DETAILS: body })
		: res
				.status(400)
				.json({ LOST: 'project' })
				.catch(() => {
					res.status(500).json({ OOPS: 'project crash' });
				});
});

router.get('/:id', (req, res) => {
	const { id } = req.params;
	const project = Project.getProject(id);
	const tasks = Project.getProjectTasks(id);
	project && tasks
		? res.status(200).json({
				INCOMING: `project: ${id},`,
				SEE: project,
				AND: `task: ${id},`,
				SEEING: tasks,
		  })
		: res
				.status(400)
				.json({ MISSING: `project: ${id} is not here`, ALSO: `task: ${id}` })
				.catch(() => {
					res.status(500).json({ NOPE: 'not sure' });
				});
});

router.delete('/:id', (req, res) => {
	const { id } = req.params;
	const project = Project.removeProject(id);
	project
		? res.status(201).json({ POOF: `project id: ${id} - gone` })
		: res
				.status(400)
				.json({ SORRY: 'no deleting this project' })
				.catch(() => {
					res.status(500).json({ NOTHING: 'broken' });
				});
});

module.exports = router;
