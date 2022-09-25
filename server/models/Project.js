const mongoose = require('mongoose');


const ProjectSchema = new mongoose.Schema({
    name: { type: String },
    description: { type: String },
    status: { type: String, enum: ['Not Started', 'In Progress', 'Completed'] },
    _id: { type: mongoose.Types.ObjectId, default: new mongoose.Types.ObjectId() },
    clientId: {
        type: mongoose.Types.ObjectId,
        ref: "Client"
    }
});


module.exports = mongoose.model('Project', ProjectSchema);
