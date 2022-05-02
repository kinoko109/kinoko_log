import { extractCss } from "goober";
import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";
import React from "react";

export default class MyDocument extends Document<{ css: string }> {
  static async getInitialProps({ renderPage }: DocumentContext) {
    const page = renderPage();

    // Extrach the css for each page render
    const css = extractCss();
    return { ...page, css };
  }

  render() {
    return (
      <Html lang="ja">
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          {/* bing meta */}
          <meta
            name="msvalidate.01"
            content="85632CAC6CD46EA4E0073A5F8E127E94"
          />
          <script
            // cspell:disable
            /* eslint-disable-next-line react/no-danger */
            dangerouslySetInnerHTML={{
              __html: `
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "71lqumx1bc");
          `,
            }}
            /* eslint-disable-next-line react/no-danger */
            /* cSpell:enable */
          />
          <style
            id="_goober"
            // And defined it in here

            /* eslint-disable-next-line react/no-danger */
            dangerouslySetInnerHTML={{ __html: ` ${this.props.css}` }}
            /* eslint-disable-next-line react/no-danger */
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
