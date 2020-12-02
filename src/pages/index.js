import * as React from "react";
import { Fragment, useRef, useEffect } from 'react';
import { Helmet } from "react-helmet";
import Media from "react-media";
import { Link } from 'gatsby';

//SWIPER
// import SwiperCore, { Navigation, A11y } from 'swiper';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper.scss';
// import 'swiper/components/navigation/navigation.scss';

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

import mapaFoto from '../../assets/mapa.png'

export default function Home() {
    // const scrollDown = () => {
    //     window.scroll({
    //         top: 1000,
    //         left: 0,
    //         behavior: 'smooth',
    //     });
    // }
    let ref = useRef();

    // useEffect(() => {
    //     Swiper.use([Navigation]);

    //     const swiper = new Swiper('.swiper-container', {
    //         slidesPerView: 3,
    //         spaceBetween: 30,
    //         pagination: {
    //             el: '.swiper-pagination',
    //             clickable: true,
    //         },
    //     });
    // }, [])
    let m = useBreakpoint();
    // useEffect(() => {
    //     m = useBreakpoint();
    // }, []);

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
                {/* <Media queries={{
                    small: "(max-width: 599px)",
                    medium: "(min-width: 600px) and (max-width:999px)",
                    large: "(min-width: 1000px)"
                }}>
                    {m => ( */}
                    <Fragment>{m.l
                        ? <video className="hero-image" muted autoPlay loop >
                            <source src={videoMp4} type="video/mp4" />
                            {/* <source src={image} type="image/jpg" media={"all"} /> */}
                        </video>
                        : <div className="hero-image " id="hero-image-wrapper">
                            <img src={image} alt="Ski slope" className="hero-image-image" />
                        </div>
                    }</Fragment>
                    {/* )}
                </Media> */}
                <div className="flexbox-column main-title-wrap">
                    <h1 className="hero-big title-white hero-image-title ">
                        {/* colorful */}
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
                <h1 className="smaller title-blue">
                    Parádní lyžování v jeseníkách!
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
                    {/* 
                    <Media queries={{
                        s: "(max-width: 599px)",
                        m: "(min-width: 600px) and (max-width:999px)",
                        l: "(min-width: 1000px)"
                    }}>{m => ( */}
                    <CarouselProvider
                        naturalSlideWidth={100}
                        naturalSlideHeight={m.l ? 130 : m.s ? 100 : m.m ? 150 : 180}
                        totalSlides={5}
                        visibleSlides={m.l ? 3 : m.s ? 1 : m.m ? 2 : 3}
                    >
                        <Slider>
                            <Slide index={0} innerClassName="slide-inner" className="carousel-slide">
                                <Aktualita image={sezona} title="Nová sezóna" date="26.11. 2020" url="novaSezona" rawText="Tak co&nbsp;myslíte? Jaká bude? Zahájili jsme zasněžování! Počasí a&nbsp;vláda rozhodne, kdy&nbsp;se uvidíme&nbsp;😊" />
                            </Slide>
                            <Slide index={1} innerClassName="slide-inner" className="carousel-slide">
                                <Aktualita image={lyzTest} title="Testování lyží" date="16.11. 2020" url="lyzTest" rawText="" />
                            </Slide>
                            <Slide index={2} innerClassName="slide-inner" className="carousel-slide">
                                <Aktualita image={parking} title="Parkování" date="15.11. 2020" url="parkovani" rawText="Přijeďte si&nbsp;užít lyžovačku! Parkování je u&nbsp;nás ZDARMA  a&nbsp;hned pod&nbsp;Myšákem. Přijíždějící auta organizujeme, aby bylo vše v&nbsp;pohodě, a&nbsp;aby další a&nbsp;další lyžaři našli místo. Mezi jednotlivými areály se&nbsp;můžete přemisťovat i&nbsp;bezplatnými SKI busy a SKI taxi. Jízdní řády připravujeme." />
                            </Slide>
                            <Slide index={3} innerClassName="slide-inner" className="carousel-slide">
                                <Aktualita image={ctSport} title="ČT sport NA VRCHOL" date="15.11. 2020" url="JBus3Nas" rawText="Vzpomínáte? Takhle to&nbsp;na&nbsp;Myšáku žilo s&nbsp;ČT&nbsp;sport na&nbsp;vrchol 22.&nbsp;ledna 2019. Už máme termín pro&nbsp;závod letošní sezóny. Zapište si&nbsp;do&nbsp;diářů 5.&nbsp;–&nbsp;7.&nbsp;února 2021! Tak ať&nbsp;dojedeme s&nbsp;ČT&nbsp;sport až&nbsp;na&nbsp;vrchol!" />
                            </Slide>
                            <Slide index={4} innerClassName="slide-inner" className="carousel-slide">
                                <Aktualita image={servis} title="PODĚKOVÁNÍ za sezónu 2019/20" date="29.3. 2020" url="ASnDASie2" rawText="Za normálních okolností bychom teď, na&nbsp;konci března, pravděpodobně oznamovali konec další lyžařské sezóny v&nbsp;karlovském údolí. Tato zima ale 'normální' nebyla, a&nbsp;to&nbsp;nemáme na&nbsp;mysli jen její předčasný konec...                    " />
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
                    {/* )} */}
                    {/* </Media> */}
                    {/* <Swiper
                        navigation  
                        spaceBetween={50}
                        slide
                        slidesPerView={3}
                        breakpoints={{
                            // when window width is >= 320px
                            320: {
                                slidesPerView: 2,
                                spaceBetween: 20
                            },
                            // when window width is >= 480px
                            480: {
                                slidesPerView: 3,
                                spaceBetween: 30
                            },
                            // when window width is >= 640px
                            640: {
                                slidesPerView: 4,
                                spaceBetween: 40
                            }
                        }}
                    >
                        <SwiperSlide>Hello World</SwiperSlide>
                        <SwiperSlide>Hello World</SwiperSlide>
                        <SwiperSlide>Hello World</SwiperSlide>
                        <SwiperSlide>Hello World</SwiperSlide>
                        <SwiperSlide>Hello World</SwiperSlide>
                        <SwiperSlide>Hello World</SwiperSlide>
                        <SwiperSlide>Hello World</SwiperSlide> */}
                    {/* <SwiperSlide >
                            <Aktualita image={sezona} title="Nová sezóna" date="26.11. 2020" url="novaSezona" rawText="Tak co&nbsp;myslíte? Jaká bude? Zahájili jsme zasněžování! Počasí a&nbsp;vláda rozhodne, kdy&nbsp;se uvidíme&nbsp;😊" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Aktualita image={lyzTest} title="Testování lyží" date="16.11. 2020" url="lyzTest" rawText="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Aktualita image={parking} title="Parkování" date="15.11. 2020" url="parkovani" rawText="Přijeďte si&nbsp;užít lyžovačku! Parkování je u&nbsp;nás ZDARMA  a&nbsp;hned pod&nbsp;Myšákem. Přijíždějící auta organizujeme, aby bylo vše v&nbsp;pohodě, a&nbsp;aby další a&nbsp;další lyžaři našli místo. Mezi jednotlivými areály se&nbsp;můžete přemisťovat i&nbsp;bezplatnými SKI busy a SKI taxi. Jízdní řády připravujeme." />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Aktualita image={ctSport} title="ČT sport NA VRCHOL" date="15.11. 2020" url="JBus3Nas" rawText="Vzpomínáte? Takhle to&nbsp;na&nbsp;Myšáku žilo s&nbsp;ČT&nbsp;sport na&nbsp;vrchol 22.&nbsp;ledna 2019. Už máme termín pro&nbsp;závod letošní sezóny. Zapište si&nbsp;do&nbsp;diářů 5.&nbsp;–&nbsp;7.&nbsp;února 2021! Tak ať&nbsp;dojedeme s&nbsp;ČT&nbsp;sport až&nbsp;na&nbsp;vrchol!" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Aktualita image={servis} title="PODĚKOVÁNÍ za sezónu 2019/20" date="29.3. 2020" url="ASnDASie2" rawText="Za normálních okolností bychom teď, na&nbsp;konci března, pravděpodobně oznamovali konec další lyžařské sezóny v&nbsp;karlovském údolí. Tato zima ale 'normální' nebyla, a&nbsp;to&nbsp;nemáme na&nbsp;mysli jen její předčasný konec...                    " />
                        </SwiperSlide> */}
                    {/* </Swiper> */}

                    {/* // <div class="swiper-button-prev"></div>
                            // <div class="swiper-button-next"></div> */}

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
                        <p><strong>Přijeďte lyžovat!</strong> Pokud nemáte výbavu, svěřte se do rukou servismanů v půjčovně Myšák. Komplet výstroj pro <strong>lyžaře, snowboarďáky i alpinisty</strong> .</p>
                    </article></Link>
                    <Link to="/skola"><article className="sluzby-item" >
                        <img src={skolaFoto} />
                        <h3>Lyžařská škola</h3>
                        <p><strong>Chcete se zdokonalit v lyžování?</strong> Učíme lyžaře i snowboardisty všech věkových kategorií a všech úrovní.
                Bez stresu a na pohodu!</p>
                    </article></Link>
                    <Link to="/obcerstveni"><article className="sluzby-item" >
                        <img src={jidloFoto} />
                        <h3>Občerstvení</h3>
                        <p><strong>Ski&nbsp;bar s&nbsp;terasou a&nbsp;výhledem nebo bistro pod&nbsp;Myšákem?</strong> Drinky a&nbsp;něco na&nbsp;zahřátí, domácí kuchyně pro&nbsp;děti i&nbsp;dospělé, polévky a&nbsp;místní speciality. Dobrou chuť!</p>
                    </article></Link>
                </div>
            </section>
            {/* <section className="section-text section-socials">
                <a href="https://www.facebook.com" className="facebook-link"><h2 className="facebook">Najděte nás i&nbsp;na&nbsp;facebooku!</h2></a>
            </section> */}
            <section className="section section-bottom" >
                {/* <h1 className="big-title title-white" >
                    Sezóna 2020-21! <br />
                    Těšíme se&nbsp;na&nbsp;Vás
                </h1> */}
                <img src={mapaFoto} alt="Mapa Ski Karlov" style={{ width: '90%', maxWidth: '1500px' }} />
            </section>
        </main>
        <Footer />
    </Fragment >
}

