import { myCustomQueries } from "../../gatsby-config";

export type useBreakpointsType = Record<keyof typeof myCustomQueries, boolean>; 