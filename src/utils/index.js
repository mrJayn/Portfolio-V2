export const loaderDelay = 2000
/*export const spring = "spring(1,20,20,5)";*/
export const spring = {
    type: 'spring',
    duration: 0.6,
    bounce: 0.25, // (0.25)
    damping: 10, // (10)
    mass: 1, // (1)
    stiffness: 100, // (100)
    velocity: 5, // (2)
    restSpeed: 0.01, // (0.01)
    restDelta: 0.01, // (0.01)
}

export const toggleScrolling = ({ menuState }) => {
    if (typeof window !== undefined) {
        document.querySelector('body').style.overflow =
            menuState == true ? 'auto' : 'hidden'
    }
}
