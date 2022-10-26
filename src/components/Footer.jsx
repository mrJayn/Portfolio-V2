import { Social_Icons } from '@components'

const Footer = ({ isMd }) => {
    const currentYear = new Date().getFullYear()
    return (
        <footer id="footer" className="w-full snap-end bg-nav">
            <div className="flex-col-center m-4">
                <div className="flex-evenly w-full max-w-[600px]">
                    <Social_Icons size={isMd ? 40 : 30} />
                </div>
                <hr className="my-4 w-full text-grey" />
                <p className="text-[12px] uppercase text-grey-60">
                    Designed & Built by &nbsp;
                    <span className="font-robotoMono text-[15px] capitalize tracking-tighter text-white">
                        Michael Jayne
                    </span>
                </p>
                <p className="text-[12px] uppercase text-grey-60">
                    &#169; Copyright {currentYear}.
                </p>
            </div>
        </footer>
    )
}

export default Footer
