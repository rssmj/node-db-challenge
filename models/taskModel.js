const db = require('../data/dbConfig.js');

module.exports = {
	getTasks,
	getTaskById,
	addTask,
	removeTask,
};

function getTasks() {
	return db('tasks')
		.join('projects as p', 'p.id', 'project_id', '=', 'tasks.project_id')
		.select(
			'p.name as projectName',
			'p.description as projectDescription',
			'tasks.*'
		);
}

function getTaskById(id) {
	return db('tasks').where({ id }).first();
}

function addTask(task) {
	return db('tasks')
		.insert(task, 'id')
		.then((ids) => {
			return getTaskById(ids[0]);
		});
}

async function removeTask(id) {
	const deletedTask = await getTaskById(id);
	return db('tasks')
		.where({ id })
		.del()
		.then(() => {
			return deletedTask;
		});
}
