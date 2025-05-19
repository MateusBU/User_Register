import './nav.css';
import React from 'react';

//TODO reafctoring this part. create for each item
export default props =>
    <aside className="menu-area">
        <nav className="menu">
            <a href="#/">
                <i className="fa fa-home"></i> Start
            </a>
            <a href="#/users">
                <i className="fa fa-users"></i> Users
            </a>

        </nav>
    </aside>