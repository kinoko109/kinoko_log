import { groupBy } from "remeda";
import { allPostPaths } from "./allPostPaths";

export const allPostPathsByMonth = () =>
  groupBy(allPostPaths(), (post) => `${post.year}${post.month}`);
