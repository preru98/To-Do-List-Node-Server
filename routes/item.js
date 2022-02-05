const express = require('express');
const bodyParser = require('body-parser');
const ItemAdapter = require('../DataLayer/ItemAdapter');
const items = require('../models/items');

// const Items = require('../models/item');

itemRouter = express.Router();


itemRouter.use(bodyParser.json());

itemRouter.route('/')

.get( async (req, res, next) => {
    try{
        let allItems = await ItemAdapter.GetAllItems();
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        console.log(allItems);
        res.json(allItems);
    }
    catch(error){
        console.log(error);
        error.status = 404;
        next(error);
    }
})

.post( async (req, res, next) => {
    try{
        let item = await ItemAdapter.CreateItem(req.body);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        console.log(item);
        res.json(item);
    }
    catch(error){
        console.log(error);
        error.status = 423;
        next(error);
    }
})

itemRouter.route('/:itemId')

.get( async (req, res, next) => {
    try{
        const itemId = req.params.itemId;
        let item = await ItemAdapter.GetItemById(itemId);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        console.log(item);
        res.json(item);
    }
    catch(error){
        console.log(error);
        error.status = 404;
        next(error);
    }
})

.post( async (req, res, next) => {
    try{
        const itemId = req.params.itemId;
        let item = await ItemAdapter.ToggleStatusOrPriority(itemId, req.body);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        console.log(item);
        res.json(item);
    }
    catch(error){
        console.log(error);
        error.status = 423;
        next(error);
    }
})





module.exports = itemRouter;