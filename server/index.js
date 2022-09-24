const express =require('express');
const  {graphqlHTTP} = require('express-graphql');
const  {schema} = require('./schema/schema');
const connectDB = require('./config/db');
require('dotenv').config();

const PORT = process.env.PORT || 8000;
const app = express();

//connecting to DB
connectDB();
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'dev'
}))

app.listen(PORT, console.log(`starting server ${PORT}`))