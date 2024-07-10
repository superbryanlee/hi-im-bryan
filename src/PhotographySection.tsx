import { useState } from "react";

export const PhotographySection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className='photography-section'>
      <div>
        I'm a casual cinephile and also <strong>love</strong> film and digital
        photography. Here are some of my favourite{" "}
        <span
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          className='my-frames'
        >
          frames...
        </span>
      </div>
      {isOpen ? (
        <>
          <img
            className='frame'
            src='public/photography/000914930036.jpg'
          ></img>
          <img
            className='frame'
            src='public/photography/000816370009.jpg'
          ></img>
        </>
      ) : null}
    </section>
  );
};
