const db = require('../data/dbConfig.js');

module.exports = {
	getProjects,
	getProjectById,
	addProject,
	getProjectTasks,
	removeProject,
};

function getProjects() {
	return db('projects');
}

function getProjectById(id) {
	return db('projects').where({ id }).first();
}

function addProject(project) {
	return db('projects')
		.insert(project, 'id')
		.then((ids) => {
			return getProjectById(ids[0]);
		});
}

function getProjectTasks(id) {
	return db('tasks').where({ project_id: id });
}

async function removeProject(id) {
	const deletedProject = await getProjectById(id);
	return db('projects')
		.where({ id })
		.del()
		.then(() => {
			return deletedProject;
		});
}
