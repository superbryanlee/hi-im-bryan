import { useState, useEffect, useMemo } from "react";
import { Gallery } from "react-grid-gallery";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

type GalleryImage = {
  src: string;
  original: string;
  width: number;
  height: number;
};

export const PhotographySection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState(-1);

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
          return new Promise<GalleryImage | null>((resolve) => {
            const img = new Image();
            img.src = src;
            img.onload = () =>
              resolve({
                src,
                original: src,
                width: img.width || 300,
                height: img.height || 200,
              });
            img.onerror = () => resolve(null);
          });
        })
      );

      // Filter out null values and cast to GalleryImage[]
      const validImages: GalleryImage[] = loadedImages.filter(
        (image): image is GalleryImage => image !== null
      );

      setGalleryImages(validImages);
      setImagesLoaded(true);
    };

    preloadImages();
  }, [imageSources]);

  const slides = galleryImages.map(({ src, width, height }) => ({
    src,
    width,
    height,
  }));

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
      <div
        className={`image-container ${isOpen && imagesLoaded ? "fade-in" : ""}`}
      >
        {imagesLoaded && (
          <Gallery
            images={galleryImages}
            enableImageSelection={false}
            onClick={(index) => setLightboxIndex(index)}
          />
        )}
      </div>
      <Lightbox
        slides={slides}
        open={lightboxIndex >= 0}
        index={lightboxIndex}
        close={() => setLightboxIndex(-1)}
      />
    </>
  );
};
