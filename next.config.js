/** @type {import('next').NextConfig} */

const ghPages = process.env.DEPLOY_TARGET === 'gh-pages'

const withNextOptimizedImages = require('next-optimized-images')

module.exports = withNextOptimizedImages({
    images: {
        loader: 'akamai',
        path: '',
    },
    basePath: ghPages ? '/Portfolio/' : '',
    assetPrefix: ghPages ? '/Portfolio/' : '',
    webpack5: true,
    webpack: (config) => {
        config.resolve.fallback = { fs: false }
        return config
    },
})
