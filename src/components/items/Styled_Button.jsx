const Styled_Button = ({ children, ...props }) => (
    <button
        className="flex-center styled-btn ease-[cubic-bezier(0.5,1,0.5,1) relative z-10 w-[75vw] min-w-[150px] max-w-[325px] cursor-pointer select-none whitespace-nowrap rounded-4xl bg-slate py-4 text-lg font-semibold tracking-wide contrast-125 duration-500 hover:translate-y-[-2.5px] hover:text-black sm:px-6 md:w-auto md:max-w-[100%] md:px-10 lg:px-14 lg:text-xl"
        onClick={(e) => {
            const btn = e.currentTarget
            btn.classList.toggle('clicked')
            setTimeout(() => {
                btn.classList.toggle('clicked')
            }, 1000)
        }}
        {...props}
    >
        {children}
    </button>
)

export default Styled_Button
