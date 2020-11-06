import React from 'react'
import "../App.css";

function ButtonNextPage(props) {
    const {nextPage} = props;
    return (
        
        <div>
            <a onClick={nextPage}>Show more...</a>
        </div>
    )
}

export default ButtonNextPage
