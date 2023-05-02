import Certs from './Certs'

const Education = ({ university, degree, dates }) => (
    <div className="relative w-full max-lg:text-center">
        <h3>Education</h3>
        <div className="subsection">
            <h4>{university}</h4>
            <h5>{degree}</h5>
            <span className="text-min italic text-grey">{dates}</span>
        </div>
    </div>
)

const Jobs = ({ jobs }) => (
    <div className="relative w-full max-lg:text-center">
        <h3>Work Experience</h3>
        <div className="flex w-full flex-col gap-y-4">
            {jobs.map(({ title, position, description, dates }, i) => (
                <div
                    key={`${title}-${i}`}
                    className="max-lg:flex-col-top lg:flex-top subsection w-full gap-4"
                >
                    <div className="flex-col-center relative w-full text-center lg:items-start lg:text-start">
                        <h4>{title}</h4>
                        <h5>{position}</h5>
                        <span className="text-min italic text-grey">
                            {dates}
                        </span>
                    </div>
                    <ul className="w-full max-w-[768px] space-y-4 text-start lg:min-w-[65%]">
                        {description.map((line, k) => (
                            <li
                                key={`jobDesc${k}`}
                                className="-indent-2 text-min leading-1.25 before:mr-1 before:text-[1.125em] before:leading-0.5 before:content-['»']"
                            >
                                {line}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    </div>
)

const Experience = ({ data }) => (
    <>
        <h2>Experience</h2>
        <Education {...data.education} />
        <Jobs {...data} />
        <Certs {...data} />
    </>
)

export default Experience
