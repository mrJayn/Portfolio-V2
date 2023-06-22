import { Form } from '@components'
import { stagger, useAnimate } from 'framer-motion'

export default function Contact() {
    const [scope, animate] = useAnimate()

    const onSuccess = async () => {
        const staggerTransition = { delay: stagger(0.1, { from: 'last' }), duration: 0.3, ease: 'easeIn' }
        const sequence = [
            ['.success-msg', { y: 100 }, { duration: 0 }],
            ['form>div, form>button', { opacity: 0 }, { ...staggerTransition }],
            ['.success-bg-panel', { opacity: 1 }, { at: '-0.33', ...staggerTransition }],
            ['.success-bg-panel', { opacity: 0 }, { at: '-0.33', ...staggerTransition }],
            [
                '.success-msg',
                { opacity: 1, y: 0 },
                { at: '-0.33', opacity: { duration: 0.8, ease: 'easeIn' }, y: { duration: 1, ease: 'circOut' } },
            ],
        ]
        animate(sequence)
    }

    return (
        <div id="contact-content" className="flex-col-bottom relative w-full">
            <div className="flex-col-top mb-5 flex-[0.125] gap-y-2">
                <h3>Get in Touch</h3>
                <p className="rounded-lg p-5 text-center shadow-[inset_0_0_0_2px_#404040]">
                    Any questions, comments, or inquiries? <br />
                    Send me a message!
                </p>
            </div>
            <div className="full relative max-w-[800px] flex-[0.75]" ref={scope}>
                <Form onSuccess={onSuccess} />
                <SuccesMessage />
            </div>
        </div>
    )
}

const SuccesMessage = () => (
    <div className="flex-col-top pointer-events-none absolute inset-0">
        {Array.from({ length: 7 }).map((_, i) => (
            <div
                key={`panel-${i}`}
                className="success-bg-panel z-0 mb-[1rem] h-12 w-full rounded-md bg-slate-30/25 opacity-0"
            />
        ))}
        <div className="success-msg absolute top-0 z-20 overflow-hidden rounded-md bg-grey-95 px-10 text-center opacity-0 shadow-md shadow-black/50">
            <div className="my-10 text-[1.25em] font-semibold">{`Thank you!`}</div>
            <div className="mb-10">{`I've recieved your message,\n and will get back to you ASAP!`}</div>
        </div>
    </div>
)
