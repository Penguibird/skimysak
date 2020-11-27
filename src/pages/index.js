import * as React from "react";
import { Fragment } from 'react';
import { Helmet } from "react-helmet";
import Media from "react-media";
import { Link } from 'gatsby';
import Header from '../components/header'
import Footer from '../components/footer'
import Weather from '../components/weather';
import Aktualita from '../components/aktualita'

import videoMp4 from '../../assets/video.mp4';
import image from '../../assets/random_hero_1.png'
// import kamery from '../../assets/kamery.jpg'
import servis from '../../assets/servis.jpg'

import skolaFoto from '../../assets/skolaFoto.jpg';
import servisFoto from '../../assets/servisFoto.jpg'; //assets\servisFoto.jpg
import jidloFoto from '../../assets/jidlo_hero.jpg';
import fbIcon from '../../assets/fb_icon.png';
import { useRef } from "react";


export default function Home() {
    const scrollDown = () => {
        window.scroll({
            top: 1000,
            left: 0,
            behavior: 'smooth',
        });
    }
    let ref = useRef();

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
                <Media queries={{
                    small: "(max-width: 599px)",
                    medium: "(min-width: 600px) and (max-width:999px)",
                    large: "(min-width: 1000px)"
                }}>
                    {matches => (<Fragment>{matches.large
                        ? <video className="hero-image" muted autoPlay loop  >
                            <source src={videoMp4} type="video/mp4" />
                            {/* <source src={image} type="image/jpg" media={"all"} /> */}
                        </video>
                        : <div className="hero-image">
                            <img src={image} alt="Ski slope" />
                        </div>
                    }</Fragment>)}
                </Media>
                <div className="flexbox-column main-title-wrap">
                    <h1 className="big title-white hero-image-title">
                        Vítejte na&nbsp;Myšáku
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

                <Link to="/subpages/kamery" className="widget widget-kamery" >

                    <h2 className="widget-title">KAMERY</h2>
                </Link>
                <Weather />

                <a href="https://www.skikarlov.cz/lyzovani/ceny-skipasu" className="widget widget-skipasy" >
                    <h2 className="widget-title">Skipasy</h2>
                </a>
            </section>

            <section className="flexbox-column section section-main-text" >
                <h1 className="smaller title-blue">
                    Parádní lyžování v jeseníkách!
                </h1>
                <p>
                    Ski Myšák je součástí <strong>Ski arény Karlov pod Pradědem </strong> a&nbsp;nabízí 4&nbsp;místnou sedačkovou lanovku s&nbsp;bublinou a&nbsp;skvělý sešup po&nbsp;modré nebo dvou červených -&nbsp;o&nbsp;celkové délce skoro 2,5&nbsp;km.
                </p>
                <p>
                    Dřív, než vyrazíte, využijte náš <strong>servis</strong> nebo <strong>půjčovnu</strong> hned u&nbsp;lanovky a&nbsp;v&nbsp;případě zájmu si&nbsp;domluvte lekci <strong>v&nbsp;lyžařské škole</strong>, na&nbsp;kterou narazíte hned u&nbsp;pokladen.
                </p>
                <p>
                    O&nbsp;pauze jste zváni do&nbsp;ski baru s&nbsp;terasou a&nbsp;výhledem nebo do&nbsp;Bistra pod&nbsp;Myšákem. Parkování je&nbsp;zdarma hned pod&nbsp;sjezdovkou!
                     Aktuální zprávy o&nbsp;provozu najdete <Link to="/provoz" >zde</Link> nebo na&nbsp;<a href="https://www.facebook.com/SkiMysak/">FB&nbsp;Ski Myšák</a>.
                </p>
                <h2>
                    Děláme svou práci rádi!
                </h2>
            </section>
            <section className="section-aktuality section">
                <h1 className="title-white smaller">Aktuality</h1>
                <div className="aktuality-wrapper">
                    {/* TODO Decide if h belongs here */}
                    <Aktualita image={servis} title="PODĚKOVÁNÍ za sezónu 2019/20" date="29.3. 2020" url="ASnDASie2"
                        rawText="Za normálních okolností bychom teď, na&nbsp;konci března, pravděpodobně oznamovali konec další lyžařské sezóny v&nbsp;karlovském údolí. Tato zima ale 'normální' nebyla, a&nbsp;to&nbsp;nemáme na&nbsp;mysli jen její předčasný konec...                    "
                    />
                    <Aktualita image={servis} title="PODĚKOVÁNÍ za sezónu 2019/20" date="29.3. 2020" url="ASnDASie2"
                        rawText="Za normálních okolností bychom teď, na&nbsp;konci března, pravděpodobně oznamovali konec další lyžařské sezóny v&nbsp;karlovském údolí. Tato zima ale 'normální' nebyla, a&nbsp;to&nbsp;nemáme na&nbsp;mysli jen její předčasný konec...                    "
                    />
                    <Aktualita image={servis} title="PODĚKOVÁNÍ za sezónu 2019/20" date="29.3. 2020" url="ASnDASie2"
                        rawText="Za normálních okolností bychom teď, na&nbsp;konci března, pravděpodobně oznamovali konec další lyžařské sezóny v&nbsp;karlovském údolí. Tato zima ale 'normální' nebyla, a&nbsp;to&nbsp;nemáme na&nbsp;mysli jen její předčasný konec...                    "
                    />
                </div>
            </section>
            <section className="flexbox-column section section-sluzby" >
                <h1 className="big-title title-blue " >
                    SLUŽBY
                </h1>
                <div className="flexbox-row sluzby-wrap">
                    <Link to="/sluzby/servis"><article className="sluzby-item" >
                        <img src={servisFoto} alt="snowy mountain" />
                        <h3>Půjčovna/Servis</h3>
                        <p>Přijeďte lyžovat! Pokud nemáte výbavu, svěřte se do rukou servismanů v půjčovně Myšák. Komplet výstroj pro lyžaře, snowboarďáky i alpinisty.</p>
                    </article></Link>
                    <Link to="/sluzby/skola"><article className="sluzby-item" >
                        <img src={skolaFoto} />
                        <h3>Lyžařská škola</h3>
                        <p>Chcete se zdokonalit v lyžování? Učíme lyžaře i snowboardisty všech věkových kategorií a všech úrovní.
                Bez stresu a na pohodu!</p>
                    </article></Link>
                    <Link to="/servis"><article className="sluzby-item" >
                        <img src={servis} />
                        <h3>Občerstvení</h3>
                        <p>Ski&nbsp;bar s&nbsp;terasou a&nbsp;výhledem nebo něco k&nbsp;jídlu v&nbsp;Bistru pod&nbsp;Myšákem! Domácí kuchyně pro&nbsp;děti i&nbsp;dospělé, polévky na&nbsp;zahřátí a&nbsp;místní speciality. Dobrou chuť!</p>
                    </article></Link>
                </div>
            </section>
            {/* <section className="section-text section-socials">
                <a href="https://www.facebook.com" className="facebook-link"><h2 className="facebook">Najděte nás i&nbsp;na&nbsp;facebooku!</h2></a>
            </section> */}
            <section className="section section-bottom" >
                <h1 className="big-title title-white" >
                    Sezóna 2020-21! <br />
                    Těšíme se&nbsp;na&nbsp;Vás
                </h1>
            </section>
        </main>
        <Footer />
    </Fragment >
}

