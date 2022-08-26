import { motion } from 'framer-motion'
import { Cards } from '@components'
import { useForm } from 'react-hook-form'
import { ToastContainer, toast } from 'react-toastify'
import { toggleScrolling } from '@utils'

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

const Form = ({ ...data }) => {
    const [state, setState] = [data.states.form, data.states.setForm]

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
                if (res.status === 200) {
                    // console.log("Response succeeded!");
                    toast.success(<ToastMsg success={true} />, {
                        toastId: 'success-toast',
                        position: 'top-right',
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        onOpen: () => {
                            setState(false)
                            toggleScrolling(true)
                        },
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

    const expandedProps = {
        title: "Let's Chat!",
        state: state,
        toggleCard: () => setState(false),
    }

    return (
        <>
            <Cards.Expanded {...expandedProps}>
                <div className="full relative overflow-y-scroll pt-5 md:px-5">
                    <form
                        id="form"
                        onSubmit={handleSubmit(onSubmit)}
                        method="POST"
                        className="flex-top flex-wrap pb-10 text-white"
                    >
                        <div>
                            <label htmlFor="fullName">Name</label>
                            <input
                                type="text"
                                name="fullName"
                                id="fullName"
                                autoComplete="name"
                                placeholder="Who am I speaking with?"
                                {...register('fullName', { required: true })}
                            />
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                autoComplete="email"
                                placeholder="Where should I reach you?"
                                {...register('email', { required: true })}
                            />
                        </div>
                        <div>
                            <label htmlFor="subject">subject</label>
                            <input
                                type="text"
                                name="subject"
                                id="subject"
                                placeholder="What is the topic of this message?"
                                {...register('subject', { required: true })}
                            />
                        </div>
                        <div>
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
                        </div>
                        <div>
                            <motion.button
                                type="submit"
                                className="rounded-xl border-[1px] bg-eee py-2 px-10 text-darkblack md:py-5"
                                whileHover={{
                                    y: -2.5,
                                    boxShadow: '0 0 25px -10px white',
                                }}
                            >
                                Send Message
                            </motion.button>
                        </div>
                    </form>
                </div>
            </Cards.Expanded>
            <ToastContainer />
        </>
    )
}

export default Form

/** 
   <form
                    onSubmit={handleSubmit(onSubmit)}
                    method="POST"
                    className="full grid text-white"
                >
                    <div>
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            name="name"
                            id='name'
                            autoComplete='name'
                            placeholder="Who am I speaking with?"
                            required={true}
                            pattern="[A-Za-z]{2,}"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            onInput={(e) => handleErr(e)}
                        />
                        <motion.div
                            className="errName err-item"
                            initial={false}
                            animate={invalidname ? 'showErr' : 'hideErr'}
                            variants={variants}
                        >
                            Please specify your name
                        </motion.div>
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            autoComplete="email"
                            name="email"
                            id='email'
                            placeholder="Where should I reach you?"
                            required={true}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            onInput={handleEmail}
                        />
                        <motion.div
                            className="errEmail err-item"
                            initial={false}
                            animate={invalidEmail ? 'showErr' : 'hideErr'}
                            variants={variants}
                        >
                            Enter a valid email address.
                        </motion.div>
                    </div>
                    <div>
                        <label htmlFor="subject">subject</label>
                        <input
                            type="text"
                            name="subject"
                            id='subject'
                            placeholder="What is the topic of this message?"
                            required={true}
                            pattern="[A-Za-z]{2,}"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            onInput={(e) => handleErr(e)}
                        />
                        <motion.div
                            className="errSubject err-item"
                            initial={false}
                            animate={invalidsubject ? 'showErr' : 'hideErr'}
                            variants={variants}
                        >
                            Please specify a subject.
                        </motion.div>
                    </div>
                    <div>
                        <label htmlFor="message">message</label>
                        <textarea
                            type="text"
                            name="message"
                            id='message'
                            placeholder="Type your message here."
                            autoFocus={false}
                            rows="4"
                            required={true}
                            pattern="[A-Za-z]{2,}"
                            value={message}
                            onChange={(e) => SetMessage(e.target.value)}
                            onInput={(e) => handleErr(e)}
                        />
                        <motion.div
                            className="errMessage err-item"
                            initial={false}
                            animate={invalidmessage ? 'showErr' : 'hideErr'}
                            variants={variants}
                        >
                            Please write a message.
                        </motion.div>
                    </div>
                    <div className="flex-center w-full">
                        <motion.button
                            type="submit"
                            className="rounded-xl border-[1px] bg-eee py-5 px-10 text-darkblack"
                            whileHover={{
                                y: -2.5,
                                boxShadow: '0 0 25px -10px white',
                            }}
                        >
                            Send Message
                        </motion.button>
                    </div>
                </form>
 */
