import { useEffect, useState } from 'react'

export const navDelay = 1000
export const [burgerUnitSize, burgerSize] = [4, 24]

/*export const spring = "spring(1,20,20,5)";*/
export const srConfig = {
    delay: 250,
    duration: 500,
    distance: '50px',
    origin: 'bottom',
    reset: false,
    mobile: true,
    viewFactor: 0.25,
    useDelay: 'always',
    easing: 'ease-out',
}

export function toggleScrolling(state) {
    if (typeof window !== undefined) {
        document.querySelector('body').style.overflow =
            state == true ? 'auto' : 'hidden'
    }
}

export const default_spring = {
    type: 'spring',
    stiffness: 150,
    damping: 30,
    velocity: 50,
}
/* SPRING DEFAULTS 
    type: 'spring',
    bounce: 0.25,
    damping: 10,
    mass: 1,
    stiffness: 100,
    velocity: 2,
    restSpeed: 0.01,
    restDelta: 0.01,    
*/
