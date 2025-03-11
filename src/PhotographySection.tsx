import { useState, useEffect, useMemo } from "react";
import { Gallery } from "react-grid-gallery";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export const PhotographySection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [galleryImages, setGalleryImages] = useState([]);
  const [lightboxIndex, setLightboxIndex] = useState(-1); // Track clicked image index

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
      const loadedImages = await Promise.all(
        imageSources.map((src) => {
          return new Promise((resolve) => {
            const img = new Image();
            img.src = src;
            img.onload = () =>
              resolve({
                src,
                original: src, // Lightbox needs `original`
                width: img.width || 300,
                height: img.height || 200,
              });
            img.onerror = () => resolve(null);
          });
        })
      );

      const validImages = loadedImages.filter(Boolean);
      setGalleryImages(validImages);
      setImagesLoaded(true);
    };

    preloadImages();
  }, [imageSources]);

  // Convert images for Lightbox format
  const slides = galleryImages.map(({ src, width, height }) => ({
    src,
    width,
    height,
  }));

  return (
    <>
      <section className='photography-section'>
        <div>
          I'm also <strong>love</strong> film & digital photography. Here are
          some{" "}
          <span onClick={() => setIsOpen(!isOpen)} className='my-frames'>
            photos I've taken...
          </span>
        </div>
      </section>
      <div
        className={`image-container ${isOpen && imagesLoaded ? "fade-in" : ""}`}
      >
        {imagesLoaded && (
          <Gallery
            images={galleryImages}
            enableImageSelection={false}
            onClick={(index) => setLightboxIndex(index)} // Open Lightbox
          />
        )}
      </div>
      {/* Lightbox Component */}
      <Lightbox
        slides={slides}
        open={lightboxIndex >= 0}
        index={lightboxIndex}
        close={() => setLightboxIndex(-1)}
      />
    </>
  );
};
