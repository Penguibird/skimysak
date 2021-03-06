import * as React from 'react';
import { Link } from 'gatsby';
import '../styles/components/aktualita.scss';
// import { Fragment, useState, useEffect } from 'react';

export default function Aktualita({ title, imageName, image, url, rawText, date, children }) {
    return <Link to={`/aktuality/${url}`} className={`aktualita ${(image || imageName) ? 'aktualita-img' : 'aktualita-no-img'}`}>
        <div className="image-wrapper">
            {/* {(image || imageName) && <img src={image ? image : require(`../../assets/${imageName}.jpg`)} alt={imageName ? imageName : ""} style={{maxHeight: '250px', objectPosition: 'top'}}/>} */}
            {children ? children : null}
        </div>
        <h3 className="title" >{title}</h3>
        {date && <p className="date" style={{ color: '#757575', fontSize: '14px' }} >{date}</p>}
        <p>{rawText}</p>
        <p className="show-more-link">Více...</p>
    </Link>
}