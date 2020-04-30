const db = require('../data/dbConfig.js');

module.exports = {
	getResources,
	getResourceById,
	addResource,
	removeResource,
};

function getResources() {
	return db('resources');
}

function getResourceById(id) {
	return db('resources').where({ id }).first();
}

function addResource(resource) {
	return db('resources')
		.insert(resource, 'id')
		.then((ids) => {
			return getRsourceById(ids[0]);
		});
}

async function removeResource(id) {
	const deletedResource = await getResourceById(id);
	return db('resources')
		.where({ id })
		.del()
		.then(() => {
			return deletedResource;
		});
}
