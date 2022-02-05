const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const ListSchema = Schema(
    {
        name : {
            type : String,
            required : true,
        },
    }
);


module.exports = mongoose.model("List", ListSchema);