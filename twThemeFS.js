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
}

/* 
    -- IT IS posible to use css variables by using postCSS-variables --
    -- Below comment can be used when window !== undefined --
    const asRGB = getComputedStyle(document.body, null).getPropertyValue('background-color')
    var [r, g, b] = asRGB.substring(4, asRGB.length - 1).replace(/ /g, '').split(',')
    */

const BackgroundRGB = '42 47 61'

const compToHex = (c) => {
    var hex = c.toString(16)
    return hex.length == 1 ? '0' + hex : hex
}
const getGradient = (index = null) => {
    const range = 5
    var linearGradient = 'linear-gradient(to bottom,'
    var [r, g, b] = BackgroundRGB.split(' ').map((i) => parseInt(i))

    for (let i = 0; i < range; i++) {
        const afterHex = i == range - 1 ? ')' : ','
        var asHex = '#' + compToHex(r) + compToHex(g) + compToHex(b)

        if (index == null) {
            linearGradient += asHex + afterHex
        } else {
            if (i == index) return asHex
        }

        const increment = 6
        r = r - increment < 0 ? 0 : r - increment
        g = g - increment < 0 ? 0 : g - increment
        b = b - increment < 0 ? 0 : b - increment
    }
    return linearGradient
}

module.exports = {
    themeConfig: {
        fontSize: fontSizes,
        BackgroundRGB: BackgroundRGB,
        backgroundGradient: getGradient(),
        getSectionColor: (index) => getGradient(index),
    },
}
