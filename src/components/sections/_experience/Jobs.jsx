const Jobs = ({ ...exp_data }) => {
    /** [ title, position, date, description ] **/
    /** [   0,        1,          2,          3           ] **/
    return (
        <div className="flex-col-top h-full w-full py-4 text-white md:px-2">
            {exp_data.job_data.map((job, i) => (
                <div
                    key={`job-${i}`}
                    className="flex-col-top my-8 h-auto w-full rounded-md first-of-type:mt-0 md:flex-row md:items-start"
                >
                    <div className="flex-col-center h-full w-[95%] rounded-md bg-grey/25 py-2 text-center font-thin sm:py-4 md:w-[30%] md:items-start md:text-left">
                        <h5 className="md:mb-4">{job[0]}</h5>
                        <p className="italic text-black dark:text-white md:mb-4">
                            {job[1]}
                        </p>
                        <p className="italic text-black dark:text-white md:mb-4">
                            {job[2]}
                        </p>
                    </div>
                    <div className="flex-col-top full px-2 py-4 md:w-[75%] md:p-10 md:px-1 md:text-base">
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
