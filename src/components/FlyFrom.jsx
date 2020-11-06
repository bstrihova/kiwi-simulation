import React from 'react'

const FlyFrom = (props) => {
    const { handleFlyFrom } = props;

    return (
        <div>
            <label for="flyFrom">Choose a departure:</label>

            <select name="flyFrom" onChange={handleFlyFrom}>
                <option value="Valencia">Valencia</option>
                <option value="Barcelona">Barcelona</option>
                <option value="Madrid">Madrid</option>
                <option value="Milano">Milano</option>
                <option value="Athens">Athens</option>
            </select>
            
        </div>
    )
}

export default FlyFrom
