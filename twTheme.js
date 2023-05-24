/** -- Functions -- **/
const clamp = (fsMin = 17, fsMax = 21, screenMin = 512, screenMax = 1024) =>
    `clamp(${fsMin}px, calc(${fsMin}px + (${fsMax} - ${fsMin}) * ((100vw - ${screenMin}px) / (${screenMax} - ${screenMin}))), ${fsMax}px)`

/** ---- THEME ---- **/
const fontSizes = {
    min: clamp(14, 17),
    root: clamp(16, 19),
    h1: clamp(62, 124),
    'h1-sub': clamp(32, 64, 768, 1440),
    h2: clamp(44, 64),
    h3: clamp(24, 32),
    h4: clamp(19, 24),
    h5: clamp(18, 21),
    h6: clamp(18, 21),
    button: clamp(22, 36),
    menu: clamp(24, 32),
    footer: clamp(14, 17),
}

const spacing = {
    vmax: '100vmax',
    vmin: '100vmin',
    img: clamp(150, 225),
    px: '1px',
}
const spaces = [
    0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 16, 18,
    20, 22, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 72, 80, 96,
]
spaces.forEach((n) => {
    spacing[n] = n * 4 + 'px'
})

module.exports = {
    twTheme: {
        fontSize: fontSizes,
        spacing: spacing,
        fontFamily: {
            montserrat: ['Montserrat', 'sans-serif'],
            inconsolata: ['Inconsolata', 'monospace'],
            raleway: ['Raleway', 'sans-serif'],
            robotoMono: ['Roboto Mono', 'monospace'],
        },
        letterSpacing: {
            normal: '0em',
            md: '0.025em',
            lg: '0.05em',
            xl: '0.075em',
            '2xl': '0.1em',
            '3xl': '0.15em',
            '4xl': '0.2em',
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
        data: {
            active: 'active~="true"',
            inactive: 'active~="false"',
        },
        extend: {
            backgroundImage: {
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
                'menu-gradient':
                    'linear-gradient(to top, rgb(var(--nav-rgb)), #f3f4f6)',
                'radial-black-slate':
                    'linear-gradient(to top, transparent, #fff3),radial-gradient(circle at 50% 125%,#354157, #000)',
                'device-camera-gradient': `linear-gradient( 75deg, #060 15%, #000 50%, #00b 75%)`,
            },
            transitionTimingFunction: {
                tween: 'cubic-bezier(0.5, 0.5, 0.5, 1)',
            },
        },
    },
}
