const express = require('express');
const bodyParser = require('body-parser');

const Lists = require('../models/lists');

class ListAdapter{
    constructor(){
        console.log(`Constructor List invoked. `);
    }

    GetAllLists = async () => {
        try{
            let allLists = await Lists.find({});
            return allLists;
        }
        catch(error){
            console.log(`ListAdapter | Error while fetching all lists- ${error}`);
            throw error;
        }
    }

    GetListById = async id => {
        try{
            if(id){
                let targetList = await Lists.findById(id);
                return targetList;
            }
            else{
                throw new Error('Id is required to fetch list by Id');
            }
        }
        catch(error){
            console.log(`ListAdapter | Error while fetching list by Id- ${error.message}`);
            throw error;
        }
    }

    CreateList = async newListPayload => {
        try{
            let newList = await Lists.create(newListPayload);
            return newList;
        }
        catch(error){
            console.log(`ListAdapter | Error while creating new list- ${error.message}`);
            throw error;
        }
    } 

    UpdateList = async listPayload => {
        try{
            let updatedList = await Lists.updateOne(newListPayload);
            return updatedList;
        }
        catch(error){
            console.log(`ListAdapter | Error while updating existing list- ${error.message}`);
            throw error;
        }
    } 
}

// .get((req, res, next) => {
//     Lists.find({})
//     .then( ( tests ) =>{
//         res.statusCode=200;
//         res.setHeader('Content-Type', 'application/json');
//         console.log(tests);
//         res.json(tests);
//     }, (err) => {
//         next(err);
//     })
//     .catch( (err) => {
//         next(err);
//     })
// })

// .post((req, res, next) => {
//     console.log("HERE!!!!", req.body);
//     Lists.create(req.body)

//     .then( (list) =>{
//         console.log("List Created ", list);
//         res.statusCode=200;
//         res.setHeader('Content-Type', 'application/json');
//         res.json(list);
//     }, (err) => {
//         console.log(err);
//         next(err);
//     })
//     .catch( (err) => {
//         console.log(err);
//         next(err);
//     })
// })

module.exports = new ListAdapter();