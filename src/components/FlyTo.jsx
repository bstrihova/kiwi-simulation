import React from 'react'

const FlyTo = (props) => {
    const { handleFlyTo, flyTo } = props;

    return (
        <div>
            <label htmlFor="flyTo">Arrive to:</label>

            <select name="flyTo" onChange={handleFlyTo} value={flyTo}>
                <option value="VLC">Valencia</option>
                <option value="BCN">Barcelona</option>
                <option value="MAD">Madrid</option>
                <option value="BGY">Milano</option>
                <option value="ATH">Athens</option>
            </select>
            
        </div>
    )
}

export default FlyTo
