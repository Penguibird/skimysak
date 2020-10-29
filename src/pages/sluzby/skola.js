import * as React from 'react';
import '../../styles/pages/skola.scss';
import '../../styles/global.scss'
import Media from "react-media";
import { Fragment, useState, useEffect } from 'react';
import { Helmet } from "react-helmet";
import Header from '../../components/header'
import Footer from '../../components/footer'
import image from '../../../assets/skolaFoto.jpg';
import videoMp4 from '../../../assets/video.mp4'

export default function page(props) {

    return <Fragment>
        <Helmet>
            <title>Lyžařská škola | Ski myšák</title>
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="description" content="Parádní lyžování v jeseníkách" />
        </Helmet>
        <Header />
        <main>
            <section className="section-hero-image section">
                <img className="hero-image" src={image} alt="Ski slope" />
                <div className="flexbox-column main-title-wrap">
                    <h1 className="big-title title-blue hero-image-title">
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
            <section className="section section-text">
                {/* <h2></h2> */}
                <h2> Chcete se zdokonalit v lyžování?</h2>
                <p>.Nebo jste se rozhodli  svěřit nám výuku svých dětí ? <br />Učíme lyžaře i snowboardisty všech věkových kategorií a všech úrovní.
                Bez stresu a na pohodu!</p>
                <p>1 výuková hodina (lekce) trvá 50 min. V ceně výuky je skipas po dobu výuky.</p>
                <table>
                    <thead>
                        <tr>
                            <th>Individuální výuka </th>
                            <th>1 osoba</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1 lekce</td>
                            <td class="align-right">  590 Kč</td>
                        </tr>
                        <tr>
                            <td>2 lekce</td>
                            <td class="align-right" >1 050 Kč</td>
                        </tr>
                        <tr>
                            <td>3 lekce</td>
                            <td class="align-right" >1 580 Kč</td>
                        </tr>
                        <tr>
                            <td>4 lekce</td>
                            <td class="align-right" >2 000 Kč</td>
                        </tr>
                    </tbody>
                    <thead><tr><th colSpan={2}>Skupinová výuka  2-4 osoby</th></tr></thead>
                    <tbody>
                        <tr>
                            <td>Cena za osobu</td>
                            <td>500 Kč</td>
                        </tr>
                    </tbody>
                </table>
                <p>Objednávky na výuku přijímáme osobně v kanceláři lyžařské školy
                (vedle pokladny na parkovišti u nástupní stanice lanové dráhy Myšák),
                nebo na telefonním čísle <a href="tel:+420 734 824 493" className="a-tel telehpone-link">+420 734 824 493</a>.</p>
                <h2>Zákazníci lyžařské školy Myšák si mohou v naší půjčovně zapůjčit lyžařské a snowboardové vybavení za zvýhodněné ceny:</h2>
                <ul>
                    <li>
                        Lyžařský set dětský (lyže, hůlky, lyžáky, helma) <strong className="price">150 Kč/den</strong>
                    </li>
                    <li>
                        Lyžařský set dospělí (lyže, hůlky, lyžáky, helma) <strong className="price">200 Kč/den</strong>
                    </li>
                    <li>
                        Snowboardový set dětský (prkno, boty, helma) <strong className="price">150 Kč/den</strong>
                    </li>
                    <li>
                        Snowboardový set dospělí (prkno, boty, helma) <strong className="price">200 Kč/den</strong>
                    </li>

                </ul>
            </section>
        </main>
        <Footer />
    </Fragment >
}