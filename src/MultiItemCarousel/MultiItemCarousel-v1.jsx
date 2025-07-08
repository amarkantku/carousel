import React, { useMemo, useState } from "react";
import "./MultiItemCarousel.css";

const MultiItemCarousel = ({
  items,
  renderItem,
  noOfItems = 3,
  noOfItemsPerSlide = 1,
}) => {
  const [start, setStart] = useState(0);
  const total = items.length;

  const end = useMemo(() => {
    return Math.min(start + noOfItems, total);
  }, [start, noOfItems, total]);

  const itemsToRender = useMemo(() => {
    return items.slice(start, end);
  }, [items, start, end]);

  const isPrevDisabled = start === 0;
  const isNextDisabled = end >= total;

  const handleOnClickPrev = () => {
    setStart((prev) => Math.max(0, prev - noOfItemsPerSlide));
  };

  const handleOnClickNext = () => {
    setStart((prev) =>
      Math.min(prev + noOfItemsPerSlide, total - noOfItems)
    );
  };

  return (
    <div className="carousel">
      <div className="carousel__track">
        {itemsToRender.map((item, index) => (
          <div key={index} className="carousel__item">
            {renderItem(item)}
          </div>
        ))}
      </div>
      <button
        onClick={handleOnClickPrev}
        className="carousel__btn carousel__btn--prev"
        disabled={isPrevDisabled}
      >
        &lt;
      </button>
      <button
        onClick={handleOnClickNext}
        className="carousel__btn carousel__btn--next"
        disabled={isNextDisabled}
      >
        &gt;
      </button>
    </div>
  );
};

export default MultiItemCarousel;
