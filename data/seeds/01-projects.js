exports.seed = function (knex) {
	return knex('projects').insert([
		{ name: 'Things', description: 'Things to do', completed: 'true' },
	]);
};
