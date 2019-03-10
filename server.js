const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema');
const path = require('path');

const app = express();
const cors = require('cors');



app.use(cors());


app.use('/graphql', 
  graphqlHTTP({
    schema, //same as 'schema: schema'
    graphiql: true
  }),
  
);

//To serve files that are in the static public folder
app.use(express.static('public'));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server successfully started on ${PORT}`));