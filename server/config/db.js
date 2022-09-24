const mongoose = require('mongoose');

const connectDB = async ()=> {
    console.log(process.env.MONGO_URI);
    try {
        const conn  = await mongoose.connect(process.env.MONGO_URI);
        console.log(`COnnected TO DB `);
    }
    catch (error) {
        console.log(error.message);
        return ;
    }
}
module.exports = connectDB;