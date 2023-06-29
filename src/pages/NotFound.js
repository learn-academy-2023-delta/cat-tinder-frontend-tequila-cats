import React from 'react'

import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div>
            <h1>Oops! You seem to be lost.</h1>
            <p>Here are some helpful links:</p>
            <Link to='/'>Home</Link>
            <br/>
            <Link to='/catshow'>Cats</Link>
            <br/>
           
        </div>
    )
}

export default NotFound