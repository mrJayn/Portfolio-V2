/** OLD CLAMP
const clamp = (scale = 0) => {
    const [fontSize_min, fontSize_max] = [16, 18]
    const [factor_min, factor_max] = [1, 1.225] 
    const [screenMin, screenMax] = [320, 1440]
    const fsMin = fontSize_min * Math.pow(factor_min, scale)
    const fsMax = fontSize_max * Math.pow(factor_max, scale)
    return `clamp(${fsMin}px, calc(${fsMin}px + (${fsMax} - ${fsMin}) * ((100vw - ${screenMin}px) / (${screenMax} - ${screenMin}))), ${fsMax}px)`
}
 */
const clamp = (min = 17, max = 21, screenMin = 320, screenMax = 1920) =>
    `clamp(${min}px, calc(${min}px + (${max} - ${min}) * ((100vw - ${screenMin}px) / (${screenMax} - ${screenMin}))), ${max}px)`

const fontSizes = {
    '12pt': '12px',
    '14pt': '14px',
    '17pt': '17px',
    '19pt': '19px',
    '21pt': '21px',
    '24pt': '24px',
    '28pt': '28px',
    '32pt': '32px',
    '36pt': '36px',
    '40pt': '40px',
    '44pt': '44px',
    '48pt': '48px',
    '52pt': '52px',
    '56pt': '56px',

    root: clamp(16, 24),
    'heading-2': clamp(38, 88),
    'heading-3a': clamp(27, 88),
    'heading-3b': clamp(27, 56),
    'heading-4': clamp(24, 44),
    'heading-5': clamp(22, 32),
    'heading-6': clamp(20, 28),
    button: clamp(22, 36, 320, 1920),
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
    'title-sm': clamp(72, 124, 320, 1024),
    'title-lg': clamp(62, 96, 1024),
    'title-svg': clamp(72, 184),
    title: clamp(56, 116),
    icon: clamp(56, 72),
    view: 'calc(100vh - 56px)',
    vmax: '100vmax',
    vmin: '100vmin',
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

// Inputs // og-[  17 24 39  ]
const base_color_rgb = '07 14 19'

const getGradient = (
    index = null,
    base_color = base_color_rgb,
    totalColors = 5
) => {
    var linearGradient = 'linear-gradient(to bottom,'
    var [r, g, b] = String(base_color)
        .split(' ')
        .map((i) => parseInt(i))
    var a = 1

    for (let i = 0; i < totalColors; i++) {
        const afterHex = i == totalColors - 1 ? ')' : ','

        var asHex = '#' + rgbToHex(r) + rgbToHex(g) + rgbToHex(b) + alpha2Hex(a)

        if (index == null) {
            linearGradient += asHex + afterHex
        } else if (i == index) {
            return asHex
        }
        const increment = 0
        const offsets = {
            red: 5,
            green: 6,
            blue: 10,
            alpha: i * -0.0125,
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
        spacing: spacing,
        BackgroundRGB: base_color_rgb,
        bgGradient: getGradient(),
        getSectionColor: (index) => getGradient(index),
        getGradient: getGradient,
    },
}
