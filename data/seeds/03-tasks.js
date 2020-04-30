exports.seed = function (knex) {
	return knex('tasks').insert([
		{
			project_id: 1,
			description: 'Something',
			notes: 'Something else',
			completed: 'true',
		},
	]);
};
