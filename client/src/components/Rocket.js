import React, {Component} from 'react';
import classNames from 'classnames';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const RocketQuery = gql`
  query RocketQuery {
    launches {
      rocket {
        rocket_name
        second_stage {
          nationality
        }
      }
    }
  }
`


class Rocket extends Component {
  render() {
    return(
      <div>
        <h1></h1>
      
      
      </div>
    )
  }
};

export default Rocket;
