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
                            <td>komplet*</td>
                            <td>310,-</td>
                            <td>500,-</td>
                            <td>640,-</td>
                            <td>740,-</td>
                            <td>860,-</td>
                            <td>980,-</td>
                            <td>1080,-</td>
                            <td>1080,-</td>
                        </tr>
                        <tr>
                            <td>LYŽE - TOP</td>
                            <td>pouze lyže</td>
                            <td>270,-</td>
                            <td>460,-</td>
                            <td>600,-</td>
                            <td>680,-</td>
                            <td>780,-</td>
                            <td>880,-</td>
                            <td>980,-</td>
                            <td>980,-</td>
                        </tr>
                        <tr>
                            <td>CARVINGOVÉ</td>
                            <td>komplet*</td>
                            <td>470,-</td>
                            <td>700,-</td>
                            <td>820,-</td>
                            <td>1040,-</td>
                            <td>1270,-</td>
                            <td>1470,-</td>
                            <td>1580,-</td>
                            <td>1580,-</td>
                        </tr>
                        <tr>
                            <td>LYŽE - VIP</td>
                            <td>pouze lyže</td>
                            <td>420,-</td>
                            <td>640,-</td>
                            <td>760,-</td>
                            <td>990,-</td>
                            <td>1250,-</td>
                            <td>1420,-</td>
                            <td>1520,-</td>
                            <td>1520,-</td>
                        </tr>
                        <tr>
                            <td>DĚTSKÉ SKI</td>
                            <td>komplet*</td>
                            <td>230,-</td>
                            <td>290,-</td>
                            <td>380,-</td>
                            <td>440,-</td>
                            <td>510,-</td>
                            <td>580,-</td>
                            <td>660,-</td>
                            <td>660,-</td>
                        </tr>
                        <tr>
                            <td>DO 135 cm</td>
                            <td>pouze lyže</td>
                            <td>200,-</td>
                            <td>230,-</td>
                            <td>260,-</td>
                            <td>290,-</td>
                            <td>320,-</td>
                            <td>360,-</td>
                            <td>400,-</td>
                            <td>400,-</td>
                        </tr>
                        <tr>
                            <td>SNOWBOARD</td>
                            <td>komplet*</td>
                            <td>290,-</td>
                            <td>440,-</td>
                            <td>570,-</td>
                            <td>680,-</td>
                            <td>770,-</td>
                            <td>850,-</td>
                            <td>920,-</td>
                            <td>920,-</td>
                        </tr>
                        <tr>
                            <td> </td>
                            <td>pouze SNB</td>
                            <td>230,-</td>
                            <td>290,-</td>
                            <td>380,-</td>
                            <td>440,-</td>
                            <td>510,-</td>
                            <td>580,-</td>
                            <td>660,-</td>
                            <td>660,-</td>
                        </tr>
                        <tr>
                            <td colspan="2">Lyžařské&nbsp;&nbsp;&nbsp;a běžecké boty</td>
                            <td rowspan="2">140,-</td>
                            <td rowspan="2">210,-</td>
                            <td rowspan="2">270,-</td>
                            <td rowspan="2">320,-</td>
                            <td rowspan="2">380,-</td>
                            <td rowspan="2">430,-</td>
                            <td rowspan="2">480,-</td>
                            <td rowspan="2">480,-</td>
                        </tr>
                        <tr>
                            <td colspan="2">Snowboardové&nbsp;&nbsp;&nbsp;boty</td>
                        </tr>
                        <tr>
                            <td colspan="2">Hole/helma/brýle</td>
                            <td>60,-</td>
                            <td>100,-</td>
                            <td>120,-</td>
                            <td>140,-</td>
                            <td>160,-</td>
                            <td>190,-</td>
                            <td>210,-</td>
                            <td>210,-</td>
                        </tr>
                        <tr>
                            <td colspan="2">Běžecký&nbsp;&nbsp;&nbsp;komplet</td>
                            <td>270,-</td>
                            <td>360,-</td>
                            <td>430,-</td>
                            <td>500,-</td>
                            <td>550,-</td>
                            <td>600,-</td>
                            <td>660,-</td>
                            <td>660,-</td>
                        </tr>
                        <tr>
                            <td colspan="2">Sněžnice</td>
                            <td>130,-</td>
                            <td>200,-</td>
                            <td>260,-</td>
                            <td>310,-</td>
                            <td>370,-</td>
                            <td>420,-</td>
                            <td>470,-</td>
                            <td>470,-</td>
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
                            <td>100,-</td></tr>
                        <tr>
                            <td>voskování - SNB</td>
                            <td>200,-</td>
                        </tr>
                        <tr>
                            <td>seřízení vázání</td>
                            <td>50,-</td>
                        </tr>
                        <tr>
                            <td>broušení hran</td>
                            <td>150,-</td>
                        </tr>
                        <tr>
                            <td>broušení skluznice</td>
                            <td>150,-</td>
                        </tr>
                        <tr>
                            <td>zalití děr ve skluznici</td>
                            <td>150,-</td>
                        </tr>
                        <tr>
                            <td>velký servis</td>
                            <td>500,-</td>
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