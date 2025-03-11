import { Tooltip } from "@mui/joy";
import {
  IconBrandInstagram,
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons-react";

const ICON_SIZE = 25;

export const BioSection = () => {
  return (
    <section className='bio-container'>
      <div className='header'>
        <p className='main-description'>
          <Tooltip title="Spelled with a 'y' not an 'i'" followCursor>
            <h1 className='main-title'>Hi, I’m Bryan</h1>
          </Tooltip>
          I'm a software developer and photographer with a passion for
          problem-solving, clear design, and seamless user experiences. With a
          background in both computer science and microbiology, I enjoy building
          intuitive, data-driven solutions that make complex information more
          accessible. Whether it's designing systems, developing software, or
          capturing stories through my lens, I thrive on creating with clarity
          and purpose.
        </p>
        <p className='main-description'>
          Tell me your story, and I’ll tell you mine!
        </p>
        <div className='header-links'>
          <Tooltip title='Link with me!' followCursor>
            <a href='https://www.linkedin.com/in/bryanleeubc/'>
              <IconBrandLinkedin size={ICON_SIZE} />
            </a>
          </Tooltip>
          <Tooltip title='bryanlee.fh@gmail.com' followCursor>
            <a href='mailto:bryanlee.fh@gmail.com'>
              <IconMail size={ICON_SIZE} />
            </a>
          </Tooltip>
          <Tooltip title='@framesbybry' followCursor>
            <a href='https://www.instagram.com/framesbybry/'>
              <IconBrandInstagram size={ICON_SIZE} />
            </a>
          </Tooltip>
          <Tooltip title='beep boop code' followCursor>
            <a href='https://github.com/superbryanlee'>
              <IconBrandGithub size={ICON_SIZE} />
            </a>
          </Tooltip>
        </div>
      </div>
      <div className='profile-container'>
        <Tooltip title="That's me!" followCursor>
          <img className='profile-picture' src='head-shot.jpeg' alt='Profile' />
        </Tooltip>
      </div>
    </section>
  );
};
