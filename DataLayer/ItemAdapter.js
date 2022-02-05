const Items = require('../models/items');
const _ = require('lodash');
const { stubArray } = require('lodash');
class ItemAdapter{
    constructor(){
        console.log(`Constructor Item invoked. `);
    }

    GetAllItems = async () => {
        try{
            let allItems = await Items.find({});
            let sortedByPriority = _.orderBy(allItems, ['priority']);
            return sortedByPriority;
        }
        catch(error){
            console.log(`ItemAdapter | Error while fetching all items- ${error}`);
            throw error;
        }
    }

    GetItemById = async id => {
        try{
            if(id){
                let targetItem = await Items.findById(id);
                return targetItem;
            }
            else{
                throw new Error('Id is required to fetch item by Id');
            }
        }
        catch(error){
            console.log(`ItemAdapter | Error while fetching item by Id- ${error.message}`);
            throw error;
        }
    }

    CreateItem = async newItemPayload => {
        try{
            let newItem = await Items.create(newItemPayload);
            return newItem;
        }
        catch(error){
            console.log(`ItemAdapter | Error while creating new item- ${error.message}`);
            throw error;
        }
    } 

    UpdateItem = async itemPayload => {
        try{
            let updatedItem = await Items.updateOne(itemPayload);
            return updatedItem;
        }
        catch(error){
            console.log(`ItemAdapter | Error while updating existing item- ${error.message}`);
            throw error;
        }
    }

    ToggleStatusOrPriority = async (itemId, payload) => {
        const updateQuery = {};
        const options = { new : true } ;
        let status = payload && payload.status ? updateQuery.status = payload.status : undefined;
        let priority = payload && payload.priority ? updateQuery.priority = payload.priority : undefined;
        try{
            if(status || priority) {
                
                let updatedItem = await Items.findByIdAndUpdate(itemId, updateQuery, options);
                console.log(updatedItem);
                return updatedItem;
            }
            else{
                const invalidInputError  = new Error('Status or Priority inout is required for update');
                invalidInputError.status  = 423;
                console.log(error);
                throw invalidInputError;
            }
        }
        catch(error){
            console.log(`ItemAdapter | Error while updating existing item- ${error.message}`);
            throw error;
        }
    }

    FetchItemsByListId = async listId => {
        try{
            if(!listId) throw new Error('List Id is required to fetch all items');
            let allItems = await Items.find({listId : listId });
            console.log("<><><> Items::", allItems);
            console.log("<><><> Items::", allItems);
            let sortedByPriority = _.orderBy(allItems, ['priority'], ['asc']);
            return sortedByPriority;
        }
        catch(error){
            console.log(`ItemAdapter | Error while fetching items- ${error.message}`);
            throw error;
        }
    }

    FetchDoneItemByListId = async listId => {
        try{
            if(!listId) throw new Error('List Id is required to fetch items');
            let allItems = await Items.find({listId : listId, status : 'DONE'});
            return allItems;
        }
        catch(error){
            console.log(`ItemAdapter | Error while fetching items- ${error.message}`);
            throw error;
        }
    }

    FetchPendingItemByListId = async listId => {
        try{
            if(!listId) throw new Error('List Id is required to fetch items');
            let allItems = await Items.find({listId : listId, status : 'PENDING'});
            return allItems;
        }
        catch(error){
            console.log(`ItemAdapter | Error while fetching items- ${error.message}`);
            throw error;
        }
    }

    DeleteItemById = async itemId => {
        try{
            if(!itemId) throw new Error('Item Id is required to delete item');
            await Items.deleteOne({id : itemId});
            return { status : 'Success' };
        }
        catch(error){
            console.log(`ItemAdapter | Error while deleting item with Id- ${itemId} ${error.message}`);
            throw error;
        }
    }
}

module.exports = new ItemAdapter();