const db = require('./DB/connection');
//const Items = require('../models/items'); 
const Items = require('../DataLayer/ItemAdapter'); 

beforeAll(async () => await db.connect())

afterEach(async () => await db.clearDatabase())

afterAll(async () => await db.disconnect())

const itemPayload = {
    "priority": 3,
    "status": "PENDING",
    "title": "Clear doubts",
    "description": "just do it",
    "listId": "61f55aa59ab53f0648d01162"
} 

describe('Get All Items', () => {

    it('Create Item', async () => {
        const item = await Items.CreateItem(itemPayload);
        expect(item.priority).toEqual(3);
    })

})