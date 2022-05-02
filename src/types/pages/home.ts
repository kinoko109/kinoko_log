import { FrontMatterTypes, TargetPostData } from "../shared";

export type HomeProps = {
  posts: {
    content: string;
    data: Pick<
      FrontMatterTypes,
      "title" | "description" | "created" | "ogpImage" | "ogpImageAlt"
    >;
    postPath: TargetPostData;
  }[];
};
