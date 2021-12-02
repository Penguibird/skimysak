import * as React from "react";
import { Fragment, useRef, useEffect, } from 'react';
import { Helmet } from "react-helmet";
import { Link, graphql } from 'gatsby';
import loadable from '@loadable/component'



import { useBreakpoint, BreakpointsObject } from 'gatsby-plugin-breakpoints';

import { StaticImage } from "gatsby-plugin-image";

import Header from '../components/header'
import Weather from '../components/weather'
import Footer from '../components/footer';

 




//hero image
import IndexVideoComponent from "../components/IndexVideoComponent";
import LayerWrapper from "../components/layer-wrapper";


const AktComponent = loadable(() => import('../components/aktComponent'));

export default function Home() {
    return <Fragment>
        <IndexVideoComponent />
        <div>

            <Helmet>
                <title>Ski Myšák</title>
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Parádní lyžování v jeseníkách" />

            </Helmet>

            <Header
            />
            <main>
                <section className="section-hero-image section">
                    <div className="flexbox-column main-title-wrap">
                        <h1 className="hero-big title-white hero-image-title ">
                            Vítejte na&nbsp;Myšáku
                        </h1>
                        <h1 className="title-white hero-smaller smaller">
                            v&nbsp;Karlově pod&nbsp;Pradědem
                        </h1>
                        <div className="icon-wrapper">
                            <a className="scroll-down" href="#mainSection">
                                <svg width="50" height="25" viewBox="0 0 50 25" className="custom-svg">
                                    <line x1="5" x2="25" y1="5" y2="20" />
                                    <line x1="45" x2="25" y1="5" y2="20" />
                                </svg>
                            </a>
                            <div className="fb-icon">
                                <a href="https://www.facebook.com/SkiMysak/">
                                    <StaticImage transformOptions={{}}
                                        formats={["jpg", "webp"]} placeholder="blurred" src='../../assets/fb_icon.png' alt="Ikona Facebook" layout='constrained' />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="mainSection"

                    className="section-icons section">
                    <Link to="/kamery" className="widget widget-kamery" >
                        <StaticImage
                            transformOptions={{}}
                            loading="eager"
                            width={210}
                            height={210}
                            className="bckgrnd-image" src='../../assets/kamery.jpg' alt='Ikona kamery' layout='constrained' />
                        <h2 className="widget-title">KAMERY</h2>
                    </Link>

                    <Link to="/pocasi" className="widget weather-widget widget"  >
                        <LayerWrapper>
                            <StaticImage transformOptions={{}}
                                aspectRatio={1} width={250} className="bckgrnd-image" src='../../assets/pocasi_test.jpg' alt='Oblacna obloha' layout='constrained' />
                            <Weather />
                        </LayerWrapper>
                    </Link>

                    <a href="https://www.skikarlov.cz/lyzovani/ceny-skipasu" className="widget widget-skipasy" >
                        <StaticImage
                            loading="eager"

                            transformOptions={{}}
                            width={210}
                            height={210}
                            className="bckgrnd-image" src='../../assets/skipas.jpg' alt='Ikona skipasy' layout='constrained' />
                        <h2 className="widget-title">Skipasy</h2>
                    </a>
                </section>

                <section className="flexbox-column section section-main-text" >
                    {/* <h1 className="smaller title-blue" style={{marginBottom: '1vw'}}>
                        Jedemeéé!
                    </h1>
                    <h1 className="smaller title-blue" style={{fontSize: 'clamp(18px, 3.8vw, 3.8vw)', maxWidth: '1300px'}}>
                    do&nbsp;konce roku provoz<br/>denně 8:30&nbsp;-&nbsp;16:00 mimo 24.12
                    </h1> */}
                    {/* <h1 className="smaller title-blue">
                        Parádní lyžování v&nbsp;jeseníkách!
                    </h1> */}
                    <h1 className="smaller title-blue">

                        Vítejte na&nbsp;Myšáku
                    </h1>
                    <p>
                        Ski Myšák je součástí <strong>Ski arény Karlov pod Pradědem </strong> a&nbsp;nabízí 4&nbsp;místnou sedačkovou lanovku s&nbsp;bublinou a&nbsp;skvělý sešup po&nbsp;modré nebo dvou červených -&nbsp;o&nbsp;celkové délce skoro 2,5&nbsp;km.
                    </p>
                    <p>
                        Než vyrazíte, využijte náš <strong>servis</strong> nebo <strong>půjčovnu</strong> hned u&nbsp;lanovky a&nbsp;v&nbsp;případě zájmu si&nbsp;domluvte lekci <strong>v&nbsp;lyžařské škole</strong>, na&nbsp;kterou narazíte hned u&nbsp;pokladen.
                    </p>
                    <p>
                        O&nbsp;pauze jste zváni do&nbsp;<strong>SKI baru</strong> s&nbsp;terasou a&nbsp;výhledem nebo do&nbsp;<strong>Bistra pod&nbsp;Myšákem</strong>. Parkování je&nbsp;zdarma hned pod&nbsp;sjezdovkou!
                    </p>
                    <p>
                        Aktuální zprávy o&nbsp;provozu najdete <Link to="/aktuality" ><strong>zde</strong></Link> nebo na <a href="https://www.facebook.com/SkiMysak/"><strong>FB&nbsp;Ski Myšák</strong></a>.
                    </p>

                    <h2>
                        Děláme svou práci rádi!
                    </h2>
                </section>
                <AktComponent />


                <section className="flexbox-column section section-sluzby" >
                    <h1 className="big-title title-blue " >
                        SLUŽBY
                    </h1>
                    <div className="flexbox-row sluzby-wrap">
                        {/* TODO Aspect ratio in these  */}
                        <Link to="/servis"><article className="sluzby-item" >
                            <StaticImage transformOptions={{}}
                                aspectRatio={3 / 2} width={600}
                                formats={["jpg", "webp"]} placeholder="blurred" src='../../assets/servisFoto.jpg' alt="Zasnezena hora" layout='constrained'
                            />
                            <h3>Servis a půjčovna</h3>
                            <p><strong>Přijeďte lyžovat!</strong> Pokud nemáte výbavu, svěřte se do rukou servismanů v půjčovně Myšák.<strong> Komplet výstroj pro lyžaře, snowboarďáky i alpinisty</strong> .</p>
                        </article></Link>
                        <Link to="/skola"><article className="sluzby-item" >
                            <StaticImage transformOptions={{}}
                                aspectRatio={3 / 2} width={600}
                                formats={["jpg", "webp"]} placeholder="blurred" src='../../assets/skolaFoto.jpg' alt='Male dite na lyzich' layout='constrained'
                            />
                            <h3>Lyžařská škola</h3>
                            <p><strong>Chcete se zdokonalit v lyžování?</strong> Učíme lyžaře i snowboardisty všech věkových kategorií a všech úrovní.
                                <strong>Bez stresu a na pohodu!</strong></p>
                        </article></Link>
                        <Link to="/obcerstveni"><article className="sluzby-item" >
                            <StaticImage transformOptions={{}}
                                aspectRatio={3 / 2} width={600}

                                formats={["jpg", "webp"]} placeholder="blurred" src='../../assets/jidlo_hero.jpg' alt='Horky napoj na horach' layout='constrained'
                            />
                            <h3>Občerstvení</h3>
                            <p><strong>Ski&nbsp;bar s&nbsp;terasou a&nbsp;výhledem nebo bistro pod&nbsp;Myšákem?</strong> Drinky a&nbsp;něco na&nbsp;zahřátí,
                                domácí kuchyně pro&nbsp;děti i&nbsp;dospělé, polévky a&nbsp;místní speciality. <strong>Dobrou chuť!</strong></p>
                        </article></Link>
                    </div>
                </section>
                <section className="section section-bottom" style={{ width: '90%', maxWidth: '1500px', height: 'auto', margin: 'auto' }} >
                    <StaticImage
                        width={1500} height={960}
                        formats={["jpg", "webp"]} placeholder="blurred" src='../../assets/mapa.png' alt="Mapa Ski Karlov"
                        // imgStyle={{ width: '90%', maxWidth: '1500px' }}
                        // transformOptions={{ trim: 10 }}
                        // transformOptions={{ outputPixelDensities: [0.05, 0.1, 0.15, 0.25, 0.5, 1, 2] }}

                        objectFit='contain'
                        layout='constrained' />
                </section>
            </main>

            <Footer />
        </div>
    </Fragment >
}

