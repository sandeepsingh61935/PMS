const mongoose = require('mongoose');


const ClientSchema = new mongoose.Schema({
    name: { type: String },
    email: { type: String },
    phone: { type: String },
    _id: { type: mongoose.Types.ObjectId, default: new mongoose.Types.ObjectId() }
});


module.exports = mongoose.model('Client', ClientSchema);
