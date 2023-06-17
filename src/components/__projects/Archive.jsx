import { motion } from 'framer-motion'
import { archiveVariants } from '@motion'
import { Styled } from '@components'

const Archive_Project = ({ listMode, i, href, src, content }) => (
    <motion.div
        layout
        className="group full flex-col-center relative mx-auto cursor-default overflow-hidden rounded-lg bg-slate-30/50"
        initial="hidden"
        animate="show"
        exit="hidden"
        variants={archiveVariants.Project}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        style={{ filter: `hue-rotate(${i * 45}deg)` }}
    >
        <div
            // Image
            className={`z-0 h-[240px] w-screen max-w-full md:h-[300px] lg:h-[350px] ${
                listMode ? 'opacity-25' : 'opacity-75 transition-all duration-500 ease-tween group-hover:opacity-25'
            }`}
            style={{
                filter: `hue-rotate(${i * -45}deg)`,
                background: `50% 50% / 100% url(${src}) no-repeat`,
            }}
        />

        <div
            // Content
            className={`absolute inset-1.5 z-10 select-none rounded border-2 bg-white ${
                listMode
                    ? '  flex-btw pl-4 opacity-100'
                    : 'flex-col-center px-2.5 opacity-0 transition-opacity duration-500 ease-tween group-hover:opacity-100'
            }`}
        >
            <div
                className={`full child-li:relative child-li:w-full child-li:whitespace-nowrap child-li:font-inconsolata child-li:leading-[1] child-li:text-slate child-li-btw:mx-[0.5em] child-li-btw:inline-block child-li-btw:text-grey-40 child-li-btw:content-['/'] child-ul:flex child-ul:max-w-full ${
                    listMode
                        ? 'grid grid-cols-[20%,15%,60%] items-center gap-x-2 overflow-hidden leading-[1] child-ul:flex-left min-[414px]:child-ul:flex-left child-p:text-[16px] child-li:w-min child-li:text-[16px] child-ul:hidden  child:whitespace-nowrap max-lg:child-p:hidden min-[414px]:child:whitespace-normal'
                        : 'flex-col-center text-center child-p:my-4 child-ul:overflow-hidden'
                }`}
                dangerouslySetInnerHTML={{ __html: content }}
            />
            {listMode ? (
                <a
                    className="relative aspect-[1/1] h-full border-[1px]"
                    href={href}
                    target="_blank"
                    rel="noopenner noreferrer"
                >
                    <Styled.Icon name="External" />
                </a>
            ) : (
                <Styled.Button onClick={() => window.open(href, '_blank', 'noopenner noreferrer')}>
                    View Project
                </Styled.Button>
            )}
        </div>
    </motion.div>
)

export default Archive_Project
