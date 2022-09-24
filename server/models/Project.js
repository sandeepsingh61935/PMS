const mongoose = require('mongoose');


const ProjectSchema = new mongoose.Schema({
    name : {type : String},
    description : {type : String},
    status : {type : String, enum: ['Not Started','In Progress','Completed']},
    id : {type : mongoose.Schema.Types.ObjectId},
    clientId : {
        type : mongoose.Schema.Types.ObjectId,
        ref  : "Client"
    }
});


module.exports = mongoose.model('Project',ProjectSchema);
