import React from 'react';
import { createRoot } from 'react-dom/client';

import { 
  BsFileText, 
  BsGithub, 
  BsLinkedin, 
  BsInstagram,
  BsThreads,
  BsEnvelope,
  BsChevronRight 
} from 'react-icons/bs';

import {
  FaBluesky,
  FaSoundcloud
} from 'react-icons/fa6';

import StatusBar from './status-bar';
import BackgroundSlideshow from './background-slideshow';
import Avatar from './avatar';

const sections = [
  {
    title: 'About',
    items: [
      {
        icon: <div className="icon file"><BsFileText role="presentation" className="file" /></div>,
        label: 'CV',
        link: '/download/Suyash_Srijan_Resume.pdf'
      },
      {
        icon: <div className="icon github"><BsGithub role="presentation" className="github" /></div>,
        label: 'GitHub',
        link: 'https://github.com/theblixguy'
      }
    ]
  },
  {
    title: 'Social',
    items: [
      {
        icon: <div className="icon linkedin"><BsLinkedin role="presentation" className="linkedin" /></div>,
        label: 'LinkedIn',
        link: 'https://www.linkedin.com/in/suyashsrij'
      },
      {
        icon: <div className="icon instagram"><BsInstagram role="presentation" className="instagram" /></div>,
        label: 'Instagram',
        link: 'https://instagram.com/suyashsrijan'
      },
      {
        icon: <div className="icon threads"><BsThreads role="presentation" className="threads" /></div>,
        label: 'Threads',
        link: 'https://threads.net/@suyashsrijan'
      },
      {
        icon: <div className="icon bluesky"><FaBluesky role="presentation" className="bluesky" /></div>,
        label: 'Bluesky',
        link: 'https://bsky.app/profile/suyashsrijan.bsky.social'
      },
      {
        icon: <div className="icon soundcloud"><FaSoundcloud role="presentation" className="soundcloud" /></div>,
        label: 'SoundCloud',
        link: 'https://soundcloud.com/suyashsrijan'
      }
    ]
  },
  {
    title: 'Contact',
    items: [
      {
        icon: <div className="icon email"><BsEnvelope role="presentation" className="email" /></div>,
        label: 'Email',
        link: 'mailto:suyashsrijan@outlook.com'
      }
    ]
  }
];

function Main() {
  return (
    <BackgroundSlideshow>
      <div className="container">
        <div className="phone">
          <div className="phone-content">
            <StatusBar />
            <main role="main" aria-label="Personal Profile">
              <header className="header">
                <h1 className="flex items-center">
                  <Avatar />
                  Suyash Srijan
                </h1>
                <p>iOS Engineer at Marks & Spencer in London, UK.</p>
                <br />
                <p>When I am free, I enjoy playing/listening to music, playing video games and reading about astrophysics.</p>
                <br />
                <p>My neurospicy brain also loves exploring crafting, cooking/baking, and whatever creative pursuit catches my interest!</p>
              </header>
              <div className="section-list">
                {sections.map((section) => (
                  <section key={section.title}>
                    <div className="section-header">
                      <h2>{section.title}</h2>
                    </div>
                    <div className="section-content">
                      {section.items.map((item) => (
                        <a
                          key={item.label}
                          href={item.link}
                          className="list-item"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Link to ${item.label} (opens in new tab)`}
                        >
                          {item.icon}
                          <span className="label">{item.label}</span>
                          <div className="chevron">
                            <BsChevronRight role="presentation" />
                          </div>
                        </a>
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            </main>
          </div>
        </div>
      </div>
      <footer role="contentinfo" aria-label="Website Information" className="main-footer">
        Photography © 2025 Suyash Srijan. All code open source at{" "}
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
root.render(<Main />);