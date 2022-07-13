import Header from './Header';
import Footer from './Footer';
import React from 'react';

const Home = (props) => {
  return (
    <>
      <Header />
      <main>
        <section className="hero">
          <div className="container">
            <article>
              <h1>WELCOME TO MY PORTFOLIO</h1>
              <div className="image">
                <img src="./sarang.jpg" alt="sarang" />
              </div>
              <h2>Sarang Kulkarni</h2>
              <p className="padding-1">Full Stack Web Developer</p>
              <div className="flex padding-1 justify-between">
                <nav className="social">
                  <ul className="flex justify-between">
                    <li>
                      <a href="https://github.com/sarangsk01">
                        <i className="fab fa-github"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/sarangsk01">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/in/sarangsk01">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
