
exports.up = function (knex, Promise) {
  return knex.schema.createTable('resources', (table) => {
    table.increments('resource_id').primary();
    table.integer('user_id');
    table.string('resource').notNullable();
    table.timestamp(true, true);
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('resources');
};
