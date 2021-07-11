import React from 'react';
import {Link} from 'react-router-dom';

function Nav() {
    return (
        <div>
            <nav>
                <Link to="/"><h3>Logo</h3></Link>
                <ul className="nav-links">
                    <Link to="/about"><li>About</li></Link>
                    <Link to="/courses"><li>Courses</li></Link>
                </ul>
            </nav>
        </div>
    )
}

export default Nav
