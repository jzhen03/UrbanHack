import React, { useState, useEffect } from "react";
import * as BsIcons from "react-icons/bs";
import "./slideshow.css";

const Slideshow = ({ data }) => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };

  // useEffect for auto-scrolling
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide(); // Automatically move to the next slide
    }, 3000); // Change slide every 3 seconds

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, [slide]); // Depend on `slide` to reset the timer when it changes

  return (
    <div className="slideshow">
      <BsIcons.BsArrowLeftCircleFill onClick={prevSlide} className="arrow arrow-left" />
      {data.map((item, idx) => {
        return (
          <img
            src={item.src}
            alt={item.alt}
            key={idx}
            className={slide === idx ? "slide" : "slide slide-hidden"}
          />
        );
      })}
      <BsIcons.BsArrowRightCircleFill onClick={nextSlide} className="arrow arrow-right" />
      <span className="indicators">
        {data.map((_, idx) => {
          return (
            <button
              key={idx}
              className={slide === idx ? "indicator" : "indicator indicator-inactive"}
              onClick={() => setSlide(idx)}
            ></button>
          );
        })}
      </span>
    </div>
  );
};

export default Slideshow;
