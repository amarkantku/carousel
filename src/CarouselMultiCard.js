import React, { useEffect, useRef, useState } from "react";
import "./Carousel.multi.css"; // Import your CSS file

const Carousel = ({ images, noOfCards }) => {
  const trackRef = useRef(null);
  const cardWidth = useRef({});

  const [scrollPosition, setScrollPosition] = useState(0);

  const scroll = (scrollOffset) => {
    const newPosition = scrollPosition + scrollOffset;
    setScrollPosition(newPosition);
    trackRef.current.scrollTo({
      left: newPosition,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const { width } = trackRef.current.getBoundingClientRect();
    const setChildWidth = () => {
      cardWidth.current.width = width / noOfCards;
      const children = trackRef.current.children;
      const childWidth = `${(width - noOfCards * 10) / noOfCards}px`;
      for (let i = 0; i < children.length; i++) {
        children[i].style.width = childWidth;
      }
    };
    setChildWidth();
  }, [noOfCards]);

  const isPrevDisabled = scrollPosition === 0;
  const isNextDisabled =
    scrollPosition >=
    trackRef.current?.scrollWidth - trackRef.current?.clientWidth;

  return (
    <div className="carousel">
      <div className="carousel__container">
        <div className="carousel__track" ref={trackRef}>
          {images.map((image, index) => (
            <div className="carousel__item" key={index}>
              <img src={image} alt={`Product ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
      <button
        className="carousel__button carousel__button--prev"
        onClick={() => scroll(-cardWidth.current.width)}
        disabled={isPrevDisabled}
      >
        Previous
      </button>
      <button
        className="carousel__button carousel__button--next"
        onClick={() => scroll(cardWidth.current.width)}
        disabled={isNextDisabled}
      >
        Next
      </button>
    </div>
  );
};

export default Carousel;
