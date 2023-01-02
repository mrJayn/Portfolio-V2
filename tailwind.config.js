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
            /* min:'320px'  320-413px............ Mobile Devices  */
            sm: '414px' /*  414-767px............. Ipads ~ Tablets  */,
            md: '768px' /*  768-1023px.......... Small screens ~ laptops  */,
            lg: '1024px' /*  1024-1199px........  Large screens ~ Desktop  */,
            xl: '1200px' /*  1200-max............... XL screens ~ TVs  */,
            /* max: '1440px' */
        },
        spacing: {
            px: '1px',
            0: '0',
            0.5: '2px',
            1: '4px',
            1.5: '6px',
            2: '8px',
            2.5: '10px',
            3: '12px',
            3.5: '14px',
            4: '16px',
            5: '20px',
            6: '24px',
            7: '28px',
            8: '32px',
            9: '36px',
            10: '40px',
            11: '44px',
            12: '48px',
            14: '56px',
            16: '64px',
            20: '80px',
            24: '96px',
            28: '112px',
            32: '128px',
            36: '144px',
            40: '160px',
            44: '176px',
            48: '192px',
            52: '208px',
            56: '224px',
            60: '240px',
            64: '256px',
            72: '288px',
            80: '320px',
            96: '384px',
            view: 'calc(100vh - 56px)',
            vmax: '100vmax',
            vmin: '100vmin',
        },
        fontSize: themeConfig.fontSize,
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
            inset: 'inset 0 0.1rem 0.1rem #0008, inset 0 -0.25rem 0.25rem #0005, inset 0 -0.5rem 0.5rem #0005, 0 0.1rem 0.1rem #0008',
            'inset-outset':
                'inset 0 0.1rem 0.1rem #0008, inset 0 -0.25rem 0.25rem #0005, inset 0 -0.5rem 0.5rem #0005, 0 0.1rem 0.1rem #0008, 0 20px 25px -5px var(--shadow-color), 0 8px 10px -6px var(--shadow-color)',
            'inset-outset-md':
                'inset 0 0.1rem 0.1rem #0008, inset 0 -0.25rem 0.25rem #0005, inset 0 -0.5rem 0.5rem #0005, 0 0.1rem 0.1rem #0008, 0 17.5px 22.5px -10px var(--shadow-color), 0 6px 8px -4px var(--shadow-color)',
            none: 'none',
        },

        extend: {
            maxHeight: {
                view: 'calc(100vh - 56px)',
            },
            minHeight: {
                view: 'calc(100vh - 56px)',
            },
            backgroundImage: {
                'background-gradient': themeConfig.backgroundGradient,
                gradient:
                    'linear-gradient(45deg, var(--theme-purple), var(--theme-teal))',
                blackHole_LightRing: `radial-gradient( #0000 30%, var(--blackhole-light-1) 40%, var(--blackhole-light-2) 42.5%,var(--blackhole-light-3) 55%, #0000 70%)`,
                'loader-gradient':
                    'radial-gradient(transparent 0%, var(--loader-gradient-color-1) 2.5%, var(--loader-gradient-color-2) 15%, transparent 30%)',
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
            transitionDelay: {
                0: '0ms',
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
                widthExpand: {
                    '0%': { width: '0%' },
                    '100%': { width: '100%' },
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
            },
        },
    },
}
