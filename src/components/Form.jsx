import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { Styled_Button } from '@components'
import { useMediaQuery } from '@hooks'

const ToastMsg = ({ success }) => {
    return (
        <div className="flex-col-top whitespace-pre-line text-center">
            <p className="mb-1 border-b-2 text-md font-semibold">
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

    // INVALID IMPUTS
    const handleErr = (e) => {
        setTimeout(() => {
            switch (e.target.name) {
                case 'name':
                    if (!e.target.checkValidity()) {
                        setInvalidname(true)
                    } else {
                        setInvalidname(false)
                    }
                    break
                case 'subject':
                    if (!e.target.checkValidity()) {
                        setInvalidsubject(true)
                    } else {
                        setInvalidsubject(false)
                    }
                    break
                case 'message':
                    if (!e.target.checkValidity()) {
                        setInvalidmessage(true)
                    } else {
                        setInvalidmessage(false)
                    }
                    break

                default:
                    return
            }
        }, 1500)
    }
    // INVALID EMAIL
    const handleEmail = () => {
        let re =
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

        if (re.test(email)) {
            setInvalidEmail(false)
            console.log('good')
        } else {
            setInvalidEmail(true)
        }
    }

    // FORM ITEMS MOTION
    const FormChild = ({ i, children }) => {
        const isMd = useMediaQuery()
        return (
            <motion.div
                initial={{ opacity: 0, x: isMd ? 0 : 50 }}
                animate={{
                    opacity: 1,
                    x: 0,
                    transition: {
                        duration: 0.25,
                        ease: 'easeOut',
                        delay: 0.25 + i * 0.25,
                    },
                }}
            >
                {children}
            </motion.div>
        )
    }

    return (
        <form id="form" onSubmit={handleSubmit(onSubmit)} method="POST">
            <FormChild i={0}>
                <label htmlFor="fullName">Name</label>
                <input
                    type="text"
                    name="fullName"
                    id="fullName"
                    autoComplete="name"
                    placeholder="Who am I speaking with?"
                    {...register('fullName', {
                        required: true,
                    })}
                />
            </FormChild>

            <FormChild i={1}>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    placeholder="Where should I reach you?"
                    {...register('email', { required: true })}
                />
            </FormChild>

            <FormChild i={2}>
                <label htmlFor="subject">subject</label>
                <input
                    type="text"
                    name="subject"
                    id="subject"
                    placeholder="What is the topic of this message?"
                    {...register('subject', { required: true })}
                />
            </FormChild>

            <FormChild i={3}>
                <label htmlFor="message">message</label>
                <textarea
                    type="text"
                    name="message"
                    id="message"
                    autoFocus={false}
                    rows={8}
                    placeholder="Type your message here."
                    defaultValue={''}
                    {...register('message', { required: true })}
                />
            </FormChild>

            <FormChild i={4}>
                <Styled_Button
                    type="submit"
                    classNames="col-span-3 rounded-xl py-2 px-10 text-darkblack md:py-5"
                >
                    Send a Message
                </Styled_Button>
            </FormChild>
        </form>
    )
}

export default Form
