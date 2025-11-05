import envVariable from './env';

const apiRewrites = [
  {
    source: '/api/:path*',
    destination: `${envVariable.API_URL}/api/:path*`,
  },
];

const nextRewrites: import('next').NextConfig['rewrites'] = async () => {
  return [...apiRewrites];
};

export default nextRewrites;
