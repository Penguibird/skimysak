import * as React from 'react';
import '../styles/components/footer.scss';
// import { Fragment, useState, useEffect } from 'react';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import { StaticImage } from "gatsby-plugin-image";

export default function Footer(props) {
    let m = useBreakpoint();

    return <footer>
        <a className="footer-logo with-claim safe-travels" href="https://wttc.org/COVID-19/SafeTravels-Global-Protocols-Stamp">
            <StaticImage className='img' formats={['avif', 'png', 'webp']} src="../../assets/Safe Travel.png" alt='Logo certifikace Safe Travels' layout='constrained' placeholder='blurred' />
            <p>Ski myšák má razítko Safe Travels od Světové rady cestování a cestovního ruchu</p>
        </a>
        <a className="footer-logo impuls" href="https://www.impuls.cz/">
            <StaticImage className='img' formats={['avif', 'png', 'webp']} src="../../assets/impuls_new.png" alt='Logo Impuls' layout='constrained' placeholder='blurred' />
        </a>
        <div className="footer-wrapper">
            <p>
                ©2020 - Ski&nbsp;Myšák
            </p>
            <p>Weather forecast from&nbsp;Yr, delivered by&nbsp;the&nbsp;Norwegian Meteorological Institute and NRK</p>
        </div>
        <div className="footer-logo mysak">
            <StaticImage
                formats={["jpg", "webp"]}
                className="img"
                width={155} height={143}
                // transformOptions={{ outputPixelDensities: [0.05, 0.1, 0.15, 0.25, 0.5, 1, 2] }}
                placeholder="tracedSVG"
                src='../../assets/logo_old.png'
                alt="logo ski mysak"
                layout="constrained"
            />
        </div>
    </footer>
}