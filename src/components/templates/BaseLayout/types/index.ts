import { FrontMatterTypes } from "../../../../types/shared";

export type BaseLayoutProps = {
  meta: Pick<
    FrontMatterTypes,
    "title" | "description" | "ogpImage" | "ogpImageAlt"
  > & {
    url?: string;
  };
  isHome?: boolean;
};
