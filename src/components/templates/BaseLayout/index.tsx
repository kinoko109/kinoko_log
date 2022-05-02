import { styled } from "goober";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import { BaseLayoutProps } from "./types";

const BaseLayout: React.FC<BaseLayoutProps> = (props) => {
  const { meta, isHome, children } = props;
  const Title = isHome ? Heading1 : SiteName;

  const { title, description, ogpImage, ogpImageAlt, url } = meta;

  return (
    <Wrapper>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:site_name" content="きのこログ" />
        <meta property="og:image" content={process.env.SITE_URL + ogpImage} />
        <meta property="og:image:alt" content={ogpImageAlt} />
        <meta property="og:url" content={url} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta
          name="twitter:image:src"
          content={process.env.SITE_URL + ogpImage}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="max-image-preview:large" />
      </Head>
      <Header>
        <Link href="/">
          <Title>きのこログ</Title>
        </Link>
      </Header>
      <Content>{children}</Content>
      <Footer>© きのこログ</Footer>
    </Wrapper>
  );
};

const customFont = `
  @font-face {
    font-family: "kinoko_log";
    src: url("/font/kinoko_log.woff2") format("woff2"),
      url("/font/kinoko_log.woff") format("woff");
    font-weight: normal;
  }
  font-family: "kinoko_log", "Hiragino Kaku Gothic ProN";
`;

const Wrapper = styled("div")`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Content = styled("main")`
  margin: 20px auto 0;
  max-width: 1200px;
  width: 90%;

  @media (max-width: 768px) {
    margin: 0 auto;
  }
`;

const Header = styled("header")`
  padding: 10px 0;
  text-align: center;
`;

const title = `
  ${customFont};
  cursor: pointer;
  display: inline;
  font-size: 30px;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 24px;
    font-weight: bold;
  }
`;

const Heading1 = styled("h1")`
  ${title};
`;

const SiteName = styled("p")`
  ${title};
`;

const Footer = styled("footer")`
  ${customFont};

  margin-top: auto;
  padding: 5% 0;
  text-align: center;
`;

export default BaseLayout;
