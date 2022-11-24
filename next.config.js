/** @type {import('next').NextConfig} */

let assetPrefix = ''
let basePath = ''

module.exports = {
    images: {
        loader: 'akamai',
        path: basePath,
    },
    basePath: basePath,
    assetPrefix: assetPrefix,
    webpack5: true,
    webpack: (config) => {
        config.resolve.fallback = { fs: false }
        return config
    },
}
