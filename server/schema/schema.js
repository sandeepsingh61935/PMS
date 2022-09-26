const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLSchema, SchemaMetaFieldDef, GraphQLList, GraphQLNonNull, GraphQLEnumType, } = require('graphql');
// mongoose models 
const Project = require('../models/Project');
const Client = require('../models/Client');


const CLIENT_TYPE = new GraphQLObjectType({
    name: "client",
    fields: () => ({
        _id: { type: GraphQLID },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        phone: { type: GraphQLString },
    })
})

const PROJECT_TYPE = new GraphQLObjectType({
    name: "project",
    fields: () => ({
        _id: { type: GraphQLID },
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
                return Client.find({});
            }
        },
        client: {
            type: CLIENT_TYPE,
            args: { _id: { type: GraphQLID } },
            resolve(parent, args) {
                return Client.findById(args._id);
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
            args: { _id: { type: GraphQLID } },
            resolve(parent, args) {
                return Project.findById(args._id);
            }
        }
    })
})

/**
 * <Mutations>
 *      <addClient>
 *      <deleteClient>
 * 
 *  
 *      <addProject>
 *      <deleteProject>
 */
const mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        /**
         * add client 
         * 
         * */
        addClient: {
            type: CLIENT_TYPE,
            args: {
                name: { type: GraphQLNonNull(GraphQLString) },
                email: { type: GraphQLNonNull(GraphQLString) },
                phone: { type: GraphQLNonNull(GraphQLString) },
            },
            resolve(parent, args) {
                const client = new Client({
                    name: args.name,
                    email: args.email,
                    phone: args.phone
                });
                return client.save();
            }
        },

        /**
         * Delete Client
         */
        deleteClient: {
            type: CLIENT_TYPE,
            args: {
                // name : {type : GraphQLNonNull(GraphQLString)},
                _id: { type: GraphQLNonNull(GraphQLID) },
            },
            resolve(parent, args) {
                Project.find({clientId: args._id}).then((projects)=> {
                    projects.forEach(project => {
                        project.remove();
                    })
                })
                return Client.findByIdAndRemove(args._id);
            }
        },

        /**
         * Add Project
         */

        addProject: {
            type: PROJECT_TYPE,
            args: {
                name: { type: GraphQLNonNull(GraphQLString) },
                description: { type: GraphQLNonNull(GraphQLString) },
                status: {
                    type: new GraphQLEnumType({
                        name: 'ProjectStatus',
                        values: {
                            'new': { value: 'Not Started' },
                            'progress': { value: 'In Progress' },
                            'completed': { value: 'COmpleted' },
                        }
                    }),
                    defaultValue: 'Not Started',
                },
                clientId: { type: GraphQLNonNull(GraphQLID) },
            },
            resolve(parent, args) {
                const project = new Project({
                    name: args.name,
                    description: args.description,
                    status: args.status,
                    clientId: args.clientId
                })
                return project.save();
            }

        },


        /**
         * delete project
         */
        deleteProject: {
            type: PROJECT_TYPE,
            args: {
                // name : {type : GraphQLNonNull(GraphQLString)},
                _id: { type: GraphQLNonNull(GraphQLID) },
            },
            resolve(parent, args) {
                return Project.findByIdAndRemove(args._id);
            }
        },

        /**
         * update Project
         */
        updateProject: {
            type: PROJECT_TYPE,
            args: {
                _id: { type: GraphQLNonNull(GraphQLID) },
                name: { type: GraphQLString },
                description: { type: GraphQLString },
                status: {
                    type: new GraphQLEnumType({
                        name: 'ProjectStatusUpdate',
                        values: {
                            new: { value: 'Not Started' },
                            progress: { value: 'In Progress' },
                            completed: { value: 'Completed' },
                        }

                    })
                }

            },
            resolve(parent, args) {
                if (!args.name || !args.description) {
                    // alert('name or description can not be empty');
                    return;
                }

                return Project.findByIdAndUpdate(args._id, {
                    $set: {
                        name: args.name,
                        description: args.description,
                        status: args.status
                    }
                },
                    { new: true }
                )

            }
        }
    }
})

const schema = new GraphQLSchema({
    query: RootQuery,
    mutation: mutation
})

module.exports = {
    schema,
    mutation
}
