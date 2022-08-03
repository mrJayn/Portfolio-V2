import { useState } from 'react'
import { NextSeo } from 'next-seo'
import Image from 'next/image'
import { motion } from 'framer-motion'

import { Layout } from '@components'
import assets from '@assets'

const title = 'Resume'
const description =
    "My resume in 'traditonal' format, covering all the way back to undergrad."

const Resume = ({ isLoading }) => {
    return (
        <>
            <NextSeo
                title={title}
                description={description}
                openGraph={{ title, description }}
            />
            <Layout
                isLoading={isLoading}
                title="Resume"
                description={`${title}-${description}`}
            >
                <div className="resumePage">
                    <motion.div className="resumePage-img" ref={ref}>
                        <div>
                            <Image
                                src={assets.misc.resume}
                                alt="My Resume"
                                layout="fill"
                                objectFit="contain"
                                quality={100}
                            />
                        </div>
                    </motion.div>
                </div>
            </Layout>
        </>
    )
}

export default Resume
