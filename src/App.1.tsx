import {
  IconBrandInstagram,
  IconBrandGithub,
  IconBrandLinkedin,
} from "@tabler/icons-react";

export function App() {
  return (
    <>
      <div className='main-container'>
        <section className='bio-container'>
          <div className='header'>
            <h1 className='main-title'>Hi, I’m Bryan</h1>
            <p className='main-description'>
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
            <img className='profile-picture' src='public/head-shot.jpeg' />
          </div>
        </section>

        <section className='text-box'>
          <div className='text-section'>
            <strong>Currently</strong>, I’m doing a summer internship placement
            as a Backend Engineer at <strong>Faire</strong> before I enter my
            final year of Computer Science at <strong>UBC</strong>.
          </div>
          <div className='text-section'>
            <strong>Previously</strong>, I’ve done internships as a:
            <ul className='list-positions'>
              <li>
                Frontend Engineer at <strong>Faire</strong>
              </li>
              <li>
                Fullstack Engineer at the <strong>Brinkman Lab</strong>
              </li>
            </ul>
          </div>
          <div className='text-section'>
            I'm seeking <strong>2025</strong> new grad oppurtunities!{" "}
            <strong>Let's chat</strong>.
          </div>
        </section>

        <section className='photography-section'>
          I'm a casual cinephile and also <strong>love</strong> film and digital
          photography. Here are some of my favourite frames...
        </section>
      </div>
    </>
  );
}
