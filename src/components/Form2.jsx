import React from 'react'
import { useForm, ValidationError } from '@formspree/react'
import { StyledBtn } from '@components'

const ToastMsg = ({ success }) => (
    <div className="py-2 text-center font-raleway text-black">
        <div className="mb-[0.5em] text-[1.125em] font-semibold">{success ? 'Thank you!' : 'Uh Oh...'}</div>
        <div className="text-min leading-[1.125]">
            {success
                ? `I've recieved your message,\n and will get back to you ASAP!`
                : `Oops! Something wasn't quite right. Please try again!`}
        </div>
    </div>
)

export default function Form() {
    const [state, handleSubmit] = useForm('meqwybzy')
    if (state.succeeded) {
        return <p>Thanks for joining!</p>
    }
    return (
        <form className="flex-col-center w-full" onSubmit={handleSubmit}>
            <label htmlFor="email">Email Address</label>
            <input id="email" type="email" name="email" />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" />
            <ValidationError prefix="Message" field="message" errors={state.errors} />
            <StyledBtn type="submit" disabled={state.submitting}>
                SUBMIT
            </StyledBtn>
        </form>
    )
}

const ReactivePlaceholder = ({ children }) => (
    <span className="reactive-placeholder pointer-events-none absolute inset-0 left-[5px] z-10 flex origin-top-left translate-y-[0px] scale-[0.6] select-none justify-start text-[0.9em] text-black duration-150 ease-in peer-placeholder-shown:translate-y-[5px] peer-placeholder-shown:scale-[1] peer-focus:scale-[0.6] peer-focus:text-slate-neon peer-placeholder-shown:peer-focus:translate-y-[0px]">
        {children}
    </span>
)

const ErrorMessage = ({ error = false, children }) => (
    <div className="err-msg relative ml-[-0.5em] h-[1em] overflow-hidden pt-[0.1em]">
        <div
            className={`pl-[1.1em] text-min leading-[0.85] text-red duration-150 ease-in before:absolute before:left-0 before:rotate-180 before:text-[0.9em] before:font-semibold before:content-['ⓘ'] group-focus-within:opacity-0 ${
                error ? 'opacity-100' : 'opacity-0'
            }`}
        >
            {children}
        </div>
    </div>
)
