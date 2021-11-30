import * as React from 'react';
import { graphql, Link } from 'gatsby';
import '../styles/pages/aktualityPage.scss';
import '../styles/global.scss'
import { Helmet } from "react-helmet";
import Header from './header'
import Footer from './footer'
import { Fragment, useState, useEffect } from 'react';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';


const areObjectsEqual = (a: IGatsbyImageData, b: IGatsbyImageData) => {
  if (!a || !b) {
    return false
  }
  if (a.images.fallback.src === b.images.fallback.src && a.images.fallback.src) {
    return true;
  }
  return false;
}

export default function AktualitaPage({ data }) {
  let ref = React.useRef();
  console.log(data)
  const {
    markdownRemark: {
      html,
      frontmatter: {
        name,
        date,
      }
    },
    allFile: {
      edges: imageEdges,
    }
  } = data;
  let image = null;

  if (data.markdownRemark.frontmatter.image) {
    image = {
      data: data.markdownRemark.frontmatter.image.image.childImageSharp.gatsbyImageData,
      alt: data.markdownRemark.frontmatter.image.imageAlt,
    }
  }


  const images: IGatsbyImageData[] = imageEdges
    .map((edge: any) => edge?.node?.childrenImageSharp?.[0]?.gatsbyImageData)
    .filter(Boolean)
    .filter((_: IGatsbyImageData) => !areObjectsEqual(_, image));
  return <Fragment>
    <Helmet>
      <title>{name}</title>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="Parádní lyžování v jeseníkách" />
    </Helmet>
    <Header mainSectionRef={ref} always />
    <main className="main-aktualita-text">
      <section className="section-text section" ref={ref}>
        <Link to="/aktuality" className="back">
          <svg width="20" height="40" viewBox="0 0 20 45" className="custom-svg">
            <line x1="3" x2="17" y1="20" y2="37" />
            <line x1="3" x2="17" y1="20" y2="3" />
          </svg>
          <h2>Zpět</h2>
        </Link>
        <h2>{name}</h2>
        <div className="" dangerouslySetInnerHTML={{ __html: html }}></div>
        {image && <GatsbyImage
          loading='lazy'
          alt={image.alt}
          image={image.data}
        />}
        {images.map((imageData, key) =>
          <GatsbyImage
            loading='lazy'
            alt={""}
            image={imageData}
            key={key}
          />
        )}
        <Link to="/aktuality" className='back center   ' >
          <svg width="20" height="40" viewBox="0 0 20 40" className="custom-svg">
            <line x1="3" x2="17" y1="20" y2="37" />
            <line x1="3" x2="17" y1="20" y2="3" />
          </svg>
          <h2>Zpátky na aktuality</h2>
        </Link>
      </section>
    </main>
    <Footer />
  </Fragment >
}
export const query = graphql`
query($title: String!, $dir: String!){
  markdownRemark(frontmatter: {name: {eq: $title}}) {
    id
    html
    frontmatter {
      date
      name
      image {
        image {
          childImageSharp {
            gatsbyImageData
          }
        }
        imageAlt
      }
    }
  }
  allFile(filter: {dir: {eq: $dir}}) {
    edges {
      node {
        childrenImageSharp {
          gatsbyImageData
        }
      }
    }
  }
}

`