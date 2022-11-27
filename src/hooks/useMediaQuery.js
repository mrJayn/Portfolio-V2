import { useState, useEffect } from 'react'
/**
 * React Hook
 * @param {number} query1 - Query screen width value e.g. (min-width: {query1})
 * @param {number} query2 - 2nd (optional) Query Value
 * @returns {(boolean | Array<boolean>)} - Boolean value or if screen matches provided media query.
 */
const useMediaQuery = (query1, query2 = null) => {
    const [matches1, setMatches1] = useState(true)
    const [matches2, setMatches2] = useState(true)

    useEffect(() => {
        const checkScreen = () => {
            setMatches1(window.innerWidth >= query1)
            if (query2 !== null) setMatches2(window.innerWidth >= query2)
        }

        checkScreen()

        window.addEventListener('resize', checkScreen)
        return () => window.removeEventListener('resize', checkScreen)
    }, [matches1, query1, matches2, query2])

    return query2 !== null ? [matches1, matches2] : matches1
}

export default useMediaQuery
