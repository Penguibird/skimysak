import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from 'gatsby-plugin-image';
import moment from 'moment'
import type Aktualita from '../types/aktualita'
import encodeUrl from 'encodeurl';


type HTMLAst = any;

const flatten = (htmlAst: HTMLAst): (string | void) => {
  if (htmlAst.type == "text") {
    const x = htmlAst.value.replaceAll("\n", "");
    const y = x;
    if (y.replaceAll(" ", "").length == 0) {
      // String empty
      return;
    }
    return (x + " ");
  } else if (htmlAst.children) {
    // console.log(htmlAst.children.map(flatten))
    return htmlAst.children.map(flatten).filter(Boolean).join("")
  }
}

export const getTextFromHtmlAst = (htmlAst: HTMLAst) => {
  let x = flatten(htmlAst)
  if (!x) return "";
  // x.join(" ");
  console.log(x)
  return x;

}
export const aktualityQuery = graphql`query Aktuality {
  allFile(filter: {absolutePath: {regex: "/content.*aktuality//"}}) {
    edges {
      node {
        id
        absolutePath
        childrenMarkdownRemark {
          html
          htmlAst
          internal {
            content
          }
          frontmatter {
            date
            image {
              imageAlt
              image {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
            name
            title
          }
        }
      }
    }
  }
}
`

export const queryResultToAktualityArr = (qResult) => {
  const getLink = (link: string) => {
    if (/kousekpokousku\.cz/.test(link)) {
      let arr: string[] = link.split('.cz')
      return arr[arr.length - 1];
    }
    return link
  }
  const edges = qResult?.allFile?.edges;

  const aktuality: Aktualita[] = edges
    .map((edge: any) => edge.node.childrenMarkdownRemark[0])
    .filter(Boolean)
    .map((node: any) => ({
      title: node.frontmatter.name,
      body: (node.html as string).replace('/n', ''),
      // text: node.internal.content,
      text: getTextFromHtmlAst(node.htmlAst),
      //@ts-ignore
      date: moment(node.frontmatter.date, 'DD-MM-YYYY').toDate(),
      link: node.frontmatter.link
        ? getLink(node.frontmatter.link)
        : undefined,
      url: encodeUrl(node.frontmatter.name),
      image: {
        image: node.frontmatter?.image?.image?.childImageSharp?.gatsbyImageData,
        imageAlt: node.frontmatter.image?.imageAlt
      }
    }))
    .sort((a: AktualitaWithDate, b: AktualitaWithDate) => a.date.getTime() - b.date.getTime())
    .reverse()
    .map(a => {
      a.date = a.date.toLocaleDateString("cs-CZ")
      return a;
    });
  return aktuality;
}

const useAktuality = () => {

  const qResult = useStaticQuery(aktualityQuery)
  // console.log(qResult)


  return queryResultToAktualityArr(qResult);
}

type AktualitaWithDate = { date: Date } & Omit<Aktualita, 'date'>;

export default useAktuality;