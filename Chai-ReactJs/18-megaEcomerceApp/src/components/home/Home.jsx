import React from "react";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
const Home = () => {
  const images = [
    "https://icms-image.slatic.net/images/ims-web/8de045af-a7dd-4a89-84bf-11f0fa8e870d.jpg_1200x1200.jpg",
    "http://icms-image.slatic.net/images/ims-web/2d351faa-b64a-4b71-ac9e-bf5e6d886f1a.jpg",
    "http://icms-image.slatic.net/images/ims-web/90e9fba7-7372-4e5b-81dc-9e2800413701.jpg",
    "https://icms-image.slatic.net/images/ims-web/b3d1b002-c5f6-4a8a-a22d-871f69460c19.jpg",
    "https://icms-image.slatic.net/images/ims-web/7bf8afdc-8d60-47a9-a06e-9e7da1ab56ab.jpg",
    "https://icms-image.slatic.net/images/ims-web/93a8b245-336b-4e4e-aecf-459d0b6ea6e6.jpg",
    "https://icms-image.slatic.net/images/ims-web/cbd99c37-b6ee-4f57-bfb7-80df9ea22ee2.jpg",
    "https://icms-image.slatic.net/images/ims-web/7bf8afdc-8d60-47a9-a06e-9e7da1ab56ab.jpg",
  ];
  const settings = {
    autoplay: true,
    autoplaySpeed: 3000, // Set the autoplay interval in milliseconds (e.g., 3 seconds).
    dots: true, // Show navigation dots
    infinite: true, // Loop the slider
    speed: 500, // Transition speed
    slidesToShow: 1, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll
  };
  return (
    <>
      <section className="w-full relative">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="w-96">
              <img src={image} alt={`Slide ${index}`} className="w-96" />
            </div>
          ))}
        </Slider>
      </section>
    </>
  );
};

export default Home;
