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
        launch_date_local: {type: GraphQLString},
        launch_success: {type: GraphQLBoolean},
        details: {type: GraphQLString},
        rocket: {type: RocketType}
    })
});

//Rocket Type 
const RocketType = new GraphQLObjectType({
    name: 'Rocket',
    fields: () => ({
        rocket_name: {type: GraphQLString},
        second_stage: {type: SecondStage}
    })
});

//Second Stage -- contains nationality of rocket & name of manufacturer
const SecondStage = new GraphQLObjectType({
    name: 'SecondStage',
    fields: () => ({
        nationality: {
            type: GraphQLString,
            resolve: (second_stage) => { 
                return second_stage.payloads[0].nationality;    
            }
        },
        manufacturer: {
            type: GraphQLString,
            resolve: (second_stage) => {
                return second_stage.payloads[0].manufacturer;
            }
        }
    })
})

// Root Query – Resolvers for the data
const RootQuery = new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
        launches: {
            type: new GraphQLList(LaunchType),
            resolve() {
                return fetch(`https://api.spacexdata.com/v3/launches/`)
                    .then(response => response.json());     
            }
        },
        launch: {
            type: LaunchType,
            args: {
                flight_number: {type: GraphQLInt}
            },
            resolve(parent, args) {
                return fetch(`https://api.spacexdata.com/v3/launches/${args.flight_number}`)
                    .then(response => response.json());
            }
        },
        upcomingLaunch: {
            type: new GraphQLList(LaunchType),
            resolve(){
                return fetch(`https://api.spacexdata.com/v3/launches/upcoming`)
                    .then(response => response.json());
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
})