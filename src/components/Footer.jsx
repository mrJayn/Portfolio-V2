const Footer = () => {
    const currentYear = new Date().getFullYear()
    return (
        <div className="footer" id="footer">
            <p>
                Author:&nbsp;
                <span>Michael Jayne</span>
            </p>
            <p className="styled-flex">&#169; {currentYear}</p>
        </div>
    )
}

export default Footer
