import { styled } from "goober";
import React from "react";
import { YouTubeComponentProps } from "./types";

const YouTubeComponent: React.FC<YouTubeComponentProps> = (props) => {
  const { id } = props;

  const opts = {
    height: "400px",
    width: "100%",
  };

  return (
    <Wrapper>
      <iframe
        loading="lazy"
        width={opts.width}
        height={opts.height}
        src={`https://www.youtube.com/embed/${id}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </Wrapper>
  );
};

const Wrapper = styled("div")`
  margin: 4% 0;
`;

export default YouTubeComponent;
