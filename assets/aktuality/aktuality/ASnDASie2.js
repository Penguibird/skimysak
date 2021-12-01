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

export default function Page(props) {
    return <Fragment>
        <Helmet>
            <title> PODĚKOVÁNÍ za&nbsp;sezónu | Aktuality | Ski Myšák</title>
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="description" content="Parádní lyžování v jeseníkách" />
        </Helmet>
        <Header always />
        <main className="main-aktualita-text">
            <section className="section-text section" >
                <Link to="/aktuality" className="back">
                    <svg width="20" height="40" viewBox="0 0 20 45" className="custom-svg">
                        <line x1="3" x2="17" y1="20" y2="37" />
                        <line x1="3" x2="17" y1="20" y2="3" />
                    </svg>
                    <h2>Zpět</h2>
                </Link>

                <h2>PODĚKOVÁNÍ za&nbsp;sezónu 2019/20</h2>
                <p className="date">29.3.2020</p>
                <p>Za&nbsp;normálních okolností bychom teď, na&nbsp;konci března, pravděpodobně oznamovali konec další lyžařské sezóny v&nbsp;karlovském údolí... Tato zima ale "normální" nebyla, a&nbsp;to&nbsp;nemáme na&nbsp;mysli jen&nbsp;její předčasný konec.</p>
                <p>Celou zimu se&nbsp;jezdilo na&nbsp;technickém sněhu: zasněžovali jsme dvojnásobný počet hodin než loni. A&nbsp;to&nbsp;platí skoro pro&nbsp;všechno: mnohem více práce, aby vše bylo jako "normálně". Nestěžujeme si. Tak&nbsp;to&nbsp;prostě bylo. :-)</p>
                <p>Tyto řádky píšeme hlavně proto, abychom vám&nbsp;všem poděkovali. V&nbsp;překotných událostech posledních týdnů jsme na&nbsp;to&nbsp;zapomněli. Omlouváme&nbsp;se... DĚKUJEME vám všem, kteří jste se&nbsp;u&nbsp;nás tuto zimu alespoň jednou sklouzli. Díky. Děláme to pro&nbsp;vás. Máme vás rádi. :-)</p>
                <p>Máme teď všichni trochu jiné starosti a&nbsp;další zima je ještě daleko. Přejeme vám/nám všem, abychom se&nbsp;na&nbsp;karlovských svazích opět ve&nbsp;zdraví a&nbsp;pohodě potkali. SKOL!</p>
                <Link to="/aktuality" className='back center   ' >
                    <svg width="20" height="40" viewBox="0 0 20 40" className="custom-svg">
                        <line x1="3" x2="17" y1="20" y2="37" />
                        <line x1="3" x2="17" y1="20" y2="3" />
                    </svg>
                    <h2>Zpátky na aktuality</h2>
                </Link>
            </section>
        </main>
        <Footer />
    </Fragment >
}