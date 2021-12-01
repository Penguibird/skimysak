import * as React from 'react';
import { Link } from 'gatsby';
import '../styles/pages/404.scss';
import '../styles/global.scss'
import { Helmet } from "react-helmet";
import Header from '../components/header'
import Footer from '../components/footer'
import { Fragment, useState, useEffect, useRef } from 'react';
import { StaticImage } from "gatsby-plugin-image";

export default function Page(props) {
    return <Fragment>
        <Helmet>
            <title>404 | Ski Myšák</title>
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="description" content="Parádní lyžování v jeseníkách" />
        </Helmet>
        <Header always/>
        <main>
            <section className="section section-hero-image">
                <StaticImage formats={["jpg", "webp"]} className="hero-image" imgClassName="hero-image" placeholder="blurred" src='../../assets/servis.jpg' layout="fullWidth" alt="sjezdovka"/>
                <h1>Error 404: Stránka nenalezena</h1>
            </section>
            <section className="section-text section">
                <Link to="/" ><h2>Zpátky na Hlavní stránku</h2></Link>
            </section>
        </main>
        <Footer />
    </Fragment >
}