import * as React from 'react';
import { Link } from 'gatsby';
import '../../styles/pages/aktualityPage.scss';
import '../../styles/global.scss'
import { Helmet } from "react-helmet";
import Header from '../../components/header'
import Footer from '../../components/footer'
import { Fragment, useState, useEffect } from 'react';
// import image from '../../assets/servis.jpg';

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
                <h2>PODĚKOVÁNÍ za&nbsp;sezónu 2019/20</h2>
                <p className="date">29.3.2020</p>
                <p>Za&nbsp;normálních okolností bychom teď, na&nbsp;konci března, pravděpodobně oznamovali konec další lyžařské sezóny v&nbsp;karlovském údolí... Tato zima ale "normální" nebyla, a&nbsp;to&nbsp;nemáme na&nbsp;mysli jen&nbsp;její předčasný konec.</p>
                <p>Celou zimu se&nbsp;jezdilo na&nbsp;technickém sněhu: zasněžovali jsme dvojnásobný počet hodin než loni. A&nbsp;to&nbsp;platí skoro pro&nbsp;všechno: mnohem více práce, aby vše bylo jako "normálně". Nestěžujeme si. Tak&nbsp;to&nbsp;prostě bylo. :-)</p>
                <p>Tyto řádky píšeme hlavně proto, abychom vám&nbsp;všem poděkovali. V&nbsp;překotných událostech posledních týdnů jsme na&nbsp;to&nbsp;zapomněli. Omlouváme&nbsp;se... DĚKUJEME vám všem, kteří jste se&nbsp;u&nbsp;nás tuto zimu alespoň jednou sklouzli. Díky. Děláme to pro&nbsp;vás. Máme vás rádi. :-)</p>
                <p>Máme teď všichni trochu jiné starosti a&nbsp;další zima je ještě daleko. Přejeme vám/nám všem, abychom se&nbsp;na&nbsp;karlovských svazích opět ve&nbsp;zdraví a&nbsp;pohodě potkali. SKOL!</p>
                <Link to="/aktuality" ><h2>Zpátky na aktuality</h2></Link>
            </section>
        </main>
        <Footer />
    </Fragment >
}