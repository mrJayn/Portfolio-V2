import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { Styled } from '@components'

const emailPattern =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const ToastMsg = ({ success }) => {
    return (
        <div className="py-2 text-center font-raleway text-black">
            <div className="mb-[0.5em] text-[1.125em] font-semibold">
                {success ? 'Thank you!' : 'Uh Oh...'}
            </div>
            <div className="text-min leading-[1.125]">
                {success
                    ? `I've recieved your message,\n and will get back to you ASAP!`
                    : `Oops! Something wasn't quite right. Please try again!`}
            </div>
        </div>
    )
}

const itemProps = (key) => ({
    className: `peer z-10 w-full rounded-md border-2 border-t-0 border-grey-40 bg-white pl-[5px] leading-[1] text-black outline-none transition-[transform,color,background-color,background,border] duration-250 ease-in focus:border-slate-neon ${
        key === 'message'
            ? 'resize-none overflow-y-scroll pt-[calc(1em)]'
            : 'h-[40px] pt-[calc(40px-1.5em)] lg:h-[55px]'
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
                            message:
                                'Enter a valid or alternate email address.',
                        },
                    })}
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
                    {...itemProps('message')}
                    {...register('message', { required: 'Enter a message.' })}
                />
            ),
        },
    }

    return (
        <form
            id="form"
            className="flex-col-center flex w-full gap-x-2 gap-y-1 lg:p-4"
            onSubmit={handleSubmit(onSubmit)}
            method="POST"
        >
            {Object.entries(formItems).map(([key, { text, component }]) => (
                <div
                    key={text}
                    className="form-item-container group relative w-full"
                >
                    {component}
                    <ReactivePlaceholder>{text}</ReactivePlaceholder>
                    <ErrorMessage error={errors[key]}>
                        {errors[key]?.message}
                    </ErrorMessage>
                </div>
            ))}

            <div className="full flex-center">
                <Styled.Button
                    type="submit"
                    style={{ scale: 1.125 }}
                    whileTap={{ scale: 1 }}
                >
                    submit
                </Styled.Button>
            </div>
        </form>
    )
}

const ReactivePlaceholder = ({ children }) => (
    <span className="reactive-placeholder pointer-events-none absolute inset-0 left-[5px] z-10 flex origin-top-left translate-y-[0px] scale-[0.6] select-none justify-start text-[0.9em] duration-150 ease-in peer-placeholder-shown:translate-y-[5px] peer-placeholder-shown:scale-[1] peer-focus:scale-[0.6] peer-focus:text-slate-neon peer-placeholder-shown:peer-focus:translate-y-[0px]">
        {children}
    </span>
)

const ErrorMessage = ({ error = false, children }) => (
    <div className="err-msg h-[1em] w-full overflow-hidden pt-[0.15em]">
        <div
            className={`pl-[1.4em] text-[0.85em] text-red duration-150 ease-in before:absolute before:left-[1px] before:bottom-[0.15em] before:rotate-180 before:text-[0.9em] before:font-semibold before:content-['ⓘ'] group-focus-within:opacity-0 ${
                error ? 'opacity-100' : 'opacity-0'
            }`}
        >
            {children}
        </div>
    </div>
)

export default Form
