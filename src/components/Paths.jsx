const Paths = ({ name }) => {
    const props = {
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
    }

    switch (name) {
        case 'Codepen':
            return (
                <g strokeWidth={1.25} {...props}>
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
                    strokeWidth={1.25}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    {...props}
                />
            )
        case 'GitHub':
            return (
                <path
                    className="origin-center scale-90"
                    strokeWidth={1.25}
                    d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                    {...props}
                />
            )
        case 'Linkedin':
            return (
                <path
                    className="origin-center scale-90"
                    strokeWidth={1.25}
                    d="M22.0367422,22 L17.8848745,22 L17.8848745,15.5036305 C17.8848745,13.9543347 17.85863,11.9615082 15.7275829,11.9615082 C13.5676669,11.9615082 13.237862,13.6498994 13.237862,15.3925291 L13.237862,22 L9.0903683,22 L9.0903683,8.64071385 L13.0707725,8.64071385 L13.0707725,10.4673257 L13.1276354,10.4673257 C13.6813927,9.41667396 15.0356049,8.3091593 17.0555507,8.3091593 C21.2599073,8.3091593 22.0367422,11.0753215 22.0367422,14.6734319 L22.0367422,22 Z M4.40923804,6.81585163 C3.07514653,6.81585163 2,5.73720584 2,4.40748841 C2,3.07864579 3.07514653,2 4.40923804,2 C5.73720584,2 6.81585163,3.07864579 6.81585163,4.40748841 C6.81585163,5.73720584 5.73720584,6.81585163 4.40923804,6.81585163 L4.40923804,6.81585163 Z M6.48604672,22 L2.32980492,22 L2.32980492,8.64071385 L6.48604672,8.64071385 L6.48604672,22 Z"
                    {...props}
                />
            )
        case 'External':
            return (
                <path
                    strokeWidth={1.5}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    {...props}
                />
            )
        case 'filter':
            return (
                <path
                    /* viewbox="0 0 400 400" */
                    stroke="none"
                    d="M245.163 1.208 C 226.557 5.721,210.485 20.679,204.219 39.316 L 202.203 45.313 105.712 45.313 C 17.830 45.313,8.979 45.427,6.516 46.596 C -1.722 50.505,-2.446 62.673,5.212 68.514 L 8.081 70.703 105.301 71.094 L 202.520 71.484 203.850 75.782 C 220.251 128.794,298.866 129.507,315.066 76.791 L 316.797 71.160 354.436 70.932 C 391.220 70.708,392.125 70.666,394.280 69.069 C 401.871 63.442,402.094 52.158,394.713 47.151 C 392.728 45.805,389.921 45.676,354.786 45.313 L 316.993 44.922 315.267 39.844 C 305.341 10.635,275.074 -6.045,245.163 1.208 M265.782 25.879 C 292.192 31.487,301.275 63.850,281.543 82.038 C 262.875 99.246,232.923 89.198,227.661 63.963 C 223.089 42.035,243.909 21.235,265.782 25.879 M128.906 142.519 C 108.357 146.865,91.784 161.326,85.045 180.791 L 82.857 187.109 45.104 187.500 C 10.423 187.859,7.176 188.005,5.201 189.300 C -1.855 193.926,-1.855 206.074,5.201 210.700 C 7.177 211.995,10.425 212.141,45.170 212.500 L 82.989 212.891 84.319 217.188 C 101.358 272.273,181.901 271.293,196.823 215.820 L 197.716 212.500 294.757 212.497 C 390.210 212.494,391.839 212.469,394.343 210.942 C 402.051 206.242,402.051 193.758,394.343 189.058 C 391.839 187.531,390.210 187.506,294.757 187.503 L 197.716 187.500 196.830 184.180 C 189.202 155.611,157.871 136.394,128.906 142.519 M149.121 168.659 C 172.784 176.024,180.684 203.658,164.327 221.850 C 148.576 239.369,121.012 234.971,110.633 213.281 C 99.017 189.006,123.457 160.672,149.121 168.659 M247.266 284.716 C 226.439 289.587,209.911 304.625,203.850 324.218 L 202.520 328.516 105.223 328.906 C 8.026 329.296,7.924 329.299,5.721 330.931 C -2.390 336.942,-1.950 349.387,6.516 353.404 C 8.979 354.573,17.830 354.688,105.718 354.688 L 202.215 354.688 204.244 360.779 C 221.898 413.789,299.750 412.829,315.605 359.406 L 316.889 355.078 354.734 354.688 C 389.919 354.324,392.728 354.195,394.713 352.849 C 402.094 347.842,401.871 336.558,394.280 330.931 C 392.125 329.334,391.220 329.292,354.436 329.068 L 316.797 328.840 315.066 323.209 C 306.770 296.211,275.068 278.213,247.266 284.716 M272.810 312.275 C 302.394 326.118,296.826 368.369,264.636 374.301 C 243.879 378.125,224.060 358.420,227.428 337.305 C 230.840 315.914,253.674 303.320,272.810 312.275 "
                    {...props}
                />
            )
    }
}

export default Paths