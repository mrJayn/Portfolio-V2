import { motion } from 'framer-motion'
import { Styled } from '@components'

const Project_Items = {
    Tech: ({ techs, className = '', ...props }) =>
        techs.map((item, i) => (
            <motion.span
                key={`tech-item-${i}`}
                className="relative w-full whitespace-nowrap text-center font-medium even:border-x-2 max-md:text-[0.9em] max-md:leading-[1.666rem] lg:px-4"
                custom={!props.custom && i}
                {...props}
            >
                {item}
            </motion.span>
        )),
    Icon_Links: ({ iconData, ...props }) =>
        iconData.map(([name, href], i) => {
            const title = {
                GitHub: 'View on GitHub',
                External: 'Visit Project',
            }[name]

            return (
                <motion.div
                    key={`icon-link-${i}`}
                    className="relative flex aspect-square h-full"
                    custom={!props.custom && i}
                    {...props}
                >
                    <motion.a
                        key={i}
                        href={href}
                        title={title}
                        target="_blank"
                        rel="noreferrer noopenner"
                        className="relative h-full w-full"
                        whileHover={{ y: -2.5 }}
                        whileTap={{ y: -3.5 }}
                    >
                        <Styled.Icon name={name} />
                    </motion.a>
                </motion.div>
            )
        }),
}
export default Project_Items
