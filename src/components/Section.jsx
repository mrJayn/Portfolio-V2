const Section = ({ children, id, fullScreen = true, scrollOffset = 0 }) => {
    return (
        <section
            id={id}
            className="relative mb-48 w-full max-w-[1280px] p-3 last-of-type:mb-0 lg:mx-auto"
            style={{
                minHeight: fullScreen ? '100vh' : 'auto',
                height: 'auto',
                scrollMarginTop: scrollOffset,
            }}
        >
            {children}
        </section>
    )
}

export default Section
