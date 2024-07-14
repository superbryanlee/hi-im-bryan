import { Tooltip } from "@mui/joy";
import {
  IconBrandInstagram,
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons-react";

export const BioSection = () => {
  return (
    <section className='bio-container'>
      <div className='header'>
        <p className='main-description'>
          <Tooltip title="Spelled with a 'y' not an 'i'" followCursor>
            <h1 className='main-title'>Hi, I’m Bryan</h1>
          </Tooltip>
          I'm a developer and visual storyteller, passionate about
          problem-solving and creating, whether through code or photography.
          Tell me your story, and I'll tell you mine!
        </p>
        <div className='header-links'>
          <Tooltip title='Link with me!' followCursor>
            <a href='https://www.linkedin.com/in/bryanleeubc/'>
              <IconBrandLinkedin size={42} />
            </a>
          </Tooltip>
          <Tooltip title='bryanlee.fh@gmail.com' followCursor>
            <a href='mailto:bryanlee.fh@gmail.com'>
              <IconMail size={42} />
            </a>
          </Tooltip>
          <Tooltip title='@framesbybry' followCursor>
            <a href='https://www.instagram.com/framesbybry/'>
              <IconBrandInstagram size={42} />
            </a>
          </Tooltip>
          <Tooltip title='beep boop code' followCursor>
            <a href='https://github.com/superbryanlee'>
              <IconBrandGithub size={42} />
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
