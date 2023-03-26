import BannerImg from "../../assets/images/banner.png"

function Banner() {
    return (
            <div className="banner">
                <img src={BannerImg} alt="Banner" />

                <p className="banner_text">Chez vous, partout et ailleurs</p>
            </div>
    )
}
export default Banner;