import { useEffect } from "react";

export const useAppHooks = () => {
  useEffect(() => {
    const tweet = document.createElement("script");
    tweet.setAttribute("src", "https://platform.twitter.com/widgets.js");
    tweet.setAttribute("async", "true");
    document.head.appendChild(tweet);
  });

  useEffect(() => {
    const hatena = document.createElement("script");
    hatena.setAttribute("src", "https://b.st-hatena.com/js/bookmark_button.js");
    hatena.setAttribute("async", "true");
    document.head.appendChild(hatena);
  });

  useEffect(() => {
    const line = document.createElement("script");
    line.setAttribute(
      "src",
      "https://www.line-website.com/social-plugins/js/thirdparty/loader.min.js"
    );
    line.setAttribute("async", "true");
    line.setAttribute("defer", "true");
    document.head.appendChild(line);
  });

  useEffect(() => {
    const div = document.createElement("div");
    div.setAttribute("id", "fb-root");
    const facebook = document.createElement("script");
    facebook.setAttribute(
      "src",
      // cspell:disable
      "https://connect.facebook.net/ja_JP/sdk.js#xfbml=1&version=v10.0"
      /* cSpell:enable */
    );
    facebook.setAttribute("async", "true");
    facebook.setAttribute("defer", "true");
    facebook.setAttribute("crossOrigin", "anonymous");
    facebook.setAttribute("nonce", "PYDviZQF");
    document.head.appendChild(div);
    document.head.appendChild(facebook);
  });
};
