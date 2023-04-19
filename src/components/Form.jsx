import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import { AnimatePresence, motion } from 'framer-motion'
import { toast } from 'react-toastify'
import { Styled } from '@components'

const ToastMsg = ({ success }) => {
    return (
        <div className="flex-col-top whitespace-pre-line text-center">
            <p className="mb-1 border-b-2 font-semibold">
                {success ? 'Thank you!' : 'Uh Oh!'}
            </p>
            <p className="leading-1.25">
                {success ? (
                    <>
                        I&apos;ve recieved your message,
                        <br /> and will get back to you ASAP!
                    </>
                ) : (
                    <>
                        Oops! Something wasn&apos;t quite right. Please try
                        again!
                    </>
                )}
            </p>
        </div>
    )
}

const Form = ({}) => {
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm()
    // SUBMIT ACTION
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
                if (res.status === 200) {
                    toast.success(<ToastMsg success={true} />, {
                        toastId: 'success-toast',
                        position: 'top-right',
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                    })
                } else {
                    // console.log("Email/Password is invalid.");
                    toast.warn(<ToastMsg success={false} />, {
                        toastId: 'error-toast',
                        position: 'top-right',
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                    })
                }
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
                {...register('fullName', {
                    required: true,
                })}
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
                data-invalid={invalidEmail}
            />
        ),
        'Message*': (
            <textarea
                type="text"
                name="message"
                id="message"
                autoFocus={false}
                rows={6}
                placeholder=" "
                defaultValue={''}
                {...register('message', { required: true })}
            />
        ),
    }

    return (
        <form
            id="form"
            className="flex-col-center flex w-full gap-x-2 gap-y-1 lg:grid lg:grid-cols-4 lg:p-4"
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
            <div className="full flex-center col-span-4">
                <Styled.Button type="submit">submit</Styled.Button>
            </div>
        </form>
    )
}
const ReactivePlaceholder = ({ name }) => (
    <span className="placeholder pointer-events-none absolute inset-0 left-[5px] z-10 flex origin-top-left translate-y-[5px] scale-100 select-none justify-start font-medium text-grey duration-150 ease-in">
        {name}
    </span>
)
export default Form
