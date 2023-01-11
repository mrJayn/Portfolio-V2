import { motion } from 'framer-motion'
import { Tabs } from '@components'
import Education from './Education'
import Certifications from './Certifications'
import Jobs from './Jobs'

const Experience = ({ isMd, ...props }) => {
    const Comps = {
        'Proffesional Summary': (
            <>
                <h3>Professional Summary</h3>
                <div
                    className="content-innerHTML experience"
                    dangerouslySetInnerHTML={{ __html: props.content }}
                />
            </>
        ),
        'Work Experience': <Jobs {...props.data} />,
        Education: <Education {...props.data.education} />,
        Certifications: <Certifications {...props.data} />,
    }

    return Object.entries(Comps).map(([title, component]) => (
        <motion.div
            key={`exp-item-${title}`}
            className="full"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: 'circOut' }}
            viewport={{ once: true }}
        >
            {component}
        </motion.div>
    ))
}
export default Experience

/**
 *  return isMd ? (
        Components.map(({ title, component }) => (
            <motion.div
                key={`exp-item-${title}`}
                className="full"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, ease: 'circOut' }}
                viewport={{ once: true }}
            >
                {component}
            </motion.div>
        ))
    ) : (
        <Tabs
            id="Experience"
            tabNames={['Summary', 'Jobs', 'Education']}
            tabs={ComponentArr}
        />
    )
 */
