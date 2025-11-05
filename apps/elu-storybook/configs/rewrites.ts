import envVariable from './env';

const apiRewrites =
  process.env.NODE_ENV === 'development'
    ? [
        {
          source: '/api/:path*',
          destination: `${envVariable.API_URL}/api/:path*`,
        },
      ]
    : [];

const nextRewrites: import('next').NextConfig['rewrites'] = async () => {
  return [...apiRewrites];
};

export default nextRewrites;
