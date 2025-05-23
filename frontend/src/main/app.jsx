import './app.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import React from 'react';

import { BrowserRouter } from 'react-router-dom';

import Logo from '../components/template/logo';
import Routes from './routes';
import Footer from '../components/template/footer';
import Nav from '../components/template/nav';



export default props =>
    <BrowserRouter>
        <div className="app">
            <Logo />
            <Nav />
            <Routes />
            <Footer />
        </div>
    </BrowserRouter>