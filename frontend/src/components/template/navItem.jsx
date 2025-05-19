import './navItem.css';
import React from 'react';

export default props =>
            <a href={props.link}>
                <i className={props.className}></i>{props.label}
            </a>
