import { useState, useEffect, useMemo } from "react";

export const PhotographySection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const imageSources = useMemo(
    () => [
      "photography/000914930036.jpg",
      "photography/000816370009.jpg",
      "photography/0014.jpg",
      "photography/2024-06-05_16-00-42_525.jpeg",
      "photography/2024-06-18_13-43-08_987.jpeg",
      "photography/2024-06-18_13-43-13_627.jpeg",
      "photography/DSCF3383.JPG",
    ],
    []
  );

  useEffect(() => {
    const preloadImages = async () => {
      await Promise.all(
        imageSources.map((src) => {
          return new Promise((resolve) => {
            const img = new Image();
            img.src = src;
            img.onload = resolve;
            img.onerror = resolve;
          });
        })
      );
      setImagesLoaded(true);
    };

    preloadImages();
  }, [imageSources]);

  return (
    <>
      <section className='photography-section'>
        <div>
          I'm a casual cinephile and also <strong>love</strong> film and digital
          photography. Here are some{" "}
          <span onClick={() => setIsOpen(!isOpen)} className='my-frames'>
            photos I've taken...
          </span>
        </div>
      </section>
      <div className={`image-container ${isOpen ? "fade-in" : ""}`}>
        {imagesLoaded &&
          imageSources.map((src, index) => (
            <img key={index} className='frame' src={src} />
          ))}
      </div>
    </>
  );
};
