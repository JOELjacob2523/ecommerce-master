
const {knex} = require('./db');

module.exports = {
    create,
    getAll
}

async function getAll(){
    return knex.select().from('Products');
}

async function create(data){
    return knex('Products').insert(data); 
}