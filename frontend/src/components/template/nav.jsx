import './nav.css';
import React from 'react';
import NavItem from './navItem';

//TODO reafctoring this part. create for each item
export default props =>
    <aside className="menu-area">
        <nav className="menu">
            <NavItem link="#/" className="fa fa-home" label="Start"/>
            <NavItem link="#/users" className="fa fa-users" label="Users"/>
        </nav>
    </aside>