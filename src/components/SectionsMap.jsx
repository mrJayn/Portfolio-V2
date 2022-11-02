import { isValidElement } from 'react'
import { Section, Intro, Contact } from '@components'

const SectionsMap = ({
    activeSection,
    setSection,
    allowUpdates,
    initialVariant,
    ...data
}) => {
    // Section Components
    const sectionComponents = [
        ['intro', <Intro key="intro" {...data} />],
        ['about', data.about],
        ['experience', data.experience],
        ['projects', data.projects],
        ['contact', <Contact key="contact" {...data} />],
    ]

    return sectionComponents.map(([id, data], i) => {
        const isValidJSX = isValidElement(data)
        const props = {
            id: id,
            index: i,
            activeSection: activeSection,
            setSection: setSection,
            allowUpdates: allowUpdates,
            initialVariant: initialVariant,
            ...(isValidJSX ? { useChildren: true } : data),
        }
        return isValidJSX ? (
            <Section key={id} {...props}>
                {data}
            </Section>
        ) : (
            <Section key={id} {...props} />
        )
    })
}
export default SectionsMap
