import React from 'react'

import { Link } from "react-router-dom";

const NotFound = () => {
    return (
     <div className='not-found'>
        <h1>Oops! You seem to be lost.</h1>
           <img className = 'lost-cat' src="https://cdn.pixabay.com/photo/2020/02/14/18/51/cat-4849175_1280.png"/>
         <p>Go home, your owner is looking for you 🏡</p>
            <Link to='/'>Home</Link>
     </div>
    )
}

export default NotFound