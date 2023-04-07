import Certs from './_experience/Certs'

const StyledLabel = ({ head, subhead, dates }) => (
    <div className="flex-col-left relative w-full rounded-r-2xl bg-slate-10/50 p-4">
        <h5 className="font-semibold text-black">{head}</h5>
        <div className="ml-1 mt-2">
            <h6>{subhead}</h6>
            <p className="italic text-grey">{dates}</p>
        </div>
        <span className="absolute -inset-y-1 -left-0.5 w-1.5 rounded-full bg-slate-20" />
    </div>
)

const Summary = ({ innerHTML }) => (
    <>
        <h4>Professional Summary</h4>
        <div
            className="content-innerHTML grid w-full"
            dangerouslySetInnerHTML={{ __html: innerHTML }}
        />
    </>
)

const Education = ({ university, degree, dates }) => (
    <>
        <h4>Education</h4>
        <StyledLabel head={university} subhead={degree} dates={dates} />
    </>
)

const Jobs = ({ jobs }) => (
    <>
        <h4>Work Experience</h4>
        <div className="flex-col-left relative w-full gap-y-4">
            {jobs.map((data, i) => {
                const { title, position, description, dates } = data
                return (
                    <div key={`${title}-${i}`} className="relative w-full">
                        <StyledLabel
                            head={title}
                            subhead={position}
                            dates={dates}
                        />
                        <ul className="full space-y-2 p-2">
                            {description.map((line, i) => (
                                <li
                                    key={`job-desc-${i}`}
                                    className="before:inline-block before:font-bold before:text-slate before:content-['▹']"
                                >
                                    {line}
                                </li>
                            ))}
                        </ul>
                    </div>
                )
            })}
        </div>
    </>
)

const Experience = ({ data, content }) => [
    <Summary key="Proffesional-Summary" innerHTML={content} />,
    <Education key="Education" {...data.education} />,
    <Jobs key="Jobs" {...data} />,
    <Certs key="Certifications" {...data} />,
]

export default Experience
