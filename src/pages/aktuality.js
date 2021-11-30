import * as React from 'react';
import { Fragment, useState, useEffect } from 'react';
import '../styles/pages/aktualityPage.scss';
import '../styles/global.scss';

import { Helmet } from "react-helmet";
import Header from '../components/header'
import Footer from '../components/footer'
import Aktualita from '../components/aktualita'
import { StaticImage } from "gatsby-plugin-image";

export const imageProps = {
    placeholder: 'blurred',
    objectPosition: 'top',
    // height: 
    // aspectRatio
    formats: ["jpg", "webp"],
    imgStyle: { maxHeight: '250px', objectPosition: 'top' },
    style: { maxHeight: '250px' },
    layout: 'constrained',
}


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
                <Aktualita title="NOVÉ INFORMACE O PROVOZU" date="23.12.2020" url="infoKonec"
                    rawText=" Od&nbsp;27.&nbsp;prosince 2020 budou všechny lyžařské areály uzavřeny z&nbsp;důvodu přechodu na&nbsp;5.&nbsp;stupeň PES. Ski&nbsp;Aréna Karlov bude do&nbsp;té&nbsp;doby nabízet všechny své&nbsp;služby."
                >
                    <StaticImage {...imageProps} src='../../assets/infoKonec.jpg' alt='Info o konci provozu' />
                </Aktualita>
                <Aktualita title="⛷ LYŽUJEME KAŽDÝ DEN DO KONCE ROKU 🏂" date="20.12.2020" url="doKonceRoku" rawText="...&nbsp;s&nbsp;výjimkou Štědrého dne&nbsp;🎄 (24.&nbsp;12.). Od&nbsp;8:30 do 16&nbsp;hodin. V&nbsp;provozu půjčovna, servis&nbsp;🛠 i&nbsp;lyžařská škola (rezervace a&nbsp;objednávky na&nbsp;čísle&nbsp;734&nbsp;824&nbsp;493). Občerstvení&nbsp;🥪🧃 přes&nbsp;okénko." >
                    <StaticImage {...imageProps} src='../../assets/do_konce_roku.jpg' alt='Foto horni stanice vleku' imgStyle={{ maxHeight: '250px', objectPosition: 'top' }} layout='constrained' />
                </Aktualita>


                <Aktualita title="ZAČÍNÁME V PÁTEK 🏂" date="15.12. 2020" url="zahajujemeProvoz" rawText="Ski&nbsp;Aréna Karlov otevře sezónu v&nbsp;pátek 18.&nbsp;prosince 2020 v&nbsp;8.30 hodin. Lyžovat se bude i&nbsp;v&nbsp;sobotu a&nbsp;v&nbsp;neděli (další provoz upřesníme). K&nbsp;dispozici bude modrá 💙sjezdovka Family u&nbsp;čtyřsedadlové lanovky Myšák 🐭 a&nbsp;jedna ze&nbsp;sjezdovek u&nbsp;čtyřsedadlové lanovky Karlov Ski&nbsp;Express, kde&nbsp;bude i&nbsp;večerní lyžování..." >
                    <StaticImage {...imageProps} src='../../assets/zahajeniSezony.jpg' alt='Foto sjezdovku' imgStyle={{ maxHeight: '250px', objectPosition: 'top' }} layout='constrained' />
                </Aktualita>


                <Aktualita title="Nové vyhlášení o vstupu do ČR" date="17.12 2020" url="informaceVstup" rawText="Od&nbsp;18.&nbsp;prosince 2020 je&nbsp;omezen vstup a&nbsp;pohyb cizinců na&nbsp;území&nbsp;ČR. Podmínkou pro&nbsp;umožnění vstupu je&nbsp;negativní výsledek PCR testu. Dále není možné přicestovat za&nbsp;účelem návštěvy přátel či&nbsp;rekreace." >
                    <StaticImage {...imageProps} src='../../assets/informace.jpg' alt='Info o vstupu do ČR' />
                </Aktualita>

                {/* <Slide index={1} innerClassName="slide-inner" className="carousel-slide">
                                <Aktualita image={sezona} title="Nová sezóna" date="5.12. 2020" url="novaSezona" rawText="Tak co&nbsp;myslíte? Jaká bude? Zahájili jsme zasněžování! Počasí a&nbsp;vláda rozhodne, kdy&nbsp;se uvidíme&nbsp;😊" />
                            </Slide> */}

                <Aktualita title="Testování lyží" url="lyzTest" rawText="Další oblíbené testování Nixski proběhne 6.&nbsp;ledna, od&nbsp;9ti do&nbsp;16ti hodin na&nbsp;Myšáku. Vyzkoušejte novinkové ATOMIC, HEAD, DYNASTAR,STÖCKLI a&nbsp;LUSTI." >
                    <StaticImage {...imageProps} src='../../assets/testLyzi.png' alt='Letak test lyzi' />
                </Aktualita>


                <Aktualita title="Parkování" date="18.11. 2020" url="parkovani" rawText="Přijeďte si&nbsp;užít lyžovačku! Parkování je u&nbsp;nás ZDARMA  a&nbsp;hned pod&nbsp;Myšákem. Přijíždějící auta organizujeme, aby bylo vše v&nbsp;pohodě, a&nbsp;aby další a&nbsp;další lyžaři našli místo. Mezi jednotlivými areály se&nbsp;můžete přemisťovat i&nbsp;bezplatnými SKI busy a SKI taxi. Jízdní řády připravujeme." >
                    <StaticImage {...imageProps} src='../../assets/parking1.jpeg' alt='Foto parkoviste z dronu' />
                </Aktualita>


                <Aktualita title="ČT sport NA VRCHOL" date="15.11. 2020" url="JBus3Nas" rawText="Vzpomínáte? Takhle to&nbsp;na&nbsp;Myšáku žilo s&nbsp;ČT&nbsp;sport na&nbsp;vrchol 22.&nbsp;ledna 2019. Už máme termín pro&nbsp;závod letošní sezóny. Zapište si&nbsp;do&nbsp;diářů 5.&nbsp;–&nbsp;7.&nbsp;února 2021! Tak ať&nbsp;dojedeme s&nbsp;ČT&nbsp;sport až&nbsp;na&nbsp;vrchol!" >
                    <StaticImage {...imageProps} src='../../assets/ctSport1.jpg' alt='Foto vyhercu' />
                </Aktualita>


                <Aktualita title="PODĚKOVÁNÍ za sezónu 2019/20" date="29.3. 2020" url="ASnDASie2" rawText="Za normálních okolností bychom teď, na&nbsp;konci března, pravděpodobně oznamovali konec další lyžařské sezóny v&nbsp;karlovském údolí. Tato zima ale 'normální' nebyla, a&nbsp;to&nbsp;nemáme na&nbsp;mysli jen její předčasný konec... " >
                    <StaticImage {...imageProps} src='../../assets/servis.jpg' alt='Sjezdovka' />
                </Aktualita>


            </section>
        </main>
        <Footer />
    </Fragment>
}