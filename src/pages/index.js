import * as React from "react";
import { Fragment, useRef, useEffect } from 'react';
import { Helmet } from "react-helmet";
import { Link } from 'gatsby';

import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import { useBreakpoint } from 'gatsby-plugin-breakpoints';

import Header from '../components/header'
import Footer from '../components/footer'
import Weather from '../components/weather';
import Aktualita from '../components/aktualita'

import fbIcon from '../../assets/fb_icon.png';

//hero image
import videoMp4 from '../../assets/video.mp4';
import image from '../../assets/random_hero_1.png'

//sluzby photos
import skolaFoto from '../../assets/skolaFoto.jpg';
import servisFoto from '../../assets/servisFoto.jpg';
import jidloFoto from '../../assets/jidlo_hero.jpg';

//aktuality photos
import servis from '../../assets/servis.jpg'
import ctSport from '../../assets/ctSport1.jpg'
import parking from '../../assets/parking1.jpeg'
import lyzTest from '../../assets/testLyzi.png'
import sezona from '../../assets/snih1.jpg'
import zahajeniSezony from '../../assets/zahajeniSezony.jpg'
import informace from '../../assets/informace.jpg'
import doKonceRoku from '../../assets/do_konce_roku.jpg';
import infoKonec from '../../assets/infoKonec.jpg';

import mapaFoto from '../../assets/mapa.png'

export default function Home() {
    let ref = useRef();
    let m = useBreakpoint();

    return <Fragment>
        <Helmet>
            <title>Ski Myšák</title>
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="description" content="Parádní lyžování v jeseníkách" />

        </Helmet>
        <Header mainSectionRef={ref} />
        <main>
            <section className="section-hero-image section">
                <Fragment>{m.l
                    ? <video className="hero-image" muted autoPlay loop >
                        <source src={videoMp4} type="video/mp4" />
                    </video>
                    : <div className="hero-image " id="hero-image-wrapper">
                        <img src={image} alt="Ski slope" className="hero-image-image" />
                    </div>
                }</Fragment>
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
                                <img src={fbIcon} />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section id="mainSection" className="section-icons section" ref={ref}>
                <Link to="/kamery" className="widget widget-kamery" >
                    <h2 className="widget-title">KAMERY</h2>
                </Link>
                <Weather />
                <a href="https://www.skikarlov.cz/lyzovani/ceny-skipasu" className="widget widget-skipasy" >
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
                    Areál dočasně uzavřen.
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
            <section className="section-aktuality section">
                <h1 className="title-white smaller">Aktuality</h1>
                <div className="aktuality-wrapper" style={{ width: '100vw' }}>
                    <CarouselProvider
                        naturalSlideWidth={100}
                        naturalSlideHeight={m.ll ? 135 : m.ls ? 150 : m.ml ? 125 : m.ms ? 150 : m.s ? 110 : 150}
                        isIntrinsicHeight={m.s}
                        className={m.s ? 'small-width-carousel' : ' '}
                        totalSlides={6 + 1 + 1}
                        visibleSlides={m.l ? 3 : m.m ? 2 : m.s ? 1 : 3}
                    >
                        <Slider width={m.ll ? '1300px' : null}>
                            <Slide index={0} innerClassName="slide-inner" className="carousel-slide">
                                <Aktualita image={infoKonec} title="NOVÉ INFORMACE O PROVOZU" date="23.12.2020" url="infoKonec"
                                    rawText=" Od&nbsp;27.&nbsp;prosince 2020 budou všechny lyžařské areály uzavřeny z&nbsp;důvodu přechodu na&nbsp;5.&nbsp;stupeň PES. Ski&nbsp;Aréna Karlov bude do&nbsp;té&nbsp;doby nabízet všechny své&nbsp;služby."
                                />
                            </Slide>
                            <Slide index={0 + 1} innerClassName="slide-inner" className="carousel-slide">
                                <Aktualita image={doKonceRoku} title="⛷ LYŽUJEME KAŽDÝ DEN DO KONCE ROKU 🏂" date="20.12.2020" url="doKonceRoku" rawText="...&nbsp;s&nbsp;výjimkou Štědrého dne&nbsp;🎄 (24.&nbsp;12.). Od&nbsp;8:30 do 16&nbsp;hodin. V&nbsp;provozu půjčovna, servis&nbsp;🛠 i&nbsp;lyžařská škola (rezervace a&nbsp;objednávky na&nbsp;čísle&nbsp;734&nbsp;824&nbsp;493). Občerstvení&nbsp;🥪🧃 přes&nbsp;okénko." />
                            </Slide>
                            <Slide index={0 + 1 + 1} innerClassName="slide-inner" className="carousel-slide">
                                <Aktualita image={zahajeniSezony} title="ZAČÍNÁME V PÁTEK 🏂" date="15.12. 2020" url="zahajujemeProvoz" rawText="Ski&nbsp;Aréna Karlov otevře sezónu v&nbsp;pátek 18.&nbsp;prosince 2020 v&nbsp;8.30 hodin. Lyžovat se bude i&nbsp;v&nbsp;sobotu a&nbsp;v&nbsp;neděli (další provoz upřesníme). K&nbsp;dispozici bude modrá 💙sjezdovka Family u&nbsp;čtyřsedadlové lanovky Myšák 🐭 a&nbsp;jedna ze&nbsp;sjezdovek u&nbsp;čtyřsedadlové lanovky Karlov Ski&nbsp;Express, kde&nbsp;bude i&nbsp;večerní lyžování..." />
                            </Slide>
                            <Slide index={1 + 1 + 1} innerClassName="slide-inner" className="carousel-slide">
                                <Aktualita image={informace} title="Nové vyhlášení o vstupu do ČR" date="17.12 2020" url="informaceVstup" rawText="Od&nbsp;18.&nbsp;prosince 2020 je&nbsp;omezen vstup a&nbsp;pohyb cizinců na&nbsp;území&nbsp;ČR. Podmínkou pro&nbsp;umožnění vstupu je&nbsp;negativní výsledek PCR testu. Dále není možné přicestovat za&nbsp;účelem návštěvy přátel či&nbsp;rekreace." />
                            </Slide>
                            {/* <Slide index={1} innerClassName="slide-inner" className="carousel-slide">
                                <Aktualita image={sezona} title="Nová sezóna" date="5.12. 2020" url="novaSezona" rawText="Tak co&nbsp;myslíte? Jaká bude? Zahájili jsme zasněžování! Počasí a&nbsp;vláda rozhodne, kdy&nbsp;se uvidíme&nbsp;😊" />
                            </Slide> */}
                            <Slide index={2 + 1 + 1} innerClassName="slide-inner" className="carousel-slide">
                                <Aktualita image={lyzTest} title="Testování lyží" url="lyzTest" rawText="Další oblíbené testování Nixski proběhne 6.&nbsp;ledna, od&nbsp;9ti do&nbsp;16ti hodin na&nbsp;Myšáku. Vyzkoušejte novinkové ATOMIC, HEAD, DYNASTAR,STÖCKLI a&nbsp;LUSTI." />
                            </Slide>
                            <Slide index={3 + 1 + 1} innerClassName="slide-inner" className="carousel-slide">
                                <Aktualita image={parking} title="Parkování" date="18.11. 2020" url="parkovani" rawText="Přijeďte si&nbsp;užít lyžovačku! Parkování je u&nbsp;nás ZDARMA  a&nbsp;hned pod&nbsp;Myšákem. Přijíždějící auta organizujeme, aby bylo vše v&nbsp;pohodě, a&nbsp;aby další a&nbsp;další lyžaři našli místo. Mezi jednotlivými areály se&nbsp;můžete přemisťovat i&nbsp;bezplatnými SKI busy a SKI taxi. Jízdní řády připravujeme." />
                            </Slide>
                            <Slide index={4 + 1 + 1} innerClassName="slide-inner" className="carousel-slide">
                                <Aktualita image={ctSport} title="ČT sport NA VRCHOL" date="15.11. 2020" url="JBus3Nas" rawText="Vzpomínáte? Takhle to&nbsp;na&nbsp;Myšáku žilo s&nbsp;ČT&nbsp;sport na&nbsp;vrchol 22.&nbsp;ledna 2019. Už máme termín pro&nbsp;závod letošní sezóny. Zapište si&nbsp;do&nbsp;diářů 5.&nbsp;–&nbsp;7.&nbsp;února 2021! Tak ať&nbsp;dojedeme s&nbsp;ČT&nbsp;sport až&nbsp;na&nbsp;vrchol!" />
                            </Slide>
                            <Slide index={5 + 1 + 1} innerClassName="slide-inner" className="carousel-slide">
                                <Aktualita image={servis} title="PODĚKOVÁNÍ za sezónu 2019/20" date="29.3. 2020" url="ASnDASie2" rawText="Za normálních okolností bychom teď, na&nbsp;konci března, pravděpodobně oznamovali konec další lyžařské sezóny v&nbsp;karlovském údolí. Tato zima ale 'normální' nebyla, a&nbsp;to&nbsp;nemáme na&nbsp;mysli jen její předčasný konec... " />
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
            <section className="flexbox-column section section-sluzby" >
                <h1 className="big-title title-blue " >
                    SLUŽBY
                </h1>
                <div className="flexbox-row sluzby-wrap">
                    <Link to="/servis"><article className="sluzby-item" >
                        <img src={servisFoto} alt="snowy mountain" />
                        <h3>Servis a půjčovna</h3>
                        <p><strong>Přijeďte lyžovat!</strong> Pokud nemáte výbavu, svěřte se do rukou servismanů v půjčovně Myšák.<strong> Komplet výstroj pro lyžaře, snowboarďáky i alpinisty</strong> .</p>
                    </article></Link>
                    <Link to="/skola"><article className="sluzby-item" >
                        <img src={skolaFoto} />
                        <h3>Lyžařská škola</h3>
                        <p><strong>Chcete se zdokonalit v lyžování?</strong> Učíme lyžaře i snowboardisty všech věkových kategorií a všech úrovní.
                <strong>Bez stresu a na pohodu!</strong></p>
                    </article></Link>
                    <Link to="/obcerstveni"><article className="sluzby-item" >
                        <img src={jidloFoto} />
                        <h3>Občerstvení</h3>
                        <p><strong>Ski&nbsp;bar s&nbsp;terasou a&nbsp;výhledem nebo bistro pod&nbsp;Myšákem?</strong> Drinky a&nbsp;něco na&nbsp;zahřátí,
                        domácí kuchyně pro&nbsp;děti i&nbsp;dospělé, polévky a&nbsp;místní speciality. <strong>Dobrou chuť!</strong></p>
                    </article></Link>
                </div>
            </section>
            <section className="section section-bottom" >
                <img src={mapaFoto} alt="Mapa Ski Karlov" style={{ width: '90%', maxWidth: '1500px' }} />
            </section>
        </main>
        <Footer />
    </Fragment >
}

