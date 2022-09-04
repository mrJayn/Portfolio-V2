import { config } from '@config'
import { Icon, Socials } from '@components'
import { AiOutlineMail } from 'react-icons/ai'

const Footer = () => {
    const currentYear = new Date().getFullYear()
    return (
        <footer
            id="footer"
            className="w-screen bg-charcoal p-5 text-center text-lightgrey dark:bg-lightblack"
        >
            <div className="flex-center mx-auto mb-4 max-w-md">
                <Socials className="mx-auto p-1 hover:text-teal" size={25} />
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
