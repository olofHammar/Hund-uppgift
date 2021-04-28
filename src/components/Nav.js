import React from 'react';
import {Link} from 'react-router-dom';
import logo from './img/daycare_logo.png';

function Nav() {

    return (
       <nav>
           <Link className="nav_style" to='/'>
               <img src={logo} alt="Logo" className="dog_logo"/>
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
