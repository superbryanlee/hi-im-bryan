import React from "react";

export const TextSection = () => {
  return (
    <section className='text-box'>
      <div className='text-section-margin-top seeking'>
        I'm seeking <strong>2025</strong> new grad opportunities!{" "}
        <a href='https://www.linkedin.com/in/bryanleeubc/'>Let's chat</a>.
      </div>
      <div className='text-section-margin-top currently'>
        <strong>Currently</strong>, I’m doing a summer internship placement as a
        Backend Engineer at <a href='https://www.faire.com/'>Faire</a> before I
        enter my final year of Computer Science at{" "}
        <a href='https://www.ubc.ca/'>UBC</a>.
      </div>
      <div className='text-section-margin-top previously'>
        <strong>Previously</strong>, I’ve done internships as a:
        <ul className='list-positions'>
          <li>
            Frontend Engineer at <a href='https://www.faire.com/'>Faire</a>
          </li>
          <li>
            Fullstack Engineer at the{" "}
            <a href='https://www.brinkman.mbb.sfu.ca/'>Brinkman Lab</a>
          </li>
        </ul>
      </div>
    </section>
  );
};
