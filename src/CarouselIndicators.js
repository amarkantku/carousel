const CarouselIndicators = ({ images, activeIndex, onClick }) => {
  return (
    <div className="carousel__indicators">
      {images.map((_, index) => (
        <span
          key={index}
          className={`carousel__indicator ${
            index === activeIndex ? "active" : ""
          }`}
          onClick={() => onClick(index)}
        />
      ))}
    </div>
  );
};
export default CarouselIndicators;
