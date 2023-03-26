import Logo from "../../assets/logo/Logo_White.svg"

function Footer() {
    return (
        <footer>
            <div className="footer_content">
                <img src={Logo} alt="Logo" />
                <p className="footer_text">© 2020 Kasa. All rights reserved</p>
            </div>
        </footer>
    )
}
export default Footer;
