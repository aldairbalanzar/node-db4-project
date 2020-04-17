
exports.up = function(knex) {
    return(
        knex.schema
        //recipes
        .createTable('recipes', tbl => {
            tbl.integer('id', 255).primary();
            tbl.string('recipeName', 255).notNullable().unique();
        })
        //steps
        .createTable('steps', tbl => {
            tbl.integer('id', 255).primary();
            tbl.integer('stepNumber', 255).unique().notNullable();
            tbl.string('stepInstruction', 255).unique().notNullable();
            tbl.integer('recipeId', 255);
        })
        //foreign key
        .createTable('recipeDetails', tbl => {
            tbl.integer('id', 255).primary();
            //recipeId
            tbl.integer('recipeId', 255)
            .unique()
            .notNullable()
            .references('recipes.id')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE');
            //ingredientId
            tbl.integer('ingredientId')
            .unique()
            .notNullable()
            .references('ingredient.id')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE');

            tbl.float('quantity', 255).notNullable();
        })
        //ingredients
        .createTable('ingredients', tbl => {
            tbl.integer('id', 255).primary();
            tbl.string('ingredientName', 255).unique().notNullable();
        })
    )
    
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('ingredients')
  .dropTableIfExists('recipeDetails')
  .dropTableIfExists('steps')
  .dropTableIfExists('recipes')
};
