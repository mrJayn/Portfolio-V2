import { motion } from 'framer-motion'
import { archiveMotion } from '@motion'

const GridProject = ({ src, children }) => (
    <>
        <div className="absolute inset-x-0 bottom-0 z-10 h-[35%] rounded-t-lg bg-grey-80" />
        <div className="flex-col-top absolute inset-x-0 bottom-0 z-20 h-[35%] p-5 lg:transition-opacity lg:items-start lg:opacity-50 lg:group-hover:opacity-100">
            {children}
        </div>
        <div className="absolute inset-0 bottom-[30%] top-0 z-0 overflow-hidden rounded-t-lg">
            <div
                className=" transition-transform absolute inset-0 origin-top scale-[1] bg-cover bg-top bg-no-repeat duration-[2s] lg:group-hover:scale-[1.1]"
                style={{ backgroundImage: `url(${src})` }}
            />
        </div>
    </>
)

const ListProject = ({ children, ...onclick }) => (
    <div className="full relative grid grid-cols-[clamp(225px,calc(95px+17vw),300px),1fr] pl-2 pr-[calc(2rem+8px)]">
        {children}
        <button
            className="absolute right-1 top-1/2 aspect-[1/1] h-[1.8rem] -translate-y-1/2 fill-none stroke-current stroke-[1.5] hover:stroke-slate-neon"
            title="Visit Project"
            {...onclick}
        >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
        </button>
    </div>
)

function Archive_Project({ viewMode, ...data }) {
    const visitProject = () => window.open(data.href, '_blank', 'noopenner noreferrer')
    const Title = ({ className = '' }) => (
        <h5 className={`whitespace-nowrap font-medium text-white ${className}`}>{data.title}</h5>
    )
    const Content = ({ ...props }) => <div dangerouslySetInnerHTML={{ __html: data.content }} {...props} />
    const Tech = ({ ...props }) => (
        <ul {...props}>
            {data.tech.map((item, i) => (
                <li
                    key={item + i}
                    className="whitespace-nowrap text-slate-neon after:mx-[0.25em] after:content-['/'] last:after:hidden"
                >
                    {item}
                </li>
            ))}
        </ul>
    )

    return (
        <motion.div
            layout="position"
            className={`group relative w-full overflow-hidden rounded-lg shadow-md shadow-black/50 ${
                viewMode === 'grid'
                    ? 'h-[375px] cursor-pointer md:h-[450px]'
                    : 'mb-[0.5rem] h-[3.5rem] rounded-lg bg-grey-80 py-2'
            }`}
            {...(viewMode === 'grid' ? { onClick: visitProject } : {})}
            {...archiveMotion.wrapProps[viewMode]}
        >
            {viewMode === 'grid' && (
                <GridProject src={data.src}>
                    <Title />
                    <Content className="flex h-full text-[max(14px,0.85rem)] max-md:text-center" />
                    <Tech className="flex max-w-full" />
                </GridProject>
            )}
            {viewMode === 'list' && (
                <ListProject onClick={visitProject}>
                    <div className="full flex-col-evenly items-start">
                        <Title className="text-[1rem] font-normal" />
                        <Tech className="flex w-min text-[0.85rem]" />
                    </div>
                    <Content className="hidden h-min w-full md:flex-left max-lg:text-[0.9rem]" />
                </ListProject>
            )}
        </motion.div>
    )
}

export default Archive_Project
