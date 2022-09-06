const DefGradient = ({ defId }) => {
    /** COLORS >  #8360C3-purple  &  #45A29E-teal  **/
    return (
        <defs>
            <linearGradient id={defId} x1="0%" x2="50%" y1="0%" y2="100%">
                <stop offset="0%" stopColor="#8360c3" />
                <stop offset="100%" stopColor="#45A29E" />
            </linearGradient>
        </defs>
    )
}
export default DefGradient
