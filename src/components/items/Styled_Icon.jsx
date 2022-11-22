const Styled_Icon = ({ name, size = 30, fill = 'none', className = '' }) => {
    const svgProps = {
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 24 24',
        hieght: size,
        width: size,
        fill: fill,
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
    }
    return className == '' ? (
        <div className="group cursor-pointer">
            <svg {...svgProps}>
                <g className="stroke-slate-30/75 drop-shadow-[0px_0px_1px_#fff4] duration-150 ease-in group-hover:stroke-slate-neon">
                    <Cases name={name} />
                </g>
            </svg>
        </div>
    ) : (
        <svg className={className} {...svgProps}>
            <Cases name={name} />
        </svg>
    )
}

const Cases = ({ name }) => {
    const Icon_External = () => (
        <path
            strokeWidth={1.5}
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
        />
    )
    switch (name) {
        case 'Codepen':
            return (
                <g strokeWidth={1.25}>
                    <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
                    <line x1="12" y1="22" x2="12" y2="15.5" />
                    <polyline points="22 8.5 12 15.5 2 8.5" />
                    <polyline points="2 15.5 12 8.5 22 15.5" />
                    <line x1="12" y1="2" x2="12" y2="8.5" />
                </g>
            )
        case 'Email':
            return (
                <path
                    strokeWidth={1.5}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
            )
        case 'GitHub':
            return (
                <path
                    className="origin-center scale-90"
                    strokeWidth={1.5}
                    d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                />
            )
        case 'Linkedin':
            return (
                <path
                    className="origin-center scale-90"
                    strokeWidth={1.5}
                    d="M22.0367422,22 L17.8848745,22 L17.8848745,15.5036305 C17.8848745,13.9543347 17.85863,11.9615082 15.7275829,11.9615082 C13.5676669,11.9615082 13.237862,13.6498994 13.237862,15.3925291 L13.237862,22 L9.0903683,22 L9.0903683,8.64071385 L13.0707725,8.64071385 L13.0707725,10.4673257 L13.1276354,10.4673257 C13.6813927,9.41667396 15.0356049,8.3091593 17.0555507,8.3091593 C21.2599073,8.3091593 22.0367422,11.0753215 22.0367422,14.6734319 L22.0367422,22 Z M4.40923804,6.81585163 C3.07514653,6.81585163 2,5.73720584 2,4.40748841 C2,3.07864579 3.07514653,2 4.40923804,2 C5.73720584,2 6.81585163,3.07864579 6.81585163,4.40748841 C6.81585163,5.73720584 5.73720584,6.81585163 4.40923804,6.81585163 L4.40923804,6.81585163 Z M6.48604672,22 L2.32980492,22 L2.32980492,8.64071385 L6.48604672,8.64071385 L6.48604672,22 Z"
                />
            )
        case 'Message':
            return (
                <g strokeWidth={2.25}>
                    <path
                        strokeWidth={1.75}
                        stroke="none"
                        d="M0 0h24v24H0z"
                        fill="none"
                    />
                    <path
                        strokeWidth={1.75}
                        d="M3 20l1.3 -3.9a9 8 0 1 1 3.4 2.9l-4.7 1"
                    />
                    <line x1="12" y1="12" x2="12" y2="12.01" />
                    <line x1="8" y1="12" x2="8" y2="12.01" />
                    <line x1="16" y1="12" x2="16" y2="12.01" />
                </g>
            )
        case 'External':
            return <Icon_External />
        default:
            return <Icon_External />
    }
}

// ICON PATHS ACCREDITED TO :
// https://react-icons.github.io/react-icons

export default Styled_Icon
