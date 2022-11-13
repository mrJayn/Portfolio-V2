import { Cases } from './Cases'

const Styled_Icon = ({
    name,
    size = 30,
    fill = 'none',
    stroke = '#fff',
    className = '',
    styled = false,
}) => {
    // Two Seperate SVG Tags to achieve correct blur Effect :/
    const svgProps = {
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 24 24',
        hieght: size,
        width: size,
        fill: fill,
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
    }
    return styled ? (
        <div className="flex-center full group cursor-pointer">
            <svg {...svgProps}>
                <g
                    className={`absolute opacity-75  group-hover:opacity-100 ${className}`}
                    stroke={stroke}
                >
                    <Cases name={name} />
                </g>
                <g
                    className={`absolute opacity-75 blur-0 duration-300 group-hover:blur-[4px] group-hover:brightness-150 group-hover:contrast-200 ${className}`}
                    stroke="url(#svgDefsGradient)"
                >
                    <Cases name={name} />
                </g>
            </svg>
        </div>
    ) : (
        <svg className={`fill-transparent ${className}`} {...svgProps}>
            <Cases name={name} />
        </svg>
    )
}

export default Styled_Icon
