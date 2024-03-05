import React, { useMemo, useState } from "react";
import "./MultiItemCarousel.css";

const MultiItemCarousel = ({
  items,
  renderItem,
  noOfItems,
  noOfItemsPerSlide,
}) => {
  const [position, setPosition] = useState({
    start: 0,
    end: noOfItems,
    total: items.length,
  });

  const { itemsToRender, isPrevDisabled, isNextDisabled } = useMemo(() => {
    return {
      itemsToRender: items.slice(position.start, position.end),
      isPrevDisabled: position.start === 0,
      isNextDisabled: position.end >= position.total,
    };
  }, [position]);

  const handleOnClickPrev = () => {
    let start = 0;
    let end = 0;
    let diff;
    if (position.start - noOfItemsPerSlide >= 0) {
      start = position.start - noOfItemsPerSlide;
      end = position.end - noOfItemsPerSlide;
    } else {
      diff = position.start - noOfItemsPerSlide;
      if (diff < 0) {
        start = 0;
      }
      end = start + noOfItems;
    }
    setPosition((prev) => {
      return {
        ...prev,
        start,
        end,
      };
    });
  };

  const handleOnClickNext = () => {
    let start = 0;
    let end = 0;
    if (position.end + noOfItemsPerSlide <= position.total) {
      start = position.start + noOfItemsPerSlide;
      end = position.end + noOfItemsPerSlide;
    } else {
      let diff = position.end + noOfItemsPerSlide - position.total;
      start = position.start + diff;
      end = position.end + diff;
    }
    setPosition((prev) => {
      return {
        ...prev,
        start,
        end,
      };
    });
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
      {!isPrevDisabled && (
        <button
          disabled={isPrevDisabled}
          onClick={handleOnClickPrev}
          className="carousel__btn carousel__btn--prev"
        >
          &lt;
        </button>
      )}
      {!isNextDisabled && (
        <button
          disabled={isNextDisabled}
          onClick={handleOnClickNext}
          className="carousel__btn carousel__btn--next"
        >
          &gt;
        </button>
      )}
    </div>
  );
};

export default MultiItemCarousel;
