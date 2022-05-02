import { styled } from "goober";
import React, { FC } from "react";

import {
  FacebookButton,
  FacebookButtonProps,
} from "../../atoms/FacebookButton";
import {
  HatenaBookmarks,
  HatenaBookmarksProps,
} from "../../atoms/HatenaBookmarks";
import { LineButton, LineButtonProps } from "../../atoms/LineButton";
import { TweetButton, TweetButtonProps } from "../../atoms/TweetButton";

type ShareButtonsProps = TweetButtonProps &
  HatenaBookmarksProps &
  LineButtonProps &
  FacebookButtonProps;

export const ShareButtons: FC<ShareButtonsProps> = (props) => {
  const { title, url } = props;

  return (
    <ButtonsWrapper>
      <ButtonWrapper>
        <TweetButton title={title} url={url} />
      </ButtonWrapper>
      <ButtonWrapper>
        <HatenaBookmarks title={title} />
      </ButtonWrapper>
      <ButtonWrapper>
        <LineButton url={url} />
      </ButtonWrapper>
      <ButtonWrapper>
        <FacebookButton url={url} />
      </ButtonWrapper>
    </ButtonsWrapper>
  );
};

const ButtonsWrapper = styled("div")`
  display: flex;
  line-height: 1;
`;

const ButtonWrapper = styled("div")`
  & + & {
    margin-left: 20px;
  }
`;
