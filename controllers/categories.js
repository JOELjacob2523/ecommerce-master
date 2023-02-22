
const {knex} = require('./db');

module.exports = {
    createCategory,
    getAll
}

async function getAll(){
    return knex.select('CategoryId', 'Name').from('Categories');
}

async function createCategory(category){
    return knex('Categories').insert(category); 
}
