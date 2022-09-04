import { motion } from 'framer-motion'
import { styledBtn } from '@utils'
import { FaGithub, FaLink } from 'react-icons/fa'

const Links = ({ isMd = false, project }) => {
    return (
        <>
            {[
                [project.data.github, FaGithub],
                [project.data.external, FaLink],
            ].map((item, i) => {
                const Icon = item[1]
                return (
                    item[0] !== '' && (
                        <motion.a
                            key={i}
                            href={item[0]}
                            target="_blank"
                            rel="noreferrer"
                            title={item[0]}
                            style={{
                                width: 'auto',
                                padding: isMd ? '16px' : '12px',
                            }}
                            {...styledBtn}
                        >
                            <Icon size={isMd ? 32 : 28} />
                        </motion.a>
                    )
                )
            })}
        </>
    )
}
export default Links
