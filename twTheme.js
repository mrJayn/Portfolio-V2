/*
screen Rems to px Conversion [[  rem * 16 = px  ]]
currentMin: 20
currentMax: 1240px 
*/

const fontSizeMin = 18 // 16px == 1rem
const fontSizeMax = 20 //

const factorMin = 1.185 //
const factorMax = 1.225 //

const screenMin = 320 // 320px == 20rem
const screenMax = 1240 // 1240px == 77.5rem

const clamp = (scale = 0) => {
    const fsMin = fontSizeMin * Math.pow(factorMin, scale)
    const fsMax = fontSizeMax * Math.pow(factorMax, scale)

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
    '6xl': clamp(6.5),
}
const spacing = {
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
}

module.exports = {
    themeConfig: {
        fontSize: fontSizes,
        spacing: spacing,
    },
}
