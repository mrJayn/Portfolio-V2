const Footer = () => {
    const currentYear = new Date().getFullYear()
    return (
        <div className="flex-col-center relative z-20 w-screen overflow-hidden bg-gradient-to-b from-transparent to-black pt-8 pb-2 font-light uppercase md:pt-16 lg:snap-end lg:py-8">
            <div className="flex-col-center w-full">
                <p className="text-12pt">
                    Designed & Built by :&nbsp;
                    <span className="text-1.5x font-robotoMono capitalize text-white">
                        Michael Jayne
                    </span>
                </p>
                <p className="text-12pt">&#169; Copyright {currentYear}.</p>
            </div>
        </div>
    )
}
export default Footer
