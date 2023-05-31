const plugin = require('tailwindcss/plugin')

const components = plugin(function({addComponents}){
    addComponents({
        '.full': {
            height: '100%',
            width: '100%',
        },
        '.flex-center': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        '.flex-top': {
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
        },
        '.flex-right': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
        },
        '.flex-bottom': {
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'center',
        },
        '.flex-left': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
        },
        '.flex-btw': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
        },
        '.flex-evenly': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-evenly',
        },
        '.flex-around': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
        },
        '.flex-col-center': {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
        },
        '.flex-col-top': {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
        },
        '.flex-col-right': {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            justifyContent: 'center',
        },
        '.flex-col-bottom': {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-end',
        },
        '.flex-col-left': {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
        },
        '.flex-col-btw': {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
        },
        '.flex-col-evenly': {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-evenly',
        },
        '.flex-col-around': {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-around',
        },
    })
})

const bases = plugin(function({addBase}){
    addBase({
        '*, ::before, ::after': {
          '--tw-translate-x': 0,
          '--tw-translate-y': 0,
          '--tw-translate-z': 0,
          '--tw-rotate-x': 0,
          '--tw-rotate-y': 0,
          '--tw-rotate': 0,
          '--tw-skew-x': 0,
          '--tw-skew-y': 0,
          '--tw-scale-x': 1,
          '--tw-scale-y': 1,
          '--tw-transform': 'translate3d(var(--tw-translate-x), var(--tw-translate-y), var(--tw-translate-z)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))'
        }
      });
})

const utilities = plugin(function({addUtilities,matchUtilities,theme}){
    addUtilities({
          '.preserve-3d': {
            'transform-style': 'preserve-3d',
        },
        '.non-scaling': {
            'vector-effect': 'non-scaling-stroke',
        },
        '.linecap-round': {
            'stroke-linecap': 'round',
        },
        '.linejoin-round': {
            'stroke-linejoin': 'round',
        },
    })
    matchUtilities(
        {
            'rotate-x': (value) => ({
                '--tw-rotate-x': value,
                transform:  'var(--tw-transform)',
            }),
        },
        { values: theme('rotate'), supportsNegativeValues: true }
    )
    matchUtilities(
        {
            'rotate-y': (value) => ({
                '--tw-rotate-y': value,
                transform:  'var(--tw-transform)',
            }),
        },
        { values: theme('rotate'), supportsNegativeValues: true }
    )
    matchUtilities(
        {
            'translate-z': (value) => ({
                '--tw-translate-z': value,
                transform:  'var(--tw-transform)',
            }),
        },
        { values: theme('translate'), supportsNegativeValues: true }
    )
})

const variants= plugin(function ({ addVariant,matchVariant }) {
    addVariant('inner-p', '&>p')
    addVariant('inner-p-first', '&>p:first-of-type')
    addVariant('inner-p-last', '&>p:last-of-type')
    addVariant('bafter', ['&:before', '&:after'])
    matchVariant(
        'child',
        (value) => {
            return `& ${value}`
        },
        {
            values: {
                DEFAULT: '*',
                p: 'p',
                'p-first': 'p:first-of-type',
                'p-last': 'p:last-of-type',
                'p-btw': 'p:not(:last-of-type):after',
                li: 'li',
                'li-btw': 'li:not(:last-of-type):after',
                ul: 'ul',
            },
        }
    )
})

module.exports = {
    twPlugins:[
        bases,
        utilities,
        components,
        variants,
    ]
}
