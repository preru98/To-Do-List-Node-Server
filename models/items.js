const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = Schema(
    {
        title : {
            type : String,
            required : true,
        },
        description : {
            type : String,
            required : false,
        },
        priority : {
            type : Number,
            required : false,
            min : 1, 
            default : 1
        },
        status : {
            type : String,
            required : true,
            default : 'PENDING'
        },
        listId : {
            type: mongoose.ObjectId,
            required : true
        }
    }, 
    {
        timestamps : true
    }
);


module.exports = mongoose.model("Item", ItemSchema);