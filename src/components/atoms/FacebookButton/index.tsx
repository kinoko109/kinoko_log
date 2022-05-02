import React, { useEffect } from "react";

export type FacebookButtonProps = {
  url?: string;
};

export const FacebookButton: React.FC<FacebookButtonProps> = (props) => {
  const { url } = props;

  const href = url || "https://kinoko_log.io/";

  useEffect(() => {
    // TODO: window の型定義ができない
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // cspell:disable
    window?.FB?.XFBML?.parse();
    /* cSpell:enable */
  }, []);

  return (
    <React.Fragment>
      <div
        className="fb-share-button"
        data-href={href}
        data-layout="button"
        data-size="small"
        data-lazy="true"
      >
        <a
          target="_blank"
          href={`https://www.facebook.com/sharer/sharer.php?u=${href}&amp;src=sdkpreparse`}
          // cspell:disable
          className="fb-xfbml-parse-ignore"
          /* cSpell:enable */
          rel="noreferrer"
        >
          シェア
        </a>
      </div>
    </React.Fragment>
  );
};
