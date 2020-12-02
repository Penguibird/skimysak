import * as React from 'react';
import '../styles/pages/skola.scss';
import '../styles/global.scss'
import Media from "react-media";
import { Fragment, useState, useEffect } from 'react';
import { Helmet } from "react-helmet";
import Header from '../components/header'
import Footer from '../components/footer'
import image from '../../assets/random_hero_3.png';

export default function page(props) {
    let ref = React.useRef()
    return <Fragment>
        <Helmet>
            <title>Lyžařská škola | Ski myšák</title>
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="description" content="Parádní lyžování v jeseníkách" />
        </Helmet>
        <Header mainSectionRef={ref} />
        <main>
            <section className="section-hero-image section" >
                <img className="hero-image" src={image} alt="Ski slope" />
                <div className="flexbox-column main-title-wrap">
                    <h1 className="big-title title-white hero-image-title">
                        Lyžařská škola
                    </h1>
                    {/* <a className="scroll-down" href="#mainSection">
                        <svg width="50" height="25" viewBox="0 0 50 25" className="custom-svg">
                            <line x1="5" x2="25" y1="5" y2="20" />
                            <line x1="45" x2="25" y1="5" y2="20" />
                        </svg>
                    </a> */}
                </div>
            </section>
            <section className="section section-text section-skola" ref={ref}>
                {/* <h2></h2> */}
                <h2> Chcete se&nbsp;zdokonalit v&nbsp;lyžování?</h2>
                <p>Nebo jste se&nbsp;rozhodli svěřit nám&nbsp;výuku svých dětí? <br />Učíme lyžaře i&nbsp;snowboardisty všech věkových kategorií a&nbsp;všech úrovní.
                Bez&nbsp;stresu a&nbsp;na&nbsp;pohodu!</p>
                <p>1&nbsp;výuková hodina (lekce) trvá 50&nbsp;min. V&nbsp;ceně výuky je&nbsp;skipas po&nbsp;dobu výuky.</p>
                <table>
                    <thead>
                        <tr>
                            <th>Individuální výuka</th>
                            <th>1&nbsp;osoba</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1&nbsp;lekce</td>
                            <td className="align-right ">  590 Kč</td>
                        </tr>
                        <tr>
                            <td>2 lekce</td>
                            <td className="align-right " >1 050 Kč</td>
                        </tr>
                        <tr>
                            <td>3 lekce</td>
                            <td className="align-right " >1 580 Kč</td>
                        </tr>
                        <tr>
                            <td>4 lekce</td>
                            <td className="align-right " >2 000 Kč</td>
                        </tr>
                    </tbody>
                    <thead>
                        <tr>
                            <th colSpan={2}>Skupinová výuka  2-4 osoby</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="cell-brighter">
                            <td>Cena za osobu</td>
                            <td>500 Kč</td>
                        </tr>
                    </tbody>
                </table>
                <p>Objednávky na&nbsp;výuku přijímáme osobně v&nbsp;kanceláři lyžařské školy
                (vedle pokladny na&nbsp;parkovišti u&nbsp;nástupní stanice lanové dráhy Myšák),
                nebo na&nbsp;telefonním čísle <a href="tel:+420 734 824 493" className="a-tel telehpone-link">+420&nbsp;734&nbsp;824&nbsp;493</a>.</p>
                <h2>Zákazníci lyžařské školy Myšák si&nbsp;mohou v&nbsp;naší půjčovně zapůjčit lyžařské a&nbsp;snowboardové vybavení za&nbsp;zvýhodněné ceny:</h2>
                <table className="skola-last-talbe">
                    <tr className="cell-brighter">
                        <td>Lyžařský set dětský (lyže, hůlky, lyžáky, helma)</td>
                        <td className="align-right heading">150&nbsp;Kč/den</td>
                    </tr>
                    <tr>
                        <td>Lyžařský set dospělí (lyže, hůlky, lyžáky, helma)</td>
                        <td className="align-right heading">200&nbsp;Kč/den</td>
                    </tr>
                    <tr className="cell-brighter">
                        <td>Snowboardový set dětský (prkno, boty, helma) </td>
                        <td className="align-right heading">150&nbsp;Kč/den</td>
                    </tr>
                    <tr>
                        <td>Snowboardový set dospělí (prkno, boty, helma)</td>
                        <td className="align-right heading">200&nbsp;Kč/den</td>
                    </tr>
                </table>

            </section>
        </main>
        <Footer />
    </Fragment >
}