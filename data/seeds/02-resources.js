exports.seed = function (knex) {
	return knex('resources').insert([
		{
			name: 'Resource 1',
			description: 'Things to do',
		},
	]);
};
