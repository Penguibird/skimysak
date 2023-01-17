import * as React from 'react';
import { Fragment, useState, useEffect } from 'react';
import { StaticImage } from "gatsby-plugin-image";
import { Link, graphql } from 'gatsby';

import { BreakpointsObject, useBreakpoint } from 'gatsby-plugin-breakpoints';
import loadable from '@loadable/component'

// @ts-ignore
import styles from '../styles/global.scss';

import 'pure-react-carousel/dist/react-carousel.es.css';

import Aktualita from './aktualita'

import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import useAktuality from '../hooks/useAktuality';
import type { useBreakpointsType } from '../types/useBreakPointsType';

const getShortText = (s: string) => {
    if (s.length < 103)
        return s;

    return s.slice(0, 100) + "...";
}

const sizes: Partial<Record<keyof Omit<useBreakpointsType, "portrait" | "prefersReducedData" | "prefersReducedMotion" | "dropM">, number>> = {
    xl: 95,
    ll: 125,
    ls: 155,
    ml: 125,
    ms: 150,
    s: 110,
}
const getSizeFromBreakpoint = (breakPoints: useBreakpointsType) => Object.entries(breakPoints).filter(([_k, v]) => !!v).map(([k, _v]) => sizes[k]).find(Boolean);

export default function AktComponent(props) {
    const breakPoints = useBreakpoint() as useBreakpointsType;
    const aktuality = useAktuality();
    // const aktuality = [];
    return <section className="section-aktuality section">
        <div className="aktuality-wrapper" style={{ width: '100vw', maxWidth: 'unset' }}>
            <h1 className="title-white smaller">Aktuality</h1>
            <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={getSizeFromBreakpoint(breakPoints)}
                isIntrinsicHeight={breakPoints.s}
                className={breakPoints.s ? 'small-width-carousel' : ' '}
                totalSlides={aktuality.length}
                visibleSlides={breakPoints.l ? 3 : breakPoints.m ? 2 : breakPoints.s ? 1 : 3}
            >
                <Slider style={{ width: breakPoints.ll ? '1300px' : null }}>
                    {aktuality.map((a, i, arr) =>
                        <Slide index={i} key={i} innerClassName="slide-inner" className="carousel-slide">
                            <Aktualita
                                title={a.title}
                                date={a.date}
                                url={(arr.length - i).toString()}
                                rawText={getShortText(a.text)}
                                alt={a.image.imageAlt}
                                data={a.image.image}
                            />
                        </Slide>
                    )}
                        </Slider>
                <ButtonBack className="carousel-back">
                    <svg width="20" height="40" viewBox="0 0 20 40" className="custom-svg">
                        <line x1="3" x2="17" y1="20" y2="37" />
                        <line x1="3" x2="17" y1="20" y2="3" />
                    </svg>
                </ButtonBack>
                <ButtonNext className="carousel-next">
                    <svg width="20" height="40" viewBox="0 0 20 40" className="custom-svg">
                        <line x1="17" x2="3" y1="20" y2="37" />
                        <line x1="17" x2="3" y1="20" y2="3" />
                    </svg>
                </ButtonNext>
            </CarouselProvider>
        </div>
    </section>
}