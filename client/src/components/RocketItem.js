import React from 'react';
import classNames from 'classnames';
import Moment from 'react-moment';



export default function RocketItem({rocketInfo: {mission_name, rocket: {rocket_name, 
    second_stage: {manufacturer, nationality}}}}) {
  return (
    <div className = "card mb-3">
        <h4 className = "card-header"><span className = "font-italic">{mission_name}</span> Rocket Info</h4>
        <div className = "card-body">
            <h4>Rocket Name: {rocket_name}</h4> 
            <h4>Manufacturer: {manufacturer}</h4>
            <h4>Nationality: {nationality}</h4>
        </div>
    </div>
  )
}


