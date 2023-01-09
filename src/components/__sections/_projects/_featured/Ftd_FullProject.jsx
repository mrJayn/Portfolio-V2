import { motion } from 'framer-motion'

import { Styled } from '@components'
import { full_projectVariants as variants } from '@motion'
import Image from 'next/image'

const Featured_Full = ({ even, ...data }) => {
    const Data = data.data
    const HtmlContent = data.content

    const Technology = Data.tech.map((item, i) => (
        <motion.p
            key={`tech-item-${i}`}
            className="relative whitespace-nowrap border-slate-90/50 text-center font-medium capitalize italic text-slate-70 even:mx-8 even:border-x-2 even:px-8 md:tracking-wide"
            style={{ direction: even ? 'ltr' : 'rtl' }}
        >
            {item}
        </motion.p>
    ))

    const IconLinks = [
        ['GitHub', 'View on Github', Data.github],
        ['External', 'Visit Project', Data.external],
    ].map(([name, title, href], i) => (
        <motion.a
            key={`icon-link-${i}`}
            className="relative aspect-square h-full"
            href={href}
            title={title}
            whileHover={{ y: -2.5 }}
        >
            <Styled.Icon name={name} />
        </motion.a>
    ))

    return (
        <motion.div
            id={`featured-project-${Data.title}`}
            className="flex-col-top relative z-10 mb-24 h-auto w-full"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
        >
            {/** gridLayout :  [  desc  ] + [  TITLE  ] + [  TECH  ] **/}
            <motion.div
                className={`flex w-full items-end ${
                    even ? 'text-start' : 'text-end'
                }`}
                variants={variants.FullPage.Header}
                custom={even ? -1 : 1}
            >
                <div
                    className={`w-full whitespace-nowrap lg:w-full ${
                        even ? 'flex-right order-3' : 'flex-right order-1'
                    }`}
                >
                    <div
                        className={
                            even
                                ? 'flex-col-left order-1 mr-auto'
                                : 'flex-col-right order-3 ml-auto'
                        }
                    >
                        <h5 className="mx-2 font-normal italic leading-[0.5] tracking-wider text-grey">
                            Featured Project
                        </h5>
                        <h3>{Data.title}</h3>
                    </div>
                    <div className="order-2 flex">{Technology}</div>
                </div>
                <div className="order-2 flex h-24 flex-col">{IconLinks}</div>
            </motion.div>

            <div className="relative w-full">
                {/** [  Content  ] **/}
                <motion.div
                    className="projects content-innerHTML z-10"
                    data-even={even}
                    dangerouslySetInnerHTML={{
                        __html: HtmlContent,
                    }}
                    variants={variants.FullPage.Item}
                    custom={even ? -1 : 1}
                />
                <motion.div
                    className={`absolute top-5 -z-10 aspect-[5/3] w-[57.5%] select-none overflow-hidden rounded-3xl border-2 border-grey shadow-sm lg:top-0 lg:w-[50%] ${
                        even ? 'right-0 lg:-right-8' : 'left-0 lg:-left-8'
                    }`}
                    variants={variants.FullPage.Image}
                    custom={even ? -1 : 1}
                >
                    <Image
                        src={Data.src}
                        alt={Data.alt}
                        layout="fill"
                        objectFit="cover"
                    />
                </motion.div>
            </div>
            {/** [  IMAGE  ] **/}
        </motion.div>
    )
}

export default Featured_Full
