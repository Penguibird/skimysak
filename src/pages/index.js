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
import image from '../../assets/photo.jpg'
import kamery from '../../assets/kamery.jpg'
import kamery_ico from '../../assets/kamery_ico.jpg'
import servis from '../../assets/servis.jpg'

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
                                : <img className="hero-image" src={image} alt="Ski slope" />
                            }
                        </Fragment>
                    )}
                </Media>
                <div className="flexbox-column main-title-wrap">
                    <h1 className="big title-white hero-image-title">
                        Parádní lyžování v jeseníkách
                    </h1>
                    <a className="scroll-down" href="#mainSection">
                        <svg width="50" height="25" viewBox="0 0 50 25" className="custom-svg">
                            <line x1="5" x2="25" y1="5" y2="20" />
                            <line x1="45" x2="25" y1="5" y2="20" />
                        </svg>
                    </a>
                </div>
            </section>

            <section className="section-icons section">
                <Link to="/subpages/kamery" className="widget widget-kamery" >
                    {/* <img src={kamery_ico} alt="kamery" /> */}
                    <h2 className="widget-title">KAMERY</h2>
                </Link>

                <Weather />

                <a href="https://www.skikarlov.cz/lyzovani/ceny-skipasu" className="widget widget-skipasy" >
                    {/* <img src={kamery_ico} alt="kamery" /> */}
                    {/* TODO Vymenit obrazek */}
                    <h2 className="widget-title">Skipasy</h2>
                </a>
            </section>

            <section id="mainSection" className="flexbox-column section section-main-text" >
                <h2>
                    Vítejte na Myšáku!
                </h2>
                <p>
                    Ski Myšák je součástí <strong>Ski arény Karlov pod Pradědem </strong> a nabízí 4 místnou sedačkovou lanovku s bublinou a skvělý sešup po modré nebo dvou červených - o celkové délce skoro 2,5 km.
                </p>
                <p>
                    Dřív, než vyrazíte, využijte náš <strong>servis</strong> nebo <strong>půjčovnu</strong> hned u lanovky a v případě zájmu si domluvte lekci <strong>v lyžařské škole</strong>, na kterou narazíte hned u pokladen.
                </p>
                <p>
                    O pauze jste zváni do baru U Myšáka nebo na pizzu k Myšce. Parkování je zdarma! Aktuální zprávy o provozu najdete <Link to="/provoz" >zde</Link> nebo na <a href="fb.com">FB Ski Myšák</a>.
                </p>
                <h2>
                    Děláme svou práci rádi!
                </h2>
            </section>
            <section className="section-aktuality section">
                {/* <h2>Aktuality</h2> */}
                {/* TODO Decide if h belongs here */}
                <Aktualita image={servis} title="PODĚKOVÁNÍ za sezónu 2019/20" date="29.3. 2020" url="ASnDASie2"
                    rawText="Za normálních okolností bychom teď, na konci března, pravděpodobně oznamovali konec další lyžařské sezóny v karlovském údolí. Tato zima ale 'normální' nebyla, a to nemáme na mysli jen její předčasný konec...                    "
                />
                <Aktualita image={servis} title="PODĚKOVÁNÍ za sezónu 2019/20" date="29.3. 2020" url="ASnDASie2"
                    rawText="Za normálních okolností bychom teď, na konci března, pravděpodobně oznamovali konec další lyžařské sezóny v karlovském údolí. Tato zima ale 'normální' nebyla, a to nemáme na mysli jen její předčasný konec...                    "
                />
                <Aktualita image={servis} title="PODĚKOVÁNÍ za sezónu 2019/20" date="29.3. 2020" url="ASnDASie2"
                    rawText="Za normálních okolností bychom teď, na konci března, pravděpodobně oznamovali konec další lyžařské sezóny v karlovském údolí. Tato zima ale 'normální' nebyla, a to nemáme na mysli jen její předčasný konec...                    "
                />
            </section>
            <section className="flexbox-column section section-sluzby" >
                <h1 className="big-title title-blue " >
                    SLUŽBY
                </h1>
                <div className="flexbox-row sluzby-wrap">
                    <Link to="/sluzby/servis"><article className="sluzby-item" >
                        <img src={servis} alt="snowy mountain" />
                        <h3>Půjčovna/Servis</h3>
                        <p>Přijeďte lyžovat! Pokud nemáte výbavu, svěřte se do rukou servismanů v půjčovně Myšák. Komplet výstroj pro lyžaře, snowboarďáky i alpinisty.</p>
                    </article></Link>
                    <Link to="/sluzby/skola"><article className="sluzby-item" >
                        <img src={servis} />
                        <h3>Lyžařská škola</h3>
                        <p>Chcete se zdokonalit v lyžování? Učíme lyžaře i snowboardisty všech věkových kategorií a všech úrovní.
                Bez stresu a na pohodu!</p>
                    </article></Link>
                    <Link to="/servis"><article className="sluzby-item" >
                        <img src={servis} />
                        <h3>Občerstvení</h3>
                        <p>Mauris id fermentum nulla. Vivamus a ante congue, porta nunc nec, hendrerit turpis. Aliquam bibendum, turpis eu mattis iaculis, ex lorem mollis sem, ut sollicitudin risus orci quis tellus.</p>
                    </article></Link>
                </div>
            </section>
            <section className="section-text section-socials">
                <a href="https://www.facebook.com" className="facebook-link"><h2 className="facebook">Najděte nás i na facebooku!</h2></a>
            </section>
            <section className="section section-bottom" >
                <h1 className="big-title title-white" >
                    U NÁS JE NÁDHERNĚ
                </h1>
            </section>
        </main>
        <Footer />
    </Fragment>
}

