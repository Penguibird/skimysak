import * as React from 'react';
import '../styles/components/header.scss';
import { Link } from "gatsby";
import logo from '../../assets/logo.png';
// import { Fragment, useState, useEffect } from 'react';

export default function Header(props) {

    return <header>
        <Link to="/" className="logo"><div>
            <img src={logo} alt="Ski myšák logo" width={200} />
        </div></Link>
        <nav className="navbar" >
            <Link to="/subpages/aktuality" ><p>
                Aktuality
            </p></Link>
            <Link to="/subpages/kontakt" ><p>
                Kontakt
            </p></Link>
            <Link to="/subpages/kontakt" ><p>
                Kontakt
            </p></Link> 
        </nav>
    </header>
}