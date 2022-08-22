import { config } from '@config'

const Footer = () => {
    const currentYear = new Date().getFullYear()
    return (
        <footer
            id="footer"
            className="w-screen bg-charcoal p-5 text-center text-lightgrey"
        >
            <div className="flex-center mx-auto mb-4 max-w-md">
                {config.socials.map((item, i) => {
                    const Icon = item.icon
                    return (
                        <a
                            key={`social-${i}`}
                            href={
                                item.title == 'Email'
                                    ? item.url
                                    : `mailto:${config.email}`
                            }
                            target="_blank"
                            rel="noreferrer"
                            title={item.title}
                            className="mx-auto p-1 hover:text-teal"
                        >
                            <Icon size={25} />
                        </a>
                    )
                })}
            </div>
            <hr className="mx-auto my-2 text-lightgrey/50 md:my-8" />
            <div className="uppercase md:mb-10">
                <p className="text-xs md:mb-2">
                    Designed & Built by &nbsp;
                    <span className="font-robotoMono text-base capitalize tracking-tighter text-white">
                        Michael Jayne
                    </span>
                </p>
                <p className="text-xs">&#169; Copyright {currentYear}. </p>
            </div>
        </footer>
    )
}

export default Footer
