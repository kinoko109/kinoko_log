// TODO なんかえらるのであとで調査
// eslint-disable-next-line import/no-extraneous-dependencies
import { createGlobalStyles } from "goober/global";
import { baseStyle } from "./baseStyle";
import { resetStyle } from "./resetStyle";

export const GlobalStyle = createGlobalStyles`
  ${resetStyle}
  ${baseStyle}
`;
