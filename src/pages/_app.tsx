import { MDXProvider } from "@mdx-js/react";
import { setup } from "goober";
import { AppProps } from "next/app";
import React from "react";
import CodeBlock from "../components/atoms/CodeBlock";
import { useAppHooks } from "../pageHooks/_app";
import { GlobalStyle } from "../styles/GlobalStyle";

const components = {
  code: CodeBlock,
};

setup(React.createElement);

export default function MyApp({ Component, pageProps }: AppProps) {
  useAppHooks();

  return (
    <MDXProvider components={components}>
      <GlobalStyle />
      <Component {...pageProps} />
    </MDXProvider>
  );
}
