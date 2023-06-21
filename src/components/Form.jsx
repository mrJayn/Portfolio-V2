import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { StyledBtn } from '@components'

const emailPattern =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

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

const itemProps = (key) => ({
    className: `peer z-10 w-full rounded-md border-2 border-t-0 border-grey-40 bg-[#e0e0e0] pl-[5px] leading-[1] text-black outline-none transition-colors focus:border-slate-neon ${
        key === 'message' ? 'resize-none overflow-y-scroll pt-[calc(1em)]' : 'h-[40px] pt-[calc(40px-1.5em)] lg:h-[55px]'
    }`,
    name: { key },
    id: { key },
    placeholder: ' ',
})

/********************************************************************/
const Form = ({}) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({ mode: 'onBlur', criteriaMode: 'all' })

    const onSubmit = (data) => {
        fetch('/api/form', {
            method: 'POST',
            headers: {
                Accept: 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((res) => {
                const didSucceed = res.status === 200
                toast.success(<ToastMsg success={didSucceed} />, {
                    toastId: `${didSucceed ? 'success' : 'failure'}-toast`,
                    position: 'top-right',
                    draggable: false,
                    limit: 1,
                })
                if (didSucceed) reset()
            })
            .catch((e) => console.log(e))
    }

    const formItems = {
        name: {
            text: 'Name*',
            component: (
                <input
                    className="peer"
                    type="text"
                    autoComplete="name"
                    {...itemProps('name')}
                    {...register('name', { required: 'Enter your name.' })}
                />
            ),
        },
        email: {
            text: 'Email Address*',
            component: (
                <input
                    type="email"
                    autoComplete="email"
                    {...itemProps('email')}
                    {...register('email', {
                        required: 'Enter a valid or alternate email address.',
                        pattern: {
                            value: emailPattern,
                            message: 'Enter a valid or alternate email address.',
                        },
                    })}
                />
            ),
        },
        subject: {
            text: 'Subject*',
            component: (
                <input
                    className="peer"
                    type="text"
                    autoComplete="subject"
                    {...itemProps('subject')}
                    {...register('subject', { required: 'Enter a subject.' })}
                />
            ),
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
                    {...register('message', { required: 'Enter a message.' })}
                />
            ),
        },
    }

    return (
        <form id="form" className="flex-col-center w-full" onSubmit={handleSubmit(onSubmit)} method="POST">
            {Object.entries(formItems).map(([key, { text, component }]) => (
                <div key={text} className="group relative w-full">
                    {component}
                    <ReactivePlaceholder>{text}</ReactivePlaceholder>
                    <ErrorMessage error={errors[key]}>{errors[key]?.message}</ErrorMessage>
                </div>
            ))}
            <StyledBtn type="submit">SUBMIT</StyledBtn>
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

export default Form
