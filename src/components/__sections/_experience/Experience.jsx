import { motion } from 'framer-motion'
import { Tabs } from '@components'
import Education from './Education'
import Certifications from './Certifications'
import Jobs from './Jobs'

const Experience = ({ isMd, ...props }) => {
    const Components = [
        {
            title: 'Proffesional Summary',
            component: (
                <>
                    <div
                        className="content-innerHTML experience"
                        dangerouslySetInnerHTML={{ __html: props.content }}
                    />
                </>
            ),
        },
        {
            title: 'Work Experience',
            component: <Jobs {...props.data} />,
        },
        {
            title: 'Education',
            component: isMd ? <Education {...props.data.education} /> : null,
        },
        {
            title: 'Certifications',
            component: (
                <div className="flex-col-top relative w-full gap-y-8">
                    {isMd ? null : <Education {...props.data.education} />}
                    <Certifications {...props.data} />
                </div>
            ),
        },
    ]

    const ComponentArr = [
        ...Object.values(Components)
            .filter((obj) => obj.title !== 'Education')
            .map((obj) => obj.component),
    ]

    return isMd ? (
        Components.map(({ title, component }) => (
            <motion.div
                key={`exp-item-${title}`}
                id="Experience"
                className="subsection full"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, ease: 'circOut' }}
                viewport={{ once: true }}
            >
                <h4>{title}</h4>
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
}
export default Experience
