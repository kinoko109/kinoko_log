const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

module.exports = withMDX({
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
});

module.exports = {
  env: {
    SITE_URL: "https://kinoko_log.io",
  },
};

module.exports = {
  images: {
    loader: "imgix",
    path: "",
  },
};
