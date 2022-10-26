/** @type {import('tailwindcss').Config} */

const { themeConfig } = require('./twThemeFS')

module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx}',
        './src/components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            white: '#fff',
            black: '#000',

            background: 'rgb(var(--background) / <alpha-value>)',
            nav: 'rgb(var(--nav-bg) / <alpha-value>)',
            card: 'rgb(var(--card-bg) / <alpha-value>)',

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
        screens: {
            min: '320px',
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
