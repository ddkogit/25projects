import React, { useMemo } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

function ImageSlider({ url, limit, page }) {
  const [image, setImage] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  const handlePrevClick = () => {
    currentSlide === 0
      ? setCurrentSlide(image.length - 1)
      : setCurrentSlide(currentSlide - 1);
  };

  const handleNextClick = () => {
    currentSlide === image.length - 1
      ? setCurrentSlide(0)
      : setCurrentSlide(currentSlide + 1);
  };

  const fetchImage = async (url) => {
    try {
      setLoading(true);

      const response = await fetch(`${url}?page=${page}&limit=${limit}`);

      const data = await response.json();

      if (data) {
        setImage(data);
        setLoading(false);
      }
    } catch (error) {
      setErrorMsg(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (url !== "") {
      fetchImage(url);
    }

    console.log(image);
  }, [url, page, limit]);

  if (loading) {
    return <div>Loading data ! Please wait</div>;
  }

  if (errorMsg !== null) {
    return <div>Error Occured!!</div>;
  }

  return (
    <div className="image-slider-wrapper">
      <FaArrowCircleLeft size={50}
      className="faArrow"
      onClick={handlePrevClick} />

      {image && image.length !== 0
        ? image.map((item, index) => (
            <img
            
              key={index}
              src={item.download_url}
              alt="image picture"
              width={500}
              className={
                index === currentSlide
                  ? "image-slide-show"
                  : "image-slide-hidden"
              }
            />
          ))
        : null}

      <FaArrowCircleRight
      size={50}
      className="faArrow"
      onClick={handleNextClick} />

      <span className="button-indicator">
        {image &&
          image.length &&
          image.map((item, index) => (
            <button
              key={index}
              className={
                currentSlide === index
                ? "img-slider-button"
                :"img-slider-button inactive-slider"
              }
              onClick={() => setCurrentSlide(index)}
            >

            
            </button>
          ))}
      </span>
    </div>
  );
}

export default ImageSlider;
