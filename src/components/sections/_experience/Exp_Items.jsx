import Image from 'next/image'

const Summary = ({ ...experience }) => {
    return (
        <div
            id="about-innerHTML"
            className="py-5 px-2 text-white md:p-10 md:pt-5"
            dangerouslySetInnerHTML={{
                __html: experience.content,
            }}
        />
    )
}

const Jobs = ({ ...exp_data }) => {
    /** [ title, position, date, description ] **/
    /** [   0,        1,          2,          3           ] **/
    return (
        <div className="flex-col-top px-2md:p-10 h-full w-full py-5 text-white md:pt-5">
            {exp_data.job_data.map((job, i) => (
                <div
                    key={`job-${i}`}
                    className="flex-col-top mb-4 h-auto w-full rounded-md bg-grey p-3 md:mb-8 md:flex-row"
                >
                    <div className="flex-col-top full pt-3 font-thin md:w-[25%]">
                        <p className="text-md font-semibold md:mb-4">
                            {job[0]}
                        </p>
                        <p className="italic md:mb-4">{job[1]}</p>
                        <p className="mb-4 italic md:mb-4">{job[2]}</p>
                    </div>
                    <div className="flex-col-top full md:text-basemd:p-10 rounded-md bg-black/50 p-3 md:w-[75%] md:pt-5">
                        {job[3].map((text, i) => (
                            <p key={`job-text-${i}`} className="pb-4 indent-4">
                                {text}
                            </p>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}

const Certifications = ({ ...exp_data }) => {
    /** [ title, site, href, src ] **/
    /** [   0,     1,     2,     3   ] **/
    return (
        <ul className="w-full max-w-[767px] py-5 px-2  text-white">
            {exp_data.certifications.map((cert_data, i) => (
                <li
                    className="flex-top mb-3 h-[100px] rounded-md bg-grey py-2 px-3 md:h-[200px]"
                    key={`job-${i}`}
                >
                    <div className="flex-left mr-[5%] h-full w-[60%] select-none md:before:p-5 md:before:text-2xl md:before:text-neon md:before:content-['\2605']">
                        <div className="flex-col-left">
                            <p className="text-base font-semibold md:text-lg">
                                {cert_data[0]}
                            </p>
                            <a
                                href={cert_data[2]}
                                rel="noreferrer"
                                target="_blank"
                                className="styled-link py-2 text-neon/75 hover:text-neon md:pt-4 md:pb-0"
                                style={{ transition: 'color 0.25s linear' }}
                            >
                                My Certificate
                            </a>
                            <a
                                href={cert_data[2]}
                                rel="noreferrer"
                                target="_blank"
                                className="styled-link text-neon/75 hover:text-neon"
                                style={{ transition: 'color 0.25s linear' }}
                            >
                                {cert_data[1]}
                            </a>
                        </div>
                    </div>
                    <a
                        href={cert_data[3]}
                        target="_blank"
                        rel="noreferrer"
                        className="relative h-full w-[35%] opacity-50 duration-250 ease-in hover:opacity-100"
                    >
                        <Image
                            src={cert_data[3]}
                            alt={`${cert_data[0]} certification image`}
                            layout="fill"
                            objectFit="contain"
                            blurDataURL="/assets/certifications/blurDataCertificate.png"
                            placeholder="blur"
                        />
                    </a>
                </li>
            ))}
        </ul>
    )
}
const Exp_Items = {
    Summary: Summary,
    Jobs: Jobs,
    Certifications: Certifications,
}
export default Exp_Items
