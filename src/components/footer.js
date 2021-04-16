import * as React from 'react';
import '../styles/components/footer.scss';
// import { Fragment, useState, useEffect } from 'react';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import image from '../../assets/logo_old_sm.webp'
import { StaticImage } from "gatsby-plugin-image";

export default function Footer(props) {
    let m = useBreakpoint();

    return <footer>
        <div className="footer-wrapper">
            <p>
                ©2020 - Ski&nbsp;Myšák
            </p>
            <p>Weather forecast from&nbsp;Yr, delivered by&nbsp;the&nbsp;Norwegian Meteorological Institute and NRK</p>
        </div>
        <div className="footer-logo">
            {m.s ? <img width={54} height={50} src={image} alt="logo ski mysak" /> :
                <StaticImage formats={["jpg", "webp"]}
                    width={155} height={143}
                    // transformOptions={{ outputPixelDensities: [0.05, 0.1, 0.15, 0.25, 0.5, 1, 2] }}
                    placeholder="tracedSVG" src='../../assets/logo_old.png' alt="logo ski mysak" layout="constrained" />}
        </div>
    </footer>
}