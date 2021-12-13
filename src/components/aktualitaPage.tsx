import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { graphql, Link } from 'gatsby';
import '../styles/pages/aktualitaPage.scss';
import '../styles/global.scss'
import { Helmet } from "react-helmet";
import Header from './header'
import LayerWrapper from './layer-wrapper'
import Footer from './footer'
import { Fragment, useState, useEffect } from 'react';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';

const isBrowser = typeof window !== "undefined"

export default function AktualitaPage({ data, pageContext: { nextUrl, prevUrl } }) {
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

	if (data.markdownRemark.frontmatter.image && data.markdownRemark.frontmatter.image?.image?.childImageSharp?.gatsbyImageData) {
		image = {
			data: data.markdownRemark.frontmatter.image?.image?.childImageSharp?.gatsbyImageData,
			alt: data.markdownRemark.frontmatter.image.imageAlt,
		}
	}

	let imageParent;

	useEffect(() => {

	}, [])
	const getP = () => {
		if (!isBrowser) return;
		let imageParent = document.getElementById("imageParent");
		if (!imageParent) {
			imageParent = document.createElement('div');
			imageParent.id = "imageParent"
			document.querySelector("body").insertAdjacentElement('afterbegin', imageParent);
		}
		return imageParent;
	}
	const images: IGatsbyImageData[] = imageEdges
		.map((edge: any) => edge?.node?.childrenImageSharp?.[0]?.gatsbyImageData)
		.filter(Boolean)
	return <Fragment>
		<Helmet>
			<title>{name}</title>
			<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<meta name="description" content="Parádní lyžování v jeseníkách" />
			<style>{`
				body {
					perspective: 1px;
					height: 100vh;
					overflow-x: hidden;
					overflow-y: auto;
				}
			`}</style>
		</Helmet>
		<Header always />
		<main className="main-aktualita-text">
			{isBrowser && (image || (images.length > 0)) && ReactDOM.createPortal(
				<Fragment>
					{image && !(images.length > 0) && <GatsbyImage
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
				</Fragment>,
				getP()
			)}
			<div className="wrapper">
				{prevUrl && <Link to={`/aktuality/${prevUrl}`} className="prev-aktualita">
					<svg width="20" height="40" viewBox="0 0 20 45" className="custom-svg">
						<line x1="3" x2="17" y1="20" y2="37" />
						<line x1="3" x2="17" y1="20" y2="3" />
					</svg>
					<p>Předchozí</p>
				</Link>}
				<section className="section-text section" >
					<Link to="/aktuality" className="back">
						<svg width="40" height="40" viewBox="0 0 20 20" className="custom-svg">
							<line x1="3" x2="17" y1="3" y2="17" />
							<line x1="3" x2="17" y1="17" y2="3" />
						</svg>
						{/* <p>Zpět</p> */}
					</Link>

					<h2>{name}</h2>
					<div className="dont-show-images-in-this-div" dangerouslySetInnerHTML={{ __html: html }}></div>
					{image && !(images.length > 0) && <GatsbyImage
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
				{nextUrl &&
					<Link to={`/aktuality/${nextUrl}`} className="next-aktualita">
						<svg width="20" height="40" viewBox="0 0 20 45" className="custom-svg">
							<line x1="17" x2="3" y1="20" y2="37" />
							<line x1="17" x2="3" y1="20" y2="3" />
						</svg>
						<p>Další</p>
					</Link>
				}
			</div>
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