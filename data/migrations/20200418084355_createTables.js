exports.up = function (knex) {
	return knex.schema
		.createTable('projects', (tbl) => {
			tbl.increments();
			tbl.string('name', 255).notNullable();
			tbl.string('description');
			tbl.boolean('completed').notNullable().defaultTo(false);
		})

		.createTable('resources', (tbl) => {
			tbl.increments();
			tbl.string('name').unique().notNullable();
			tbl.string('description');
		})

		.createTable('tasks', (tbl) => {
			tbl.increments();
			tbl
				.integer('project_id')
				.unsigned()
				.notNullable()
				.references('id')
				.inTable('projects')
				.onUpdate('CASCADE')
				.onDelete('CASCADE');
			tbl.string('description').notNullable();
			tbl.string('notes');
			tbl.boolean('completed').notNullable().defaultTo(false);
		})

		.createTable('project_resources', (tbl) => {
			tbl.primary(['project_id', 'resource_id']);
			tbl.string('name', 255).notNullable();
			tbl.string('description');
			tbl
				.integer('project_id')
				.unsigned()
				.notNullable()
				.references('id')
				.inTable('projects')
				.onUpdate('CASCADE')
				.onDelete('CASCADE');
			tbl
				.integer('resource_id')
				.unsigned()
				.notNullable()
				.references('id')
				.inTable('resources')
				.onUpdate('CASCADE')
				.onDelete('CASCADE');
		});
};

exports.down = function (knex) {
	return knex.schema
		.dropTableIfExists('project_resources')
		.dropTableIfExists('tasks')
		.dropTableIfExists('resources')
		.dropTableIfExists('projects');
};
