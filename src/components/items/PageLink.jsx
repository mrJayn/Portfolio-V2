import { Styled } from '@components'
import { pushPage } from '@utils'

const PageLink = ({ id, sid, href, activate, children, ...props }) => {
    if (!sid) sid = id

    const HREF = href ? href : { pathname: '/[sid]', query: { sid: sid } }
    const AS = href ? href : `/${sid}`

    const handleClick = () => {
        activate()
        pushPage(id, HREF, AS)
    }
    return (
        <Styled.Button onClick={handleClick} {...props}>
            {children}
        </Styled.Button>
    )
}
export default PageLink
