import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import {
  BsFileText,
  BsGithub,
  BsLinkedin,
  BsInstagram,
  BsThreads,
  BsEnvelope,
  BsChevronRight,
} from 'react-icons/bs';

import {
  FaBlog,
  FaBluesky,
  FaSoundcloud,
} from 'react-icons/fa6';

import StatusBar from './status-bar';
import BackgroundSlideshow from './background-slideshow';
import Avatar from './avatar';

const sections = [
  {
    title: 'About',
    items: [
      { variant: 'file',   icon: BsFileText, label: 'CV',     link: '/download/Suyash_Srijan_Resume.pdf' },
      { variant: 'github', icon: BsGithub,   label: 'GitHub', link: 'https://github.com/theblixguy' },
    ],
  },
  {
    title: 'Social',
    items: [
      { variant: 'blog',       icon: FaBlog,       label: 'Personal Blog', link: 'https://www.suyashsrijan.com/blog' },
      { variant: 'linkedin',   icon: BsLinkedin,   label: 'LinkedIn',      link: 'https://www.linkedin.com/in/suyashsrij' },
      { variant: 'instagram',  icon: BsInstagram,  label: 'Instagram',     link: 'https://instagram.com/suyashsrijan' },
      { variant: 'threads',    icon: BsThreads,    label: 'Threads',       link: 'https://threads.net/@suyashsrijan' },
      { variant: 'bluesky',    icon: FaBluesky,    label: 'Bluesky',       link: 'https://bsky.app/profile/suyashsrijan.com' },
      { variant: 'soundcloud', icon: FaSoundcloud, label: 'SoundCloud',    link: 'https://soundcloud.com/suyashsrijan' },
    ],
  },
  {
    title: 'Contact',
    items: [
      { variant: 'email', icon: BsEnvelope, label: 'Email', link: 'mailto:suyashsrijan@outlook.com' },
    ],
  },
];

function ListItem({ icon: Icon, variant, label, link }) {
  return (
    <a
      href={link}
      className="list-item"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Link to ${label} (opens in new tab)`}
    >
      <div className={`icon ${variant}`}>
        <Icon role="presentation" className={variant} />
      </div>
      <span className="label">{label}</span>
      <div className="chevron">
        <BsChevronRight role="presentation" />
      </div>
    </a>
  );
}

function Section({ title, items }) {
  return (
    <section>
      <div className="section-header">
        <h2>{title}</h2>
      </div>
      <div className="section-content">
        {items.map((item) => (
          <ListItem key={item.label} {...item} />
        ))}
      </div>
    </section>
  );
}

function Main() {
  return (
    <BackgroundSlideshow>
      <div className="container">
        <div className="phone">
          <div className="phone-content">
            <StatusBar />
            <main role="main" aria-label="Personal Profile">
              <header className="header">
                <h1>
                  <Avatar />
                  Suyash Srijan
                </h1>
                <p>Senior Software Engineer at Marks & Spencer in London, UK.</p>
                <br />
                <p>I play music, game, and read about black holes. I also cook, craft, and chase whatever creative tangent my neurospicy brain throws at me.</p>
              </header>
              <div className="section-list">
                {sections.map((section) => (
                  <Section key={section.title} {...section} />
                ))}
              </div>
            </main>
          </div>
        </div>
      </div>
      <footer role="contentinfo" aria-label="Website Information" className="main-footer">
        Photography © 2026 Suyash Srijan. All code open source at{" "}
        <a
          href="https://github.com/theblixguy/personal-website"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Website source code on GitHub (opens in new tab)"
        >
          GitHub
        </a>
      </footer>
    </BackgroundSlideshow>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <Main />
  </StrictMode>
);
