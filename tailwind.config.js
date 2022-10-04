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
                dark: '#000004',
                DEFAULT: '#0b0b10',
                light: '#101014',
            },

            grey: {
                darkest: '#151519',
                darker: '#1b1b20',
                dark: '#606064',
                DEFAULT: '#858589',
                light: '#d5d5d9',
                lighter: '#e6e6f0',
                lightest: '#ededf2',
            },

            eee: '#eee',

            teal: {
                lightest: '#daecec',
                light: '#8fc7c5',
                DEFAULT: '#45a29e',
                dark: '#29615f',
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
            auto: 'auto',
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
                gradient: 'linear-gradient(45deg, #8360c3, #45A29E)',
                gradientDimmed: 'linear-gradient(45deg, #8360c3aa, #45A29Eaa)',
                gradientLoop:
                    'linear-gradient(45deg, #cc22aa, #8360c3, #45A29E, #55dcd1,#45A29E,#8360c3,#cc22aa)',
                none: 'linear-gradient(45deg, #8360c300, #45A29E00)',
            },
        },
    },
}
