import React from 'react'



function DirectFlightCheckbox(props) {
    const {onChange, directFlights} = props;
    return (
        <div>
           <label htmlFor="directFlight">Direct flights only</label>
           <input type="checkbox" name="directFlight" onChange={onChange} checked={directFlights}  />
         </div>
    )
}

export default DirectFlightCheckbox
