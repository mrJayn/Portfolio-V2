const Education = ({ ...props }) => (
    <>
        <h3>Education</h3>
        <div className="flex-center w-full border-l-2 border-l-black p-2 pl-0 md:mx-4 md:w-[calc(100%-32px)]">
            <div className="flex-col-left h-auto w-full rounded-r-xl bg-slate-30/20 p-2 text-start">
                <h5 className="text-xl font-semibold leading-6 text-black md:text-2xl">
                    {props.university}
                </h5>
                <p className="mt-1 md:text-[1.25em]">{props.degree}</p>
                <p className="text-[0.85em] md:text-[1em]">{props.dates}</p>
            </div>
        </div>
    </>
)
export default Education
