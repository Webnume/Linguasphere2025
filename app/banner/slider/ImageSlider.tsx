"use client";
import { useState } from "react";
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
};

export function ImageSlider({ images }: ImageSliderProps) {
  const [imageIndex, setImageIndex] = useState(0);

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

  return (
    <section
      aria-label="Image Slider"
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        maxHeight: "450px",
      }}
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
          <>
            <Image
              key={url as any}
              src={url}
              alt={alt}
              aria-hidden={imageIndex !== index}
              className="img-slider-img"
              style={{ translate: `${-100 * imageIndex}%` }}
            />
          </>
        ))}
        <div
          style={{
            width: "55%",
            display: "flex",
            overflow: "hidden",
            position: "absolute",
          }}
        >
          {images.map(({ alt, titleUrl }, index) => (
            <>
              <Image
                key={titleUrl as any}
                src={titleUrl}
                alt={alt}
                aria-hidden={imageIndex !== index}
                className="img-slider-img"
                style={{ translate: `${-100 * imageIndex}%` }}
              />
            </>
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
          <button
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
          </button>
        ))}
      </div>
      <div id="after-image-slider-controls" />
    </section>
  );
}
