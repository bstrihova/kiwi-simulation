import React from 'react'
import "../App.css";

const FlyFrom = (props) => {
    const { handleFlyFrom, flyFrom } = props;

    return (
        <div>
            <label htmlFor="flyFrom">Depart from:  </label>

            <select name="flyFrom" onChange={handleFlyFrom} value={flyFrom}>
                <option value="PRG">Prague</option>
                <option value="BER">Berlin</option>
                <option value="WAW">Warsaw</option>
                <option value="PED">Pardubice</option>
            </select>
            
        </div>
    )
}

export default FlyFrom
