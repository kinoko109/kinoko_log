import { styled } from "goober";
import Image, { ImageProps } from "next/image";
import React from "react";
import { isProduction } from "../../../const";

export const ImageComponent: React.FC<ImageProps> = (props) => (
  <Wrapper>
    {isProduction ? (
      <Image loading="lazy" layout="responsive" {...props} />
    ) : (
      <Image unoptimized loading="lazy" layout="responsive" {...props} />
    )}
  </Wrapper>
);

const Wrapper = styled("div")`
  text-align: center;

  & + & {
    margin-top: 30px;

    @media (max-width: 768px) {
      margin-top: 10px;
    }
  }
`;
