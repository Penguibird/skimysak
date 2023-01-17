import encodeUrl from "encodeurl";
import { Actions, GatsbyGraphQLType, GatsbyNode } from "gatsby";
import moment from "moment";
import Aktualita from "./src/types/aktualita";

type Props = {
    actions: Actions
    graphql: any,
}

exports.createPages = async function ({ actions, graphql }: Props) {
    const result = await graphql(`
    query {
        allFile(filter: {absolutePath: {regex: "/content.*aktuality//"}}) {
            edges {
                node {
                    dir
                    childMarkdownRemark {
                        frontmatter {
                            name
                            date
                        }
                    }
                }
            }
        }
    }
    
    `)
    const { data: { allFile: { edges } } } = result;
    // console.log(edges, edges.map((edge: any) => edge.node.childMarkdownRemark?.frontmatter?.name)
    //     .filter(Boolean))
    type T = { date: Date, name: string, dir: string };

    // console.log(edges)
    let x = edges
        .map((edge: any) => ({
            name: edge.node?.childMarkdownRemark?.frontmatter?.name,
            date: moment(edge.node?.childMarkdownRemark?.frontmatter?.date, 'DD-MM-YYYY').toDate(),
            dir: edge.node?.dir,
        })) as T[];
    // console.log(x)
    x.filter((_: { name: string; dir: string; }) => _.name && _.dir)
        .sort((a, b) => (a.date.getTime() - b.date.getTime()))
        .reverse()
        .forEach(({ name, dir }: T, i: number, array: { name: string }[]) => {
            // console.log(name, encodeUrl(name))
            i = array.length - i;
            actions.createPage({
                component: require.resolve(`./src/components/aktualitaPage.tsx`),
                path: `/aktuality/${i.toString()}`,
                context: {
                    title: name,
                    prevUrl: i == 0 ? null : i - 1,
                    nextUrl: i == array.length - 1 ? null : i + 1,
                    dir,
                }
            })
        });
};