/** @type {import('next').NextConfig} */

const prod = process.env.NODE_ENV === 'production'

const isGithubActions = process.env.GITHUB_ACTIONS || false

let assetPrefix = ''
let basePath = '/'

if (isGithubActions) {
    // trim off `<owner>/`
    const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')

    assetPrefix = `/${repo}/`
    basePath = `/${repo}`
}

module.exports = {
    env: {
        BACKEND_URL: prod ? '/Portfolio' : '',
    },
    images: {
        loader: 'akamai',
        path: '',
    },
    basePath: prod ? basePath : '',
    assetPrefix: prod ? assetPrefix : '',
    webpack5: true,
    webpack: (config) => {
        config.resolve.fallback = { fs: false }
        return config
    },
}
