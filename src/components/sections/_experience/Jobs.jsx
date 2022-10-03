const Jobs = ({ ...exp_data }) => {
    /** [ title, position, date, description ] **/
    /** [   0,        1,          2,          3           ] **/
    return (
        <div className="flex-col-top h-full w-full px-2 sm:px-4">
            {exp_data.job_data.map(([title, role, dates, info], i) => (
                <div
                    key={`job-${i}`}
                    className="flex-col-top my-8 h-auto w-full grid-cols-2 gap-y-2 rounded-md first-of-type:mt-0 md:grid md:last-of-type:mb-0 xl:grid-cols-3"
                >
                    <div
                        className="flex-col-center md: full mb-4 rounded-md bg-grey-lightest py-2 text-center dark:bg-grey-darkest sm:py-4 md:mb-0 md:w-[95%] md:py-6 md:px-4"
                        style={{ gridArea: '1 / 1 / 1 / 1' }}
                    >
                        <h5>{title}</h5>
                        <hr className="my-2 hidden w-full text-grey md:block" />
                        <p>{role}</p>
                        <p className="text-sm italic">{dates}</p>
                    </div>
                    {info.map((paragraph, i) => (
                        <p
                            key={`job-text-${i}`}
                            className="mx-auto mb-2 h-full rounded-md indent-2  first-of-type:h-auto first-of-type:indent-4 md:mb-0 lg:p-2"
                            style={{
                                gridArea: `${i + 1} / ${i == 0 ? 2 : 1} / ${
                                    i + 1
                                } / -1`,
                            }}
                        >
                            {paragraph}
                        </p>
                    ))}
                </div>
            ))}
        </div>
    )
}
export default Jobs

/**
                    <div className="flex-col-top full px-2 py-4 md:ml-2">
                        {info.map((paragraph, i) => (
                            <p key={`job-text-${i}`} className="pb-4 indent-4">
                                {paragraph}
                            </p>
                        ))}
                    </div>
 */
