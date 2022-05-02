import { colors } from "../../colors";

export const baseStyle = `
  body {
    color: ${colors.COLOR_333333};
    font-weight: 300;
    font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Segoe UI,
      Hiragino Kaku Gothic ProN, Hiragino Sans, ヒラギノ角ゴ ProN W3, Arial,
      メイリオ, Meiryo, sans-serif;
    line-height: 1.7;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  a,
  a:link,
  a:visited,
  a:active {
    color: ${colors.COLOR_41C7C7};
    text-decoration: none;
    transition: 0.2s;
  }

  // Facebookのシェアボタンが下に配置されているため
  .fb_iframe_widget > span {
    vertical-align: baseline !important;
  }
`;
