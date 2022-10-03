import { toggleScrolling } from '@utils'
import { useEffect } from 'react'
import useMediaQuery from './useMediaQuery'

// Global Controls my solution to a dynamic and conditional navbar.
// It works as a single state for all comonents that can be expanded to a fullscreen mode.
// My particular version only applies to mobile / small devices.
// This method probably wouldn't work with multiple components

const useGlobalControls = (globalControls, stateControls, sectionInfo) => {
    const [globOpen, setGlobOpen] = globalControls
    const [state, setState] = stateControls
    const [id, atBreakpoint] = sectionInfo
    const maxWidth = useMediaQuery(768)

    // on Expanded Component State change
    //      * sets Global Controls
    // OPENS Global Controls
    useEffect(() => {
        if (!atBreakpoint & state) {
            setGlobOpen(id)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state, id, setGlobOpen])

    // on GlobOpen change
    //      * sets Component State
    // CLOSES Global Controls
    useEffect(() => {
        if (!atBreakpoint & (globOpen == null) & state) {
            setState(false)
            toggleScrolling(true)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [globOpen, setState, atBreakpoint])

    // MEDIA QUERIES
    useEffect(() => {
        if (atBreakpoint & (id == globOpen)) {
            setState(false)
            setGlobOpen(null)
            toggleScrolling(true)
        }
    }, [maxWidth, atBreakpoint, id, globOpen, setState, setGlobOpen])
}

export default useGlobalControls
