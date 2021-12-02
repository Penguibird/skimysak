import * as React from 'react';
import '../styles/components/footer.scss';
// import { Fragment, useState, useEffect } from 'react';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import { StaticImage } from "gatsby-plugin-image";

export default function Footer(props) {
    let m = useBreakpoint();

    return <footer>
        <div className="footer-logos-left">
            <a href="https://wttc.org/COVID-19/SafeTravels-Global-Protocols-Stamp">
                <StaticImage className='img' src="../../assets/Safe Travel.jpeg" alt='Logo certifikace Safe Travels' layout='constrained' placeholder='blurred' />
            </a>
            <a href="https://www.impuls.cz/">
                <StaticImage className='img' src="../../assets/impuls.jpg" alt='Logo Impuls' layout='constrained' placeholder='blurred' />
            </a>
        </div>
        <div className="footer-wrapper">
            <p>
                ©2020 - Ski&nbsp;Myšák
            </p>
            <p>Weather forecast from&nbsp;Yr, delivered by&nbsp;the&nbsp;Norwegian Meteorological Institute and NRK</p>
        </div>
        <div className="footer-logo">
            <StaticImage
                formats={["jpg", "webp"]}
                width={m.s ? 54 : 155} height={m.s ? 50 : 143}
                // transformOptions={{ outputPixelDensities: [0.05, 0.1, 0.15, 0.25, 0.5, 1, 2] }}
                placeholder="tracedSVG"
                src='../../assets/logo_old.png'
                alt="logo ski mysak"
                layout="constrained"
            />
        </div>
    </footer>
}