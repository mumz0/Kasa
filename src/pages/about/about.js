import BannerImg from "../../assets/images/kalen-emsley-Bkci_8qcdvQ-unsplash 2.png";
import Banner from "../../components/banner/banner";
import Collapse from "../../components/collapse/collapse";
import aboutContent from "../../assets/about.json";

export default function About() {
  return (
    <div>
      <Banner image={BannerImg} />
      <div className="about">
        {aboutContent.map((item) => (
          <div key={item.label} className="about__collapses">
            <Collapse label={item.label} content={item.content} />
          </div>
        ))}
      </div>
    </div>
  );
}
