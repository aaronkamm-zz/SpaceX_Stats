import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const QUERY_LAUNCHES = gql `
  query QueryLaunches {
    launches {
      flight_number
      mission_name
      launch_date_local
      launch_success
      rocket{
        rocket_name
        rocket_id
        rocket_type
      }
    }
  }
`
class Launches extends Component {
  render() {
    return (
      <div>
        <h1 className = "display-4 my-3">Launches</h1>
        <Query query = {QUERY_LAUNCHES}>
          {
            ({loading, error, data}) => {
              if(loading) return <h4>Loading. Please wait...</h4>;
              if (error) console.log(error);
              console.log(data);

              return <h1>Hello</h1>
            }
          }
        </Query>
      </div>
    )
  }
}

export default Launches
