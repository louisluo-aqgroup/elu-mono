import type { NextConfig } from 'next';

type WebpackConfigFn = NonNullable<NextConfig['webpack']>;

const nextWebpack: WebpackConfigFn = (config) => {
  const fileLoaderRule = config.module.rules.find((rule: any) =>
    rule.test?.test?.('.svg')
  );

  if (fileLoaderRule) {
    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/,
      },
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [/url/] },
        use: ['@svgr/webpack'],
      }
    );

    fileLoaderRule.exclude = /\.svg$/i;
  }

  return config;
};

export default nextWebpack;
