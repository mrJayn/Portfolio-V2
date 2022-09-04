const Jobs = ({ ...exp_data }) => {
    /** [ title, position, date, description ] **/
    /** [   0,        1,          2,          3           ] **/
    return (
        <div className="flex-col-top h-full w-full px-2 py-5 text-white md:p-10 md:pt-5">
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
export default Jobs
