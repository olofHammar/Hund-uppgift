import React from 'react';
import {Link} from 'react-router-dom';

function Nav() {
    const navStyle = {
        color: 'white',
        textDecoration: 'none'
    };

    return (
       <nav>
           <Link style={navStyle} to='/'>
               <h3>Logo</h3>
            </Link>
         <ul className="nav-links">
            <Link style={navStyle} to='/home'>
                <li>Welcome</li>
            </Link>
            <Link style={navStyle} to='/dogs'>
               <li>Dogs</li>
            </Link>
         </ul>
       </nav>
    )
}

export default Nav
