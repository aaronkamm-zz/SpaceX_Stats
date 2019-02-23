const { GraphQLObjectType, GraphQLInt} = require('graphql');

//Launch Type 
const Launch = new GraphQLObjectType({
    name: 'Launch',
    fields: () => ({
        flight_number: {type: GraphQLInt},
        
    })
});