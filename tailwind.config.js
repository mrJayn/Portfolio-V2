/** @type {import('tailwindcss').Config} */

//const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')
const { twTheme } = require('./twTheme')
const { twPlugins } = require('./twPlugins')

module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx}',
        './src/components/**/*.{js,ts,jsx,tsx}',
    ],
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
            body: 'rgb(var(--body-rgb) / <alpha-value>)',
            nav: 'rgb(var(--nav-rgb) / <alpha-value>)',
            'menu-a': 'rgb(var(--menu-a-rgb) / <alpha-value>)',
            'menu-b': 'rgb(var(--menu-b-rgb) / <alpha-value>)',

            grey: {
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
            blue: {
                5: '#eff4fc',
                10: '#d7e0ef',
                20: '#bdcbe5',
                30: '#a3b6da',
                40: '#7b96ca',
                DEFAULT: '#6580b1',
                60: '#5b739f',
                70: '#415882',
                80: '#2a3e62',
                90: '#1e3051',
                neon: '#6199ff',
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
