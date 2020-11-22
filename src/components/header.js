import * as React from 'react';
import '../styles/components/header.scss';
// import 'bootstrap/dist/css/bootstrap.min.css';


import { Link } from "gatsby";
import logo from '../../assets/logo_mysak_cropped_scaled.png';
import logo2 from '../../assets/logo-arena.png';
import { Fragment, useState, useEffect } from 'react';
// import {
//     Collapse,
//     Navbar,
//     NavbarToggler,
//     NavbarBrand,
//     Nav,
//     NavItem,
//     NavLink,
//     UncontrolledDropdown,
//     Dropdown,
//     DropdownToggle,
//     DropdownMenu,
//     DropdownItem,
//     NavbarText
// } from 'reactstrap';
export default function Header(props) {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const [isDropDown, setDropDown] = useState(false);
    const toggleDropDown = () => setDropDown(!isDropDown);

    return <Fragment>
        <header>
            <Link to="/" className="logo logo-mysak">
                <img src={logo} alt="Ski myšák logo" />
            </Link>
            <div className="navbar">
                <Link to="/subpages/kontakt" >
                    <p>Kontakt</p>
                </Link>
                <Link to="/subpages/aktuality" >
                    <p>Aktuality</p>
                </Link>
                <Link to="/subpages/areal" >
                    <p>Areál</p>
                </Link>
                <div className="dropdown" onMouseEnter={e => setDropDown(true)} onMouseLeave={e => setDropDown(false)}>
                    <p>Služby</p>
                    {isDropDown
                        && <div className="dropdown-menu">
                            <Link to="/subpages/skola" >
                                <p>Skola</p>
                            </Link>
                        </div>}
                </div>
            </div>
            <a href="https://www.skikarlov.cz" className="logo logo-karlov">
                <img src={logo2} alt="Ski Arena Karlov logo" />
            </a>
        </header >

    </Fragment>
}

{/* <header>

{/* <Navbar expand="md">
            <Link to="/" className="logo logo-mysak">
                <img src={logo} alt="Ski myšák logo" />
            </Link>
            <a href="https://www.skikarlov.cz" className="logo logo-karlov">
                <img src={logo2} alt="Ski Arena Karlov logo" />
            </a>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav navbar>
                    {/* kamery, pocasi, skipasy, aktuality , sjezdovky */}
{/* <Dropdown isOpen={isDropDown} toggle={toggleDropDown} onMouseEnter={e => setDropDown(true)} onMouseLeave={e => setDropDown(false)} caret>
                        <DropdownToggle>
                            Služby
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem>Pujcovna/Servis</DropdownItem>
                            <DropdownItem>Skola</DropdownItem>
                            <DropdownItem>obcerstveni</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                    <NavItem>Kontakt</NavItem>

                </Nav>
            </Collapse>
        </Navbar> */}