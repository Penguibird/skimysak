import * as React from 'react';
// import Media from "react-media";
import '../styles/pages/servis.scss';
import '../styles/global.scss';
import { Helmet } from "react-helmet";
import Header from '../components/header'
import Footer from '../components/footer'
import { Fragment, useState, useEffect } from 'react';
import videoMp4 from '../../assets/servis_video_crop.mp4'
import { useBreakpoint } from "gatsby-plugin-breakpoints";
import { StaticImage } from "gatsby-plugin-image";
import { useBreakpointsType } from '../types/useBreakPointsType';

export default function Page(props) {
    let m = useBreakpoint() as useBreakpointsType;
    return <Fragment>
        <Helmet>
            <title>Servis a půjčovna | Ski myšák</title>
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="description" content="Parádní lyžování v jeseníkách" />
        </Helmet>
        <Header />
        <main className="servis">
            <section className="section-hero-image section">
                <Fragment>
                    {m.l
                        ? <video className="hero-image" muted autoPlay loop  >
                            <source src={videoMp4} type="video/mp4" />
                        </video>
                        : <StaticImage formats={["jpg", "webp"]} placeholder="blurred" src='../../assets/servis_hero.png' className="hero-image" imgClassName="hero-image" alt='Foto z pujcovny' layout='fullWidth' />
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
            <section className="section section-text">
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
                            <td className="price" >350,-</td>
                            <td className="price" >540,-</td>
                            <td className="price" >680,-</td>
                            <td className="price" >780,-</td>
                            <td className="price" >900,-</td>
                            <td className="price" >1020,-</td>
                            <td className="price" >1120,-</td>
                            <td className="price" >1120,-</td>
                        </tr>
                        <tr>
                            <th>LYŽE - TOP</th>
                            <th>pouze lyže</th>
                            <td className="price">310,-</td>
                            <td className="price">500,-</td>
                            <td className="price">640,-</td>
                            <td className="price">720,-</td>
                            <td className="price">820,-</td>
                            <td className="price">920,-</td>
                            <td className="price">1020,-</td>
                            <td className="price">1020,-</td>
                        </tr>
                        <tr>
                            <th>CARVINGOVÉ</th>
                            <th>komplet*</th>
                            <td className="price">520,-</td>
                            <td className="price">750,-</td>
                            <td className="price">880,-</td>
                            <td className="price">1100,-</td>
                            <td className="price">1350,-</td>
                            <td className="price">1530,-</td>
                            <td className="price">1640,-</td>
                            <td className="price">1640,-</td>
                        </tr>
                        <tr>
                            <th>LYŽE - VIP</th>
                            <th>pouze lyže</th>
                            <td className="price">470,-</td>
                            <td className="price">700,-</td>
                            <td className="price">830,-</td>
                            <td className="price">1050,-</td>
                            <td className="price">1280,-</td>
                            <td className="price">1480,-</td>
                            <td className="price">1590,-</td>
                            <td className="price">1590,-</td>
                        </tr>
                        <tr>
                            <th>DĚTSKÉ SKI</th>
                            <th >komplet*</th>
                            <td className="price">260,-</td>
                            <td className="price">320,-</td>
                            <td className="price">410,-</td>
                            <td className="price">470,-</td>
                            <td className="price">540,-</td>
                            <td className="price">610,-</td>
                            <td className="price">690,-</td>
                            <td className="price">690,-</td>
                        </tr>
                        <tr>
                            <th>DO 135 cm</th>
                            <th>pouze lyže</th>
                            <td className="price">230,-</td>
                            <td className="price">260,-</td>
                            <td className="price">290,-</td>
                            <td className="price">320,-</td>
                            <td className="price">350,-</td>
                            <td className="price">390,-</td>
                            <td className="price">430,-</td>
                            <td className="price">430,-</td>
                        </tr>
                        <tr>
                            <th rowSpan={2} >SKIALPOVÉ LYŽE	</th>
                            <th>komplet</th>
                            <td className="price">850,-</td>
                            <td className="price">1200,-</td>
                            <td className="price">1500,-</td>
                            <td className="price">1800,-</td>
                            <td className="price">2100,-</td>
                            <td className="price">2400,-</td>
                            <td className="price">2700,-</td>
                            <td className="price">2700,-</td>
                        </tr>
                        <tr>
                            <th>pouze lyže</th>
                            <td className="price">550,-</td>
                            <td className="price">900,-</td>
                            <td className="price">1200,-</td>
                            <td className="price">1500,-</td>
                            <td className="price">1800,-</td>
                            <td className="price">2100,-</td>
                            <td className="price">2400,-</td>
                            <td className="price">2400,-</td>
                        </tr>
                        <tr>
                            <th rowSpan={2}>BĚŽECKÉ LYŽE	</th>
                            <th>komplet</th>
                            <td className="price">300</td>
                            <td className="price">390</td>
                            <td className="price">470</td>
                            <td className="price">550</td>
                            <td className="price">620</td>
                            <td className="price">690</td>
                            <td className="price">760</td>
                            <td className="price">760</td>
                        </tr>
                        <tr>
                            <th>pouze lyže</th>
                            <td className="price">250,-</td>
                            <td className="price">340,-</td>
                            <td className="price">420,-</td>
                            <td className="price">500,-</td>
                            <td className="price">570,-</td>
                            <td className="price">640,-</td>
                            <td className="price">710,-</td>
                            <td className="price">710,-</td>
                        </tr>
                        <tr>
                            <th rowSpan={2}>SNOWBOARD</th>
                            <th>komplet*</th>
                            <td className="price">310,-</td>
                            <td className="price">470,-</td>
                            <td className="price">620,-</td>
                            <td className="price">720,-</td>
                            <td className="price">820,-</td>
                            <td className="price">900,-</td>
                            <td className="price">970,-</td>
                            <td className="price">970,-</td>
                        </tr>
                        <tr>
                            <th>pouze SNB</th>
                            <td className="price">270,-</td>
                            <td className="price">430,-</td>
                            <td className="price">580,-</td>
                            <td className="price">660,-</td>
                            <td className="price">750,-</td>
                            <td className="price">830,-</td>
                            <td className="price">900,-</td>
                            <td className="price">900,-</td>
                        </tr>
                        <tr>
                            <th colSpan={2}>Lyžařské, skialpové, snowwboardové, běžecké boty</th>
                            <td className="price">160,-</td>
                            <td className="price">230,-</td>
                            <td className="price">290,-</td>
                            <td className="price">350,-</td>
                            <td className="price">410,-</td>
                            <td className="price">460,-</td>
                            <td className="price">510,-</td>
                            <td className="price">510,-</td>
                        </tr>
                        <tr></tr>
                        <tr>
                            <th colSpan={2}>Lyžařské, teleskopické, běžecké hole</th>
                            <td className="price">80</td>
                            <td className="price">110</td>
                            <td className="price">140</td>
                            <td className="price">160</td>
                            <td className="price">180</td>
                            <td className="price">200</td>
                            <td className="price">220</td>
                            <td className="price">220</td>
                        </tr>
                        <tr>
                            <th colSpan={2}>Helma</th>
                            <td className="price">80</td>
                            <td className="price">110</td>
                            <td className="price">140</td>
                            <td className="price">160</td>
                            <td className="price">180</td>
                            <td className="price">200</td>
                            <td className="price">220</td>
                            <td className="price">220</td>
                        </tr>
                        <tr>
                            <th colSpan={2}>Lyžařské brýle</th>
                            <td className="price">80</td>
                            <td className="price">110</td>
                            <td className="price">140</td>
                            <td className="price">160</td>
                            <td className="price">180</td>
                            <td className="price">200</td>
                            <td className="price">220</td>
                            <td className="price">220</td>
                        </tr>
                        <tr className="cell-brighter">
                            <th colSpan={2}>Sněžnice</th>
                            <td className="price">150,-</td>
                            <td className="price">210,-</td>
                            <td className="price">270,-</td>
                            <td className="price">320,-</td>
                            <td className="price">380,-</td>
                            <td className="price">430,-</td>
                            <td className="price">480,-</td>
                            <td className="price">480,-</td>
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