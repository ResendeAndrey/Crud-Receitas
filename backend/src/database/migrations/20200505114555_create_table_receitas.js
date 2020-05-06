
exports.up = function(knex) {
    return knex.schema.createTable('receitas', function(table) {
  table.increments('receitaId');
  table.string('autor').notNullable();
  table.string('email').notNullable();
  table.string('receitaNome').notNullable();
  table.string('ingredientes').notNullable();
  table.string('preparo').notNullable();
  table.string('tempo').notNullable();
  table.string('rendimento').notNullable();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('receitas');
  };