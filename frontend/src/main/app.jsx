import './app.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import React from 'react';

import Logo from '../components/template/logo';
import Home from '../components/home/home';
import Footer from '../components/template/footer';
import Nav from '../components/template/nav';



export default props =>
    <div className="app">
        <Logo />
        <Nav />
        <Home />
        <Footer />
    </div>