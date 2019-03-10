import React from 'react';
import classNames from 'classnames';
import Moment from 'react-moment';
import {Link} from 'react-router-dom';

export default function LaunchItem({launch: {flight_number, mission_name, launch_date_local, 
launch_success, details}}){
  
return (
    <div className = "card card-body mb-3">
        <div className = "row">
            <div className = "col-md-9">
                <h4>Mission: <span className={classNames({
                    'text-success': launch_success,
                    'text-danger': !launch_success
                })}>{mission_name}</span></h4>
                <p>Date: <Moment format = "MM-DD-YYYY hh:mm A">{launch_date_local}</Moment></p>

                {details && <p>Details: <span className = {classNames({
                    "font-weight-bold": true,
                    "font-italic": true,
                    "text-success": launch_success,
                    "text-danger": !launch_success
                })}>{details}</span></p>}
  
            </div>
            <div className = "col-md-3">
                <Link to = {`/rocket/${flight_number}`} className = "btn btn-info">Rocket Info</Link>
            </div>
        </div>
    </div>
)
  
}
