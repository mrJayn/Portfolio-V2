/** @type {import('next').NextConfig} */

const prod = process.env.NODE_ENV === 'production'

module.exports = {
    env: {
        BACKEND_URL: prod ? '/Portfolio' : '/',
    },
    images: {
        loader: 'akamai',
        path: '',
    },
    basePath: prod ? '/Portfolio' : '/',
    assetPrefix: prod ? '/Portfolio' : '',
    webpack5: true,
    webpack: (config) => {
        config.resolve.fallback = { fs: false }
        return config
    },
}
