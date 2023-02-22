const Router = require('express').Router();
const Controller = require('../controllers/products');
const CategoriesController = require('../controllers/categories');

Router.get('/create', async (req, res, next) => {
    let categories = await CategoriesController.getAll();
    let product = await Controller.getAll();
    res.render('product-form',{categories, product});
});

Router.post('/create', async (req, res, next) => {
    try{
        let data = await Controller.create(req.body);
        res.send(data);
    }catch(e){
        console.error(e);
        res.status(500).render('error', {error : e.toString()});
    }
    
});

module.exports = Router;