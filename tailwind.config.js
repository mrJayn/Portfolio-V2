/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')
const { themeConfig } = require('./twTheme')

module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx}',
        './src/components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        screens: {
            min: '320px',
            sm: '420px',
            md: '768px',
            lg: '1024px',
            max: '1440px',
        },
        colors: {
            darkblack: '#000',
            black: '#0b0c10',
            grey: '#1f2833',
            lightgrey: '#c5c6c7',
            white: '#fff',
            eee: '#eeeeee',
            teal: '#45a29e',
            neon: '#66fcf1',
            tan: '#deb992',
            red: '#dd0000',
            green: '#23DC3D',
            lightgreen: '#76e392',
            blue: '#0000dd',
            indigo: colors.indigo,
            transparent: 'transparent',
            background: '#1b1c20',
            theme: {
                title: '#fff',
                background: '#1b1c20',
                grey: '#1f2833',
                text: '#c5c6c7',
                primary: '#45a29e',
                primary_B: '#1ba098',
                secondary: '#deb992',
                neon: '#66fcf1',
                subtitle: '#deb992',
                transparent: '#00000000',
            },
            edit: '#110000',
        },
        fontFamily: {
            montserrat: ['Montserrat', 'sans-serif'],
            robotoMono: ['Roboto Mono', 'monospace'],
        },
        fontSize: themeConfig.fontSize,

        extend: {
            boxShadow: {
                'elem-bef': '1px 1px 2.5px 0px theme(colors.tan)',
                'elem-aft': '-1px -1px 2.5px 0px theme(colors.neon)',
                'elem-bef-active': '2px 2px 2.5px 0px theme(colors.tan)',
                'elem-aft-active': '-2px -2px 2.5px 0px theme(colors.neon)',
                'img-bef': '1.5px 1.5px 5px 0px theme(colors.neon)',
                'img-aft': '-1.5px -1.5px 5px 0px theme(colors.tan)',
                'img-bef-active': '3px 3px 5px 0px theme(colors.neon)',
                'img-aft-active': '-3px -3px 5px 0px theme(colors.tan)',
            },
        },
        keyframes: {
            ham_top: {
                '100%': { transform: ' rotate(45deg)' },
            },
            ham_bottom: {
                '100%': { transform: ' rotate(-45deg)' },
            },
            spinLoader: {
                '0%': { transform: 'rotate(0deg)' },
                '100%': { transform: 'rotate(360deg)' },
            },
            tapThisFade: {
                '0%': { opacity: '0.5' },
                '10%': { opacity: '0' },
                '90%': { opacity: '0' },
                '100%': { opacity: '0.5' },
            },
            menuClose: {
                '40%': { opacity: '0', transform: 'translateY(5%)' },
                '100%': { opacity: '0', transform: 'translateY(5%)' },
            },
            menuOpen: {
                '0%': { opacity: '0', transform: 'translateY(5%)' },
                '40%': { opacity: '0', transform: 'translateY(5%)' },
                '100%': { opacity: '1', transform: 'translateY(0%)' },
            },
        },
        animation: {
            ham_t: 'ham_top 0.6s ease-in-out 1',
            ham_m: 'ham_middle 0.6s ease-in-out 1',
            ham_b: 'ham_bottom 0.6s ease-in-out 1',
            spinning_Loader: 'spinLoader 1.2s linear infinite',
            mobile_directions: 'tapThisFade 5s infinite',
            menClose: 'menuClose 1s ease-in ',
            menOpen: 'menuOpen 1s ease-out 1',
        },
        transitionDuration: {
            100: '100ms',
            150: '150ms',
            250: '250ms',
            300: '300ms',
            350: '350ms',
            600: '600ms',
        },
    },
}
