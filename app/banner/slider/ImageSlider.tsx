"use client";
import { useState, useEffect } from "react";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import { FaRegCircle, FaRegDotCircle } from "react-icons/fa";
import { StaticImageData } from "next/image";
import "./image-slider.css";
import Image from "next/image";

type ImageSliderProps = {
  images: {
    url: StaticImageData;
    alt: string;
    titleUrl: StaticImageData;
  }[];
  autoplayInterval?: number; // Optional prop for autoplay interval
};

export function ImageSlider({
  images,
  autoplayInterval = 6000,
}: ImageSliderProps) {
  const [imageIndex, setImageIndex] = useState(0);
  const [isUserInteracted, setIsUserInteracted] = useState(false);

  function showNextImage() {
    setImageIndex((index) => {
      if (index === images.length - 1) return 0;
      return index + 1;
    });
  }

  function showPrevImage() {
    setImageIndex((index) => {
      if (index === 0) return images.length - 1;
      return index - 1;
    });
  }

  useEffect(() => {
    if (isUserInteracted) return;

    const interval = setInterval(showNextImage, autoplayInterval);
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [autoplayInterval, isUserInteracted]);

  function handleUserInteraction() {
    setIsUserInteracted(true);
  }

  return (
    <section
      aria-label="Image Slider"
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        maxHeight: "450px",
      }}
      onClick={handleUserInteraction}
    >
      <a href="#after-image-slider-controls" className="skip-link">
        Skip Image Slider Controls
      </a>
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          overflow: "hidden",
        }}
      >
        {images.map(({ url, alt }, index) => (
          <Image
            key={index as any}
            src={url}
            alt={alt}
            aria-hidden={imageIndex !== index}
            className="img-slider-img"
            style={{ translate: `${-100 * imageIndex}%` }}
          />
        ))}
        <div
          style={{
            width: "50%",
            display: "flex",
            overflow: "hidden",
            position: "absolute",
            right: "10rem",
            top: "1rem",
          }}
        >
          {images.map(({ alt, titleUrl }, index) => (
            <Image
              key={index as any}
              src={titleUrl}
              alt={alt}
              aria-hidden={imageIndex !== index}
              className="img-slider-img"
              style={{ translate: `${-100 * imageIndex}%`, width: "100%" }}
            />
          ))}
        </div>
      </div>
      <button
        onClick={showPrevImage}
        className="img-slider-btn"
        style={{ left: 0 }}
        aria-label="View Previous Image"
      >
        <IoIosArrowDropleft aria-hidden />
      </button>
      <button
        onClick={showNextImage}
        className="img-slider-btn"
        style={{ right: 0 }}
        aria-label="View Next Image"
      >
        <IoIosArrowDropright aria-hidden />
      </button>
      <div
        style={{
          position: "absolute",
          bottom: ".5rem",
          left: "50%",
          translate: "-50%",
          display: "flex",
          gap: ".25rem",
        }}
      >
        {images.map((_, index) => (
          <span
            key={index}
            className="img-slider-dot-btn"
            aria-label={`View Image ${index + 1}`}
            onClick={() => setImageIndex(index)}
          >
            {index === imageIndex ? (
              <FaRegDotCircle aria-hidden />
            ) : (
              <FaRegCircle aria-hidden />
            )}
          </span>
        ))}
      </div>
      <div id="after-image-slider-controls" />
    </section>
  );
}
