const db = require('../data/dbConfig.js');

module.exports = {
	getTasks,
	addTask,
};

function getTasks() {
	return db('tasks')
		.join('projects', 'projectsId', '=', 'tasks.projectId')
		.select(
			'projects.name as projectName',
			'projects.description as projectDescription',
			'tasks.*',
			'project.id'
		);
}

function addTask(task) {
	return db('tasks')
		.insert(task, 'id')
		.then((ids) => {
			return getTaskById(ids[0]);
		});
}
