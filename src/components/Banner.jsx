/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function Banner() {
  return (
    <section className="banner" id="banner">
      <div className="container">
        <div className="banner-wrapper">
          <div className="banner-img">
            <img src="/person.jpg" alt="" />
          </div>
          <div className="banner-content">
            <h6>Hello, I'm Karuna Yadav</h6>
            <h3>Web Developer | Coding Enthusiast</h3>
            <p>
              I'm a Web developer, I love to do Competitive Programming and I'm
              a coding enthusiast. I am pursuing my Bachelors of Technology from
              Vellore Institute of Technology, Vellore (2021 - 25).
            </p>
            <a className="btn" href="#projects">
              About Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
