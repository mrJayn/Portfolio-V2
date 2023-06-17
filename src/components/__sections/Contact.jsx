import Form from '../Form'

const Contact = () => (
    <div id="contact-content" className="flex-col-bottom relative w-full">
        <div className="flex-col-top mb-5 flex-[0.125] gap-y-2">
            <h3>Get in Touch</h3>
            <p className="styled-content text-center">
                Any questions, comments, or inquiries? <br />
                Send me a message!
            </p>
        </div>
        <div className="full max-w-screen-md flex-[0.75]">
            <Form />
        </div>
    </div>
)
export default Contact
