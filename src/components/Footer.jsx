import { Styled } from '@components'

const Footer = () => (
    <div className="flex w-full justify-center">
        <div className="flex-col-center py-4">
            <div className="flex-btw relative w-full rounded-xl">
                <Styled.Socials className=" stroke-grey duration-150 ease-tween hover:stroke-black" />
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
