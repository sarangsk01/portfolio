import React from 'react';
import Header from './Header';
import Footer from './Footer';

const About = (props) => {
  return (
    <>
      <Header />
      <main>
        <section className="about">
          <div className="container">
            <h1>About me</h1>
            <p class="about-text padding">
              Hello,I am Sarang Kulkarni a Full Stack Web Developer.
            </p>
            <p className="about-text padding">
              I had Completed Master of Arts.
            </p>
            <p className="about-text padding">
              I Learned Full Stack Web Development(Bootcamp) at
              Altcampus,Dharamshala. This course duration is 6 months.
            </p>
            <p className="about-text padding">
              I have knowledge of Frontend & Backend.Recently Learned about
              HTML,CSS,JavaScript & React.js Framework also Learned about
              Node.js,Express.js, MongoDB Database.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;
