import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import LaunchItem from './LaunchItem.js';
import LaunchLegend from './LaunchLegend';

const QUERY_LAUNCHES = gql `
  query QueryLaunches {
    launches {
      flight_number
      mission_name
      launch_date_local
      launch_success
      details 
    }
  }
`
class Launches extends Component {
  render() {
    return (
      <div>
        <LaunchLegend />
        <h1 className = "display-4 my-3">Launches</h1>
        <Query query = {QUERY_LAUNCHES}>
          {
            ({loading, error, data}) => {
              if(loading) return <h4>Loading. Please wait...</h4>;
              if (error) console.log(error);
              console.log(data);

              return <React.Fragment>
                {
                  data.launches.map(launch => (
                    <LaunchItem key = {launch.flight_number} launch = {launch}/>
                  ))
                }
              </React.Fragment>

            }
          }
        </Query>
      </div>
    )
  }
}

export default Launches
