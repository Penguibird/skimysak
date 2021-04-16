import * as React from 'react';
import '../styles/components/header.scss';

import '../styles/bootstrap/dropdown.scss';
import '../styles/bootstrap/navbar.scss';
import '../styles/bootstrap/nav.scss';
// import 'bootstrap/dist/css/bootstrap.min.css';

import { Link } from "gatsby";
import { Fragment, useState, useEffect, useRef } from 'react';
// // import Media from "react-media";
import { useBreakpoint } from 'gatsby-plugin-breakpoints'
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

import { StaticImage } from "gatsby-plugin-image";

export default function Header({ mainSectionRef, always }) {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const sluzby = [
        {
            title: "Servis a půjčovna",
            link: "/servis"
        },
        {
            title: "Škola",
            link: "/skola"
        },
        {
            title: "Občerstvení",
            link: "/obcerstveni"
        }
    ]
    const areal = [
        {
            title: "Svahy",
            link: "/areal"
        },
        {
            title: "Počasí",
            link: "/pocasi"
        },
        {
            title: "Kamery",
            link: "/kamery"
        },
        {
            title: "Mapa",
            link: "/mapa.png",
            a: true,
        }
    ]


    useEffect(() => {
    
        document.addEventListener('scroll', e => {
            if (window.scrollY > 0) {
                setIsBackground(true)
            } else {
                setIsBackground(false);
            }
        }, { passive: true });
    }, []);

    // const offset = -100;
    const [isBackground, setIsBackground] = useState(false)

    //aktuality, areal, kamery, pocasi
    return <header className={`navbar ${isOpen ? 'open' : ''} ${isBackground || always ? 'background' : ''}`}>
        <Navbar color="light" light expand="md" className="clearfix">
            <Link to="/" className="logo logo-mysak">
                <StaticImage placeholder="tracedSVG" loading="eager" style={{ maxHeight: '100%' }} imgStyle={{ maxHeight: '100%' }} height={90} formats={["auto", "webp"]} src='../../assets/logo_mysak_cropped_scaled.png' layout='constrained' alt="Logo ski mysak" />
            </Link>
            <a href="https://www.skikarlov.cz/" className="logo logo-karlov" target="_blank">
                <StaticImage placeholder="tracedSVG" loading="eager" style={{ maxHeight: '100%' }} imgStyle={{ maxHeight: '100%' }} height={90} formats={["auto", "webp"]} src='../../assets/logo-arena.png' layout='constrained' alt="Logo ski arena karlov" />
            </a>
            <NavbarToggler onClick={toggle} className="float-right" />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <Link to="/aktuality">
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
                        <a href="https://www.skikarlov.cz/lyzovani/ceny-skipasu">
                            <p>Skipasy</p>
                            {/* //todo Would be really cool if it stood out */}
                        </a>
                    </NavItem>
                    <NavItem>
                        <Link to="/kontakt">
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
    const m = useBreakpoint();

    //  <Media queries={{
    //     small: "(max-width: 599px)",
    //     medium: "(min-width: 600px)"
    // }}>
    //     {matches => (
    return <Fragment> {m.dropM
        ? <Dropdown isOpen={isDropDown} toggle={toggleDropDown} caret onMouseEnter={e => setDropDown(true)} onMouseLeave={e => setDropDown(false)}>
            <DropdownToggle>
                <Link>
                    <p>{title}</p>
                </Link>
            </DropdownToggle>
            <DropdownMenu>
                {listOfLinks.map(({ link, title, a }, i) => (
                    <DropdownItem key={i}>
                        {a ? <a href={link} target="_blank">
                            <p>{title} </p>
                        </a>
                            : <Link to={link} >
                                <p>{title} </p>
                            </Link>}
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
    } </Fragment >
    //     )}
    // </Media>
}