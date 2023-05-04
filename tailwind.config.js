/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')
const { themeConfig } = require('./themeConfig')

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
            min: '320px' /*  320-413px............ Mobile Devices  */,
            sm: '512px' /*  414-767px............. Ipads ~ Tablets  */,
            md: '768px' /*  768-1023px.......... Small screens ~ laptops  */,
            lg: '1024px' /*  1024-1199px........  Large screens ~ Desktop  */,
            xl: '1200px' /*  1200-max............... XL screens ~ TVs  */,
            max: '1440px',
        },
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            white: '#fff',
            black: '#000',

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
                5: '#f0f2f7',
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
            0: 0,
            0.5: 0.5,
            0.75: 0.75,
            1: 1,
            1.25: 1.25,
            1.5: 1.5,
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
        animation: {
            none: 'none',
            'nav-links': 'nav_links 1s',
            'rotate-bg-300': 'bg-rotate-300 10s linear infinite',
        },
        keyframes: {
            nav_links: {
                '0%': { opacity: 1 },
                '50%': { opacity: 1 },
                '100%': { opacity: 0 },
            },
            'bg-rotate-300': {
                '0%': { backgroundPosition: '0% 0%' },
                '50%': { backgroundPosition: '75% 0%' },
                '100%': { backgroundPosition: '150% 0%' },
            },
        },
        extend: {
            backgroundImage: {
                'grad-1':
                    'linear-gradient(100deg,#fffa,#ffff), linear-gradient(45deg, #8360c3, #45a29e, #8360c3)',
                tempered: `linear-gradient(180deg,
                    rgb(var(--nav-rgb) / 0.8) 0%,
                    rgb(var(--nav-rgb) / 0.75) 10%,
                    rgb(var(--nav-rgb) / 0.75) 15%,
                    rgb(var(--nav-rgb) / 0.5) 30%,
                    rgb(var(--nav-rgb) / 0.45) 35%,
                    rgb(var(--nav-rgb) / 0.4) 40%,
                    rgb(var(--nav-rgb) / 0.35) 47.5%,
                    rgb(var(--nav-rgb) / 0.3) 52.5%,
                    rgb(var(--nav-rgb) / 0.2) 60%,
                    rgb(var(--nav-rgb) / 0.1) 70%,
                    rgb(var(--nav-rgb) / 0.05) 77.5%,
                    transparent 85%,
                    transparent 100%
                )`,
            },
            boxShadow: {
                inset: 'inset 3px 3px 5px #0004, inset 10px 10px 10px -5px #0004',
            },
            borderRadius: {
                '3.5xl': '2.25rem',
                '4xl': '3rem',
            },
            transitionTimingFunction: {
                tween: 'cubic-bezier(0.5, 0.5, 0.5, 1)',
            },
        },
    },
    plugins: [
        plugin(function ({ addUtilities }) {
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
            })
        }),
    ],
}
