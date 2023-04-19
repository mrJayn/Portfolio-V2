/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')
const colors = require('tailwindcss/colors')
const { themeConfig } = require('./twTheme')

module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx}',
        './src/components/**/*.{js,ts,jsx,tsx}',
    ],
    corePlugins: {
        /** https://tailwindcss.com/docs/configuration#core-plugins */
    },
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

            background: `rgb(${themeConfig.BackgroundRGB} / <alpha-value>)`,
            nav: 'rgb(var(--nav-rgb) / <alpha-value>)',

            grey: {
                5: '#f9fafb',
                10: '#f3f4f6',
                20: '#e5e7eb',
                25: '#dbdee3',
                30: '#d1d5db',
                35: '#B7BCC5',
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
            nickel: {
                light: '#737979',
                DEFAULT: '#667777',
                dark: '#4b5858',
                neon: '#99cfb6',
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
            inconsolata: ['Inconsolata', 'monospace'],
            raleway: ['Raleway', 'sans-serif'],
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
            '4xl': '0.2em',
        },
        lineHeight: {
            1: 1,
            1.25: 1.25,
            1.75: 1.75,
            2: 2,
        },
        zIndex: {
            0: '0',
            10: '1',
            20: '2',
            30: '3',
            40: '4',
            50: '5',
        },
        transitionDuration: {
            150: '150ms',
            200: '200ms',
            250: '250ms',
            500: '500ms',
            1000: '1s',
        },
        extend: {
            backgroundImage: {
                'background-gradient': themeConfig.bgGradient,
            },
            backgroundSize: {
                '200%': '200%',
                '300%': '300%',
            },
            borderRadius: {
                '3.5xl': '2.25rem',
                '4xl': '3rem',
            },

            transitionTimingFunction: {
                tween: 'cubic-bezier(0.5, 0.5, 0.5, 1)',
            },
            animation: {
                'scroll-left-1': 'scroll-left-1 20s 0s linear infinite',
                'scroll-left-2': 'scroll-left-2 20s 10s linear infinite',
            },
            keyframes: {
                bgRotate: {
                    '0%': { backgroundPosition: '0% 0%' },
                    '50%': { backgroundPosition: '75% 0%' },
                    '100%': { backgroundPosition: '150% 0%' },
                },
                'scroll-left-1': {
                    '0%': { transform: 'translateX(100%)' },
                    '100%': { transform: 'translateX(-100%)' },
                },
                'scroll-left-2': {
                    '0%': { transform: 'translateX(0%)' },
                    '100%': { transform: 'translateX(-200%)' },
                },
                orbit: {
                    '0%': { transform: 'rotateZ(0deg)' },
                    '100%': { transform: 'rotateZ(-360deg)' },
                },
                invert: {
                    '0%': {
                        transform:
                            'rotateX(-75deg) rotateY(360deg) rotateZ(0deg)',
                    },
                    '100%': {
                        transform:
                            'rotateX(-75deg) rotateY(0deg) rotateZ(0deg)',
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
    plugins: [
        plugin(function ({ matchUtilities, theme }) {
            matchUtilities(
                {
                    'translate-z': (value) => ({
                        '--tw-translate-z': value,
                        transform: ` translate3d(var(--tw-translate-x), var(--tw-translate-y), var(--tw-translate-z)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))`,
                    }),
                },
                { values: theme('translate'), supportsNegativeValues: true }
            )
        }),
        plugin(function ({ addUtilities, addComponents }) {
            addUtilities({
                '.non-scaling': {
                    'vector-effect': 'non-scaling-stroke',
                },
                '.linecap-round': {
                    'stroke-linecap': 'round',
                },
                '.linejoin-round': {
                    'stroke-linejoin': 'round',
                },
            }),
                addComponents({
                    '.styled-stroke': {
                        'stroke-linecap': 'round',
                        'stroke-linejoin': 'round',
                        'vector-effect': 'non-scaling-stroke',
                    },
                })
        }),
    ],
}
