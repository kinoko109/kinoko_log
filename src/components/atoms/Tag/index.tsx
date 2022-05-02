import { styled } from "goober";
import React from "react";
import { colors } from "../../../styles/colors";

const Tag: React.FC<{ className?: string }> = (props) => {
  const { children, className } = props;

  return (
    <StyledDiv className={className}>
      <StyledSpan>{children}</StyledSpan>
    </StyledDiv>
  );
};

const StyledDiv = styled("div")`
  background: ${colors.COLOR_F2A594};
  box-shadow: rgba(0, 0, 0, 0) 0 0 0;
  cursor: pointer;
  display: inline-block;
  font-family: "Avenir", "Hiragino Kaku Gothic ProN", "メイリオ", sans-serif;
  font-size: 0.8rem;
  font-weight: 800;
  padding: 0 8px;
  text-align: center;
  transition: all 300ms ease-out 0s;
`;

const StyledSpan = styled("span")`
  color: ${colors.COLOR_FFFFFF};
`;

export default Tag;
