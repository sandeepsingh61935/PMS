const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLSchema, SchemaMetaFieldDef, GraphQLList, } = require('graphql');

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
        clientId : 1,
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
        clientId : {type: GraphQLID},
        client : {
            type : CLIENT_TYPE,
            resolve(parent,args) {
                return clients.find(client => {return client.id === parent.clientId});
            }
        }
    })
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: () => ({
        clients : {
            type : new GraphQLList(CLIENT_TYPE),
            resolve(parent,args) {
                return clients;
            }
        },
        client: {
            type: CLIENT_TYPE,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                console.log(args.id)
                return clients.find((client) => {
                    args.id === client.id
                   return client;
                }
                );
            }
        },
        projects : {
            type : new GraphQLList(PROJECT_TYPE),
            resolve(parent,args) {
                return projects;
            }
        },
        project: {
            type: PROJECT_TYPE,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                console.log(args.id)
                return projects.find((project) => {
                    args.id === project.id
                   return project;
                }
                );
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
