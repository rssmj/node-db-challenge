exports.seed = function (knex) {
	return knex('project_resources').insert([
		{
			project_id: 1,
			resource_id: 1,
			name: 'Addition things',
			description: 'Do things',
		},
	]);
};
