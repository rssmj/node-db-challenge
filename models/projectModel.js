const db = require('../data/dbConfig.js');

module.exports = {
	getProjects,
	getProjectById,
	addProject,
	getProjectTasks,
};

function getProjects() {
	return db('projects');
}

function getProjectById(id) {
	return db('project').where({ id }).first();
}

function addProject(project) {
	return db('projects')
		.insert(project, 'id')
		.then((ids) => {
			return getProjectById(ids[0]);
		});
}

function getProjectTasks(id) {
	return db('tasks').where({ projectId: id });
}
