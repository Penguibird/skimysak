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
    // TODO Test
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
                <h2>PODĚKOVÁNÍ za sezónu 2019/20</h2>
                <p className="date">29.3.2020</p>
                <p>Za normálních okolností bychom teď, na konci března, pravděpodobně oznamovali konec další lyžařské sezóny v karlovském údolí... Tato zima ale "normální" nebyla, a to nemáme na mysli jen její předčasný konec...</p>
                <p>Celou zimu se jezdilo na technickém sněhu: zasněžovali jsme dvojnásobný počet hodin než loni. A to platí skoro pro všechno: mnohem více práce, aby vše bylo jako "normálně". Nestěžujeme si. Tak to prostě bylo. :-)</p>
                <p>Tyto řádky píšeme hlavně proto, abychom vám všem poděkovali. V překotných událostech posledních týdnů jsme na to zapomněli. Omlouváme se... DĚKUJEME vám všem, kteří jste se u nás tuto zimu alespoň jednou sklouzli. Díky. Děláme to pro vás. Máme vás rádi. :-)</p>
                <p>Máme teď všichni trochu jiné starosti a další zima je ještě daleko. Přejeme vám/nám všem, abychom se na karlovských svazích opět ve zdraví a pohodě potkali. SKOL!</p>
                <Link to="/aktuality" ><h2>Zpátky na aktuality</h2></Link>
            </section>
        </main>
        <Footer />
    </Fragment >
}