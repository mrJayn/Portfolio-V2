import Form from '../Form'

const ContactSection = () => (
    <div id="contact-content" className="flex-col-bottom relative w-full">
        <div className="flex-col-top flex-[0.125] gap-y-2">
            <p className="rounded text-center leading-[1.25]">
                Any questions, comments, or inquiries? <br />
                Send me a message!
            </p>
        </div>

        <div className="full max-w-screen-md flex-[0.75] p-2">
            <Form />
        </div>
    </div>
)
export default ContactSection
