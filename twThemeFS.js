// FONT-SIZES
const clamp = (scale = 0) => {
    const [fontSize_min, fontSize_max] = [18, 20] // 'min/max' - Base font-sizes
    const [factor_min, factor_max] = [1.185, 1.225] // 'min/max' - Base multipliers
    const [screenMin, screenMax] = [320, 1440] // 'min/max' - Screen Bounds

    const fsMin = fontSize_min * Math.pow(factor_min, scale)
    const fsMax = fontSize_max * Math.pow(factor_max, scale)

    return `clamp(${fsMin}px, calc(${fsMin}px + (${fsMax} - ${fsMin}) * ((100vw - ${screenMin}px) / (${screenMax} - ${screenMin}))), ${fsMax}px)`
}

const fontSizes = {
    xs: clamp(-1),
    sm: clamp(-0.5),
    base: clamp(0),
    md: clamp(0.25),
    lg: clamp(0.5),
    xl: clamp(1),
    '2xl': clamp(2),
    '3xl': clamp(3),
    '4xl': clamp(4),
    '5xl': clamp(5),
    '6xl': clamp(6),
}

/* 
    -- IT IS posible to use css variables by using postCSS-variables --
    -- Below comment can be used when window !== undefined --
    const asRGB = getComputedStyle(document.body, null).getPropertyValue('background-color')
    var [r, g, b] = asRGB.substring(4, asRGB.length - 1).replace(/ /g, '').split(',')
    */

const compToHex = (c) => {
    var hex = c.toString(16)
    return hex.length == 1 ? '0' + hex : hex
}

const getGradient = (start = 0, totalColors = 5) => {
    const hexColors = []
    var [r, g, b] = [37, 42, 55]

    var gradientString = 'linear-gradient(to bottom,'

    for (let i = 0; i < totalColors; i++) {
        if (i >= start) {
            const afterHex = i == totalColors - 1 ? ')' : ','
            const asHex =
                '#' + compToHex(r) + compToHex(g) + compToHex(b) + afterHex
            gradientString += asHex
        }

        r = r - 10 < 0 ? 0 : r - 10
        g = g - 10 < 0 ? 0 : g - 10
        b = b - 10 < 0 ? 0 : b - 10
    }
    console.log(gradientString)
    return gradientString
    /**
     * `linear-gradient(to bottom, ${hexColors[0]}, ${hexColors[1]}, ${hexColors[2]}, ${hexColors[3]}, ${hexColors[4]})`
     */
}

module.exports = {
    themeConfig: {
        fontSize: fontSizes,
        backgroundGradient: getGradient(),
        getGradient: (start, total) => getGradient(start, total),
    },
}
