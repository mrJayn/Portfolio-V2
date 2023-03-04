/** @type {import('next').NextConfig} */

let assetPrefix = ''
let basePath = ''

module.exports = {
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
}
