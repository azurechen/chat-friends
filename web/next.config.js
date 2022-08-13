/** @type {import('next').NextConfig} */

const path = require('path');
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // disable css module
  webpack(config) {
    config.module.rules
      .filter(rule => !!rule.oneOf)
      .forEach(rule => {
        rule.oneOf.forEach(one => {
          if (!one.issuer || !`${one.issuer.and}`.includes('_app')) return;
          one.issuer.and = [path.resolve(__dirname)];
        });
      });
    return config;
  },
};

module.exports = nextConfig;
