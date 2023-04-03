import { Accordion } from '@components'

const Summary = ({ innerHTML }) => (
    <>
        <h3>Professional Summary</h3>
        <div
            className="content-innerHTML grid w-full"
            dangerouslySetInnerHTML={{ __html: innerHTML }}
        />
    </>
)

const Education = ({ ...props }) => (
    <>
        <h3>Education</h3>
        <div className="flex-center w-full border-l-2 border-l-black p-2 pl-0 max-md:max-w-[581px] sm:ml-[clamp(0px,calc(5vw-21px),32px)] md:w-[calc(100%-64px)]">
            <div className="flex-col-left h-auto w-full rounded-r-xl bg-slate-30/20 p-4 text-start text-grey-60">
                <h5 className="font-semibold leading-6 text-black">
                    {props.university}
                </h5>
                <h6 className="ml-1 mt-1 font-medium">{props.degree}</h6>
                <span className="ml-1 italic leading-none">{props.dates}</span>
            </div>
        </div>
    </>
)

const Experience = ({ data, content }) => [
    <Summary key="Proffesional-Summary" innerHTML={content} />,
    <Accordion key="Work-Experience" name="jobs" {...data} />,
    <Education key="Education" {...data.education} />,
    <Accordion key="Certifications" name="certifications" {...data} />,
]

export default Experience
