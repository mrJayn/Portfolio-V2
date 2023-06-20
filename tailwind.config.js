/** @type {import('tailwindcss').Config} */

//const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')
const { twTheme } = require('./twTheme')
const { twPlugins } = require('./twPlugins')
const colors = require('tailwindcss/colors')

module.exports = {
    content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
    corePlugins: {
        /** https://tailwindcss.com/docs/configuration#core-plugins */
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
            /* old grey
                5: '#f9fafb',
                10: '#f3f4f6',
                20: '#e5e7eb',
                30: '#d1d5db',
                40: '#9ca3af',
                DEFAULT: '#6b7280',
                60: '#4b5563',
                70: '#374151',
                75: '#2b3544',
                80: '#1f2937',
                90: '#111827',
             */
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
            purple: {
                5: '#f5f4f7',
                10: '#e0dfe8',
                20: '#ccc9d9',
                30: '#b8b3c9',
                40: '#ada9c1',
                DEFAULT: '#9993B2',
                60: '#7a768e',
                70: '#5c586b',
                80: '#4d4a59',
                90: '#3d3b47',
                95: '#1f1d24',
                neon: '#',
            },
            green: '#80b165',
            'rose-gold': '#b16580',
            pink: '#d8b2c0',
            'roman-silver': '#808292',
            red: '#B00',
        },
        ...twTheme,
    },
    plugins: twPlugins,
}
