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

const sections = [
  {
    title: 'About',
    items: [
      {
        icon: <div className="icon"><BsFileText className="github" /></div>,
        label: 'CV',
        link: '/download/Suyash_Srijan_Resume.pdf'
      },
      {
        icon: <div className="icon"><BsGithub className="github" /></div>,
        label: 'GitHub',
        link: 'https://github.com/theblixguy'
      }
    ]
  },
  {
    title: 'Social',
    items: [
      {
        icon: <div className="icon"><BsLinkedin className="linkedin" /></div>,
        label: 'LinkedIn',
        link: 'https://www.linkedin.com/in/suyashsrij'
      },
      {
        icon: <div className="icon"><BsInstagram className="instagram" /></div>,
        label: 'Instagram',
        link: 'https://instagram.com/suyashsrijan'
      },
      {
        icon: <div className="icon"><BsThreads className="threads" /></div>,
        label: 'Threads',
        link: 'https://threads.net/@suyashsrijan'
      },
      {
        icon: <div className="icon"><FaBluesky className="bluesky" /></div>,
        label: 'Bluesky',
        link: 'https://bsky.app/suyashsrijan'
      },
      {
        icon: <div className="icon"><FaSoundcloud className="soundcloud" /></div>,
        label: 'SoundCloud',
        link: 'https://soundcloud.com/suyashsrijan'
      }
    ]
  },
  {
    title: 'Contact',
    items: [
      {
        icon: <div className="icon"><BsEnvelope className="email" /></div>,
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
          <StatusBar />  {}
          <div className="header">
            <h1>Suyash Srijan</h1>
            <p>iOS Engineer at Marks & Spencer in London, UK.</p>
            <br />
            <p>When I am free, I enjoy playing/listening to music, playing video games and reading about astrophysics.</p>
            <br></br>
            <p>My neurospicy brain also loves exploring crafting, cooking/baking, and whatever creative pursuit catches my interest!</p>
          </div>
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
                    >
                      {item.icon}
                      <span className="label">{item.label}</span>
                      <div className="chevron">
                        <BsChevronRight />
                      </div>
                    </a>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
    <div className="main-footer">
        Photography © 2025 Suyash Srijan. All code open source at{" "}
        <a 
          href="https://github.com/theblixguy" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
    </BackgroundSlideshow>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<Main />);