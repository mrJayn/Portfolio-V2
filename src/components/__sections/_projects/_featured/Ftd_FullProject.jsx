import { motion } from 'framer-motion'

import { Styled_Icon } from '@components'
import { ftdProjectVariants as variants } from '@motion'
import Image from 'next/image'

const Featured_Full = ({ even, ...data }) => {
    const Data = data.data
    const HtmlContent = data.content

    const Technology = Data.tech.map((item, i) => (
        <motion.span
            key={`tech-item-${i}`}
            className="relative whitespace-nowrap border-slate-10/50 px-2 text-center font-medium capitalize italic text-slate-20 even:border-x-2 even:px-8 md:tracking-wide"
            style={{ direction: even ? 'ltr' : 'rtl' }}
        >
            {item}
        </motion.span>
    ))

    const IconLinks = [
        ['GitHub', 'View on Github', Data.github],
        ['External', 'Visit Project', Data.external],
    ].map(([name, title, href], i) => (
        <a key={`icon-link-${i}`} href={href} title={title}>
            <Styled_Icon styled name={name} size={55} />
        </a>
    ))

    return (
        <motion.div
            id={`featured-project-${Data.title}`}
            className="relative z-10 grid h-auto max-h-screen w-full grid-cols-12 grid-rows-5 pb-8"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
        >
            {/** gridLayout :  [  desc  ] + [  TITLE  ] + [  TECH  ] **/}
            <motion.div
                className={`mb-5 flex items-center gap-x-20`}
                style={{
                    justifyContent: even ? 'flex-start' : 'flex-end',
                    gridArea: even ? '1/1/1/-1' : '1/1/1/-1',
                }}
                variants={variants.slug.md.header}
                custom={even ? -1 : 1}
            >
                <div
                    className={`w-1/2 min-w-fit ${
                        even ? 'order-1 text-start' : 'order-3 text-end'
                    }`}
                >
                    <p className="mx-2 -skew-x-6 italic tracking-wider text-slate-10 underline underline-offset-4">
                        Featured Project
                    </p>
                    <h3 className="whitespace-nowrap text-4xl text-slate-40 contrast-200">
                        {Data.title}
                    </h3>
                    <div className="flex">{Technology}</div>
                </div>
                <div className="order-2 flex w-1/2 justify-around">
                    {IconLinks}
                </div>
            </motion.div>

            {/** [  IMAGE  ] **/}
            <motion.div
                className="flex-top relative"
                style={{ gridArea: even ? '2/6/4/-1' : '2/1/4/8' }}
                variants={variants.slug.md.img}
                custom={even ? -1 : 1}
            >
                <div
                    className={`full absolute overflow-hidden rounded-3xl ${
                        even ? 'left-0' : 'right-0'
                    }`}
                >
                    <Image
                        src={Data.src}
                        alt={Data.alt}
                        layout="responsive"
                        objectFit="contain"
                        objectPosition="top"
                        width="100%"
                        height="100%"
                    />
                </div>
            </motion.div>

            {/** [  Content  ] **/}
            <motion.div
                style={{ gridArea: even ? '2/1/-1/-1' : '2/1/-1/-1' }}
                variants={variants.slug.md.item}
                custom={even ? -1 : 1}
            >
                <div
                    className="project-innerHTML full relative overflow-hidden whitespace-pre-wrap px-2 text-lg leading-[1.625rem] lg:text-xl"
                    style={{ textAlign: even ? 'start' : 'end' }}
                    data-even={even}
                    dangerouslySetInnerHTML={{
                        __html: HtmlContent,
                    }}
                />
            </motion.div>
        </motion.div>
    )
}

export default Featured_Full
