import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo'
import './App.css';
import logo from './logo.png';
import Launches from './components/Launches';
import Rocket from './components/Rocket';
import {BrowserRouter, Route} from "react-router-dom";

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
})

class App extends Component {
  render() {
    return (
      <ApolloProvider client = {client}>
      <BrowserRouter>
        <div className="container">
          <img className = "logo" src={logo} alt = "Space X" />
            <Route exact path = "/" component = {Launches} />
            <Route exact path = "/rocket/:flight_number" component = {Rocket}/>
          
        </div>
        </BrowserRouter>
      </ApolloProvider>
    );
  }
}

export default App;
