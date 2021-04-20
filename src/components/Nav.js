import React from 'react';
import {Link} from 'react-router-dom';
import dog_three_ from './img/dog_three_.png';

function Nav() {
    const navStyle = {
        color: 'white',
        textDecoration: 'none',
    };

    return (
       <nav>
           <Link className="nav_style" to='/'>
               <img src={dog_three_} alt="Logo" className="dog_logo"/>
            </Link>
         <ul className="nav-links">
            <Link className="nav_style" to='/home'>
                <li>Home</li>
            </Link>
            <Link className="nav_style" to='/dogs'>
               <li>Dogs</li>
            </Link>
         </ul>
       </nav>
    )
}

export default Nav
