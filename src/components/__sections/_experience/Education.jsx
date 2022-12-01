const Education = ({ ...props }) => (
    <div className="flex-col-top w-full gap-y-2 px-4">
        <h3>Education</h3>
        <div className="flex-center w-full border-l-2 border-l-white py-2">
            <div className="flex-col-left h-auto w-full px-2 text-start">
                <p className="text-xl font-medium leading-6 text-grey-90">
                    {props.university}
                </p>
                <p className="mt-1">{props.degree}</p>
                <p className="text-[0.85em]">{props.dates}</p>
            </div>
        </div>
    </div>
)
export default Education
