import React, {Component} from 'react';
import gql from 'graphql-tag';
import {Query} from 'react-apollo';
import {Link} from 'react-router-dom';
import RocketItem from './RocketItem';
const ROCKET_QUERY = gql`
  query RocketQuery($flight_number: Int!) {
    launch(flight_number: $flight_number) {
      mission_name
      rocket {
        rocket_name
        second_stage {
          manufacturer
          nationality
        }
      }
    }
  }
`


class Rocket extends Component {
  render() {
    let { flight_number } = this.props.match.params;
    flight_number = parseInt(flight_number);
    return(
      <div>
        <Query query = {ROCKET_QUERY} variables = {{flight_number}}>
          {
            ({loading, error, data}) => {
              if (loading) return <h4>Loading. Please wait...</h4>;
              if (error) console.log(error);

              
              console.log(data.launch)
              return (
                <React.Fragment>
                  <RocketItem rocketInfo = {data.launch}/>
                  <Link className = "btn btn-warning" to = '/'>Back</Link>
                </React.Fragment>
                
              )
            }

          }
        </Query>
      </div>
    )
  }
};

export default Rocket;
