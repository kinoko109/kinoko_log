import React, { FC } from "react";

export type TweetButtonProps = {
  title?: string;
  url?: string;
  isLarge?: boolean;
};

export const TweetButton: FC<TweetButtonProps> = (props) => {
  const { title, url, isLarge } = props;
  const href = [
    "https://twitter.com/intent/tweet",
    [title && `text=${title}`, url && `url=${url}`].filter(Boolean).join("&"),
  ]
    .filter(Boolean)
    .join("?");
  const size = isLarge ? "large" : "default";

  return (
    <a className="twitter-share-button" href={href} data-size={size}>
      ツイート
    </a>
  );
};
