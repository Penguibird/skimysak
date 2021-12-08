import encodeUrl from "encodeurl";
import { Actions, GatsbyGraphQLType, GatsbyNode } from "gatsby";
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
    edges
        .map((edge: any) => ({
            name: edge.node?.childMarkdownRemark?.frontmatter?.name,
            dir: edge.node?.dir,
        }))
        .filter((_: { name: string; dir: string; }) => _.name && _.dir)
        .forEach(({ name, dir }: { name: string, dir: string }, i: number, array: {name: string}[]) => {
            // console.log(name, encodeUrl(name))
            actions.createPage({
                component: require.resolve(`./src/components/aktualitaPage.tsx`),
                path: `/aktuality/${name}`,
                context: {
                    title: name,
                    nextUrl: array[i+1]?.name ?? null,
                    prevUrl: array[i-1]?.name ?? null,
                    dir,
                }
            })
        });
};