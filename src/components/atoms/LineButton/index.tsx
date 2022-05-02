import React, { useEffect } from "react";

export type LineButtonProps = {
  url?: string;
};

export const LineButton: React.FC<LineButtonProps> = (props) => {
  const { url } = props;

  useEffect(() => {
    // TODO: window の型定義ができない
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    window?.LineIt?.loadButton();
  }, []);

  return (
    <div
      className="line-it-button"
      data-lang="ja"
      data-type="share-a"
      data-ver="3"
      data-url={url || "https://kinoko_log.io/"}
      data-color="default"
      data-size="small"
      data-count="false"
      style={{ display: "none" }}
    />
  );
};
