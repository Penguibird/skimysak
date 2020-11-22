import * as React from 'react';
import { Fragment, useState, useEffect } from 'react';
import '../../styles/pages/aktualityPage.scss';
import '../../styles/global.scss';

import { Helmet } from "react-helmet";
import Header from '../../components/header'
import Footer from '../../components/footer'
import Aktualita from '../../components/aktualita'

import image from '../../../assets/servis.jpg';
import servis from '../../../assets/servis.jpg'

export default function page(props) {
    return <Fragment>
        <Helmet>
            <title>Aktuality | Ski Myšák</title>
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="description" content="Parádní lyžování v jeseníkách" />
        </Helmet>
        <Header />
        <main className="aktuality">
            <section className="section-hero-image section">
                {/* //TODO Jsou aktuality dobry h1? Webkamery? */}
                <h1>Aktuality</h1>
                {/* <img className="hero-image" src={image} alt="Ski slope" /> */}

            </section>
            <section className="section-page-aktuality">
                <Aktualita image={servis} title="PODĚKOVÁNÍ za sezónu 2019/20" date="29.3. 2020" url="ASnDASie2"
                    rawText="Za normálních okolností bychom teď, na&nbsp;konci března, pravděpodobně oznamovali konec další lyžařské sezóny v&nbsp;karlovském údolí. Tato zima ale 'normální' nebyla, a&nbsp;to&nbsp;nemáme na&nbsp;mysli jen její předčasný konec...                    "
                />
                <Aktualita image={servis} title="PODĚKOVÁNÍ za sezónu 2019/20" date="29.3. 2020" url="ASnDASie2"
                    rawText="Za normálních okolností bychom teď, na&nbsp;konci března, pravděpodobně oznamovali konec další lyžařské sezóny v&nbsp;karlovském údolí. Tato zima ale 'normální' nebyla, a&nbsp;to&nbsp;nemáme na&nbsp;mysli jen její předčasný konec...                    "
                />
                <Aktualita image={servis} title="PODĚKOVÁNÍ za sezónu 2019/20" date="29.3. 2020" url="ASnDASie2"
                    rawText="Za normálních okolností bychom teď, na&nbsp;konci března, pravděpodobně oznamovali konec další lyžařské sezóny v&nbsp;karlovském údolí. Tato zima ale 'normální' nebyla, a&nbsp;to&nbsp;nemáme na&nbsp;mysli jen její předčasný konec...                    "
                />
                <Aktualita image={servis} title="PODĚKOVÁNÍ za sezónu 2019/20" date="29.3. 2020" url="ASnDASie2"
                    rawText="Za normálních okolností bychom teď, na&nbsp;konci března, pravděpodobně oznamovali konec další lyžařské sezóny v&nbsp;karlovském údolí. Tato zima ale 'normální' nebyla, a&nbsp;to&nbsp;nemáme na&nbsp;mysli jen její předčasný konec...                    "
                />
                <Aktualita image={servis} title="PODĚKOVÁNÍ za sezónu 2019/20" date="29.3. 2020" url="ASnDASie2"
                    rawText="Za normálních okolností bychom teď, na&nbsp;konci března, pravděpodobně oznamovali konec další lyžařské sezóny v&nbsp;karlovském údolí. Tato zima ale 'normální' nebyla, a&nbsp;to&nbsp;nemáme na&nbsp;mysli jen její předčasný konec...                    "
                />
                <Aktualita image={servis} title="PODĚKOVÁNÍ za sezónu 2019/20" date="29.3. 2020" url="ASnDASie2"
                    rawText="Za normálních okolností bychom teď, na&nbsp;konci března, pravděpodobně oznamovali konec další lyžařské sezóny v&nbsp;karlovském údolí. Tato zima ale 'normální' nebyla, a&nbsp;to&nbsp;nemáme na&nbsp;mysli jen její předčasný konec...                    "
                />
            </section>
        </main>
        <Footer />
    </Fragment>
}