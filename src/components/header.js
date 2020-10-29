import * as React from 'react';
import '../styles/components/header.scss';
import { Link } from "gatsby";
import logo from '../../assets/logo_old.png';
import logo2 from '../../assets/logo-arena.png';
// import { Fragment, useState, useEffect } from 'react';

export default function Header(props) {

    return <header>

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
        <Link to="/" className="logo logo-mysak">
            <div>
                <img src={logo} alt="Ski myšák logo" />
            </div>
        </Link>
        <Link to="https://www.skikarlov.cz" className="logo logo-karlov">
            <div>
                <img src={logo2} alt="Ski Arena Karlov logo" />
            </div>
        </Link>
    </header>
}