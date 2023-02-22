const Router = require('express').Router();
const Controller = require('../controllers/categories');

Router.get('/create', (req, res, next) => {
    res.render('cat-form');
});

Router.post('/create', async (req, res, next) => {
    try{
        let data = await Controller.createCategory(req.body);
        res.send(data);
    }catch(e){
        console.error(e);
        res.status(500).render('error', {error : e.toString()});
    }
    
});

module.exports = Router;