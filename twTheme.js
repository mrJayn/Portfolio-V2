/*
screen Rems to px Conversion [[  rem * 16 = px  ]]
currentMin: 20
currentMax: 96
*/

const fontSizeMin = 0.9
const fontSizeMax = 1.25
const msFactorMin = 1.125
const msFactorMax = 1.2
const screenMin = 20 // REM
const screenMax = 96 // REM

const clamp = (scale = 0) => {
    const fsMin = fontSizeMin * Math.pow(msFactorMin, scale)
    const fsMax = fontSizeMax * Math.pow(msFactorMax, scale)
    return `clamp(${fsMin}rem, calc(${fsMin}rem + (${fsMax} - ${fsMin}) * ((100vw - ${screenMin}rem) / (${screenMax} - ${screenMin}))), ${fsMax}rem)`
}

const fontSizes = {
    xs: clamp(-3),
    sm: clamp(-2),
    base: clamp(-1),
    md: clamp(0),
    lg: clamp(1),
    xl: clamp(2),
    '2xl': clamp(3),
    '3xl': clamp(4),
    '4xl': clamp(5),
    '5xl': clamp(6),
    '6xl': clamp(7),
    '7xl': clamp(8),
    '8xl': clamp(9),
    '9xl': clamp(10),
}

module.exports = {
    themeConfig: {
        fontSize: fontSizes,
    },
}
