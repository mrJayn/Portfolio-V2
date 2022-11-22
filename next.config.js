/** @type {import('next').NextConfig} */

/**
const prod = process.env.NODE_ENV === 'production' 
 */
const isGithubActions = process.env.GITHUB_ACTIONS || false

let assetPrefix = ''
let basePath = ''

if (isGithubActions) {
    // trim off `<owner>/`
    const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')
}

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
