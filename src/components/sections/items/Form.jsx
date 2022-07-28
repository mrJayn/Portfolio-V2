import { motion } from 'framer-motion'
import { useState } from 'react'

const variants = {
    hideErr: {
        opacity: 0,
        left: '-5px',
        transition: {
            type: 'spring',
            duration: 1,
        },
    },
    showErr: {
        opacity: 1,
        left: '0px',
        transition: {
            type: 'spring',
            duration: 1,
        },
    },
}

const Form = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, SetMessage] = useState('')

    const [invalidname, setInvalidname] = useState(false)
    const [invalidEmail, setInvalidEmail] = useState(false)
    const [invalidsubject, setInvalidsubject] = useState(false)
    const [invalidmessage, setInvalidmessage] = useState(false)

    const [submitted, setSubmitted] = useState(false)

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
    const onSubmit = async (event) => {
        event.preventDefault()
        const data = {
            name,
            email,
            subject,
            message,
        }
        await fetch('/api/form', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        }).then((res) => {
            console.log('Response recieved')
            if (res.status === 200) {
                console.log('Response succeeded!')
                setSubmitted(true)
                setName('')
                setEmail('')
                setSubject('')
                SetMessage('')
            }
        })
    }

    return (
        <motion.div className="ct-form useInView">
            <form onSubmit={onSubmit}>
                <div>
                    <motion.div className="form-item">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            name="name"
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
                    </motion.div>
                    <motion.div className="form-item">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            autoComplete="email"
                            name="email"
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
                    </motion.div>
                </div>
                <motion.div className="form-item">
                    <label htmlFor="subject">subject</label>
                    <input
                        type="text"
                        name="subject"
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
                </motion.div>
                <motion.div className="form-item">
                    <label htmlFor="message">message</label>
                    <textarea
                        type="text"
                        name="message"
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
                </motion.div>
                <motion.button
                    className="ct-submit"
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Send Message
                </motion.button>
            </form>
        </motion.div>
    )
}

export default Form
