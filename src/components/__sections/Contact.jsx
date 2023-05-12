import { Styled } from '@components'
import Form from '../Form'

const ContactSection = () => (
    <>
        <div className="flex-col-top flex-[0.125] gap-y-2">
            <p className="rounded text-center leading-[1.25]">
                Any questions, comments, or inquiries? <br />
                Send me a message!
            </p>
        </div>

        <div className="full max-w-screen-md flex-[0.75] p-2">
            <Form />
        </div>

        <div className="flex-col-center py-4">
            <div className="flex-btw relative w-full rounded-xl">
                <Styled.Socials className="h-[2.5em]" />
            </div>
            <p className="text-footer tracking-4xl font-bold uppercase text-black">
                Michael Jayne
                <span className="ml-1.5 text-slate-neon">
                    &#169;{new Date().getFullYear()}
                </span>
            </p>
        </div>
    </>
)

export default ContactSection
