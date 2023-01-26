import { motion } from 'framer-motion'
import Education from './Education'
import Certifications from './Certifications'
import Jobs from './Jobs'

const Experience = ({ ...props }) => {
    const Comps = {
        'Proffesional Summary': (
            <>
                <h3>Professional Summary</h3>
                <div
                    className="content-innerHTML w-full"
                    dangerouslySetInnerHTML={{ __html: props.content }}
                />
            </>
        ),
        'Work Experience': <Jobs {...props.data} />,
        Education: <Education {...props.data.education} />,
        Certifications: <Certifications {...props.data} />,
    }

    return Object.entries(Comps).map(([title, component]) => (
        <motion.section
            key={`exp-item-${title}`}
            className="full"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: 'circOut' }}
            viewport={{ once: true }}
        >
            {component}
        </motion.section>
    ))
}
export default Experience
