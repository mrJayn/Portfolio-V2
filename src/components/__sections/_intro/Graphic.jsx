import { motion } from 'framer-motion'
import { theme } from 'tailwind.config'

const Graphic = ({ isMd, isLg }) => {
    const itemSize = isLg ? 23 : isMd ? 20 : 16
    const ContainerSize = itemSize ** 2 + itemSize + 3
    return (
        <motion.div
            key={0}
            className="flex-center rounded-[0% 50% 0% 50%]  relative -z-20 my-4 flex-1 overflow-hidden opacity-50 contrast-200"
            style={{ width: ContainerSize, maxHeight: ContainerSize }}
        >
            <div
                className="absolute flex aspect-square flex-wrap items-start justify-start gap-[1px] bg-white/10"
                style={{ height: ContainerSize, width: ContainerSize }}
            >
                {[...Array(itemSize ** 2).keys()].map((index) => (
                    <div
                        key={`graphic-item-${index}`}
                        className="relative m-auto aspect-square overflow-hidden rounded"
                        style={{ height: itemSize + 'px' }}
                    >
                        <motion.div
                            className="graphic-anim absolute inset-0 rounded odd:bg-teal even:bg-slate-20"
                            style={{
                                height: itemSize + 'px',
                                backgroundColor:
                                    index % 3 == 0
                                        ? theme.colors.slate[80]
                                        : index % 5 == 0
                                        ? theme.colors.teal.neon
                                        : null,
                                transitionTimingFunction: 'ease-in-out',
                                transitionDelay: index + 's',
                            }}
                        />
                    </div>
                ))}
            </div>
        </motion.div>
    )
}
export default Graphic
