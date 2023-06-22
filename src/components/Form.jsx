import { useForm as useFormSpree } from '@formspree/react'
import { useForm as useReactHookForm } from 'react-hook-form'
import { StyledBtn } from '@components'

//  formspree/react   >>  sends email
//  react-hook-form  >>  error validation

const emailPattern =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const itemProps = (id) => ({
    id: id,
    name: id,
    placeholder: ' ',
    required: true,
    className: `peer w-full rounded-md border-0 shadow-md shadow-black/50 shadow-black/50 bg-white/75 px-2 pt-[0.5em] text-black transition-colors focus:bg-white flex leading-[1.15] ${
        id === 'message' ? 'resize-none overflow-y-scroll' : 'h-12'
    }`,
    style: { outline: 'none' },
})

export default function Form({ onSuccess }) {
    const [state, handleSubmit] = useFormSpree('meqwybzy')
    const {
        register,
        formState: { errors },
    } = useReactHookForm({ mode: 'onBlur', criteriaMode: 'all' })

    if (state.succeeded) {
        onSuccess()
    }

    const inputs = {
        name: (
            <input
                type="text"
                autoComplete="name"
                {...itemProps('name')}
                {...register('name', { required: 'Enter your name.' })}
            />
        ),
        email: (
            <input
                type="email"
                autoComplete="email"
                {...itemProps('email')}
                {...register('email', {
                    required: 'Enter a valid or alternate email address.',
                    pattern: { value: emailPattern, message: 'Enter a valid or alternate email address.' },
                })}
            />
        ),
        subject: <input type="text" {...itemProps('subject')} {...register('subject', { required: 'Enter a subject.' })} />,
        message: (
            <textarea
                type="text"
                autoFocus={false}
                rows={8}
                defaultValue={''}
                maxLength={500}
                {...itemProps('message')}
                {...register('message', { required: 'Enter a message.' })}
            />
        ),
    }

    return (
        <form className="full flex-col-top h-[550px]" onSubmit={handleSubmit}>
            {Object.entries(inputs).map(([id, component]) => {
                const text = id.slice(0, 1).toUpperCase() + id.slice(1) + (id === 'email' ? ' Address' : '')

                return (
                    <div key={id} className="form-item group relative w-full">
                        {component}
                        <Placeholder text={text} />
                        <ErrorMessage error={errors[id]} />
                    </div>
                )
            })}
            <StyledBtn type="submit" disabled={state.submitting}>
                SUBMIT
            </StyledBtn>
        </form>
    )
}

const Placeholder = ({ text }) => (
    <div className="transition-all pointer-events-none absolute left-2 top-0 z-10 flex origin-[0%_10%] translate-y-0 scale-[0.55] select-none text-[0.85em] tracking-md text-grey-80 peer-placeholder-shown:translate-y-[50%] peer-placeholder-shown:scale-[1] peer-placeholder-shown:text-grey-60 peer-focus:scale-[0.5] peer-focus:text-slate-neon peer-placeholder-shown:peer-focus:translate-y-0">
        {text}
        {`*`}
    </div>
)

const ErrorMessage = ({ error }) => (
    <div className="relative h-[1em] overflow-hidden">
        <div
            className={`transition-opacity text-[0.7em] leading-[1] text-[#b00] ${
                error ? 'opacity-100' : 'opacity-0'
            } group-focus-within:opacity-0`}
        >
            <span className="mr-1 rotate-180">ⓘ</span>
            {error?.message}
        </div>
    </div>
)
