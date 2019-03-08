import React from 'react';

export default function LaunchLegend() {
  return (
    <div className = "mb-4 card" style = {{width: "18rem"}}>
        <h5 className = "card-header">Launch Success/Failure</h5>
        <ul className = "list-group list-group-flush">
            <li className = "list-group-item"><span className = "px-3 mr-2 bg-success"></span>Launch Succeeded!</li>
            <li className = "list-group-item"><span className = "px-3 mr-2 bg-danger"></span>Launch Failed!</li>
        </ul>
    </div>
  )
}
