import React, { Component } from 'react';
import profilePhoto from '../images/IMG_9154.jpg';
import resumePhoto from '../images/resumeImg.jpg';
import resume from '../images/MATT SMIDT - Resume.pdf';

class HomePage extends Component {
  render() {
    return (
      <body id="outerSpace">
        <section id="menu">
          <a class="home item smoothScroll selected-item" href="#home">Home</a>
          <a class="item smoothScroll" href="#me">About</a>
          <a class="item smoothScroll" href="#resume">Resume</a>
          <a class="item smoothScroll" href="#contact">Contact</a>
        </section>
        <section id="home">
          <div class="sky">
            <div class="stars"></div>
            <div class="stars1"></div>
            <div class="stars2"></div>
            <div class="shooting-stars"></div>
          </div>
          <div class="logo">
            <div class="name">
              <span class="letter">M</span>
              <span class="letter">A</span>
              <span class="letter">T</span>
              <span class="letter">T</span>
            </div>
            <div class="description">
            </div>
          </div>
          <div id="opening">
            <article class="go-down">
              <a class="smoothScroll" id="learnAboutMe" href="#me">
                <p class="scroll-description">Learn more about me</p>
                <i class="angle double down icon"></i>
              </a>
            </article>
          </div>
        </section>
        <section id="me">
          <div id="photoDiv">
            <img id="profilePhoto" src={profilePhoto} alt="profilePhoto"/>
          </div>
          <div id="intro">
            <h1 class="section-title">About</h1>
            <div>
              <p>
                Hey there! Thanks for visiting my webpage. Let me introduce myself, my name is Matt Smidt and I just recently graduated from the University of Manitoba with a Bachelor of Computer Science!
              </p>
              <p>
                I fell in love with coding after writing my first "Hello World" program in an Intro to Computer Science course and haven't looked back since!
              </p>
              <p>
                Besides my love for technology, I'm a coffee enthusiast, hockey fanatic, a cat and dog lover, gym goer, and foodie.
              </p>
            </div>
          </div>
        </section>
        <section id="resume">
          <div class="resumeDesc">
            <h1 class="section-title">Resume</h1>
            <article id="resumeInstruction">Download my resume here:</article>
            <a id="download" href={resume} target="_blank" download="MATT SMIDT - Resume.pdf" data-inverted="" data-tooltip="Click to download resume" data-position="bottom left">
              <i class="download icon"></i>
            </a>
          </div>
          <div id="resumeImgLink">
            <a href="https://drive.google.com/file/d/1CRdhczaGio3zfTToQ2MSBfDlv1kauqYk/view?usp=sharing" data-inverted="" data-tooltip="Click to view PDF version" data-position="right center" target="_blank">
              <img id="resumeImg" src={resumePhoto} alt="resume"/>
            </a>
          </div>
        </section>
      </body>

    )
  }
}

export default HomePage;
