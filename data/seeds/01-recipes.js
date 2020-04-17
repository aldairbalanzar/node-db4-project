exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').insert([
        {recipeName: 'test recipeName 1'},
        {recipeName: 'test recipeName 2'},
        {recipeName: 'test recipeName 3'}
      ]);
    };