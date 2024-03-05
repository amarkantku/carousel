import React, { useState, useEffect, useCallback, useRef } from "react";
import CarouselIndicators from "./CarouselIndicators";
import "./Carousel.css";

const Carousel = ({ images, interval = 2000 }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // to keep the carousel current executing requestAnimationFrame id
  const requestRef = useRef();
  // to keep track of previous requestAnimationFrame id
  const previousTimeRef = useRef();

  const nextSlide = useCallback(() => {
    setActiveIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    );
  }, [images.length]);

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  // // This callback function is passed a single argument: DOMHighResTimeStamp (time) type is a double and is used to store a time value in milliseconds.indicating the end time of the previous frame's rendering
  // const animate = useCallback((time) => {
  //   // if there is no previous requestAnimationFrame then just update the previous requestAnimationFrame id
  //   // and execute requestAnimationFrame with callback function

  //   if (previousTimeRef.current !== undefined) {
  //     // calculate the diff
  //     const deltaTime = time - previousTimeRef.current;
  //     // if time lapsed, call nextSlide function recurs
  //     if (deltaTime >= interval) {
  //       nextSlide();
  //       previousTimeRef.current = time;
  //     }
  //   } else {
  //     previousTimeRef.current = time;
  //   }
  //   // It requests the browser to call a user-supplied callback function before the next repaint.
  //   // The frequency of calls to the callback function will generally match the display refresh rate
  //   requestRef.current = requestAnimationFrame(animate);
  // },[interval,nextSlide]);

  const animate = useCallback(
    (time) => {
      if (!isPaused) {
        if (previousTimeRef.current !== undefined) {
          const deltaTime = time - previousTimeRef.current;
          if (deltaTime >= interval) {
            nextSlide();
            previousTimeRef.current = time;
          }
        } else {
          previousTimeRef.current = time;
        }
        requestRef.current = requestAnimationFrame(animate);
      }
    },
    [interval, isPaused, nextSlide],
  );

  useEffect(() => {
    // user-supplied callback function before the next repaint.
    // requestRef.current = requestAnimationFrame(animate);
    // return () => cancelAnimationFrame(requestRef.current);
  }, [animate]);

  const pauseAnimation = () => {
    setIsPaused(true);
  };

  const playAnimation = () => {
    setIsPaused(false);
    // Start the animation loop if it's paused
    if (requestRef.current === null) {
      requestRef.current = requestAnimationFrame(animate);
    }
  };

  return (
    <div className="carousel">
      <button onClick={prevSlide} className="carousel__btn carousel__btn--prev">
        &lt;
      </button>
      <img
        onMouseEnter={pauseAnimation}
        onMouseLeave={playAnimation}
        src={images[activeIndex]}
        alt={`Slide ${activeIndex}`}
        className="carousel__img"
      />
      <button onClick={nextSlide} className="carousel__btn carousel__btn--next">
        &gt;
      </button>
      <CarouselIndicators
        images={images}
        activeIndex={activeIndex}
        onClick={goToSlide}
      />
    </div>
  );
};

export default Carousel;
