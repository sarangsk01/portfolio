import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Home from './Home';
import About from './About';
import Projects from './Projects';

function Main() {
  return (
    <>
      <div className="">
        <Routes>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default Main;
