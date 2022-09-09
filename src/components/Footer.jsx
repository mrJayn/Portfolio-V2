import { Socials } from '@components'

const Footer = () => {
    const currentYear = new Date().getFullYear()
    return (
        <footer
            id="footer"
            className="dark:bg-lightblack w-screen bg-black-light p-4 text-center"
        >
            <div className="flex-evenly my-4 mx-auto w-full max-w-md select-none overflow-scroll text-center">
                <Socials size={30} defId="footerDefs" />
            </div>
            <hr className="mx-auto my-2 text-grey-light/50 md:my-8" />
            <div className="uppercase md:mb-4">
                <p className="text-xs text-grey-light md:mb-2">
                    Designed & Built by &nbsp;
                    <span className="font-robotoMono text-base capitalize tracking-tighter text-white">
                        Michael Jayne
                    </span>
                </p>
                <p className="text-xs text-grey-light">
                    &#169; Copyright {currentYear}.{' '}
                </p>
            </div>
        </footer>
    )
}

export default Footer
