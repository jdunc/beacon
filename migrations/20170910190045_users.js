

/* eslint-disable max-len */

exports.up = function (knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments('user_id').primary();
    table.string('first_name');
    table.string('last_name');
    table.string('profile_image_url');
    table.string('email');
    table.string('street');
    table.string('city');
    table.string('state');
    table.string('zipcode');
    table.string('travelDistance');
    table.string('licenseNumber');
    table.string('licenseState');
    table.string('birthday');
    table.string('gender');
    table.string('phone');
    table.string('emergencyText');
    table.string('basicInfoDone');
    table.string('registration_type')
            .notNullable()
            .defaultTo('email');
    table.string('social_id');
    table.specificType('hashed_password', 'char(60)');
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('users');
};
