import * as React from 'react';
import { Link } from 'gatsby';
import '../styles/components/aktualita.scss';
// import { Fragment, useState, useEffect } from 'react';

export default function Aktualita({ title, imageName, image, url, rawText, date }) {
    // TODO: Design this
    return <Link to={`/aktuality/${url}`} className={`aktualita ${(image || imageName) ? 'aktualita-img' : 'aktualita-no-img'}`}>
        {(image || imageName) && <img src={image ? image : require(`../../assets${imageName}.jpg`)} alt={imageName ? imageName : ""} />}
        <h4 className="title" >{title}</h4>
        {date && <p className="date">{date}</p>}
        <p>{rawText}</p>
        <p className="show-more-link">Zobrazit Více</p>
    </Link>
}