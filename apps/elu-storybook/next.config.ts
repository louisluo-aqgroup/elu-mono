import type { NextConfig } from 'next';
import nextWebpack from './configs/webpack';

const nextConfig: NextConfig = {
  transpilePackages: ['@eluelu/elu-ui'],
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
