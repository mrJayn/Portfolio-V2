import { useState } from 'react'
import { motion } from 'framer-motion'

import { Section, Title, Items } from '@components'
import { config } from '@config'

const Intro = () => {
    const [titleVis, setTitleVis] = useState(false)
    const btnProps = {
        text: 'Send Message',
        type: 'submit',
        height: 50,
        width: 250,
    }
    return (
        <Section id="intro">
            <motion.div
                className="flex-col-center full absolute top-0 left-0  px-4 md:px-0"
                initial="hidden"
                animate={titleVis && 'enter'}
            >
                <p className="text-md font-semibold tracking-wide">
                    Hello, my name is
                </p>
                <motion.div className="flex-center relative h-20 overflow-hidden rounded md:h-24 lg:h-32">
                    <Title setTitleVis={setTitleVis} />
                </motion.div>

                <motion.div
                    className="flex-center w-full pb-2"
                    variants={config.variants.fade}
                >
                    <h2>Data Analyst</h2>
                </motion.div>
                <Items.Styled_Button {...btnProps} />
            </motion.div>
        </Section>
    )
}

export default Intro
