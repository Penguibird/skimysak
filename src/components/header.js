import * as React from 'react';
import '../styles/components/header.scss';

import '../styles/bootstrap/dropdown.scss';
import '../styles/bootstrap/navbar.scss';
import '../styles/bootstrap/nav.scss';
// import 'bootstrap/dist/css/bootstrap.min.css';

import { Link } from "gatsby";
import { Fragment, useState, useEffect } from 'react';
import Media from "react-media";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    Dropdown,
    DropdownToggle,
    DropdownMenu,

    DropdownItem,
    NavbarText
} from 'reactstrap';
import logo from '../../assets/logo_mysak_cropped_scaled.png';
import logo2 from '../../assets/logo-arena.png';

export default function Header({ mainSectionRef }) {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const sluzby = [
        {
            title: "Půjčovna a Servis",
            link: "/sluzby/servis"
        },
        {
            title: "Škola",
            link: "/sluzby/servis"
        },
        {
            title: "Občerstvení",
            link: "/sluzby/obcerstveni"
        }
    ]
    const areal = [
        {
            title: "Svahy",
            link: "/subpages/areal"
        },
        {
            title: "Počasí",
            link: "/subpages/pocasi"
        },
        {
            title: "Kamery",
            link: "/subpages/kamery"
        }
    ]
    useEffect(() => { console.log(mainSectionRef) }, []);

    const offset = -100;
    const [isBackground, setIsBackground] = useState(false)
    useEffect(() => { }, [window.pageYOffset])
    window.addEventListener("scroll", e => {
        if (mainSectionRef && mainSectionRef.current) console.log(window.pageYOffset, mainSectionRef.current.offsetTop);
        setIsBackground(mainSectionRef && mainSectionRef.current && (window.pageYOffset > (mainSectionRef.current.offsetTop + offset)));
    })

    //aktuality, areal, kamery, pocasi
    return <header className={`navbar ${isOpen ? 'open' : ''} ${isBackground ? 'background' : ''} `}>
        <Navbar color="light" light expand="md" className="clearfix">
            <Link to="/" className="logo logo-mysak">
                <img src={logo} />
            </Link>
            <a href="https://www.skikarlov.cz/" className="logo logo-karlov">
                <img src={logo2} />
            </a>
            <NavbarToggler onClick={toggle} className="float-right" />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <Link to="/subpages/aktuality">
                            <p>Aktuality</p>
                        </Link>
                    </NavItem>
                    <NavItem>
                        <BetterDropDown title="Areál" listOfLinks={areal} />
                    </NavItem>

                    <NavItem>
                        <BetterDropDown title="Služby" listOfLinks={sluzby} />
                    </NavItem>
                    <NavItem>
                        <Link to="/subpages/kontakt">
                            <p>Kontakt</p>
                        </Link>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    </header>
}

function BetterDropDown({ title, listOfLinks }) {
    //list of links = [{link, title}]

    const [isDropDown, setDropDown] = useState(false);
    const toggleDropDown = () => setDropDown(!isDropDown);

    return <Media queries={{
        small: "(max-width: 599px)",
        medium: "(min-width: 600px)"
    }}>
        {matches => (<Fragment> {matches.medium
            ? <Dropdown isOpen={isDropDown} toggle={toggleDropDown} caret onMouseEnter={e => setDropDown(true)} onMouseLeave={e => setDropDown(false)}>
                <DropdownToggle>
                    <Link>
                        <p>{title}</p>
                    </Link>
                </DropdownToggle>
                <DropdownMenu>
                    {listOfLinks.map(({ link, title }, i) => (
                        <DropdownItem key={i}>
                            <Link to={link} >
                                <p>{title} </p>
                            </Link>
                        </DropdownItem>
                    ))}
                </DropdownMenu>
            </Dropdown>
            : <Fragment>
                <button onClick={toggleDropDown} >
                    <p>{title}</p>
                </button>
                <Collapse isOpen={isDropDown} className="shift-right">
                    {listOfLinks.map(({ link, title }, i) => (
                        <Link to={link} >
                            <p>{title} </p>
                        </Link>
                    ))}
                </Collapse>
            </Fragment>
        } </Fragment>)}
    </Media>
}