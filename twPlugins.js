const utilities = {
    '.non-scaling': {
        'vector-effect': 'non-scaling-stroke',
    },
    '.linecap-round': {
        'stroke-linecap': 'round',
    },
    '.linejoin-round': {
        'stroke-linejoin': 'round',
    },
}
const components = {
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
}

module.exports = {
    twPlugins: {
        utilities: utilities,
        components: components,
    },
}
