import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import { toast } from 'react-toastify'
import { Styled } from '@components'

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

const Form = ({}) => {
    const router = useRouter()
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
                    router.push('/', '', { scroll: false })
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
        console.log(email)
        if (re.test(email)) {
            setInvalidEmail(false)
        } else {
            setInvalidEmail(true)
        }
    }

    // COMPONENTS
    const formItems = [
        {
            name: 'Name*',
            component: (
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
        },
        {
            name: 'Email Address*',
            component: (
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
        },
        {
            name: 'Subject*',
            component: (
                <input
                    type="text"
                    name="subject"
                    id="subject"
                    placeholder=" "
                    {...register('subject', { required: true })}
                />
            ),
        },
        {
            name: 'Message*',
            component: (
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
            name: null,
            component: (
                <Styled.Button submit>
                    <span className="lg:text-[1.2em]">send</span>
                </Styled.Button>
            ),
        },
    ]

    const ReactivePlaceholder = ({ name }) =>
        name ? (
            <span className="placeholder inset-0 translate-y-3 pl-3 pt-1 pointer-events-none absolute z-10 flex origin-top-left select-none justify-start font-medium text-grey duration-150 ease-in">
                {name}
            </span>
        ) : null

    return (
        <motion.form
            id="form"
            className="flex-col-center gap-x-2 md:p-4 flex w-full max-w-[600px] md:grid md:grid-cols-4 lg:w-[85vw] lg:max-w-[1000px] lg:text-[1.1em]"
            onSubmit={handleSubmit(onSubmit)}
            method="POST"
            variants={{
                hidden: { rowGap: '24px' },
                show: { rowGap: '8px' },
            }}
            transition={{ duration: 1 }}
        >
            {formItems.map(({ name, component }, i) => (
                <div
                    key={`form-component-${i}`}
                    className="full flex-center last-of-type:mt-4 relative"
                    style={{
                        gridArea: [
                            '1/1/1/3',
                            '1/3/1/-1',
                            '2/1/2/-1',
                            '3/1/3/-1',
                            '4/1/4/-1',
                        ][i],
                    }}
                >
                    {component}
                    <ReactivePlaceholder name={name} />
                </div>
            ))}
        </motion.form>
    )
}

export default Form
