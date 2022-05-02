import { createElement } from "react";
import { setup } from "goober";
import * as NextImage from "next/image";

setup(createElement);

// Thanks to https://github.com/vercel/next.js/issues/18393#issuecomment-783269086
const OriginalNextImage = NextImage.default;
Object.defineProperty(NextImage, "default", {
  configurable: true,
  // TODO: unoptimezed で最適化を無効にしないと画像が Not Found になる
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
