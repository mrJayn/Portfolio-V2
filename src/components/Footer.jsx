import { config } from '@config'
import { Icon, Socials } from '@components'
import { AiOutlineMail } from 'react-icons/ai'

const Footer = () => {
    const currentYear = new Date().getFullYear()
    return (
        <footer
            id="footer"
            className="dark:bg-lightblack w-screen bg-charcoal p-5 text-center"
        >
            <Socials wrapStyle="max-w-md mx-auto" size={25} />
            <hr className="mx-auto my-2 text-lightgrey/50 md:my-0" />
            <div className="uppercase md:mb-10">
                <p className="text-xs text-lightgrey md:mb-2">
                    Designed & Built by &nbsp;
                    <span className="font-robotoMono text-base capitalize tracking-tighter text-white">
                        Michael Jayne
                    </span>
                </p>
                <p className="text-xs text-lightgrey">
                    &#169; Copyright {currentYear}.{' '}
                </p>
            </div>
        </footer>
    )
}

export default Footer
