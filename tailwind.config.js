/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')
const { themeConfig } = require('./twTheme')

module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx}',
        './src/components/**/*.{js,ts,jsx,tsx}',
    ],
    corePlugins: {},
    theme: {
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            white: {
                DEFAULT: '#fff',
                dark: '#f8f8f8',
                darker: '#f0f0f0',
            },
            black: '#000',

            backgroundRGB: themeConfig.BackgroundRGB,
            background: `rgb(${themeConfig.BackgroundRGB} / <alpha-value>)`,
            nav: 'rgb(var(--nav-bg) / <alpha-value>)',

            zinc: colors.zinc,
            grey: {
                /** Tailwind's default 'grey' **/
                5: '#f9fafb',
                10: '#f3f4f6',
                20: '#e5e7eb',
                25: '#dbdee3',
                30: '#d1d5db',
                40: '#9ca3af',
                DEFAULT: '#6b7280',
                60: '#4b5563',
                70: '#374151',
                75: '#2b3544',
                80: '#1f2937',
                90: '#111827',
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
            slate: {
                10: '#e0e6ef',
                20: '#c1cce0',
                30: '#a3b3d0',
                40: '#8499c1',
                DEFAULT: '#6580b1',
                60: '#51668e',
                70: '#3d4d6a',
                80: '#283347',
                90: '#141a23',
                neon: '#6199ff',
            },
            purple: {
                light: '#c1b0e1',
                DEFAULT: '#8360c3',
                dark: '#423062',
                neon: '#cc22aa',
            },

            red: '#B00',
        },
        screens: {
            min: '320px' /*  320-413px............ Mobile Devices  */,
            sm: '414px' /*  414-767px............. Ipads ~ Tablets  */,
            md: '768px' /*  768-1023px.......... Small screens ~ laptops  */,
            lg: '1024px' /*  1024-1199px........  Large screens ~ Desktop  */,
            xl: '1200px' /*  1200-max............... XL screens ~ TVs  */,
            max: '1440px',
        },
        fontFamily: {
            montserrat: ['Montserrat', 'sans-serif'],
            robotoMono: ['Roboto Mono', 'monospace'],
        },
        fontSize: themeConfig.fontSize,
        spacing: themeConfig.spacing,
        letterSpacing: {
            normal: '0em',
            md: '0.025em',
            lg: '0.05em',
            xl: '0.075em',
            '2xl': '0.1em',
            '3xl': '0.15em',
        },
        zIndex: {
            0: '0',
            10: '1',
            20: '2',
            30: '3',
            40: '4',
            50: '5',
        },
        boxShadow: {
            DEFAULT:
                '0 20px 25px -5px var(--shadow-color), 0 8px 10px -6px var(--shadow-color)',
            md: '0 17.5px 22.5px -10px var(--shadow-color), 0 6px 8px -4px var(--shadow-color)',
            sm: '0px 15px 15px -15px var(--shadow-color)',
            xs: '0px 7.5px 10px -10px var(--shadow-color)',
            inset: 'inset 0 0.1rem 0.1rem #0008, inset 0 -0.25rem 0.25rem #0005, inset 0 -0.5rem 0.5rem #0005, 0 0.1rem 0.1rem #0008',
            none: 'none',
        },

        extend: {
            backgroundImage: {
                'background-gradient': themeConfig.bgGradient,
                gradient:
                    'linear-gradient(45deg, var(--theme-purple), var(--theme-teal))',
                'gradient-loop':
                    'linear-gradient(45deg,var(--theme-purple),var(--theme-teal),var(--theme-purple))',
            },
            backgroundSize: {
                '200%': '200%',
                '300%': '300%',
            },
            borderRadius: {
                '4xl': '3rem',
            },
            transitionDuration: {
                0: '0ms',
                250: '250ms',
                350: '350ms',
                400: '400ms',
                600: '600ms',
            },
            transitionTimingFunction: {
                tween: 'cubic-bezier(0.5, 0.5, 0.5, 1)',
            },
            keyframes: {
                bgRotate: {
                    '0%': { backgroundPosition: '0% 0%' },
                    '50%': { backgroundPosition: '75% 0%' },
                    '100%': { backgroundPosition: '150% 0%' },
                },
                orbit: {
                    '0%': { transform: 'rotateZ(0deg)' },
                    '100%': { transform: 'rotateZ(-360deg)' },
                },
                invert: {
                    '0%': {
                        transform:
                            'rotateX(-90deg) rotateY(360deg) rotateZ(0deg)',
                    },
                    '100%': {
                        transform:
                            'rotateX(-90deg) rotateY(0deg) rotateZ(0deg)',
                    },
                },
                'shadow-orbital': {
                    '0%': {
                        boxShadow: 'inset 0.75em 0 0.5em rgba(0, 0, 0, 0.5)',
                    },

                    '25%': {
                        boxShadow: 'inset 0.5em 0 0.25em rgba(0, 0, 0, 0.5)',
                    },

                    '50%': {
                        boxShadow: 'inset 0.5em 0 0.25em rgba(0, 0, 0, 0.5)',
                    },

                    '100%': {
                        boxShadow: 'inset 0.75em 0 0.5em rgba(0, 0, 0, 0.5)',
                    },
                },
                'rotate-earth': {
                    '0%': {
                        backgroundPositionX: '0%',
                    },
                    '100%': {
                        backgroundPositionX: '-166.666%',
                    },
                },
                'rotate-clouds': {
                    '0%': {
                        transform: 'rotateX(0deg) rotateY(0deg)',
                    },
                    '50%': {
                        transform: 'rotateX(-5deg) rotateY(20deg)',
                    },
                    '100%': {
                        transform: 'rotateX(0deg) rotateY(0deg)',
                    },
                },
            },
        },
    },
}
