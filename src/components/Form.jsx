import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { cssTransition, toast } from 'react-toastify'
import { Styled } from '@components'

const ToastMsg = ({ success }) => {
    return (
        <>
            <span className="decoration pointer-events-none absolute inset-0 origin-top rounded-b-md rounded-t shadow-[0_2px,_-2px_0,_2px_0]" />
            <div className="flex-col-top text-center">
                <div className="font-semibold leading-1.5 underline">
                    {success ? 'Thank you!' : 'Uh Oh...'}
                </div>
                <div className="text-min leading-1.25">
                    {success
                        ? `I've recieved your message,\n and will get back to you ASAP!`
                        : `Oops! Something wasn't quite right. Please try again!`}
                </div>
            </div>
        </>
    )
}
const toastTransition = cssTransition({
    enter: 'toast-anim-enter',
    exit: 'toast-anim-exit',
})

const Form = ({}) => {
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm()

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
                    transition: toastTransition,
                })
            })
            .catch((e) => console.log(e))
        reset()
    }

    /* INVALID EMAIL */
    const [invalidEmail, setInvalidEmail] = useState(false)
    const handleEmail = (e) => {
        let email = e.currentTarget.value
        let re =
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (re.test(email)) {
            setInvalidEmail(false)
        } else {
            setInvalidEmail(true)
        }
    }

    // COMPONENTS
    const formItems = {
        'Name*': (
            <input
                type="text"
                name="fullName"
                id="fullName"
                autoComplete="name"
                placeholder=" "
                {...register('fullName', { required: true })}
            />
        ),
        'Email Address*': (
            <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                placeholder=" "
                {...register('email', {
                    required: true,
                    onChange: (e) => handleEmail(e),
                })}
            />
        ),
        'Message*': (
            <textarea
                type="text"
                name="message"
                id="message"
                autoFocus={false}
                rows={10}
                placeholder=" "
                defaultValue={''}
                {...register('message', { required: true })}
            />
        ),
    }

    const isValidForm = () => {
        var valid = true
        for (let id of ['fullName', 'email', 'message']) {
            let inputEl = document.querySelector(`#${id}`)
            if (
                inputEl.getAttribute('placeholder') === ' ' ||
                !inputEl.checkValidity()
            ) {
                valid = false
                break
            }
        }
        return valid
    }

    const handleButton = (e) => {
        const btn = e.currentTarget
        const valid = false
        if (valid) {
            btn.classList.add('clicked')
        } else {
            toast.error(<ToastMsg success={false} />, {
                toastId: 'invalid-toast',
                position: 'top-right',
                draggable: false,
                limit: 1,
                transition: toastTransition,
            })
        }
    }

    return (
        <form
            id="form"
            className="flex-col-center flex w-full gap-x-2 gap-y-1 lg:p-4"
            onSubmit={handleSubmit(onSubmit)}
            method="POST"
        >
            {Object.entries(formItems).map(([name, component], i) => (
                <div
                    key={name}
                    className="flex-center relative w-full"
                    style={{
                        gridArea: ['1/1/1/3', '1/3/1/-1', '2/1/2/-1'][i],
                    }}
                >
                    {component}
                    <ReactivePlaceholder name={name} />
                </div>
            ))}
            <div className="full flex-center col-span-4 mt-4">
                <Styled.Button type="submit" onClick={handleButton}>
                    submit
                </Styled.Button>
            </div>
        </form>
    )
}

const ReactivePlaceholder = ({ name }) => (
    <span className="placeholder pointer-events-none absolute inset-0 left-[5px] z-10 flex origin-top-left translate-y-[5px] scale-100 select-none justify-start text-[0.9em] duration-150 ease-in">
        {name}
    </span>
)
export default Form
