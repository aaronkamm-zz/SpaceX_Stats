const {
    GraphQLObjectType, 
    GraphQLInt, 
    GraphQLString, 
    GraphQLBoolean, 
    GraphQLList, 
    GraphQLSchema
} = require('graphql');

const fetch = require("node-fetch")

//Launch Type 
const LaunchType = new GraphQLObjectType({
    name: 'Launch',
    fields: () => ({
        flight_number: {type: GraphQLInt},
        mission_name: {type: GraphQLString},
        launch_year: {type: GraphQLString},
        launch_date_local: {type: GraphQLString},
        launch_success: {type: GraphQLBoolean},
        upcoming: {type: GraphQLBoolean},
        rocket: {type: RocketType}
    })
});

//Rocket Type 
const RocketType = new GraphQLObjectType({
    name: 'Rocket',
    fields: () => ({
        rocket_name: {type: GraphQLString},
        rocket_id:  {type: GraphQLString},
        rocket_type: {type: GraphQLString},
        rocket_resolve: {type: GraphQLString},
    })
});

// Root Query – Resolvers for the data
const RootQuery = new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
        launches: {
            type: new GraphQLList(LaunchType),
            resolve() {
                return fetch('https://api.spacexdata.com/v3/launches/')
                    .then(response => response.json())
                    
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
})