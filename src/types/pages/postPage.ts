import { MdxRemote } from "next-mdx-remote/types";
import { FrontMatterTypes } from "../shared";

export type PostPageProps = {
  source: MdxRemote.Source;
  frontMatter: FrontMatterTypes;
};
