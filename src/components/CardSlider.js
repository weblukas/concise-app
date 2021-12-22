import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export const cards = [
  {
    id: 1,
    name: "card1",
    cardNumber: 123456789,
    cardHolderName: "John Doe",
  },
  {
    id: 2,
    name: "card2",
    cardNumber: 4444444789,
    cardHolderName: "John Doe",
  },
 
];

const CardSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="card-slider">
      <Slider {...settings}>
        {cards.map((card) => {
          return (
            <div className="card" key={card.id}>
              <h6>{card.name}</h6>
              <p>{card.cardNumber}</p>
              <p>{card.cardHolderName}</p>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default CardSlider;
