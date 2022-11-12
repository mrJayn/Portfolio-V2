/** @type {import('next').NextConfig} */

const withPlugins = require('next-compose-plugins')
const optimizedImages = require('next-optimized-images')

module.exports = {
    reactStrictMode: true,

    images: {
        loader: 'akamai',
        path: '',
    },
    basePath: '/Portfolio',
    assetPrefix: '/Portfolio/',
    webpack5: true,
    webpack: (config) => {
        config.resolve.fallback = { fs: false }
        return config
    },
}
