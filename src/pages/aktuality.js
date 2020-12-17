import * as React from 'react';
import { Fragment, useState, useEffect } from 'react';
import '../styles/pages/aktualityPage.scss';
import '../styles/global.scss';

import { Helmet } from "react-helmet";
import Header from '../components/header'
import Footer from '../components/footer'
import Aktualita from '../components/aktualita'

import image from '../../assets/aktuality_hero.jpg';
import servis from '../../assets/servis.jpg'
import ctSport from '../../assets/ctSport1.jpg'
import parking from '../../assets/parking1.jpeg'
import lyzTest from '../../assets/testLyzi.png'
import sezona from '../../assets/snih1.jpg'
import zahajeniSezony from '../../assets/zahajeniSezony.jpg'
import informace from '../../assets/informace.jpg'

export default function page(props) {
    let ref = React.useRef();
    return <Fragment>
        <Helmet>
            <title>Aktuality | Ski Myšák</title>
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="description" content="Parádní lyžování v jeseníkách" />
        </Helmet>
        <Header mainSectionRef={ref} />
        <main className="aktuality">
            <section className="section-hero-image section" style={{ paddingBottom: '0px' }}>
                <h1 ref={ref}>Aktuality</h1>
                {/* <img className="hero-image" src={image} alt="Ski slope" /> */}

            </section>
            <section className="section-page-aktuality">
                <Aktualita image={zahajeniSezony} title="ZAČÍNÁME V PÁTEK 🏂" date="15.12. 2020" url="zahajujemeProvoz"
                    rawText="Ski&nbsp;Aréna Karlov otevře sezónu v&nbsp;pátek 18.&nbsp;prosince 2020 v&nbsp;8.30 hodin. K&nbsp;dispozici bude modrá 💙sjezdovka Family u&nbsp;čtyřsedadlové lanovky Myšák 🐭 a&nbsp;jedna ze&nbsp;sjezdovek u&nbsp;čtyřsedadlové lanovky Karlov Ski&nbsp;Express, kde&nbsp;bude i&nbsp;večerní lyžování..." />
                <Aktualita image={informace} title="Nové vyhlášení o vstupu do ČR" date="17.12 2020" url="informaceVstup"
                    rawText="Od&nbsp;18.&nbsp;prosince 2020 je&nbsp;omezen vstup a&nbsp;pohyb cizinců na&nbsp;území&nbsp;ČR. Podmínkou pro&nbsp;umožnění vstupu je&nbsp;negativní výsledek PCR testu. Dále není možné přicestovat za&nbsp;účelem návštěvy přátel či&nbsp;rekreace."
                />
                {/* <Aktualita image={sezona} title="Nová sezóna" date="5.12. 2020" url="novaSezona"
                    rawText="Tak co&nbsp;myslíte? Jaká bude? Zahájili jsme zasněžování! Počasí a&nbsp;vláda rozhodne, kdy&nbsp;se uvidíme&nbsp;😊"
                /> */}
                <Aktualita image={lyzTest} title="Testování lyží" url="lyzTest"
                    rawText="Další oblíbené testování Nixski proběhne 6.&nbsp;ledna, od&nbsp;9ti do&nbsp;16ti hodin na&nbsp;Myšáku. Vyzkoušejte novinkové ATOMIC, HEAD, DYNASTAR,STÖCKLI a&nbsp;LUSTI."
                />
                <Aktualita image={parking} title="Parkování" date="15.11. 2020" url="parkovani"
                    rawText="Přijeďte si&nbsp;užít lyžovačku! Parkování je u&nbsp;nás ZDARMA  a&nbsp;hned pod&nbsp;Myšákem. Přijíždějící auta organizujeme, aby bylo vše v&nbsp;pohodě, a&nbsp;aby další a&nbsp;další lyžaři našli místo. Mezi jednotlivými areály se&nbsp;můžete přemisťovat i&nbsp;bezplatnými SKI busy a SKI taxi. Jízdní řády připravujeme."
                />
                <Aktualita image={ctSport} title="ČT sport NA VRCHOL" date="15.11. 2020" url="JBus3Nas"
                    rawText="Vzpomínáte? Takhle to&nbsp;na&nbsp;Myšáku žilo s&nbsp;ČT&nbsp;sport na&nbsp;vrchol 22.&nbsp;ledna 2019. Už máme termín pro&nbsp;závod letošní sezóny. Zapište si&nbsp;do&nbsp;diářů 5.&nbsp;–&nbsp;7.&nbsp;února 2021! Tak ať&nbsp;dojedeme s&nbsp;ČT&nbsp;sport až&nbsp;na&nbsp;vrchol!"
                />
                <Aktualita image={servis} title="PODĚKOVÁNÍ za sezónu 2019/20" date="29.3. 2020" url="ASnDASie2"
                    rawText="Za normálních okolností bychom teď, na&nbsp;konci března, pravděpodobně oznamovali konec další lyžařské sezóny v&nbsp;karlovském údolí. Tato zima ale 'normální' nebyla, a&nbsp;to&nbsp;nemáme na&nbsp;mysli jen její předčasný konec...                    "
                />
            </section>
        </main>
        <Footer />
    </Fragment>
}