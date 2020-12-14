import * as React from 'react';
// import Media from "react-media";
import '../styles/pages/servis.scss';
import '../styles/global.scss';
import { Helmet } from "react-helmet";
import Header from '../components/header'
import Footer from '../components/footer'
import { Fragment, useState, useEffect } from 'react';
import image from '../../assets/servis_hero.png';
import videoMp4 from '../../assets/servis_video_crop.mp4'
import { useBreakpoint } from "gatsby-plugin-breakpoints";

export default function page(props) {
    let ref = React.useRef();
    let m = useBreakpoint()
    return <Fragment>
        <Helmet>
            <title>Servis a půjčovna | Ski myšák</title>
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="description" content="Parádní lyžování v jeseníkách" />
        </Helmet>
        <Header mainSectionRef={ref} />
        <main className="servis">
            <section className="section-hero-image section">
                <Fragment>
                    {m.l
                        ? <video className="hero-image" muted autoPlay loop  >
                            <source src={videoMp4} type="video/mp4" />
                        </video>
                        : <img className="hero-image" src={image} alt="Ski slope" />
                    }
                </Fragment>
                <div className="flexbox-column main-title-wrap">
                    <h1 className="big-title title-white hero-image-title">
                        Servis a&nbsp;půjčovna
                        </h1>
                    <a className="scroll-down" href="#mainSection">
                        <svg width="50" height="25" viewBox="0 0 50 25" className="custom-svg">
                            <line x1="5" x2="25" y1="5" y2="20" />
                            <line x1="45" x2="25" y1="5" y2="20" />
                        </svg>
                    </a>
                </div>
            </section>
            <section ref={ref} className="section section-text">
                <h2>Potřebujete půjčit lyže nebo&nbsp;snowboard?</h2>
                <p> Ski areál Myšák, český výrobce lyží SPORTEN a&nbsp;výrobce lyžařských bot&nbsp;ROXA připravili ojedinělým propojením výjimečnou nabídku.
                Službu pro&nbsp;ty z&nbsp;Vás, kteří nemáte vlastní vybavení, lyžujete jen&nbsp;občas nebo&nbsp;byste rádi vyzkoušeli novinky z&nbsp;dílny zmiňovaných značek.
                Půjčujeme vybavení pro&nbsp;dospěláky i&nbsp;děti v&nbsp;setech i&nbsp;samostatně, včetně doplňků i&nbsp;výstroj na&nbsp;lyžařské kurzy od&nbsp;110,-&nbsp;Kč/den. </p>
                <p>
                    Potěšíme i&nbsp;lyžařské fajnšmekry, kteří mohou zkoušet nejnovější novinky sezóny,  vybavíme i&nbsp;snowboarďáky a&nbsp;dobrodružnější skialpinisty.
                    V&nbsp;prostorách půjčovny prodáváme také potřebné doplňky –&nbsp;brýle, kukly, rukavice apod. české značky RELAX.
                </p>
                <p><strong>Spolehněte se na odborné poradenství i&nbsp;bezpečnostní seřízení vybavení.</strong></p>
                <h2>Ceník</h2>
                <table className="table-cenik">
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
                            <th>CARVINGOVÉ</th>
                            <th  >komplet*</th>
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
                            <th>LYŽE - TOP</th>
                            <th>pouze lyže</th>
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
                            <th>CARVINGOVÉ</th>
                            <th>komplet*</th>
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
                            <th>LYŽE - VIP</th>
                            <th>pouze lyže</th>
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
                            <th>DĚTSKÉ SKI</th>
                            <th >komplet*</th>
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
                            <th>DO 135 cm</th>
                            <th>pouze lyže</th>
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
                            <th>SNOWBOARD</th>
                            <th>komplet*</th>
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
                            <th> </th>
                            <th>pouze SNB</th>
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
                            <th colspan="2">Lyžařské&nbsp;&nbsp;&nbsp;a běžecké boty</th>
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
                            <th colspan="2">Snowboardové&nbsp;&nbsp;&nbsp;boty</th>
                        </tr>
                        <tr className="cell-brighter">
                            <th colspan="2">Hole/helma/brýle</th>
                            <td className="price">60,-</td>
                            <td className="price">100,-</td>
                            <td className="price">120,-</td>
                            <td className="price">140,-</td>
                            <td className="price">160,-</td>
                            <td className="price">190,-</td>
                            <td className="price">210,-</td>
                            <td className="price">210,-</td>
                        </tr>
                        <tr className="cell-normal">
                            <th colspan="2">Běžecký&nbsp;&nbsp;&nbsp;komplet</th>
                            <td className="price">270,-</td>
                            <td className="price">360,-</td>
                            <td className="price">430,-</td>
                            <td className="price">500,-</td>
                            <td className="price">550,-</td>
                            <td className="price">600,-</td>
                            <td className="price">660,-</td>
                            <td className="price">660,-</td>
                        </tr>
                        <tr className="cell-brighter">
                            <th colspan="2">Sněžnice</th>
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
                <h2 className="blue"
                style={{
                    fontSize: '23px',
                }}>Vaše vlastní prkna a&nbsp;lyže Vám rádi seřídíme, opravíme, nabrousíme, připravíme…</h2>
                <h2>
                    Ceník servisu lyží a&nbsp;snowboardů
                </h2>
                <table>
                    <tbody>
                        <tr>
                            <th>voskování - lyže</th>
                            <td className="price">100,-</td></tr>
                        <tr>
                            <th>voskování - SNB</th>
                            <td className="price">200,-</td>
                        </tr>
                        <tr>
                            <th>seřízení vázání</th>
                            <td className="price">50,-</td>
                        </tr>
                        <tr>
                            <th>broušení hran</th>
                            <td className="price">150,-</td>
                        </tr>
                        <tr>
                            <th>broušení skluznice</th>
                            <td className="price">150,-</td>
                        </tr>
                        <tr>
                            <th>zalití děr ve skluznici</th>
                            <td className="price">150,-</td>
                        </tr>
                        <tr>
                            <th>velký servis</th>
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
    </Fragment >
}