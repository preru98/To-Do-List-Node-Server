const express = require('express');
const bodyParser = require('body-parser');
const ListAdapter = require('../DataLayer/ListAdapter')
const ItemAdapter = require('../DataLayer/ItemAdapter');

listRouter = express.Router();


listRouter.use(bodyParser.json());

listRouter.route('/')

.get( async (req, res, next) => {
    try{
        let allLists = await ListAdapter.GetAllLists();
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        console.log(allLists);
        res.json(allLists);
    }
    catch(error){
        console.log(error);
        error.status = 404;
        next(error);
    }
})

.post( async (req, res, next) => {
    try{
        let list = await ListAdapter.CreateList(req.body);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        console.log(list);
        res.json(list);
    }
    catch(error){
        console.log(error);
        error.status = 423;
        next(error);
    }
})

listRouter.route('/:listId/items')

.get( async (req, res, next) => {
    try{
        const listId = req.params.listId;
        let allItemsOfList = await ItemAdapter.FetchItemsByListId(listId);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        console.log(allItemsOfList);
        res.json(allItemsOfList);
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






module.exports = listRouter;