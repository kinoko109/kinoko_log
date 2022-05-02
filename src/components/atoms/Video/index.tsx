import { styled } from "goober";
import React from "react";
import { VideoProps } from "./types";

export const Video: React.FC<VideoProps> = (props) => {
  const { targetFile } = props;

  return (
    <StyledVideo autoPlay loop muted playsInline>
      <source src={`${targetFile}.webm`} type="video/webm" />
      <source src={`${targetFile}.mp4`} type="video/mp4" />
      <p>動画を再生するには、videoタグをサポートしたブラウザが必要です。</p>
    </StyledVideo>
  );
};

const StyledVideo = styled("video")`
  width: 100%;
`;
