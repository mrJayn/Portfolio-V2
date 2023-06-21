import React from 'react'
import { useForm, ValidationError } from '@formspree/react'
import { StyledBtn } from '@components'

const emailPattern =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const inputs = {
    name: {
        text: 'Name*',
        error: 'Enter your name.',
    },
    email: {
        text: 'Email Address*',
        error: "Enter a valid or alternate email address.'",
    },
    subject: {
        text: 'Subject*',
        error: "Enter a subject.'",
    },
    message: {
        text: 'Message*',
        error: 'Enter a message.',
    },
}

const itemProps = (key) => ({
    className: `peer z-0 w-full rounded-md border-2 border-t-0 border-grey-40 bg-[#e0e0e0] pl-[5px] leading-[1] text-black outline-none transition-colors focus:border-slate-neon ${
        key === 'message' ? 'resize-none overflow-y-scroll pt-[calc(1em)]' : 'h-[40px] pt-[calc(40px-1.5em)] lg:h-[55px]'
    }`,
    name: key,
    id: key,
    placeholder: ' ',
    'data-text': inputs[key].text,
    required: true,
})

export default function Form() {
    const [state, handleSubmit] = useForm('meqwybzy')
    if (state.succeeded) {
        return <p>Thanks for the message!</p>
    }

    const inputs = {
        name: {
            text: 'Name*',
            component: <input type="text" autoComplete="name" {...itemProps('name')} />,
            error: 'Enter your name.',
        },
        email: {
            text: 'Email Address*',
            component: <input type="email" autoComplete="email" {...itemProps('email')} />,
            error: "Enter a valid or alternate email address.'",
        },
        subject: {
            text: 'Subject*',
            component: <input type="text" {...itemProps('subject')} />,
            error: "Enter a subject.'",
        },
        message: {
            text: 'Message*',
            component: (
                <textarea
                    type="text"
                    autoFocus={false}
                    rows={10}
                    defaultValue={''}
                    maxLength={1000}
                    {...itemProps('message')}
                />
            ),
            error: 'Enter a message.',
        },
    }
    return (
        <form className="flex-col-center w-full" onSubmit={handleSubmit}>
            {Object.entries(inputs).map(([key, { text, component }]) => (
                <div key={text} className="group relative w-full">
                    {component}
                    <ReactivePlaceholder>{text}</ReactivePlaceholder>
                    <ErrorMessage error={false}>{inputs[key].error}</ErrorMessage>
                    <ValidationError field={key} errors={state.errors} />
                </div>
            ))}

            {/* 
            <input type="text" autoComplete="name" {...itemProps('name')} />
            <ValidationError field="name" errors={state.errors} />
            <input type="email" autoComplete="email" {...itemProps('email')} />
            <ValidationError field="email" errors={state.errors} />
            <input type="text" {...itemProps('subject')} />
            <ValidationError field="subject" errors={state.errors} />
            <textarea type="text" autoFocus={false} rows={10} defaultValue={''} maxLength={1000} {...itemProps('message')} />
            <ValidationError field="message" errors={state.errors} />
            */}

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
