/*
screen Rems to px Conversion [[  rem * 16 = px  ]]
currentMin: 20
currentMax: 1240px 
*/

const fontSizeMin = 1 // 1rem = 16px
const fontSizeMax = 1.12 //

const factorMin = 1.185 //
const factorMax = 1.225 //

const screenMin = 20 // 320px
const screenMax = 77.5 // 1240px

const clamp = (scale = 0) => {
    const fsMin = fontSizeMin * Math.pow(factorMin, scale)
    const fsMax = fontSizeMax * Math.pow(factorMax, scale)

    return `clamp(${fsMin}rem, calc(${fsMin}rem + (${fsMax} - ${fsMin}) * ((100vw - ${screenMin}rem) / (${screenMax} - ${screenMin}))), ${fsMax}rem)`
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
    '6xl': clamp(6.5),
}

module.exports = {
    themeConfig: {
        fontSize: fontSizes,
    },
}
