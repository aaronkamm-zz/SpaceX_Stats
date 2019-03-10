import React from 'react';

export default function RocketItem({rocketInfo: {mission_name, rocket: {rocket_name, 
    second_stage: {manufacturer, nationality}}}}) {
  return (
    <div className = "card mb-3">
        <h4 className = "card-header"><span className = "font-italic">{mission_name}</span> Rocket Info</h4>
        <div className = "card-body">
            <h4><span className="font-italic">Rocket Name</span>: {rocket_name}</h4> 
            <h4><span className="font-italic">Manufacturer</span>: {manufacturer}</h4>
            <h4><span className="font-italic">Nationality</span>: {nationality}</h4>
        </div>
    </div>
  )
}


