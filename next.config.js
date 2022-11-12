/** @type {import('next').NextConfig} */

module.exports = {
    reactStrictMode: true,
    images: {
        loader: 'akamai',
        path: '',
    },
    basePath: '/Portfolio',
    assetPrefix: '/Portfolio',
    webpack5: true,
    webpack: (config) => {
        config.resolve.fallback = { fs: false }

        return config
    },
}
