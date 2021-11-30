import * as React from 'react';
//import {Fragment, useState, useEffect} from 'react';
//@ts-ignore
import videoMp4 from '../../assets/video.mp4';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import { StaticImage } from 'gatsby-plugin-image';

interface IndexVideoComponentProps extends Partial<React.PropsWithoutRef<React.ReactHTMLElement<HTMLDivElement>>> {
   
};

const IndexVideoComponent:React.FC<IndexVideoComponentProps> = ({ ...props}) => {
    let m = useBreakpoint();

    return <React.Fragment>{m.l
        ? <video className="hero-image" muted autoPlay loop preload="always" >
            <source src={videoMp4} type="video/mp4" />
        </video>
        : m.s
            ? <div className="hero-image " id="hero-image-wrapper">
                <StaticImage breakpoints={[250, 350, 450, 650, 800, 1000]} loading="eager" formats={["jpg", "webp"]} placeholder="blurred" src='../../assets/random_hero_1_sm.png' alt="Pohled z dronu na Karlov" layout='fullWidth' imgClassName="hero-image-image" />
            </div>
            : <div className="hero-image " id="hero-image-wrapper">
                <StaticImage breakpoints={[250, 350, 450, 650, 800, 1000]} loading="eager" formats={["jpg", "webp"]} placeholder="blurred" src='../../assets/random_hero_1.png' alt="Pohled z dronu na Karlov" layout='fullWidth' imgClassName="hero-image-image" />
            </div>
    }</React.Fragment>
}

export default IndexVideoComponent;
