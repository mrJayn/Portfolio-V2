const Section = ({ children, id, fullScreen = true }) => {
    return (
        <section
            id={id}
            className="relative mb-48 w-full max-w-[1280px] p-3 lg:mx-auto"
            style={{
                minHeight: fullScreen ? '100vh' : 'auto',
                height: 'auto',
            }}
        >
            {children}
        </section>
    )
}

export default Section
