const mongoose = require('mongoose');


const ClientSchema = new mongoose.Schema({
    name : {type : String},
    email : {type : String},
    phone : {type : String},
    id : {type : mongoose.Schema.Types.ObjectId}
});


module.exports = mongoose.model('Client',ClientSchema);
