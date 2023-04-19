import { Styled } from '@components'
import Form from '../Form'

const ContactSection = () => (
    <div className="flex-col-center full min-[345px]:pt-14 md:pt-[18vh]">
        <h3 className="relative px-4 text-center">
            Get in Touch
            <span className="styled-underline inset-x-0" />
        </h3>
        <div className="flex-col-top h-3/4 w-full max-w-lg gap-y-2 p-2 lg:max-w-2xl">
            <p className="rounded text-center md:portrait:text-[1.1em] lg:landscape:text-[1.1em]">
                Any questions, comments, or inquiries? <br />
                Send me a message!
            </p>
            <Form />
        </div>

        <div className="flex-col-center w-full gap-y-4 py-4">
            <div className="relative flex gap-x-5 p-2">
                <Styled.Socials className="h-[2.5em]" />
                <Styled.Border className="absolute left-0 top-0  -z-10 w-full overflow-visible" />
            </div>
            <p className="text-14pt uppercase tracking-2xl text-black xl:text-17pt">
                Michael Jayne
                <span className="ml-1.5 text-slate-neon">
                    &#169;{new Date().getFullYear()}
                </span>
            </p>
        </div>
    </div>
)

export default ContactSection
