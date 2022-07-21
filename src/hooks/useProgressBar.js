import create from 'zustand'

const useProgressBar = create((set) => ({
    isAnimating: false,
    setIsAnimating: (isAnimating) => set(() => ({ isAnimating: isAnimating })),
}))

export default useProgressBar
