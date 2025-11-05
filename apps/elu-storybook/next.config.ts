import type { NextConfig } from 'next';

import envVariable from './configs/env';
import nextRewrites from './configs/rewrites';
import nextWebpack from './configs/webpack';

const nextConfig: NextConfig = {
  transpilePackages: ['@eluelu/elu-ui'],
  env: envVariable,
  rewrites: nextRewrites,
  webpack: nextWebpack,
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },
};

export default nextConfig;
