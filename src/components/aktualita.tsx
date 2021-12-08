import * as React from 'react';
import { Link, } from 'gatsby';
import '../styles/components/aktualita.scss';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
// import { Fragment, useState, useEffect } from 'react';

interface AktualitaProps {
    title: string
    url: string
    rawText: string
    date: string
    children?: React.ReactNode
    alt?: string,
    data?: IGatsbyImageData
}

export default function Aktualita({ title, url, rawText, date, children, data, alt }: AktualitaProps) {
    return <Link to={`/aktuality/${url}`} className={`aktualita ${(children || data || alt) ? 'aktualita-img' : 'aktualita-no-img'}`}>
        <div className="image-wrapper">
            {children}
            {data && <GatsbyImage
                alt={alt ?? ""}
                objectPosition={'top'}

                // formats={["jpg", "webp"]}
                imgStyle={{ maxHeight: '190px', objectPosition: 'top' }}
                style={{ maxHeight: '190px' }}
                // layout={'constrained'}
                image={data}
            />}
        </div>

        <h3 className="title" >{title}</h3>
        {date && <p className="date" style={{ wordBreak: 'break-all', color: '#757575', fontSize: '14px' }} >{date}</p>}

        <p style={{ wordBreak: 'break-all' }}>{rawText}</p>
        <p className="show-more-link">Více...</p>
    </Link>
}