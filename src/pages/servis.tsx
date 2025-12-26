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
                <p>Více informací na <a href="tel:+420734335988"><strong>+420 734 335 988</strong></a></p>
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
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th rowSpan={2}>CARVINGOVÉ <br /> LYŽE - TOP</th>
                            <th  >komplet*</th>
                            <td className="price" >400,-</td>
                            <td className="price" >650,-</td>
                            <td className="price" >800,-</td>
                            <td className="price" >1000,-</td>
                            <td className="price" >1200,-</td>
                            <td className="price" >1400,-</td>
                            <td className="price" >1600,-</td>
                        </tr>
                        <tr>
                            {/* <th>LYŽE - TOP</th> */}
                            <th>pouze lyže</th>
                            <td className="price">310,-</td>
                            <td className="price">500,-</td>
                            <td className="price">700,-</td>
                            <td className="price">900,-</td>
                            <td className="price">1100,-</td>
                            <td className="price">1300,-</td>
                            <td className="price">1500,-</td>
                        </tr>
                        <tr>
                            <th rowSpan={2}>CARVINGOVÉ <br/> LYŽE - VIP</th>
                            <th>komplet*</th>
                            <td className="price">500,-</td>
                            <td className="price">750,-</td>
                            <td className="price">900,-</td>
                            <td className="price">1100,-</td>
                            <td className="price">1300,-</td>
                            <td className="price">1500,-</td>
                            <td className="price">1700,-</td>
                        </tr>
                        <tr>
                            {/* <th>LYŽE - VIP</th> */}
                            <th>pouze lyže</th>
                            <td className="price">410,-</td>
                            <td className="price">600,-</td>
                            <td className="price">800,-</td>
                            <td className="price">1000,-</td>
                            <td className="price">1200,-</td>
                            <td className="price">1400,-</td>
                            <td className="price">1600,-</td>
                        </tr>
                        <tr>
                            <th rowSpan={2}>DĚTSKÉ SKI <br /> (do 135cm) </th>
                            <th >komplet*</th>
                            <td className="price">260,-</td>
                            <td className="price">350,-</td>
                            <td className="price">450,-</td>
                            <td className="price">550,-</td>
                            <td className="price">650,-</td>
                            <td className="price">750,-</td>
                            <td className="price">850,-</td>
                        </tr>
                        <tr>
                            {/* <th>DO 135 cm</th> */}
                            <th>pouze lyže</th>
                            <td className="price">230,-</td>
                            <td className="price">290,-</td>
                            <td className="price">320,-</td>
                            <td className="price">350,-</td>
                            <td className="price">380,-</td>
                            <td className="price">420,-</td>
                            <td className="price">460,-</td>
                        </tr>
                        <tr>
                            <th rowSpan={2} >SKIALPOVÉ LYŽE	</th>
                            <th>komplet</th>
                            <td className="price">850,-</td>
                            <td className="price">1400,-</td>
                            <td className="price">2000,-</td>
                            <td className="price">2600,-</td>
                            <td className="price">3200,-</td>
                            <td className="price">3800,-</td>
                            <td className="price">4400,-</td>
                        </tr>
                        <tr>
                            <th>pouze lyže</th>
                            <td className="price">600,-</td>
                            <td className="price">1100,-</td>
                            <td className="price">1500,-</td>
                            <td className="price">2000,-</td>
                            <td className="price">2400,-</td>
                            <td className="price">2800,-</td>
                            <td className="price">3200,-</td>
                        </tr>
                        <tr>
                            <th rowSpan={2}>BĚŽECKÉ LYŽE	</th>
                            <th>komplet</th>
                            <td className="price">300,-</td>
                            <td className="price">450,-</td>
                            <td className="price">550,-</td>
                            <td className="price">650,-</td>
                            <td className="price">750,-</td>
                            <td className="price">850,-</td>
                            <td className="price">950,-</td>
                        </tr>
                        <tr>
                            <th>pouze lyže</th>
                            <td className="price">250,-</td>
                            <td className="price">350,-</td>
                            <td className="price">450,-</td>
                            <td className="price">550,-</td>
                            <td className="price">650,-</td>
                            <td className="price">750,-</td>
                            <td className="price">850,-</td>
                        </tr>
                        <tr>
                            <th rowSpan={2}>SNOWBOARD</th>
                            <th>komplet*</th>
                            <td className="price">350,-</td>
                            <td className="price">600,-</td>
                            <td className="price">800,-</td>
                            <td className="price">1000,-</td>
                            <td className="price">1100,-</td>
                            <td className="price">1250,-</td>
                            <td className="price">1400,-</td>
                        </tr>
                        <tr>
                            <th>pouze SNB</th>
                            <td className="price">270,-</td>
                            <td className="price">430,-</td>
                            <td className="price">580,-</td>
                            <td className="price">730,-</td>
                            <td className="price">900,-</td>
                            <td className="price">1050,-</td>
                            <td className="price">1200,-</td>
                        </tr>
                        <tr>
                            <th colSpan={2}>Lyžařské, skialpové, snowwboardové, běžecké boty</th>
                            <td className="price">160,-</td>
                            <td className="price">250,-</td>
                            <td className="price">400,-</td>
                            <td className="price">500,-</td>
                            <td className="price">600,-</td>
                            <td className="price">700,-</td>
                            <td className="price">800,-</td>
                        </tr>
                        <tr></tr>
                        <tr>
                            <th colSpan={2}>Lyžařské, teleskopické, běžecké hole</th>
                            <td className="price">100</td>
                            <td className="price">150</td>
                            <td className="price">200</td>
                            <td className="price">250</td>
                            <td className="price">300</td>
                            <td className="price">350</td>
                            <td className="price">400</td>
                        </tr>
                        <tr>
                            <th colSpan={2}>Helma</th>
                            <td className="price">100</td>
                            <td className="price">150</td>
                            <td className="price">200</td>
                            <td className="price">250</td>
                            <td className="price">300</td>
                            <td className="price">350</td>
                            <td className="price">400</td>
                        </tr>
                        <tr>
                            <th colSpan={2}>Lyžařské brýle</th>
                            <td className="price">100</td>
                            <td className="price">150</td>
                            <td className="price">200</td>
                            <td className="price">250</td>
                            <td className="price">300</td>
                            <td className="price">350</td>
                            <td className="price">400</td>
                        </tr>
                        <tr className="cell-brighter">
                            <th colSpan={2}>Sněžnice</th>
                            <td className="price">160,-</td>
                            <td className="price">250,-</td>
                            <td className="price">400,-</td>
                            <td className="price">500,-</td>
                            <td className="price">600,-</td>
                            <td className="price">700,-</td>
                            <td className="price">800,-</td>
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
                            <td className="price">200,-</td></tr>
                        <tr>
                            <th>voskování - SNB</th>
                            <td className="price">300,-</td>
                        </tr>
                        <tr>
                            <th>seřízení vázání</th>
                            <td className="price">50,-</td>
                        </tr>
                        <tr>
                            <th>broušení hran - stroj</th>
                            <td className="price">200,-</td>
                        </tr>
                        <tr>
                            <th>broušení hran - ručně</th>
                            <td className="price">250,-</td>
                        </tr>
                        <tr>
                            <th>malý servis</th>
                            <td className="price">400,-</td>
                        </tr>
                        <tr>
                            <th>velký servis</th>
                            <td className="price">600,-</td>
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