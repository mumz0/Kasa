import { useState } from "react";
import previousIcon from "../../assets/images/vector-left.svg";
import nextIcon from "../../assets/images/vector-right.svg";

export default function Carousel ({carouselItems}){
  const [currentItem, setCurrentItem] = useState(0);

  const next = () => {
    setCurrentItem(currentItem === carouselItems.length - 1 ? 0 : currentItem + 1);
	};

	const previous = () => {
    setCurrentItem(currentItem === 0 ? carouselItems.length - 1 : currentItem - 1);
  };
  
  return (
      <section className="carousel">
        <img className="carousel__image" src={carouselItems[currentItem]} alt=""/>
        <img className="carousel__nextIcon" src={nextIcon} onClick={next} alt=""/>
        <img className="carousel__previousIcon" src={previousIcon} onClick={previous} alt=""/>
        <span className="carousel__count">{currentItem + 1}/{carouselItems.length}</span>
      </section>
  );}