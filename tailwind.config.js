/** @type {import('tailwindcss').Config} */

const { twTheme } = require('./twTheme')
const { twPlugins } = require('./twPlugins')

module.exports = {
    content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
    corePlugins: {
        transitionProperty: false,
    },
    theme: {
        screens: {
            min: '320px',
            sm: '512px',
            md: '768px',
            lg: '1024px',
            xl: '1200px',
            max: '1920px',
        },
        colors: {
            white: '#fff',
            black: '#000',
            current: 'currentColor',
            transparent: 'transparent',
            body: '#131313',
            nav: 'rgb(var(--nav-rgb) / <alpha-value>)',
            'root-color': '#c0c0c0',

            grey: {
                5: '#fafafa',
                10: '#f5f5f5',
                20: '#e5e5e5',
                30: '#d4d4d4',
                40: '#a3a3a3',
                DEFAULT: '#737373',
                60: '#525252',
                65: '#4a4a4a',
                70: '#404040',
                75: '#333',
                80: '#262626',
                90: '#171717',
                95: '#0c0c0c',
            },
            slate: {
                5: '#f2f5f9',
                10: '#dce1ea',
                20: '#c5cddd',
                30: '#aeb9cf',
                40: '#939db2',
                DEFAULT: '#78859e',
                60: '#697791',
                70: '#4e5c75',
                80: '#354157',
                90: '#283347',
                95: '#141a24',
                neon: '#6199ff',
            },
            green: '#80b165',
            red: '#b00',
        },
        ...twTheme,
    },
    plugins: twPlugins,
}
