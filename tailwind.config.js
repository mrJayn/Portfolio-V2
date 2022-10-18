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

            light: '#fbfbfb',
            dark: '#1d1d1d',
            nav: '#333',

            white: '#fff',
            black: '#000',

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

            eee: '#eee',

            teal: {
                lightest: '#daecec',
                lighter: '#bff7f5',
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
                gradient: 'linear-gradient(45deg, #8360c3, #45A29E)',
                gradientRadial:
                    'radial-gradient(transparent 0%, #45A29Ebb 2.5%, transparent 20%, transparent 100%)',
                gradientDimmed: 'linear-gradient(45deg, #8360c3aa, #45A29Eaa)',
                gradientLoop:
                    'linear-gradient(45deg, #cc22aa, #8360c3, #45A29E, #55dcd1,#45A29E,#8360c3,#cc22aa)',
                card_grad: 'linear-gradient(to top, #eee, #f3f3f3)',
                card_grad_DARK: 'linear-gradient(to top, #2a2a2a, #454545)',
                none: 'linear-gradient(45deg, #8360c300, #45A29E00)',
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
            keyframes: {
                cardOn: {
                    '0%': {
                        boxShadow:
                            'var(--x-closed) 0.05em 0.1em #00000007 inset, var(--x-closed) -0.25em 0.25em #0001 inset, var(--x-closed) -0.5em 0em #0001 inset',
                    },
                    '100%': {
                        boxShadow:
                            'var(--x0) 0.05em 0.1em #00000007 inset, var(--x0) -0.25em 0.25em #0001 inset, var(--x0) -0.5em 0em #0001 inset',
                    },
                },
                cardOff: {
                    '0%': {
                        boxShadow:
                            'var(--x0) 0.05em 0.1em #00000007 inset, var(--x0) -0.25em 0.25em #0001 inset, var(--x0) -0.5em 0em #0001 inset',
                    },
                    '50%': {
                        boxShadow:
                            'var(--x0) 0.05em 0.1em #00000007 inset, var(--x0) -0.25em 0.25em #0001 inset, var(--x0) -0.5em 0em #0001 inset',
                    },
                    '100%': {
                        boxShadow:
                            'var(--x-closed) 0.05em 0.1em #00000007 inset, var(--x-closed) -0.25em 0.25em #0001 inset, var(--x-closed) -0.5em 0em #0001 inset',
                    },
                },
            },
            animation: {
                card_close: 'cardOff 1.55s cubic-bezier(0.6, 0, 0.4, 1)',
                card_expand: 'cardOn 1s cubic-bezier(0.6, 0, 0.4, 1)',
            },
        },
    },
}
