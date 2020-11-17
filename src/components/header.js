import * as React from 'react';
import '../styles/components/header.scss';
import { Link } from "gatsby";
import logo from '../../assets/logo_mysak_cropped_scaled.png';
import logo2 from '../../assets/logo-arena.png';
// import { Fragment, useState, useEffect } from 'react';

export default function Header(props) {

    return <header>


        <Link to="/" className="logo logo-mysak">
            <img src={logo} alt="Ski myšák logo" />
        </Link>
        <nav className="navbar" >
            <Link to="/subpages/kontakt" ><p>
                Kontakt
            </p></Link>
            <Link to="/subpages/aktuality" ><p>
                Aktuality
            </p></Link>
            <Link to="/subpages/areal" ><p>
                Areál
            </p></Link>
        </nav>

        <a href="https://www.skikarlov.cz" className="logo logo-karlov">
            <img src={logo2} alt="Ski Arena Karlov logo" />
        </a>
    </header>
}