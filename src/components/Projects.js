import React from 'react';
import Header from './Header';
import Footer from './Footer';
const Projects = (props) => {
  return (
    <>
      <Header />
      <main>
        <section className="projects">
          <h2 className="text-center">My Projects</h2>
          <p className="text-center">My Projects are as follows</p>
          <ul className="pro-cards">
            <li className="pro-card">
              <h1 className="head">People of GOT</h1>{' '}
              <p className="info">
                Information about people in different houses.
              </p>
              <a
                className="got-app"
                href="https://people-of-got-2.netlify.app/"
              >
                Demo
              </a>
              <a className="got-app" href="https://github.com/sarangsk01/got">
                Source
              </a>
            </li>
            <li className="pro-card">
              <h1 className="head">World Clock</h1>{' '}
              <p className="info">Information about World Clock.</p>
              <a
                className="got-app"
                href="https://people-of-got-2.netlify.app/"
              >
                Demo
              </a>
              <a
                className="got-app"
                href="https://github.com/sarangsk01/World-Clock"
              >
                Source
              </a>
            </li>
            <li className="pro-card">
              <h1 className="head">Movie Watch List App</h1>{' '}
              <p className="info">Information about Movie Watch List App.</p>
              <a
                className="got-app"
                href="https://github.com/sarangsk01/Movie-watch-list"
              >
                Source
              </a>
            </li>
            <li className="pro-card">
              <h1 className="head">Digital Marketing Website</h1>{' '}
              <p className="info">
                Information about Digital Marketing Website.
              </p>
              <a
                className="got-app"
                href="https://github.com/sarangsk01/Digital-Marketing-Website"
              >
                Source
              </a>
            </li>
            <li className="pro-card">
              <h1 className="head">Business Consulting Website</h1>{' '}
              <p className="info">Information about Consulting Website.</p>
              <a
                className="got-app"
                href="https://github.com/sarangsk01/Business-Consulting-Website"
              >
                Source
              </a>
            </li>
            <li className="pro-card">
              <h1 className="head">Website Making Company</h1>{' '}
              <p className="info">Information about Website Making Company.</p>
              <a
                className="got-app"
                href="https://github.com/sarangsk01/Website-Making-Company"
              >
                Source
              </a>
            </li>
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Projects;
