import nextMDX from "@next/mdx";
import type { NextConfig } from "next";

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    rehypePlugins: [
      ["rehype-pretty-code", { theme: "one-dark-pro" }]
    ],
  },
});

const nextConfig: NextConfig = {
  reactCompiler: true,
  pageExtensions: ["ts", "tsx", "md", "mdx"],
};

export default withMDX(nextConfig);
