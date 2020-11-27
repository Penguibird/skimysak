import * as React from 'react';
import { Link } from 'gatsby';
import '../../styles/pages/aktualityPage.scss';
import '../../styles/global.scss'
import { Helmet } from "react-helmet";
import Header from '../../components/header'
import Footer from '../../components/footer'
import { Fragment, useState, useEffect } from 'react';
import ctSport1 from '../../../assets/ctSport1.jpg';
import ctSport2 from '../../../assets/ctSport2.jpg'
import arrow from '../../../assets/arrow.png'

export default function page(props) {
    return <Fragment>
        <Helmet>
            <title>Aktuality | Ski Myšák</title>
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="description" content="Parádní lyžování v jeseníkách" />
        </Helmet>
        <Header />
        <main>
            <section className="section-text section">
                <Link to="/subpages/aktuality" class="back">
                    <img src={arrow} />
                    <h2>Zpět</h2>
                </Link>

                <h2>ČT&nbsp;sport NA&nbsp;VRCHOL</h2>
                <p className="date">15.11.2020</p>
                <p>Vzpomínáte? Takhle to&nbsp;na&nbsp;Myšáku žilo s&nbsp;ČT&nbsp;sport na&nbsp;vrchol 22.&nbsp;ledna 2019. Už máme termín pro&nbsp;závod letošní sezóny. Zapište si&nbsp;do&nbsp;diářů 5.&nbsp;–&nbsp;7.&nbsp;února 2021!
                     Tak ať&nbsp;dojedeme s&nbsp;ČT&nbsp;sport až&nbsp;na&nbsp;vrchol!</p>
                <img src={ctSport1} alt="Stupen vitezu" className="aktuality-img" />
                <img src={ctSport2} alt="S ct sport na vrchol" className="aktuality-img" />
                <Link to="/subpages/aktuality" ><h2>Zpátky na aktuality</h2></Link>
            </section>
        </main>
        <Footer />
    </Fragment >
}