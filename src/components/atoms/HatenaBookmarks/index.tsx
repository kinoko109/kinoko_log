import { styled } from "goober";
import React, { FC } from "react";

export type HatenaBookmarksProps = {
  title?: string;
};

export const HatenaBookmarks: FC<HatenaBookmarksProps> = (props) => {
  const { title = "このページをはてなブックマークに追加" } = props;

  return (
    <a
      href="https://b.hatena.ne.jp/entry/"
      className="hatena-bookmark-button"
      data-hatena-bookmark-layout="horizon-normal"
      data-hatena-bookmark-lang="ja"
      title={title}
    >
      <Icon
        src="https://b.st-hatena.com/images/v4/public/entry-button/button-only@2x.png"
        alt={title}
        width="20"
        height="20"
      />
    </a>
  );
};

const Icon = styled("img")`
  border: none;
`;
