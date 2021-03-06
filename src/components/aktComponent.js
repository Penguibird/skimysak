import * as React from 'react';
import { Fragment, useState, useEffect } from 'react';
import { StaticImage } from "gatsby-plugin-image";
import { Link, graphql } from 'gatsby';

import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import loadable from '@loadable/component'

import styles from '../styles/global.scss';

import 'pure-react-carousel/dist/react-carousel.es.css';

// import Aktualita from '../components/aktualita'
const Aktualita = loadable(() => import('./aktualita'));

// import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
const CarouselProvider = loadable(() => import('../carousel/carouselProvider'));
const Slider = loadable(() => import('../carousel/slider'));
const Slide = loadable(() => import('../carousel/slide'));
const ButtonBack = loadable(() => import('../carousel/buttonBack'));
const ButtonNext = loadable(() => import('../carousel/buttonNext'));

export default function aktComponent(props) {
    const m = useBreakpoint();
    return <section className="section-aktuality section">
        <h1 className="title-white smaller">Aktuality</h1>
        <div className="aktuality-wrapper" style={{ width: '100vw', maxWidth: 'unset' }}>
            {m.s
                ? <StaticImage transformOptions={{ outputPixelDensities: [0.05, 0.1, 0.15, 0.25, 0.5, 1, 2] }}
                    width={600}
                    height={338}
                    style={{ zIndex: 0 }} placeholder="blurred" src="../../assets/random_hero_2_sm.png" alt='Zasnezene pozadi' layout='fullWidth' />
                : <StaticImage transformOptions={{ outputPixelDensities: [0.05, 0.1, 0.15, 0.25, 0.5, 1, 2] }}
                    width={1920}
                    height={1080}
                    style={{ zIndex: 0 }} placeholder="blurred" src="../../assets/random_hero_2.png" alt='Zasnezene pozadi' layout='fullWidth' />
            }
            <CarouselProvider
                style={{ zIndex: 1, marginTop: '-50%' }}
                naturalSlideWidth={100}
                naturalSlideHeight={m.ll ? 135 : m.ls ? 150 : m.ml ? 125 : m.ms ? 150 : m.s ? 110 : 150}
                isIntrinsicHeight={m.s}
                className={m.s ? 'small-width-carousel' : ' '}
                totalSlides={8}
                visibleSlides={m.l ? 3 : m.m ? 2 : m.s ? 1 : 3}
            >
                <Slider width={m.ll ? '1300px' : null}>
                    <Slide index={0} innerClassName="slide-inner" className="carousel-slide">
                        <Aktualita title="NOVÉ INFORMACE O PROVOZU" date="23.12.2020" url="infoKonec"
                            rawText=" Od&nbsp;27.&nbsp;prosince 2020 budou všechny lyžařské areály uzavřeny z&nbsp;důvodu přechodu na&nbsp;5.&nbsp;stupeň PES. Ski&nbsp;Aréna Karlov bude do&nbsp;té&nbsp;doby nabízet všechny své&nbsp;služby."
                        >
                            <StaticImage {...imageProps} src='../../assets/infoKonec.jpg' alt='Info o konci provozu' />
                        </Aktualita>
                    </Slide>
                    <Slide index={0 + 1} innerClassName="slide-inner" className="carousel-slide">
                        <Aktualita title="⛷ LYŽUJEME KAŽDÝ DEN DO KONCE ROKU 🏂" date="20.12.2020" url="doKonceRoku" rawText="...&nbsp;s&nbsp;výjimkou Štědrého dne&nbsp;🎄 (24.&nbsp;12.). Od&nbsp;8:30 do 16&nbsp;hodin. V&nbsp;provozu půjčovna, servis&nbsp;🛠 i&nbsp;lyžařská škola (rezervace a&nbsp;objednávky na&nbsp;čísle&nbsp;734&nbsp;824&nbsp;493). Občerstvení&nbsp;🥪🧃 přes&nbsp;okénko." >
                            <StaticImage {...imageProps} src='../../assets/do_konce_roku.jpg' alt='Foto horni stanice vleku' imgStyle={{ maxHeight: '250px', objectPosition: 'top' }} layout='constrained' />
                        </Aktualita>
                    </Slide>
                    <Slide index={0 + 1 + 1} innerClassName="slide-inner" className="carousel-slide">
                        <Aktualita title="ZAČÍNÁME V PÁTEK 🏂" date="15.12. 2020" url="zahajujemeProvoz" rawText="Ski&nbsp;Aréna Karlov otevře sezónu v&nbsp;pátek 18.&nbsp;prosince 2020 v&nbsp;8.30 hodin. Lyžovat se bude i&nbsp;v&nbsp;sobotu a&nbsp;v&nbsp;neděli (další provoz upřesníme). K&nbsp;dispozici bude modrá 💙sjezdovka Family u&nbsp;čtyřsedadlové lanovky Myšák 🐭 a&nbsp;jedna ze&nbsp;sjezdovek u&nbsp;čtyřsedadlové lanovky Karlov Ski&nbsp;Express, kde&nbsp;bude i&nbsp;večerní lyžování..." >
                            <StaticImage {...imageProps} src='../../assets/zahajeniSezony.jpg' alt='Foto sjezdovku' imgStyle={{ maxHeight: '250px', objectPosition: 'top' }} layout='constrained' />
                        </Aktualita>
                    </Slide>
                    <Slide index={1 + 1 + 1} innerClassName="slide-inner" className="carousel-slide">
                        <Aktualita title="Nové vyhlášení o vstupu do ČR" date="17.12 2020" url="informaceVstup" rawText="Od&nbsp;18.&nbsp;prosince 2020 je&nbsp;omezen vstup a&nbsp;pohyb cizinců na&nbsp;území&nbsp;ČR. Podmínkou pro&nbsp;umožnění vstupu je&nbsp;negativní výsledek PCR testu. Dále není možné přicestovat za&nbsp;účelem návštěvy přátel či&nbsp;rekreace." >
                            <StaticImage {...imageProps} src='../../assets/informace.jpg' alt='Info o vstupu do ČR' />
                        </Aktualita>
                    </Slide>

                    <Slide index={2 + 1 + 1} innerClassName="slide-inner" className="carousel-slide">
                        <Aktualita title="Testování lyží" url="lyzTest" rawText="Další oblíbené testování Nixski proběhne 6.&nbsp;ledna, od&nbsp;9ti do&nbsp;16ti hodin na&nbsp;Myšáku. Vyzkoušejte novinkové ATOMIC, HEAD, DYNASTAR,STÖCKLI a&nbsp;LUSTI." >
                            <StaticImage {...imageProps} src='../../assets/testLyzi.png' alt='Letak test lyzi' />
                        </Aktualita>
                    </Slide>
                    <Slide index={3 + 1 + 1} innerClassName="slide-inner" className="carousel-slide">
                        <Aktualita title="Parkování" date="18.11. 2020" url="parkovani" rawText="Přijeďte si&nbsp;užít lyžovačku! Parkování je u&nbsp;nás ZDARMA  a&nbsp;hned pod&nbsp;Myšákem. Přijíždějící auta organizujeme, aby bylo vše v&nbsp;pohodě, a&nbsp;aby další a&nbsp;další lyžaři našli místo. Mezi jednotlivými areály se&nbsp;můžete přemisťovat i&nbsp;bezplatnými SKI busy a SKI taxi. Jízdní řády připravujeme." >
                            <StaticImage {...imageProps} src='../../assets/parking1.jpeg' alt='Foto parkoviste z dronu' />
                        </Aktualita>
                    </Slide>
                    <Slide index={4 + 1 + 1} innerClassName="slide-inner" className="carousel-slide">
                        <Aktualita title="ČT sport NA VRCHOL" date="15.11. 2020" url="JBus3Nas" rawText="Vzpomínáte? Takhle to&nbsp;na&nbsp;Myšáku žilo s&nbsp;ČT&nbsp;sport na&nbsp;vrchol 22.&nbsp;ledna 2019. Už máme termín pro&nbsp;závod letošní sezóny. Zapište si&nbsp;do&nbsp;diářů 5.&nbsp;–&nbsp;7.&nbsp;února 2021! Tak ať&nbsp;dojedeme s&nbsp;ČT&nbsp;sport až&nbsp;na&nbsp;vrchol!" >
                            <StaticImage {...imageProps} src='../../assets/ctSport1.jpg' alt='Foto vyhercu' />
                        </Aktualita>
                    </Slide>
                    <Slide index={5 + 1 + 1} innerClassName="slide-inner" className="carousel-slide">
                        <Aktualita title="PODĚKOVÁNÍ za sezónu 2019/20" date="29.3. 2020" url="ASnDASie2" rawText="Za normálních okolností bychom teď, na&nbsp;konci března, pravděpodobně oznamovali konec další lyžařské sezóny v&nbsp;karlovském údolí. Tato zima ale 'normální' nebyla, a&nbsp;to&nbsp;nemáme na&nbsp;mysli jen její předčasný konec... " >
                            <StaticImage {...imageProps} src='../../assets/servis.jpg' alt='Sjezdovka' />
                        </Aktualita>
                    </Slide>
                </Slider>
                <ButtonBack className="carousel-back">
                    <svg width="20" height="40" viewBox="0 0 20 40" className="custom-svg">
                        <line x1="3" x2="17" y1="20" y2="37" />
                        <line x1="3" x2="17" y1="20" y2="3" />
                    </svg>
                </ButtonBack>
                <ButtonNext className="carousel-next">
                    <svg width="20" height="40" viewBox="0 0 20 40" className="custom-svg">
                        <line x1="17" x2="3" y1="20" y2="37" />
                        <line x1="17" x2="3" y1="20" y2="3" />
                    </svg>
                </ButtonNext>
            </CarouselProvider>
        </div>
    </section>
}