import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Gallery.css";

const fotos = [
  "foto1.jpg",
  "foto2.jpg",
  "foto3.jpg",
  "foto4.jpg",
  "foto5.jpg",
  "foto6.jpg",
  "foto7.jpg",
  "foto8.jpg",
];

export default function Gallery() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="gallery-carousel">
      <Slider {...settings}>
        {fotos.map((foto, index) => (
          <div key={index} className="carousel-item">
            <img
              src={require(`../assets/${foto}`)}
              alt={`foto-${index}`}
              className="carousel-img"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
