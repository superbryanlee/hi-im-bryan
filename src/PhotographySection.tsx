import { useState } from "react";
export const PhotographySection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className='photography-section'>
      <div>
        I'm a casual cinephile and also <strong>love</strong> film and digital
        photography. Here are some{" "}
        <span
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          className='my-frames'
        >
          photos I've taken...
        </span>
      </div>
      {isOpen ? (
        <>
          <img className='frame' src='photography/000914930036.jpg'></img>
          <img className='frame' src='photography/000816370009.jpg'></img>
          <img className='frame' src='public/photography/0014.jpg'></img>
          <img
            className='frame'
            src='photography/2024-06-05_16-00-42_525.jpeg'
          ></img>
          <img
            className='frame'
            src='photography/2024-06-18_13-43-08_987.jpeg'
          ></img>
          <img
            className='frame'
            src='photography/2024-06-18_13-43-13_627.jpeg'
          ></img>
          <img className='frame' src='public/photography/DSCF3383.JPG'></img>
        </>
      ) : null}
    </section>
  );
};
