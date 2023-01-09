import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import books from "../service/books";

const Carousel = ({ books }) => {
  const [recom, setRecom] = useState([]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 4000,
  };
  return (
    <div className="carousel">
      <Slider {...settings}>
        {books.map((book, index) => {
          return (
            <React.Fragment key={index}>
              <img className="carousel__image" src={book.img} />
            </React.Fragment>
          );
        })}
      </Slider>
    </div>
  );
};
export default Carousel;
