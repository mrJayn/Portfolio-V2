// prettier.config.js
module.exports = {
    plugins: [require('prettier-plugin-tailwindcss')],
    tailwindConfig: './tailwind.config.js',
    trailingComma: 'es5',
    tabWidth: 4,
    semi: false,
    singleQuote: true,
    printWidth: 125,
}
