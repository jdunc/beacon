
exports.up = function (knex, Promise) {
  return knex.schema.createTable('skills', (table) => {
    table.increments('skill_id').primary();
    table.integer('user_id');
    table.string('skill').notNullable();
    table.timestamp(true, true);
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('skills');
};
