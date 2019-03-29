exports.up = function(knex, Promise) {
  return knex.schema
    .createTable("projects", tbl => {
      tbl.increments();

      //.unique() is debatable but from the user perspective
      // I think having multiples of the same name would be
      // confusing so I'm enforcing unique.
      tbl
        .string("name", 128)
        .notNullable()
        .unique();

      // Definintely no .unique() here since there could be
      // multiples of the same project
      tbl.string("description", 1000).notNullable();

      tbl.boolean("completed").notNullable();
    })
    .createTable("actions", tbl => {
      tbl.increments();

      tbl.string("description", 1000).notNullable();

      tbl.string("notes", 1000).notNullable();

      tbl.boolean("completed").notNullable();

      tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("projects")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("actions").dropTableIfExists("projects");
};
