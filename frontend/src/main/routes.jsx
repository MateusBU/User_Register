import React from 'react';
import { Routes, Route } from "react-router-dom";

import Home from '../components/home/home';
import UserCrud from '../components/user/userCrud';

//components (HOme and UserCrud) are as props not as children
//navegate to Home if link is exactly '/'
//any lik with /users goes to UserCrud
//different url goes home
export default props => (
    <Routes>
        <Route  exact path="/" element={<Home />}/>
        <Route  path="/users" element={<UserCrud />}/>
        <Route  path="*" element={<Home />}/>
    </Routes>
);