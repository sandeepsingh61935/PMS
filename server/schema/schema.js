const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLSchema, SchemaMetaFieldDef, GraphQLList, } = require('graphql');
// mongoose models 
const Project  = require('../models/Project');
const Client  = require('../models/Client');


// client_type 

const clients = [
    {
        "id": 1,
        "name": "sersef",
        "email": "se",
        "phone": "sersef",
    }
]

const projects = [
    {
        "id": 1,
        "name": "sersef",
        "description": "se",
        "status": "Active ",
        clientId: 1,
    }
]
const CLIENT_TYPE = new GraphQLObjectType({
    name: "client",
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        phone: { type: GraphQLString },
    })
})

const PROJECT_TYPE = new GraphQLObjectType({
    name: "project",
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        status: { type: GraphQLString },
        clientId: { type: GraphQLID },
        client: {
            type: CLIENT_TYPE,
            resolve(parent, args) {
                return Client.findById(parent.clientId);
            }
        }
    })
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: () => ({
        clients: {
            type: new GraphQLList(CLIENT_TYPE),
            resolve(parent, args) {
                return Client.find();
            }
        },
        client: {
            type: CLIENT_TYPE,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return Client.findById(args.id);
            }
        },
        projects: {
            type: new GraphQLList(PROJECT_TYPE),
            resolve(parent, args) {
                return Project.find();
            }
        },
        project: {
            type: PROJECT_TYPE,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return Project.findById(args.id);
            }
        }
    })
})

const schema = new GraphQLSchema({
    query: RootQuery,

})
module.exports = {
    schema
}
