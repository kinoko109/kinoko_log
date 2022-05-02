import { styled } from "goober";
import React from "react";
import { Tweet } from "react-twitter-widgets";
import { TwitterTweetProps } from "./types";

const TwitterTweet: React.FC<TwitterTweetProps> = (props) => {
  const { id } = props;

  return (
    <Wrapper>
      <Tweet tweetId={id} options={{ align: "center" }} />
    </Wrapper>
  );
};

const Wrapper = styled("div")`
  margin: 4% 0;
`;

export default TwitterTweet;
