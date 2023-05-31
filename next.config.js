/** @type {import('next').NextConfig} */
const withTM = require('next-transpile-modules')(['three'])

let assetPrefix = ''
let basePath = ''

module.exports = withTM({
    basePath: basePath,
    assetPrefix: assetPrefix,
    images: {
        loader: 'akamai',
        path: basePath,
    },
    webpack5: true,
    webpack: (config) => {
        config.resolve.fallback = { fs: false }
        return config
    },
})
