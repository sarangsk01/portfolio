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
                href="https://world-clock-timer.netlify.app/"
              >
                Demo
              </a>
              <a
                className="got-app"
                href="https://github.com/sarangsk01/world-clock-1"
              >
                Source
              </a>
            </li>
            <li className="pro-card">
              <h1 className="head">Todo App With API</h1>{' '}
              <p className="info">Information about Todo App.</p>
              <a
                className="got-app"
                href="https://sarangsk01.github.io/TA-JS-asynchronous-js-TJaaao/block-BJaakh/code/index.html"
              >
                Demo
              </a>
              <a
                className="got-app"
                href="https://github.com/sarangsk01/TA-JS-asynchronous-js-TJaaao/tree/block-BJaakh/block-BJaakh"
              >
                Source
              </a>
            </li>
            <li className="pro-card">
              <h1 className="head">Spaceflight News App</h1>{' '}
              <p className="info">Information about Spaceflight News App.</p>
              <a
                className="got-app"
                href="https://sarangsk01.github.io/TA-JS-asynchronous-js-TJaaao/block-BJaake/code/index.html"
              >
                Demo
              </a>
              <a
                className="got-app"
                href="https://github.com/sarangsk01/TA-JS-asynchronous-js-TJaaao/tree/block-BJaake/block-BJaake"
              >
                Source
              </a>
            </li>
            <li className="pro-card">
              <h1 className="head">Image search app</h1>{' '}
              <p className="info">Information about Image search app.</p>
              <a
                className="got-app"
                href="https://sarangsk01.github.io/Image-search-app/code/index.html"
              >
                Demo
              </a>
              <a
                className="got-app"
                href="https://github.com/sarangsk01/Image-search-app"
              >
                Source
              </a>
            </li>
            <li className="pro-card">
              <h1 className="head">Drag and Drop List</h1>{' '}
              <p className="info">Information about Drag and Drop List.</p>
              <a
                className="got-app"
                href="https://sarangsk01.github.io/TA-JS-advanced-dom-and-test-TJaaan/block-BJaait/code/index.html"
              >
                Demo
              </a>
              <a
                className="got-app"
                href="https://github.com/sarangsk01/TA-JS-advanced-dom-and-test-TJaaan/tree/block-BJaait/block-BJaait"
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
