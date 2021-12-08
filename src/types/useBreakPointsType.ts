import { myCustomQueries } from "../../myCustomQueries";

export type useBreakpointsType = Record<keyof typeof myCustomQueries, boolean>; 