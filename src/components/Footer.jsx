const Footer = () => {
    const currentYear = new Date().getFullYear()
    return (
        <footer className="footer" id="footer">
            <address>
                <p>
                    Author:&nbsp;
                    <span>Michael Jayne</span>
                </p>
                <p className="styled-flex">&#169; {currentYear}</p>
            </address>
        </footer>
    )
}

export default Footer
