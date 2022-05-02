import fs from "fs";
import path from "path";
import { styled } from "goober";
import matter from "gray-matter";
import { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import React from "react";
import BaseLayout from "../components/templates/BaseLayout";
import { defaultOgpImage } from "../const";
import { colors } from "../styles/colors";
import { HomeProps } from "../types/pages/home";
import { allPostPaths, POSTS_PATH } from "../utils/allPostPaths";
import { ImageComponent } from "../components/atoms/ImageComponent";

const meta = {
  title: "きのこログ",
  description: "学習用のブログ",
  ogpImage: "",
  ogpImageAlt: "",
};

const Home: NextPage<HomeProps> = (props) => {
  const { posts } = props;

  const sortPosts = posts.sort(
    (a, b) =>
      new Date(b.data.created).getTime() - new Date(a.data.created).getTime()
  );

  return (
    <BaseLayout meta={meta} isHome>
      {posts.length > 0 && (
        <PostList>
          {sortPosts.map((post) => {
            const {
              data: { ogpImage, title, created, description },
              postPath: { year, month, slug },
            } = post;
            const linkDestination = `/posts/${year}/${month}/${slug}`;
            const href = "/posts/[year]/[month]/[slug]";
            const eyeCatchPath = ogpImage ?? defaultOgpImage;

            return (
              <PostItem key={post.data.title}>
                <Link as={linkDestination} href={href} passHref>
                  <EyeCatchAnchor>
                    <EyeCatch>
                      <ImageComponent
                        src={eyeCatchPath}
                        alt={title}
                        title={title}
                        layout="fill"
                        objectFit="contain"
                        objectPosition="center"
                      />
                    </EyeCatch>
                    <div>
                      <PostCreated>{created}</PostCreated>
                      <PostTitle>{title}</PostTitle>
                      <PostDescription>{description}</PostDescription>
                    </div>
                  </EyeCatchAnchor>
                </Link>
              </PostItem>
            );
          })}
        </PostList>
      )}
    </BaseLayout>
  );
};

const PostList = styled("ul")`
  display: flex;
  flex-wrap: wrap;
  padding: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    flex-wrap: nowrap;
  }
`;

const PostItem = styled("li")`
  display: flex;
  flex-direction: column;
  margin: 0 15px 15px 0;
  transition: 0.3s;
  width: calc(100% / 3 - 10px);

  &:nth-child(3n) {
    margin-right: 0;
  }

  &:hover {
    box-shadow: 0 0 10px 3px ${colors.COLOR_E0E4E4};
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    margin: 0 0 10px 0;
    width: auto;
  }
`;

const PostCreated = styled("p")`
  color: ${colors.COLOR_5C6069};
  font-size: 12px;
  margin: 0 0 5px;
  text-decoration: none;
`;

const EyeCatchAnchor = styled("a")`
  display: block;
  height: 100%;
  padding: 15px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const PostTitle = styled("h2")`
  color: ${colors.COLOR_333333};
  font-size: 20px;
  line-height: 1.5;
  margin: 0 0 10px;
  text-decoration: none;
`;

const PostDescription = styled("p")`
  color: ${colors.COLOR_5C6069};
  font-size: 12px;
  margin: 0;
  text-decoration: none;
`;

const EyeCatch = styled("div")`
  height: 150px;
  margin-bottom: 10px;
  position: relative;
  width: 100%;
`;

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const posts = allPostPaths().map((postPath) => {
    const { year, month, slug } = postPath;
    const source = fs.readFileSync(
      path.join(POSTS_PATH, `${year}/${month}/${slug}.mdx`)
    );
    const { content, data } = matter(source);

    return {
      content,
      data,
      postPath,
    };
  });

  return {
    props: { posts },
  };
};
