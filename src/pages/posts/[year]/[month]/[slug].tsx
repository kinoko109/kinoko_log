import * as fs from "fs";
import path from "path";
import { styled } from "goober";
import matter from "gray-matter";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import hydrate from "next-mdx-remote/hydrate";
import renderToString from "next-mdx-remote/render-to-string";
import React, { useEffect, useState } from "react";
import { ExternalLink } from "../../../../components/atoms/ExternalLink";
import { ImageComponent } from "../../../../components/atoms/ImageComponent";
import Tag from "../../../../components/atoms/Tag";
import TwitterTweet from "../../../../components/atoms/TwitterTweet";
import { Video } from "../../../../components/atoms/Video";
import YouTubeComponent from "../../../../components/atoms/YouTubeComponent";
import { ShareButtons } from "../../../../components/molecules/ShareButtons";
import BaseLayout from "../../../../components/templates/BaseLayout";
import { defaultOgpImage } from "../../../../const";
import { articleStyle } from "../../../../styles/articleStyle";
import { colors } from "../../../../styles/colors";
import { PostPageProps } from "../../../../types/pages/postPage";
import { allPostPaths, POSTS_PATH } from "../../../../utils/allPostPaths";

const TagContainer = styled("div")`
  margin: -3px;
`;

const ExtendedTag = styled(Tag)`
  margin: 3px;
`;

const components = {
  TwitterTweet,
  YouTubeComponent,
  ImageComponent,
  ExternalLink,
  Video,
};

const PostPage: NextPage<PostPageProps> = (props) => {
  const { source, frontMatter } = props;
  const content = hydrate(source, { components });

  // ogpのurl設定用
  const [url, setUrl] = useState("");

  useEffect(() => {
    const { href } = window.location;
    setUrl(href);
  }, []);

  const {
    title,
    description,
    tag,
    ogpImage = defaultOgpImage,
    ogpImageAlt,
    created,
    updated,
  } = frontMatter;

  const meta = {
    title: `${title} | きのこログ`,
    ogpImage,
    ogpImageAlt,
    description,
    url,
  };

  const tags = tag?.split(",");

  return (
    <React.Fragment>
      <BaseLayout meta={meta}>
        <ArticleWrapper>
          <ArticleTitle>{title}</ArticleTitle>
          {created && (
            <PostDateWrapper>
              <PostDate>記事作成日: {created}</PostDate>
              {updated && <PostDate>記事更新日: {updated}</PostDate>}
            </PostDateWrapper>
          )}
          {tags?.length > 0 && (
            <TagContainer>
              {tags.map((tagLabel: string) => (
                <ExtendedTag key={tagLabel}>{tagLabel}</ExtendedTag>
              ))}
            </TagContainer>
          )}
          <ContentWrapper>{content}</ContentWrapper>
          <ShareButtons title={title} url={url} />
        </ArticleWrapper>
      </BaseLayout>
    </React.Fragment>
  );
};

const ArticleWrapper = styled("div")`
  margin: 0 auto;
  max-width: 700px;
`;

const ArticleTitle = styled("h1")`
  color: ${colors.COLOR_41C7C7};
  font-family: "Hiragino Kaku Gothic ProN", sans-serif;
  @media (max-width: 768px) {
    font-size: 28px;
    line-height: 1.5;
  }
`;

const ContentWrapper = styled("div")`
  margin-bottom: 4%;
  margin-top: 4%;

  ${articleStyle}
`;

const PostDateWrapper = styled("div")`
  margin-bottom: 10px;
`;

const PostDate = styled("span")`
  font-size: 14px;
  margin: 0;
  padding-right: 20px;

  @media (max-width: 385px) {
    display: block;
  }
`;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = allPostPaths()
    // パスをマッピング
    .map((allPostPath) => {
      const { year, month, slug } = allPostPath;
      return {
        params: {
          year,
          month,
          slug,
        },
      };
    });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  // TODO: 分割代入したいが、型の当て方がわからぬ
  const postFilePath = path.join(
    POSTS_PATH,
    `${context.params?.year}/${context.params?.month}/${context.params?.slug}.mdx`
  );
  const source = fs.readFileSync(postFilePath);

  const { content, data } = await matter(source);

  const mdxSource = await renderToString(content, {
    components,
    // オプションで remark/rehype プラグインを渡す
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
};

export default PostPage;
