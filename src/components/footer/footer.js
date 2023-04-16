import Logo from "../../assets/logo/Logo_White.svg"

function Footer() {
    return (
        <div className="footer-container">
            <footer>
                <div className="footer-content">
                    <img src={Logo} alt="Logo" />
                    <p className="footer-text">© 2020 Kasa. All rights reserved</p>
                </div>
            </footer>
        </div>
    )
}
export default Footer;
