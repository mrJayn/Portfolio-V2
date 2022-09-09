/** @type {import('tailwindcss').Config} */

const { themeConfig } = require('./twTheme')

module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx}',
        './src/components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
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

            black: {
                dark: '#000',
                DEFAULT: '#0B0C10',
                light: '#101010',
            },

            grey: {
                darker: '#1b1b20',

                dark: '#5f6063',
                DEFAULT: '#858688',
                light: '#d5d5d5',
            },

            eee: '#eee',

            teal: {
                10: '#daecec',
                20: '#b5dad8',
                30: '#8fc7c5',
                40: '#6ab5b1',
                DEFAULT: '#45a29e',
                60: '#37827e',
                70: '#29615f',
                80: '#1c413f',
                90: '#0e2020',
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
        fontSize: themeConfig.fontSize,
        zIndex: {
            0: '0',
            10: '1',
            20: '2',
            30: '3',
            40: '4',
            50: '5',
        },
        keyframes: {
            gradientKFs: {
                '0%': {
                    backgroundPosition: '0% 50%',
                },

                '100%': {
                    backgroundPosition: '300% 50%',
                },
            },
            glowKFs: {
                '0%': {
                    opacity: 0.85,
                },
                '50%': {
                    opacity: 1,
                },
                '100%': {
                    opacity: 0.85,
                },
            },
        },
        animation: {
            none: '',
            glowing: 'glowKFs 3.5s linear infinite',
        },

        transitionDuration: {
            100: '100ms',
            150: '150ms',
            250: '250ms',
            300: '300ms',
            350: '350ms',
            600: '600ms',
        },
        extend: {
            backgroundImage: {
                pattern: "url('/assets/misc/cardboard.png')",
                gradient: 'linear-gradient(45deg, #8360c3, #45A29E)',
                gradientLoop:
                    'linear-gradient(45deg, #cc22aa, #8360c3, #45A29E, #55dcd1,#45A29E,#8360c3,#cc22aa)',
            },
        },
    },
}
