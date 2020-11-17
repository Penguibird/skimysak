import * as React from 'react';
import '../styles/components/footer.scss';
// import { Fragment, useState, useEffect } from 'react';

export default function Footer(props) {
    return <footer>
        <div className="footer-wrapper">
            <p>
                ©2020 - Ski&nbsp;myšák
            </p>
            <p>Weather forecast from&nbsp;Yr, delivered by&nbsp;the&nbsp;Norwegian Meteorological Institute and NRK</p>
        </div>
    </footer>
}