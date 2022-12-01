/** @type {import('tailwindcss').Config} */

const { themeConfig } = require('./twThemeFS')

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
            white: '#fff',
            black: '#000',

            background: 'rgb(var(--background) / <alpha-value>)',
            nav: 'rgb(var(--nav-bg) / <alpha-value>)',

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

            red: '#dd0000',
        },
        screens: {
            min: '320px',
            xs: '360px',
            sm: '600px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            max: '1440px',
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
        },
        extend: {
            borderRadius: {
                '4xl': '3rem',
            },
            backgroundImage: {
                pattern: "url('/assets/misc/cardboard.png')",
                'background-gradient': themeConfig.backgroundGradient,
                gradient:
                    'linear-gradient(45deg, var(--theme-purple), var(--theme-teal))',
                gradient_radial:
                    'radial-gradient(transparent 0%, var(--theme-teal) 2.5%, transparent 20%, transparent 100%)',
                gradient_title:
                    'linear-gradient(45deg, var(--theme-purple), var(--theme-teal),var(--theme-purple) )',
                nav_tempered: `linear-gradient(
                to bottom,
                rgb(var(--nav-bg) / 0.8) 0%,
                rgb(var(--nav-bg) / 0.75) 10%,
                rgb(var(--nav-bg) / 0.75) 15%,
                rgb(var(--nav-bg) / 0.5) 30%,
                rgb(var(--nav-bg) / 0.45) 35%,
                rgb(var(--nav-bg) / 0.4) 40%,
                rgb(var(--nav-bg) / 0.35) 47.5%,
                rgb(var(--nav-bg) / 0.3) 52.5%,
                rgb(var(--nav-bg) / 0.2) 60%,
                rgb(var(--nav-bg) / 0.1) 70%,
                rgb(var(--nav-bg) / 0.05) 77.5%,
                transparent 85%,
                transparent 100%
            )`,
                gradient_tempered: `linear-gradient(
                to top,
                rgb(var(--background) / 1),
                rgb(var(--background) / 0.975) 10%,
                rgb(var(--background) / 0.9) 20%,
                rgb(var(--background) / 0.85) 30%,
                rgb(var(--background) / 0.4) 70%,
                rgb(var(--background) / 0.025) 90%,
                transparent 100%
            )`,
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
        },
    },
}
