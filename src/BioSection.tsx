import {
  IconBrandInstagram,
  IconBrandGithub,
  IconBrandLinkedin,
} from "@tabler/icons-react";

export const BioSection = () => {
  return (
    <section className='bio-container'>
      <div className='header'>
        {/* <h1 className='main-title'>Hi, I’m Bryan</h1> */}
        <p className='main-description'>
          <h1 className='main-title'>Hi, I’m Bryan</h1>
          I'm a developer and visual storyteller, passionate about
          problem-solving and creating, whether through code or photography.
          Tell me your story, and I'll tell you mine!
        </p>
        <div className='header-links'>
          <IconBrandLinkedin size={48} />
          <IconBrandInstagram size={48} />
          <IconBrandGithub size={48} />
        </div>
      </div>
      <div className='profile-container'>
        <img
          className='profile-picture'
          src='public/head-shot.jpeg'
          alt='Profile'
        />
      </div>
    </section>
  );
};
