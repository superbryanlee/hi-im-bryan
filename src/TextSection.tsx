import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import React from "react";
import { useState } from "react";

export const TextSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className='text-box'>
      <div className='text-section-margin-top seeking'>
        I'm seeking <strong>2025</strong> new grad opportunities!{" "}
        <a href='https://www.linkedin.com/in/bryanleeubc/'>Let's chat</a>.
      </div>
      <div className='text-section-margin-top currently'>
        <strong>Currently</strong>, I'm wrapping up my final year of Computer
        Science at <a href='https://www.ubc.ca/'>UBC</a>.<br></br>
        I've also completed a BSc. in Microbiology & Immunology with a Minor in
        Psychology, also at <a href='https://www.ubc.ca/'>UBC</a>.
      </div>
      <div className='text-section-margin-top previously'>
        <strong>Previously</strong>, I’ve done internships as a:
        <ul className='list-positions'>
          <li>
            Backend Engineer at <a href='https://www.faire.com/'>Faire</a>
          </li>
          <li>
            Frontend Engineer at <a href='https://www.faire.com/'>Faire</a>
          </li>
          <li>
            Fullstack Engineer at the{" "}
            <a href='https://www.brinkman.mbb.sfu.ca/'>Brinkman Lab</a>
          </li>
        </ul>
        {/* <br></br>
        <div>
          Here are some{" "}
          <span onClick={() => setIsOpen(!isOpen)} className='my-frames'>
            projects I've worked on...
          </span>
        </div> */}
      </div>
      {/* <div className={`project-container ${isOpen ? "fade-in" : ""}`}>
        <ul className='project-items'>
          <li>Mark as Unread</li>
          <li>CHILDdb-Elasticsearch Integration</li>
          <li>UBC Campus Explorer (CPSC 310)</li>
          <li>Hotel Management Database Management Software (CPSC 304)</li>
          <li>MyFilms</li>
          <li>Restaurant Roulette: I'm Feeling Hungry (BCSHacks)</li>
          <li>RegVaxBC (nwHacks)</li>
        </ul>
      </div> */}
    </section>
  );
};
