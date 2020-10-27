import * as React from 'react';
import { Link } from 'gatsby';
import '../styles/pages/404.scss';
import '../styles/global.scss'
import { Helmet } from "react-helmet";
import Header from '../components/header'
import Footer from '../components/footer'
import { Fragment, useState, useEffect } from 'react';
import image from '../../assets/servis.jpg';

export default function page(props) {
    // TODO Test
    return <Fragment>
        <Helmet>
            <title>404 | Ski Myšák</title>
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="description" content="Parádní lyžování v jeseníkách" />
        </Helmet>
        <Header />
        <main>
            <section className="section section-hero-image">
                <img className="hero-image" src={image} alt="Ski slope" />
                <h1>404: Stránka nenalezena</h1>
                <Link to="/" ><h2>Hlavní stránka</h2></Link>
            </section>
        </main>
        <Footer />
    </Fragment >
}