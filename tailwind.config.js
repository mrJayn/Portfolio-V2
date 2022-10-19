/** @type {import('tailwindcss').Config} */

const { themeConfig } = require('./twTheme')

module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx}',
        './src/components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        fontSize: themeConfig.fontSize,
        spacing: themeConfig.spacing,
        screens: {
            min: '320px',
            sm: '600px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            max: '1440px',
        },
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            white: '#fff',
            black: '#000',

            background: 'var(--background)',
            nav: '#333',

            grey: {
                10: '#151515',
                20: '#333',
                30: '#454545',
                40: '#666',
                DEFAULT: '#999',
                60: '#a5a5a5',
                70: '#ccc',
                80: '#d5d5d5',
                90: '#eee',
            },
            teal: {
                10: '#daecec',
                30: '#bff7f5',
                40: '#8fc7c5',
                DEFAULT: '#45a29e',
                90: '#29615f',
                99: '#40606f',
                neon: '#66fcf1',
            },
            purple: {
                light: '#c1b0e1',
                DEFAULT: '#8360c3',
                dark: '#423062',
                neon: '#cc22aa',
            },

            red: '#dd0000',
        },
        fontFamily: {
            montserrat: ['Montserrat', 'sans-serif'],
            robotoMono: ['Roboto Mono', 'monospace'],
        },
        zIndex: {
            0: '0',
            10: '1',
            20: '2',
            30: '3',
            40: '4',
            50: '5',
            60: '6',
            auto: 'auto',
        },

        boxShadow: {
            DEFAULT:
                '0 20px 25px -5px var(--shadow-color), 0 8px 10px -6px var(--shadow-color)',
            md: '0 17.5px 22.5px -10px var(--shadow-color), 0 6px 8px -4px var(--shadow-color)',
            sm: '0px 15px 15px -15px var(--shadow-color)',
            xs: '0px 7.5px 10px -10px var(--shadow-color)',
            none: 'none',
        },
        extend: {
            backgroundImage: {
                pattern: "url('/assets/misc/cardboard.png')",
                gradient:
                    'linear-gradient(45deg, var(--theme-purple), var(--theme-teal))',
                gradient_radial:
                    'radial-gradient(transparent 0%, var(--theme-teal) 2.5%, transparent 20%, transparent 100%)',
                gradient_title:
                    'linear-gradient(45deg, #cc22aa, #8360c3, #45A29E, #55dcd1,#45A29E,#8360c3,#cc22aa)',
                gradient_card:
                    'linear-gradient(to top, var(--card-bg-from), var(--card-bg-to))',
            },
            transitionDuration: {
                0: '0ms',
                250: '250ms',
                350: '350ms',
                400: '400ms',
                600: '600ms',
            },
            transitionDelay: {
                0: '0ms',
            },
        },
    },
}
