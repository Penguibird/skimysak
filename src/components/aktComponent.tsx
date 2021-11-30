import * as React from 'react';
import { Fragment, useState, useEffect } from 'react';
import { StaticImage } from "gatsby-plugin-image";
import { Link, graphql } from 'gatsby';

import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import loadable from '@loadable/component'

// @ts-ignore
import styles from '../styles/global.scss';

import 'pure-react-carousel/dist/react-carousel.es.css';

import Aktualita from './aktualita'

import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import useAktuality from '../hooks/useAktuality';

const getShortText = (s: string) => {
    if (s.length < 103)
        return s;

    return s.slice(0, 100) + "...";
}

export default function AktComponent(props) {
    const breakPoints = useBreakpoint();
    const aktuality = useAktuality();
    // const aktuality = [];
    return <section className="section-aktuality section">
        <div className="aktuality-wrapper" style={{ width: '100vw', maxWidth: 'unset' }}>
            <h1 className="title-white smaller">Aktuality</h1>
            <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={breakPoints.ll ? 135 : breakPoints.ls ? 150 : breakPoints.ml ? 125 : breakPoints.ms ? 150 : breakPoints.s ? 110 : 150}
                isIntrinsicHeight={breakPoints.s}
                className={breakPoints.s ? 'small-width-carousel' : ' '}
                totalSlides={8}
                visibleSlides={breakPoints.l ? 3 : breakPoints.m ? 2 : breakPoints.s ? 1 : 3}
            >
                <Slider style={{ width: breakPoints.ll ? '1300px' : null }}>
                    {aktuality.map((a, i) =>
                        <Slide index={i} innerClassName="slide-inner" className="carousel-slide">
                            <Aktualita
                                title={a.title}
                                date={a.date}
                                url={a.url}
                                rawText={getShortText(a.text)}
                                alt={a.image.imageAlt}
                                data={a.image.image}
                            />
                        </Slide>
                    )}
                    {/* <Slide index={0} innerClassName="slide-inner" className="carousel-slide">
                        <Aktualita title="NOVÉ INFORMACE O PROVOZU" date="23.12.2020" url="infoKonec"
                            rawText=" Od&nbsp;27.&nbsp;prosince 2020 budou všechny lyžařské areály uzavřeny z&nbsp;důvodu přechodu na&nbsp;5.&nbsp;stupeň PES. Ski&nbsp;Aréna Karlov bude do&nbsp;té&nbsp;doby nabízet všechny své&nbsp;služby."
                        >
                            <StaticImage placeholder={'blurred'}
                                objectPosition={'top'}
                                // height: 
                                // aspectRatio
                                formats={["jpg", "webp"]}
                                imgStyle={{ maxHeight: '250px', objectPosition: 'top' }}
                                style={{ maxHeight: '250px' }}
                                layout={'constrained'} src='../../assets/infoKonec.jpg' alt='Info o konci provozu' />
                        </Aktualita>
                    </Slide>
                    <Slide index={0 + 1} innerClassName="slide-inner" className="carousel-slide">
                        <Aktualita title="⛷ LYŽUJEME KAŽDÝ DEN DO KONCE ROKU 🏂" date="20.12.2020" url="doKonceRoku" rawText="...&nbsp;s&nbsp;výjimkou Štědrého dne&nbsp;🎄 (24.&nbsp;12.). Od&nbsp;8:30 do 16&nbsp;hodin. V&nbsp;provozu půjčovna, servis&nbsp;🛠 i&nbsp;lyžařská škola (rezervace a&nbsp;objednávky na&nbsp;čísle&nbsp;734&nbsp;824&nbsp;493). Občerstvení&nbsp;🥪🧃 přes&nbsp;okénko." >
                            <StaticImage placeholder={'blurred'}
                                objectPosition={'top'}
                                // height: 
                                // aspectRatio
                                formats={["jpg", "webp"]}
                                imgStyle={{ maxHeight: '250px', objectPosition: 'top' }}
                                style={{ maxHeight: '250px' }}
                                layout={'constrained'} src='../../assets/do_konce_roku.jpg' alt='Foto horni stanice vleku' imgStyle={{ maxHeight: '250px', objectPosition: 'top' }} layout='constrained' />
                        </Aktualita>
                    </Slide>
                    <Slide index={0 + 1 + 1} innerClassName="slide-inner" className="carousel-slide">
                        <Aktualita title="ZAČÍNÁME V PÁTEK 🏂" date="15.12. 2020" url="zahajujemeProvoz" rawText="Ski&nbsp;Aréna Karlov otevře sezónu v&nbsp;pátek 18.&nbsp;prosince 2020 v&nbsp;8.30 hodin. Lyžovat se bude i&nbsp;v&nbsp;sobotu a&nbsp;v&nbsp;neděli (další provoz upřesníme). K&nbsp;dispozici bude modrá 💙sjezdovka Family u&nbsp;čtyřsedadlové lanovky Myšák 🐭 a&nbsp;jedna ze&nbsp;sjezdovek u&nbsp;čtyřsedadlové lanovky Karlov Ski&nbsp;Express, kde&nbsp;bude i&nbsp;večerní lyžování..." >
                            <StaticImage placeholder={'blurred'}
                                objectPosition={'top'}
                                // height: 
                                // aspectRatio
                                formats={["jpg", "webp"]}
                                imgStyle={{ maxHeight: '250px', objectPosition: 'top' }}
                                style={{ maxHeight: '250px' }}
                                layout={'constrained'} src='../../assets/zahajeniSezony.jpg' alt='Foto sjezdovku' imgStyle={{ maxHeight: '250px', objectPosition: 'top' }} layout='constrained' />
                        </Aktualita>
                    </Slide>
                    <Slide index={1 + 1 + 1} innerClassName="slide-inner" className="carousel-slide">
                        <Aktualita title="Nové vyhlášení o vstupu do ČR" date="17.12 2020" url="informaceVstup" rawText="Od&nbsp;18.&nbsp;prosince 2020 je&nbsp;omezen vstup a&nbsp;pohyb cizinců na&nbsp;území&nbsp;ČR. Podmínkou pro&nbsp;umožnění vstupu je&nbsp;negativní výsledek PCR testu. Dále není možné přicestovat za&nbsp;účelem návštěvy přátel či&nbsp;rekreace." >
                            <StaticImage placeholder={'blurred'}
                                objectPosition={'top'}
                                // height: 
                                // aspectRatio
                                formats={["jpg", "webp"]}
                                imgStyle={{ maxHeight: '250px', objectPosition: 'top' }}
                                style={{ maxHeight: '250px' }}
                                layout={'constrained'} src='../../assets/informace.jpg' alt='Info o vstupu do ČR' />
                        </Aktualita>
                    </Slide>

                    <Slide index={2 + 1 + 1} innerClassName="slide-inner" className="carousel-slide">
                        <Aktualita title="Testování lyží" url="lyzTest" rawText="Další oblíbené testování Nixski proběhne 6.&nbsp;ledna, od&nbsp;9ti do&nbsp;16ti hodin na&nbsp;Myšáku. Vyzkoušejte novinkové ATOMIC, HEAD, DYNASTAR,STÖCKLI a&nbsp;LUSTI." >
                            <StaticImage placeholder={'blurred'}
                                objectPosition={'top'}
                                // height: 
                                // aspectRatio
                                formats={["jpg", "webp"]}
                                imgStyle={{ maxHeight: '250px', objectPosition: 'top' }}
                                style={{ maxHeight: '250px' }}
                                layout={'constrained'} src='../../assets/testLyzi.png' alt='Letak test lyzi' />
                        </Aktualita>
                    </Slide>
                    <Slide index={3 + 1 + 1} innerClassName="slide-inner" className="carousel-slide">
                        <Aktualita title="Parkování" date="18.11. 2020" url="parkovani" rawText="Přijeďte si&nbsp;užít lyžovačku! Parkování je u&nbsp;nás ZDARMA  a&nbsp;hned pod&nbsp;Myšákem. Přijíždějící auta organizujeme, aby bylo vše v&nbsp;pohodě, a&nbsp;aby další a&nbsp;další lyžaři našli místo. Mezi jednotlivými areály se&nbsp;můžete přemisťovat i&nbsp;bezplatnými SKI busy a SKI taxi. Jízdní řády připravujeme." >
                            <StaticImage placeholder={'blurred'}
                                objectPosition={'top'}
                                // height: 
                                // aspectRatio
                                formats={["jpg", "webp"]}
                                imgStyle={{ maxHeight: '250px', objectPosition: 'top' }}
                                style={{ maxHeight: '250px' }}
                                layout={'constrained'} src='../../assets/parking1.jpeg' alt='Foto parkoviste z dronu' />
                        </Aktualita>
                    </Slide>
                    <Slide index={4 + 1 + 1} innerClassName="slide-inner" className="carousel-slide">
                        <Aktualita title="ČT sport NA VRCHOL" date="15.11. 2020" url="JBus3Nas" rawText="Vzpomínáte? Takhle to&nbsp;na&nbsp;Myšáku žilo s&nbsp;ČT&nbsp;sport na&nbsp;vrchol 22.&nbsp;ledna 2019. Už máme termín pro&nbsp;závod letošní sezóny. Zapište si&nbsp;do&nbsp;diářů 5.&nbsp;–&nbsp;7.&nbsp;února 2021! Tak ať&nbsp;dojedeme s&nbsp;ČT&nbsp;sport až&nbsp;na&nbsp;vrchol!" >
                            <StaticImage placeholder={'blurred'}
                                objectPosition={'top'}
                                // height: 
                                // aspectRatio
                                formats={["jpg", "webp"]}
                                imgStyle={{ maxHeight: '250px', objectPosition: 'top' }}
                                style={{ maxHeight: '250px' }}
                                layout={'constrained'} src='../../assets/ctSport1.jpg' alt='Foto vyhercu' />
                        </Aktualita>
                    </Slide>
                    <Slide index={5 + 1 + 1} innerClassName="slide-inner" className="carousel-slide">
                        <Aktualita title="PODĚKOVÁNÍ za sezónu 2019/20" date="29.3. 2020" url="ASnDASie2" rawText="Za normálních okolností bychom teď, na&nbsp;konci března, pravděpodobně oznamovali konec další lyžařské sezóny v&nbsp;karlovském údolí. Tato zima ale 'normální' nebyla, a&nbsp;to&nbsp;nemáme na&nbsp;mysli jen její předčasný konec... " >
                            <StaticImage placeholder={'blurred'}
                                objectPosition={'top'}
                                // height: 
                                // aspectRatio
                                formats={["jpg", "webp"]}
                                imgStyle={{ maxHeight: '250px', objectPosition: 'top' }}
                                style={{ maxHeight: '250px' }}
                                layout={'constrained'} src='../../assets/servis.jpg' alt='Sjezdovka' />
                        </Aktualita>
                    </Slide> */}
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