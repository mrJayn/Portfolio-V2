import { motion } from 'framer-motion'

const SvgWProps = ({
    size = 512,
    defs = {
        id: 'def',
        val: 10,
        x: 20,
        y: 20,
    },
    children,
}) => {
    return (
        <svg
            viewBox={`${size / -8} ${size / -8} ${size * 1.25} ${size * 1.25}`}
        >
            <defs>
                <filter id={`${defs.id}-ds`}>
                    <feOffset
                        result="offOut"
                        in="SourceGraphic"
                        dx={defs.x}
                        dy={defs.y}
                    />
                    <feColorMatrix
                        result="matrixOut"
                        in="offOut"
                        type="matrix"
                        values="10 0 0 0 0 0 0.2 0 0 0 0 0 0.2 0 0 0 0 0 1 0"
                    />
                    <feGaussianBlur
                        result="blurOut"
                        in="matrixOut"
                        stdDeviation={defs.val}
                    />
                    <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
                </filter>
            </defs>
            {children}
        </svg>
    )
}
const Icon_External = () => (
    <path
        strokeWidth={1.5}
        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
    />
)

const Icons = ({ name, ...props }) => {
    switch (name) {
        case 'ChevronDown':
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    preserveAspectRatio="none"
                    className="full fill-current stroke-none stroke-[0] linecap-round linejoin-round"
                >
                    <path d={ds.chevronDown} />
                </svg>
            )
        case 'React':
            return (
                <SvgWProps>
                    <path fill="#149eca" d={ds.react} filter="url(#def-ds)" />
                </SvgWProps>
            )
        case 'Javascript':
            return (
                <SvgWProps>
                    <path fill="#ffd600" d={ds.js} filter="url(#def-ds)" />
                </SvgWProps>
            )
        case 'Next':
            return (
                <SvgWProps size={24}>
                    <defs>
                        <radialGradient id="next-bg">
                            <stop offset="50%" stopColor="#FFF" />
                            <stop offset="75%" stopColor="#FFF4" />
                            <stop offset="100%" stopColor="#FFF0" />
                        </radialGradient>
                    </defs>
                    <circle cx="40%" cy="40%" r="10" fill="url(#next-bg)" />
                    <path fill="#000" d={ds.next} />
                </SvgWProps>
            )
        case 'Tailwind':
            return (
                <SvgWProps size={24}>
                    <path fill="#43a7b2" d={ds.tw} filter="url(#def-ds)" />
                </SvgWProps>
            )
        case 'Python':
            return (
                <SvgWProps>
                    <path
                        fill="#356b98"
                        d={ds.python.a}
                        filter="url(#def-ds)"
                    />
                    <path
                        fill="#fed040"
                        d={ds.python.b}
                        filter="url(#def-ds)"
                    />
                </SvgWProps>
            )
        case 'HTML / CSS':
            const rectBgProps = { height: '37%', width: '27%', fill: '#FFF' }
            return (
                <SvgWProps>
                    <g>
                        <rect x={290} y={245} {...rectBgProps} />
                        <path
                            fill="#254ce2"
                            d={ds.css}
                            filter="url(#def-ds)"
                            style={{
                                transform: 'scale(0.7)',
                                transformOrigin: '100% 100%',
                            }}
                        />
                    </g>
                    <g>
                        <rect x={100} y={65} {...rectBgProps} />
                        <path
                            fill="#ec6026"
                            d={ds.html}
                            filter="url(#def-ds)"
                            style={{
                                transform: 'scale(0.75)',
                                transformOrigin: '25% 0%',
                            }}
                        />
                    </g>
                </SvgWProps>
            )
        case 'Tensorflow':
            return (
                <svg viewBox="0 0 512 512" {...props}>
                    <path d={ds.tensor} />
                </svg>
            )
        case 'scroll-down':
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="118 118 70 100"
                    className="h-full fill-none stroke-current stroke-[1]"
                >
                    <path
                        d="
M153.679428,125.336678 
	C138.132767,125.350960 129.336243,130.697922 125.772247,142.068634 
	C125.377640,143.327591 124.963348,144.653580 124.957985,145.950134 
	C124.897285,160.611069 124.545624,175.284805 125.039993,189.929184 
	C125.373154,199.798462 133.817017,208.347366 143.653473,210.026703 
	C149.936050,211.099274 156.284546,211.098709 162.561005,209.995804 
	C172.340530,208.277313 180.665115,199.631363 180.985794,189.713501 
	C181.453964,175.233505 181.495605,160.712906 180.962463,146.237473 
	C180.644501,137.604401 175.432190,131.535004 167.726578,127.651154 
	C166.113632,126.838181 163.266983,126.485535 164.595474,123.635178 
	C165.862549,120.916603 168.089035,122.450188 169.742188,123.290565 
	C179.734894,128.370285 185.692566,136.429092 186.001221,147.746231 
	C186.369110,161.235428 186.295517,174.746155 186.036072,188.240311 
	C185.763702,202.406052 174.272003,214.304977 160.151825,215.130737 
	C153.367645,215.527466 146.483231,216.121841 139.803467,214.053680 
	C128.287140,210.488007 120.146461,200.045502 119.961723,188.055954 
	C119.756340,174.726593 119.728485,161.388474 119.960312,148.060028 
	C120.215958,133.362534 131.829208,121.611832 146.540573,120.791191 
	C149.532333,120.624306 152.539047,120.630020 155.536179,120.690041 
	C157.414200,120.727654 160.082779,120.109001 159.936462,123.201965 
	C159.811295,125.847855 157.371933,125.198082 155.636154,125.330620 
	C155.139114,125.368576 154.636734,125.336586 153.679428,125.336678 
z"
                    />
                    <path
                        d="
M141.535156,183.344086 
	C141.504242,179.524811 143.105682,178.931076 145.624146,181.136353 
	C147.080978,182.412064 148.180634,184.095688 149.930817,186.178604 
	C151.350906,181.456390 150.402847,177.214127 150.673401,173.080780 
	C150.771149,171.587479 150.665894,170.081985 150.706268,168.583496 
	C150.744583,167.161621 151.063446,165.883835 152.847366,165.809250 
	C154.941040,165.721710 155.294662,167.145996 155.302383,168.777588 
	C155.323700,173.276047 155.277527,177.775208 155.345047,182.272781 
	C155.360916,183.328537 154.871994,184.593994 156.415039,185.683304 
	C157.762192,184.110886 159.095963,182.522537 160.465637,180.965775 
	C161.484421,179.807831 162.731918,179.485352 163.965714,180.515930 
	C165.242065,181.582123 164.972092,182.854919 164.033432,184.038147 
	C161.135986,187.690582 158.266113,191.365936 155.308334,194.969009 
	C153.598419,197.051956 151.923172,196.588120 150.392487,194.638641 
	C147.513626,190.972153 144.616287,187.320160 141.535156,183.344086 
z"
                    />
                </svg>
            )
    }
}

const ds = {
    chevronDown:
        'M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z',
    react: 'M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z',

    js: 'M32 32v448h448V32zm240 348c0 43.61-25.76 64.87-63.05 64.87-33.68 0-53.23-17.44-63.15-38.49l34.28-20.75c6.61 11.73 11.63 21.65 26.06 21.65 12 0 21.86-5.41 21.86-26.46V240h44zm99.35 63.87c-39.09 0-64.35-17.64-76.68-42L329 382c9 14.74 20.75 24.56 41.5 24.56 17.44 0 27.57-7.72 27.57-19.75 0-14.43-10.43-19.54-29.68-28l-10.52-4.52c-30.38-12.92-50.52-29.16-50.52-63.45 0-31.57 24.05-54.63 61.64-54.63 26.77 0 46 8.32 59.85 32.68L396 290c-7.22-12.93-15-18-27.06-18-12.33 0-20.15 7.82-20.15 18 0 12.63 7.82 17.74 25.86 25.56l10.52 4.51c35.79 15.34 55.94 31 55.94 66.16.01 37.9-29.76 57.64-69.76 57.64z',

    next: 'M11.5725 0c-.1763 0-.3098.0013-.3584.0067-.0516.0053-.2159.021-.3636.0328-3.4088.3073-6.6017 2.1463-8.624 4.9728C1.1004 6.584.3802 8.3666.1082 10.255c-.0962.659-.108.8537-.108 1.7474s.012 1.0884.108 1.7476c.652 4.506 3.8591 8.2919 8.2087 9.6945.7789.2511 1.6.4223 2.5337.5255.3636.04 1.9354.04 2.299 0 1.6117-.1783 2.9772-.577 4.3237-1.2643.2065-.1056.2464-.1337.2183-.1573-.0188-.0139-.8987-1.1938-1.9543-2.62l-1.919-2.592-2.4047-3.5583c-1.3231-1.9564-2.4117-3.556-2.4211-3.556-.0094-.0026-.0187 1.5787-.0235 3.509-.0067 3.3802-.0093 3.5162-.0516 3.596-.061.115-.108.1618-.2064.2134-.075.0374-.1408.0445-.495.0445h-.406l-.1078-.068a.4383.4383 0 01-.1572-.1712l-.0493-.1056.0053-4.703.0067-4.7054.0726-.0915c.0376-.0493.1174-.1125.1736-.143.0962-.047.1338-.0517.5396-.0517.4787 0 .5584.0187.6827.1547.0353.0377 1.3373 1.9987 2.895 4.3608a10760.433 10760.433 0 004.7344 7.1706l1.9002 2.8782.096-.0633c.8518-.5536 1.7525-1.3418 2.4657-2.1627 1.5179-1.7429 2.4963-3.868 2.8247-6.134.0961-.6591.1078-.854.1078-1.7475 0-.8937-.012-1.0884-.1078-1.7476-.6522-4.506-3.8592-8.2919-8.2087-9.6945-.7672-.2487-1.5836-.42-2.4985-.5232-.169-.0176-1.0835-.0366-1.6123-.037zm4.0685 7.217c.3473 0 .4082.0053.4857.047.1127.0562.204.1642.237.2767.0186.061.0234 1.3653.0186 4.3044l-.0067 4.2175-.7436-1.14-.7461-1.14v-3.066c0-1.982.0093-3.0963.0234-3.1502.0375-.1313.1196-.2346.2323-.2955.0961-.0494.1313-.054.4997-.054z',

    tw: 'M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z',

    python: {
        a: 'M193.46 249.056a65.316 65.316 0 0 1 11.586-1.041l-3.122-.015h103.823c4.503 0 8.806-.617 12.908-1.754 19.37-5.363 33.345-22.537 33.345-43.663v-87.224c0-24.832-21.15-43.484-46.289-47.606-15.931-2.624-39.258-3.827-55.089-3.749-15.829.086-30.981 1.404-44.277 3.749C167.143 74.576 160 88.928 160 115.359V144h96v16H128.82c-35.628 0-64.538 42.571-64.813 95.242-.002.253-.007.505-.007.758 0 9.523.94 18.72 2.685 27.404C74.648 323.07 99.451 352 128.82 352H144v-45.935c0-26.827 20.146-51.733 49.46-57.009zm10.196-122.054c-9.592 0-17.384-7.785-17.384-17.403 0-9.664 7.774-17.52 17.384-17.52 9.574 0 17.399 7.855 17.399 17.52.001 9.618-7.809 17.403-17.399 17.403z',
        b: 'M443.951 222.543C434.78 186.021 411.033 160 383.18 160H368v40.672c0 33.915-22.286 58.474-49.489 62.681a53.943 53.943 0 0 1-8.301.646H206.351a51.41 51.41 0 0 0-13.049 1.672C174.18 270.689 160 286.6 160 307.236v87.227c0 24.832 24.977 39.426 49.481 46.551 29.327 8.531 61.267 10.068 96.366 0C329.15 434.354 352 420.893 352 394.463V368h-96v-16h127.18c25.24 0 47.107-21.365 57.814-52.549C445.474 286.404 448 271.641 448 256c0-11.768-1.433-23.038-4.049-33.457zM307.867 382.82c9.59 0 17.381 7.785 17.381 17.4 0 9.65-7.791 17.521-17.381 17.521-9.577 0-17.399-7.871-17.399-17.521 0-9.63 7.806-17.4 17.399-17.4z',
    },

    css: 'M256.282 339.488zM64 32l34.946 403.219L255.767 480l157.259-44.85L448 32H64zm290.676 334.898l-98.607 28.125-98.458-28.248L150.864 289h48.253l3.433 39.562 53.586 15.163.132.273h.034l53.467-14.852L315.381 265H203l-4-50h120.646l4.396-51H140l-4-49h240.58l-21.904 251.898z',

    html: 'M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z',

    tensor: 'M1.292 5.856L11.54 0v24l-4.095-2.378V7.603l-6.168 3.564.015-5.31zm21.43 5.311l-.014-5.31L12.46 0v24l4.095-2.378V14.87l3.092 1.788-.018-4.618-3.074-1.756V7.603l6.168 3.564z',
}

export default Icons
