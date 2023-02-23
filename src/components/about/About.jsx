import React from "react";
import "./about.css";
import ME from "../../assests/me-about.JPG";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>2+ Worldwide</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>10+ completed</small>
            </article>
          </div>

          <p>
            Greetings! My name is Joshua Ologbosere, and I am a highly skilled
            frontend developer with a passion for creating exceptional user
            experiences. With 2+ years of experience in the field, I am
            well-versed in a wide range of frontend technologies, including
            HTML, CSS, JavaScript, and various frameworks such as React,
            Angular, and Vue.
            <br />
            <br />
            My expertise in frontend development has enabled me to create
            visually appealing and user-friendly websites and web applications
            that are optimized for performance and accessibility. I take pride
            in my ability to transform complex technical requirements into
            elegant and efficient solutions that meet the needs of clients and
            end-users alike.
            <br />
            <br />
            Throughout my career, I have collaborated with cross-functional
            teams, including designers, backend developers, and project
            managers, to deliver successful projects on time and within budget.
            I am a strong communicator and am committed to working closely with
            my team to ensure that every project meets or exceeds expectations.{" "}
            <br />
            <br />
            I am a lifelong learner and am constantly seeking out new
            technologies and best practices to stay at the forefront of my
            field. I enjoy staying up-to-date with the latest trends and
            advancements in frontend development, and I have a track record of
            successfully implementing new technologies and methodologies to
            improve the quality and efficiency of my work.
            <br />
            <br />
            In summary, I am a dedicated and skilled frontend developer who is
            passionate about creating outstanding user experiences. If you are
            looking for a talented and experienced frontend developer who can
            deliver exceptional results, I would be delighted to discuss your
            project requirements in more detail.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
