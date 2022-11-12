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

// FONT-SIZE CONVERSION
/* Pixels ----tw Utility Class ---- rem ----
    12px               text-xs                 0.75rem
    14px               text-sm                0.875rem
    16px               text-base             1rem
    18px               text-xl                  1.125rem 
    20px               text-2xl               1.25rem 
    24px               text-3xl               1.5rem 
    30px               text-3xl               1.875rem 
    36px               text-4xl               2.25rem 
    48px               text-5xl               3rem 
    60px               text-6xl               3.75rem 
    72px               text-7xl               4.5rem 
    96px               text-8xl               6rem 
    128px              text-9xl               8rem 
*/

module.exports = {
    themeConfig: {
        fontSize: fontSizes,
    },
}
