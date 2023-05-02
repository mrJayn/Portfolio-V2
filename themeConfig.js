const clamp = (fsMin = 17, fsMax = 21, screenMin = 512, screenMax = 1024) =>
    `clamp(${fsMin}px, calc(${fsMin}px + (${fsMax} - ${fsMin}) * ((100vw - ${screenMin}px) / (${screenMax} - ${screenMin}))), ${fsMax}px)`

/*                      Min:               Max:    
    body                16px
    secondary/      13px-14px   
        captions
    

    inputs              16px    

    */
const fontSizes = {
    min: clamp(14, 19),
    root: clamp(16, 21),
    'heading-6': clamp(18, 22),
    'heading-5': clamp(18, 21),
    'heading-4': clamp(19, 24),
    'heading-3': clamp(21, 30),
    'heading-2': clamp(44, 72),
    'heading-1': clamp(46, 124),

    button: clamp(22, 36),
    'menu-link': clamp(27, 48, 320, 1024),
    footer: clamp(14, 17),
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
    vmax: '100vmax',
    vmin: '100vmin',
    img: clamp(150, 225),
}

module.exports = {
    themeConfig: {
        fontSize: fontSizes,
        spacing: spacing,
    },
}

/*
//  original color -   17 24 39
function getGradient(index = null, base_color = '07 14 19', totalColors = 5) {
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
*/
