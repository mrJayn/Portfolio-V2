// FONT-SIZES
const clamp = (scale = 0) => {
    const [fontSize_min, fontSize_max] = [16, 18] // 'min/max' - Base font-sizes
    const [factor_min, factor_max] = [1.125, 1.225] // 'min/max' - Base multipliers
    const [screenMin, screenMax] = [320, 1920] // 'min/max' - Screen Bounds

    const fsMin = fontSize_min * Math.pow(factor_min, scale)
    const fsMax = fontSize_max * Math.pow(factor_max, scale)

    return `clamp(${fsMin}px, calc(${fsMin}px + (${fsMax} - ${fsMin}) * ((100vw - ${screenMin}px) / (${screenMax} - ${screenMin}))), ${fsMax}px)`
}

const fontSizes = {
    min: clamp(0.1),
    sm: clamp(0.25),
    base: clamp(0.5),
    md: clamp(1),
    lg: clamp(1.125),
    xl: clamp(1.25),
    '2xl': clamp(2),
    '3xl': clamp(3),
    '4xl': clamp(4),
    '5xl': clamp(5),
    '6xl': clamp(6),
    '7xl': clamp(7),
    '8xl': clamp(8),
    '9xl': clamp(9),

    '12pt': '12px',
    '14pt': '14px',
    '17pt': '17px',
    '19pt': '19px',
    '21pt': '21px',
    '24pt': '24px',
    '28pt': '28px',
    '32pt': '32px',
    '40pt': '40px',
    '48pt': '48px',
    '56pt': '56px',

    '0.5x': '0.5em',
    '0.6x': '0.6em',
    '0.7x': '0.7em',
    '0.8x': '0.8em',
    '0.9x': '0.9em',
    '1x': '1em',
    '1.1x': '1.1em',
    '1.2x': '1.2em',
    '1.3x': '1.3em',
    '1.4x': '1.4em',
    '1.5x': '1.5em',
    '1.6x': '1.6em',
    '1.7x': '1.7em',
    '1.8x': '1.8em',
    '1.9x': '1.9em',
}

// BG-GRADIENT // BG-COLORS

const rgbToHex = (val) => {
    var hex = val.toString(16)
    return hex.length == 1 ? '0' + hex : hex
}
const alpha2Hex = (opa) => {
    if (opa >= 1) return ''
    if (opa <= 0) return '00'
    var hexOpa = Math.round(opa * 256).toString(16)
    return hexOpa.length == 1 ? '0' + hexOpa : hexOpa
}

// Inputs
const base_color_rgb = '17 24 39'
const base_opacity = 1
const totalColors = 5

const getGradient = (index = null) => {
    var linearGradient = 'linear-gradient(to bottom,'
    var [r, g, b] = base_color_rgb.split(' ').map((i) => parseInt(i))
    var a = base_opacity

    for (let i = 0; i < totalColors; i++) {
        const afterHex = i == totalColors - 1 ? ')' : ','

        var asHex = '#' + rgbToHex(r) + rgbToHex(g) + rgbToHex(b) + alpha2Hex(a)

        if (index == null) {
            linearGradient += asHex + afterHex
        } else if (i == index) {
            return asHex
        }

        /*
        function getShade(n, increment) {
            const inc = Math.abs(increment)
            if (inc === 0 || inc >= 0.5) return n
            return inc >= 0
                ? Math.round(n + (255 - n) * inc)
                : Math.round(n * inc)
        }
*/
        const increment = 10
        const offsets = {
            red: -1,
            green: 0,
            blue: 2,
            alpha: 0,
        }
        const [rX, gX, bX, aX] = [...Object.values(offsets)]

        r = Math.min(255, Math.max(0, Math.round(r + increment + rX)))
        g = Math.min(255, Math.max(0, Math.round(g + increment + gX)))
        b = Math.min(255, Math.max(0, Math.round(b + increment + bX)))
        a = a + aX
    }

    return linearGradient
}

module.exports = {
    themeConfig: {
        fontSize: fontSizes,
        BackgroundRGB: base_color_rgb,
        backgroundGradient: getGradient(),
        getSectionColor: (index) => getGradient(index),
    },
}
