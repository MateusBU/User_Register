import './app.css';
import React from 'react';

import Logo from '../components/template/logo';
import Main from '../components/template/main';
import Footer from '../components/template/footer';
import Nav from '../components/template/nav';

export default props =>
    <div className="app">
        <Logo />
        <Nav />
        <Main />
        <Footer />
    </div>