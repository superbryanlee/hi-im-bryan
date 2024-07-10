import { Tooltip } from "@mui/joy";
import {
  IconBrandInstagram,
  IconBrandGithub,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import Zoom from "@mui/material/Zoom";

export const BioSection = () => {
  return (
    <section className='bio-container'>
      <div className='header'>
        <p className='main-description'>
          <Tooltip
            title="Spelled with a 'y' not an 'i'"
            TransitionComponent={Zoom}
            followCursor
          >
            <h1 className='main-title'>Hi, I’m Bryan</h1>
          </Tooltip>
          I'm a developer and visual storyteller, passionate about
          problem-solving and creating, whether through code or photography.
          Tell me your story, and I'll tell you mine!
        </p>
        <div className='header-links'>
          <a href='https://www.linkedin.com/in/bryanleeubc/'>
            <IconBrandLinkedin size={42} />
          </a>
          <a href='https://www.instagram.com/framesbybry/'>
            <IconBrandInstagram size={42} />
          </a>
          <a href='https://github.com/superbryanlee'>
            <IconBrandGithub size={42} />
          </a>
        </div>
      </div>
      <div className='profile-container'>
        <Tooltip title="That's me!" TransitionComponent={Zoom} followCursor>
          <img
            className='profile-picture'
            src='public/head-shot.jpeg'
            alt='Profile'
          />
        </Tooltip>
      </div>
    </section>
  );
};
