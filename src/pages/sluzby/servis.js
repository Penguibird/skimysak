import * as React from 'react';
import Media from "react-media";
import '../../styles/pages/servis.scss';
import '../../styles/global.scss';
import { Helmet } from "react-helmet";
import Header from '../../components/header'
import Footer from '../../components/footer'
import { Fragment, useState, useEffect } from 'react';
import image from '../../../assets/servis.jpg';
import videoMp4 from '../../../assets/video.mp4'

export default function page(props) {

    return <Fragment>
        <Helmet>
            <title>Servis a půjčovna | Ski myšák</title>
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="description" content="Parádní lyžování v jeseníkách" /> //TODO: description
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
                    <h1 className="big-title title-white hero-image-title">
                        Servis a půjčovna
                        </h1>
                    <a className="scroll-down" href="#mainSection">
                        <svg width="50" height="25" viewBox="0 0 50 25" className="custom-svg">
                            <line x1="5" x2="25" y1="5" y2="20" />
                            <line x1="45" x2="25" y1="5" y2="20" />
                        </svg>
                    </a>
                </div>
            </section>
            <section className="section section-text">
                <h2>Potřebujete půjčit lyže nebo snowboard?</h2>
                <p> Ski areál Myšák, český výrobce lyží SPORTEN a výrobce lyžařských bot ROXA připravili ojedinělým propojením výjimečnou nabídku.
                Službu pro ty z Vás,  kteří nemáte vlastní vybavení, lyžujete jen občas nebo byste rádi vyzkoušeli novinky z dílny zmiňovaných značek.
                Půjčujeme vybavení pro dospěláky i děti v setech i samostatně, včetně doplňků i výstroj na lyžařské kurzy / od 110,- Kč/den /. </p>
                <p>
                    Potěšíme i lyžařské fajnšmekry, kteří mohou zkoušet nejnovější novinky  sezóny,  vybavíme i  snowboarďáky a dobrodružnější skialpinisty.
                    V prostorách půjčovny prodáváme také potřebné doplňky – brýle, kukly, rukavice apod. české značky RELAX.
                </p>
                <p>Spolehněte se na odborné poradenství i bezpečnostní seřízení vybavení.</p>
                <h2>Ceník</h2>
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th> </th>
                            <th>1 den</th>
                            <th>2 dny</th>
                            <th>3 dny</th>
                            <th>4 dny</th>
                            <th>5 dnů</th>
                            <th>6 dnů</th>
                            <th>7 dnů</th>
                            <th>8 - 9 dnů</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>CARVINGOVÉ</td>
                            <td className="price" >komplet*</td>
                            <td className="price" >310,-</td>
                            <td className="price" >500,-</td>
                            <td className="price" >640,-</td>
                            <td className="price" >740,-</td>
                            <td className="price" >860,-</td>
                            <td className="price" >980,-</td>
                            <td className="price" >1080,-</td>
                            <td className="price" >1080,-</td>
                        </tr>
                        <tr>
                            <td>LYŽE - TOP</td>
                            <td>pouze lyže</td>
                            <td className="price">270,-</td>
                            <td className="price">460,-</td>
                            <td className="price">600,-</td>
                            <td className="price">680,-</td>
                            <td className="price">780,-</td>
                            <td className="price">880,-</td>
                            <td className="price">980,-</td>
                            <td className="price">980,-</td>
                        </tr>
                        <tr>
                            <td>CARVINGOVÉ</td>
                            <td>komplet*</td>
                            <td className="price">470,-</td>
                            <td className="price">700,-</td>
                            <td className="price">820,-</td>
                            <td className="price">1040,-</td>
                            <td className="price">1270,-</td>
                            <td className="price">1470,-</td>
                            <td className="price">1580,-</td>
                            <td className="price">1580,-</td>
                        </tr>
                        <tr>
                            <td>LYŽE - VIP</td>
                            <td>pouze lyže</td>
                            <td className="price">420,-</td>
                            <td className="price">640,-</td>
                            <td className="price">760,-</td>
                            <td className="price">990,-</td>
                            <td className="price">1250,-</td>
                            <td className="price">1420,-</td>
                            <td className="price">1520,-</td>
                            <td className="price">1520,-</td>
                        </tr>
                        <tr>
                            <td>DĚTSKÉ SKI</td>
                            <td className="price">komplet*</td>
                            <td className="price">230,-</td>
                            <td className="price">290,-</td>
                            <td className="price">380,-</td>
                            <td className="price">440,-</td>
                            <td className="price">510,-</td>
                            <td className="price">580,-</td>
                            <td className="price">660,-</td>
                            <td className="price">660,-</td>
                        </tr>
                        <tr>
                            <td>DO 135 cm</td>
                            <td>pouze lyže</td>
                            <td className="price">200,-</td>
                            <td className="price">230,-</td>
                            <td className="price">260,-</td>
                            <td className="price">290,-</td>
                            <td className="price">320,-</td>
                            <td className="price">360,-</td>
                            <td className="price">400,-</td>
                            <td className="price">400,-</td>
                        </tr>
                        <tr>
                            <td>SNOWBOARD</td>
                            <td>komplet*</td>
                            <td className="price">290,-</td>
                            <td className="price">440,-</td>
                            <td className="price">570,-</td>
                            <td className="price">680,-</td>
                            <td className="price">770,-</td>
                            <td className="price">850,-</td>
                            <td className="price">920,-</td>
                            <td className="price">920,-</td>
                        </tr>
                        <tr>
                            <td> </td>
                            <td>pouze SNB</td>
                            <td className="price">230,-</td>
                            <td className="price">290,-</td>
                            <td className="price">380,-</td>
                            <td className="price">440,-</td>
                            <td className="price">510,-</td>
                            <td className="price">580,-</td>
                            <td className="price">660,-</td>
                            <td className="price">660,-</td>
                        </tr>
                        <tr>
                            <td colspan="2">Lyžařské&nbsp;&nbsp;&nbsp;a běžecké boty</td>
                            <td rowspan="2" className="price">140,-</td>
                            <td rowspan="2" className="price">210,-</td>
                            <td rowspan="2" className="price">270,-</td>
                            <td rowspan="2" className="price">320,-</td>
                            <td rowspan="2" className="price">380,-</td>
                            <td rowspan="2" className="price">430,-</td>
                            <td rowspan="2" className="price">480,-</td>
                            <td rowspan="2" className="price">480,-</td>
                        </tr>
                        <tr>
                            <td colspan="2">Snowboardové&nbsp;&nbsp;&nbsp;boty</td>
                        </tr>
                        <tr>
                            <td colspan="2">Hole/helma/brýle</td>
                            <td className="price">60,-</td>
                            <td className="price">100,-</td>
                            <td className="price">120,-</td>
                            <td className="price">140,-</td>
                            <td className="price">160,-</td>
                            <td className="price">190,-</td>
                            <td className="price">210,-</td>
                            <td className="price">210,-</td>
                        </tr>
                        <tr>
                            <td colspan="2">Běžecký&nbsp;&nbsp;&nbsp;komplet</td>
                            <td className="price">270,-</td>
                            <td className="price">360,-</td>
                            <td className="price">430,-</td>
                            <td className="price">500,-</td>
                            <td className="price">550,-</td>
                            <td className="price">600,-</td>
                            <td className="price">660,-</td>
                            <td className="price">660,-</td>
                        </tr>
                        <tr>
                            <td colspan="2">Sněžnice</td>
                            <td className="price">130,-</td>
                            <td className="price">200,-</td>
                            <td className="price">260,-</td>
                            <td className="price">310,-</td>
                            <td className="price">370,-</td>
                            <td className="price">420,-</td>
                            <td className="price">470,-</td>
                            <td className="price">470,-</td>
                        </tr>
                    </tbody>
                </table>
                <p className="explanation-line"><i>*komplet = lyže + boty + hole (prkno + boty)</i></p>
                <h2>Vaše vlastní prkna a lyže Vám rádi seřídíme, opravíme, nabrousíme, připravíme…</h2>
                <h2>
                    Ceník servisu lyží a snowboardů
                </h2>
                <table>
                    <tbody>
                        <tr>
                            <td>voskování - lyže</td>
                            <td className="price">100,-</td></tr>
                        <tr>
                            <td>voskování - SNB</td>
                            <td className="price">200,-</td>
                        </tr>
                        <tr>
                            <td>seřízení vázání</td>
                            <td className="price">50,-</td>
                        </tr>
                        <tr>
                            <td>broušení hran</td>
                            <td className="price">150,-</td>
                        </tr>
                        <tr>
                            <td>broušení skluznice</td>
                            <td className="price">150,-</td>
                        </tr>
                        <tr>
                            <td>zalití děr ve skluznici</td>
                            <td className="price">150,-</td>
                        </tr>
                        <tr>
                            <td>velký servis</td>
                            <td className="price">500,-</td>
                        </tr>
                    </tbody>
                </table>
                <p>
                    Telefon: <a href="tel:+420 734 358 181" className="a-tel">+420 734 358 181</a>
                </p>
                <p>
                    Email: <a href="mailto:pujcovna@skimysak.cz" className="a-mail">pujcovna@skimysak.cz</a>
                </p>
            </section>
        </main>
        <Footer />
    </Fragment>
}