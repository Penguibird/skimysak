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
import jidloFoto from '../../assets/jidlo_hero.jpg'

export default function Home() {
    const scrollDown = () => {
        window.scroll({
            top: 1000,
            left: 0,
            behavior: 'smooth',
        });
    }

    return <Fragment>
        <Helmet>
            <title>Ski Myšák</title>
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="description" content="Parádní lyžování v jeseníkách" />
        </Helmet>
        <Header />
        <main>
            <section className="section-hero-image section">
                <Media queries={{
                    small: "(max-width: 599px)",
                    medium: "(min-width: 600px) and (max-width:999px)",
                    large: "(min-width: 1000px)"
                }}>
                    {matches => (
                        <Fragment>
                            {matches.large
                                ? <video className="hero-image" muted autoPlay loop  >
                                    <source src={videoMp4} type="video/mp4" />
                                    {/* <source src={image} type="image/jpg" media={"all"} /> */}
                                </video>
                                : <div className="hero-image">
                                    <img src={image} alt="Ski slope" />
                                </div>
                            }
                        </Fragment>
                    )}
                </Media>
                <div className="flexbox-column main-title-wrap">
                    <h1 className="big title-white hero-image-title">
                        Vítejte na&nbsp;Myšáku
                    </h1>
                    <a className="scroll-down" href="#mainSection">
                        <svg width="50" height="25" viewBox="0 0 50 25" className="custom-svg">
                            <line x1="5" x2="25" y1="5" y2="20" />
                            <line x1="45" x2="25" y1="5" y2="20" />
                        </svg>
                    </a>
                </div>
            </section>

            <section id="mainSection" className="section-icons section">

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
                    O&nbsp;pauze jste zváni do baru U&nbsp;Myšáka nebo na&nbsp;pizzu k&nbsp;Myšce. Parkování je zdarma! Aktuální zprávy o&nbsp;provozu najdete <Link to="/provoz" >zde</Link> nebo na&nbsp;<a href="fb.com">FB&nbsp;Ski Myšák</a>.
                    {/* //todo add mysak fb */}
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
                <h1 className=" smaller title-blue " >
                    SLUŽBY
                </h1>
                <div className="flexbox-row sluzby-wrap">
                    <Link to="/sluzby/servis"><article className="sluzby-item" >
                        <div className="image-wrapper">
                            <img src={servisFoto} alt="snowy mountain" />
                        </div>
                        <h4>Půjčovna/Servis</h4>
                        <p>Přijeďte lyžovat! Pokud nemáte výbavu, svěřte se do&nbsp;rukou servismanů v&nbsp;půjčovně Myšák. Komplet výstroj pro&nbsp;lyžaře, snowboarďáky i&nbsp;alpinisty.</p>
                    </article></Link>
                    <Link to="/sluzby/skola"><article className="sluzby-item" >
                        <div className="image-wrapper">
                            <img src={skolaFoto} />
                        </div>
                        <h4>Lyžařská škola</h4>
                        <p>Chcete se&nbsp;zdokonalit v&nbsp;lyžování? Učíme lyžaře i&nbsp;snowboardisty všech věkových kategorií a&nbsp;všech úrovní.
                Bez&nbsp;stresu a&nbsp;na&nbsp;pohodu!</p>
                    </article></Link>
                    <Link to="/sluzby/obcerstveni"><article className="sluzby-item" >
                        <div className="image-wrapper">
                            <img src={jidloFoto} />
                        </div>
                        <h4>Občerstvení</h4>
                        <p>Domácí kuchyně pro&nbsp;děti i&nbsp;dospělé, polévky na&nbsp;zahřátí a&nbsp;místní speciality!</p>
                    </article></Link>
                </div>
            </section>
            <section className="section-text section-socials">
                <a href="https://www.facebook.com" className="facebook-link"><h2 className="facebook">Najděte nás i&nbsp;na&nbsp;facebooku!</h2></a>
            </section>
            <section className="section section-bottom" >
                <h1 className="big-title title-white" >
                    U&nbsp;NÁS JE&nbsp;NÁDHERNĚ
                </h1>
            </section>
        </main>
        <Footer />
    </Fragment>
}

