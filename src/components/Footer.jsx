import { Styled } from '@components'

const Footer = () => (
    <div className="flex w-full justify-center">
        <div className="flex-col-center py-4">
            <div className="flex-btw relative w-full rounded-xl">
                <Styled.Socials className="h-[2.5em] rounded-full p-2 duration-150 ease-tween hover:bg-grey-20" />
            </div>
            <p className="text-footer font-bold uppercase tracking-4xl text-black">
                Michael Jayne
                <span className="ml-1.5 text-slate-neon">
                    &#169;{new Date().getFullYear()}
                </span>
            </p>
        </div>
    </div>
)

export default Footer
