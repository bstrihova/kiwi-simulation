import React from 'react'
import "../App.css";



function DirectFlightCheckbox(props) {
    const {onChange, directFlights} = props;
    return (
        <div className="checkboxBox">
            <label htmlFor="directFlight">Direct flights only</label>
            <input type="checkbox" name="directFlight" onChange={onChange} checked={directFlights}  />
        </div>
    )
}

export default DirectFlightCheckbox
