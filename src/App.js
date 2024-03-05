import React from "react";
import "./App.css";
import Carousel from "./Carousel";
import MultiItemCarousel from "./MultiItemCarousel/MultiItemCarousel";

function App() {
  const images = [
    "https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/632522/pexels-photo-632522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];

  const items = [
    { title: "Item 1", content: "Content 1" },
    { title: "Item 2", content: "Content 2" },
    { title: "Item 3", content: "Content 3" },
    { title: "Item 4", content: "Content 4" },
    { title: "Item 5", content: "Content 5" },
    { title: "Item 6", content: "Content 6" },
    { title: "Item 7", content: "Content 7" },
    { title: "Item 8", content: "Content 8" },
    { title: "Item 9", content: "Content 9" },
    { title: "Item 10", content: "Content 10" },
  ];

  return (
    <div className="App">
      <h1 className="heading">Simple React Carousel</h1>
      <div className="container">
        <div
          style={{
            width: "100%",
            height: "400px",
          }}
        >
          <Carousel images={images} />
        </div>
        <MultiItemCarousel
          items={items}
          noOfItems={7}
          noOfItemsPerSlide={2}
          renderItem={(item) => {
            return <div className="carousel__item--card">{item.title}</div>;
          }}
        />
      </div>
    </div>
  );
}
export default App;
