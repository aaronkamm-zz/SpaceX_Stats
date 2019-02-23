const {GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLBoolean} = require('graphql');

//Launch Type 
const Launch = new GraphQLObjectType({
    name: 'Launch',
    fields: () => ({
        flight_number: {type: GraphQLInt},
        mission_name: {type: GraphQLString},
        launch_year: {type: GraphQLString},
        launch_date_local: {type: GraphQLString},
        launch_success: {type: GraphQLBoolean}
    })
});

//Rocket Type