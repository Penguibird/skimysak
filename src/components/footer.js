import * as React from 'react';
import '../styles/components/footer.scss';
// import { Fragment, useState, useEffect } from 'react';
import logo from '../../assets/logo_old.png'
export default function Footer(props) {
    return <footer>
        <div className="footer-wrapper">
            <p>
                ©2020 - Ski&nbsp;Myšák
            </p>
            <p>Weather forecast from&nbsp;Yr, delivered by&nbsp;the&nbsp;Norwegian Meteorological Institute and NRK</p>
            {/* //todo velke logo mysaku */}
        </div>
        <div className="footer-logo">
            <img src={logo} alt="logo ski mysak" />
        </div>
    </footer>
}