import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function ImageSlider({ url, limit }) {
  const [image, setImage] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchImage = async (url) => {
    try {
      setLoading(true);

      const response = await fetch(url);

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
  }, [url]);

  if (loading) {
    return <div>Loading data ! Please wait</div>;
  }

  if (errorMsg !== null) {
    return <div>Error Occured!!</div>;
  }

  return <div>ImageSlider</div>;
}

export default ImageSlider;
