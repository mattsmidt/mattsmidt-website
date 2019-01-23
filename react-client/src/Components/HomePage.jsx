import React, { Component } from 'react';
import profilePhoto from '../images/IMG_9154.jpg';
import resumePhoto from '../images/resumeImg.jpg';
import resume from '../images/MATT SMIDT - Resume.pdf';
import aspNetMVC from '../images/asp-net-mvc.jpg';
import entityFramework from '../images/entity-framework.jpg';
import msSQLServer from '../images/microsoft-sql-server.jpg';
import cSharp from '../images/c#.jpg';
import jquery from '../images/jquery.jpg';
import ajax from '../images/AJAX.jpg';
import htmlCSSJS from '../images/html-css-js.jpg';
import bootstrap from '../images/bootstrap.jpg';
import javaIcon from '../images/java.jpg';
import apache from '../images/apache.jpg';
import spring from '../images/spring.jpg';
import plsql from '../images/plsql.jpg';

class HomePage extends Component {
  render() {
    return (
      <body id="outerSpace">
        <section id="menu">
          <a class="home item smoothScroll selected-item" href="#home">Home</a>
          <a class="item smoothScroll" href="#me">About</a>
          <a class="item smoothScroll" href="#coop">Co-op Experiences</a>
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
        <section id="coop">
          <h1 class="section-title">Co-op Experiences</h1>
          <article class="coopArticle">
            <div class="coopDesc">
              <h2>City of Winnipeg</h2>
              <p> I spent my first Co-op Work Term as a Programmer Analyst for the Corporate Support Services department at the City of Winnipeg.
              </p>
              <ul>
                <li>Developed a scholarship application system which replaced their old paper application system.</li>
                <li>Implemented an internal budget projection system which will save time making monthly budget projections by being able to see every item by each department that need to be purchased as well as the available funds remaining.</li>
                <li>Performed technical presentations to team members as well as soft presentations to clients to improve the applications performance and usability.</li>
              </ul>
              <p></p>
            </div>
            <div class="technology">
              <h3>Technologies Used</h3>
              <p></p>
              <div class="techStack">
                <img class="techLogo" src={aspNetMVC} alt="ASP.NET MVC"/>
                <img class="techLogo" src={entityFramework} alt="Entity Framework"/>
                <img class="techLogo" src={msSQLServer} alt="Microsoft SQL Server"/>
                <img class="techLogo" src={cSharp} alt="C#"/>
                <img class="techLogo" src={jquery} alt="jquery"/>
                <img class="techLogo" src={ajax} alt="AJAX"/>
                <img class="techLogo" src={htmlCSSJS} alt="HTML-CSS-JS"/>
                <img class="techLogo" src={bootstrap} alt="Bootstrap"/>
              </div>
            </div>
          </article>
          <div class="coopDivider"></div>
          <article class="coopArticle">
            <div class="coopDesc">
              <h2>Richardson International</h2>
              <p> I spent my second Co-op Work Term as a Software Developer for the Management Information Services department at Richardon International.
              </p>
              <ul>
                <li>Enhanced the Customer Dashboard Application by adding additional customer information, showing a summary of a customer’s most recent transactions with the ability to quickly see a transaction in full detail, and improved the performance of existing queries that will help the company better track and manage their customers.</li>
                <li>Improved web applications by making fixes, enhancements to previous features within various web applications and ensuring any fixes or enhancements work as expected by thoroughly testing them with written tests.</li>
                <li>Enhanced web reports by fixing bugs, adding new features and creating new reports using i-net Designer, PLEdit, SQL, PL/SQL, and Oracle.</li>
                <li>Developed a new web report that will allow users to view all products that are grouped by their product category. This will make processes faster for when customers come in looking for a specific product.</li>
              </ul>
              <p></p>
            </div>
            <div class="technology">
              <h3>Technologies Used</h3>
              <p></p>
              <div class="techStack">
                <img class="techLogo" src={javaIcon} alt="Java"/>
                <img class="techLogo" src={apache} alt="Apache Struts"/>
                <img class="techLogo" src={spring} alt="Spring"/>
                <img class="techLogo" src={plsql} alt="PLSQL"/>
                <img class="techLogo" src={jquery} alt="jquery"/>
                <img class="techLogo" src={htmlCSSJS} alt="HTML-CSS-JS"/>
                <img class="techLogo" src={bootstrap} alt="Bootstrap"/>
              </div>
            </div>
          </article>
          <div class="coopDivider"></div>
          <article class="coopArticle">
            <div class="coopDesc">
              <h2>Manitoba Hydro</h2>
              <p> I spent my third Co-op Work Term as a System Developer for the Energy Information Systems department at Manitoba Hydro.
              </p>
              <ul>
                <li>Made improvements to queries allowing lab technicians to analyze field and lab data more efficiently.</li>
                <li>Developed a web application allowing engineers to interpret equipment and facility rating data to use in their planning and operation of the Bulk Electric System.</li>
                <li>Improved the Laboratory Information Management System, where web reports were returning incorrect data and missing information by fixing form inputs and stored procedures.</li>
              </ul>
              <p></p>
            </div>
            <div class="technology">
              <h3>Technologies Used</h3>
              <p></p>
              <div class="techStack">
                <img class="techLogo" src={aspNetMVC} alt="ASP.NET MVC"/>
                <img class="techLogo" src={entityFramework} alt="Entity Framework"/>
                <img class="techLogo" src={msSQLServer} alt="Microsoft SQL Server"/>
                <img class="techLogo" src={cSharp} alt="C#"/>
                <img class="techLogo" src={jquery} alt="jquery"/>
                <img class="techLogo" src={htmlCSSJS} alt="HTML-CSS-JS"/>
                <img class="techLogo" src={bootstrap} alt="Bootstrap"/>
              </div>
            </div>
          </article>
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
        <section id="contact">
          <h1 class="section-title">Contact</h1>
          <div id="contactLinks">
            <a href="https://www.linkedin.com/in/matthew-smidt/" target="_blank">
              <i class="linkedin alternate square icon contactIcons"></i>
            </a>
            <a href="mailto:smidtm@myumanitoba.ca" data-inverted="" data-tooltip="smidtm@myumanitoba.ca" data-position="top left">
              <i class="mail outline icon"></i>
            </a>
          </div>
        </section>
      </body>

    )
  }
}

export default HomePage;
