import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

import { formVariants as variants } from '@motion'
import { Styled } from '@components'
import { useRouter } from 'next/router'
import { useState } from 'react'

const ToastMsg = ({ success }) => {
    return (
        <div className="flex-col-top whitespace-pre-line text-center">
            <p className="mb-1 border-b-2 font-semibold">
                {success ? 'Thank you!' : 'Uh Oh!'}
            </p>
            <p className="leading-5">
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

const Form = () => {
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm()
    const router = useRouter()
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
                    // console.log("Response succeeded!");
                    toast.success(<ToastMsg success={true} />, {
                        toastId: 'success-toast',
                        position: 'top-right',
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                    })
                    router.push('/', '/', { scroll: false })
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

    /* INVALID EMAIL
    const [invalidEmail, setInvalidEmail] = useState(false)
    const handleEmail = (e) => {
        let email = e.currentTarget.value
        let re =
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        console.log(email)
        if (re.test(email)) {
            setInvalidEmail(false)
        } else {
            setInvalidEmail(true)
        }
    }
    */
    // COMPONENTS
    const formItems = [
        {
            id: 'fullName',
            text: 'Name*',
            item: (
                <>
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
                </>
            ),
        },
        {
            id: 'email',
            text: 'Email Address*',
            item: (
                <>
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
                </>
            ),
        },
        {
            id: 'subject',
            text: 'Subject*',
            item: (
                <>
                    <input
                        type="text"
                        name="subject"
                        id="subject"
                        placeholder=" "
                        {...register('subject', { required: true })}
                    />
                </>
            ),
        },
        {
            id: 'message',
            text: 'Message*',
            item: (
                <textarea
                    type="text"
                    name="message"
                    id="message"
                    autoFocus={false}
                    rows={8}
                    placeholder=" "
                    defaultValue={''}
                    {...register('message', { required: true })}
                />
            ),
        },
        {
            id: 'submit-button',
            text: '',
            item: <Styled.Button submit>Send a Message</Styled.Button>,
        },
    ]

    return (
        <motion.form
            id="form"
            className="full flex flex-wrap gap-y-8"
            onSubmit={handleSubmit(onSubmit)}
            method="POST"
            initial="hidden"
            animate="show"
            variants={variants.Form}
        >
            {formItems.map(({ id, text, item }, i) => (
                <motion.div
                    key={`form-component-${id}`}
                    className={`flex-col-bottom relative mx-auto h-[3em] w-full ${
                        i <= 1
                            ? 'sm:w-[45%]'
                            : id == 'message'
                            ? 'h-[10em] sm:w-[95%] md:h-[7.5em]'
                            : ' sm:w-[95%]'
                    }`}
                    style={{ counterIncrement: 'form-item 1' }}
                    variants={variants.Item}
                >
                    {item}

                    <span className="pointer-events-none absolute top-0 z-10 w-full origin-top-left translate-y-[0.5em] select-none p-4 text-left  text-[0.85em] text-grey-40 duration-150 ease-in">
                        {text}
                    </span>
                </motion.div>
            ))}
        </motion.form>
    )
}

export default Form
