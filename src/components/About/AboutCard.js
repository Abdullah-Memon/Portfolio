import React from "react";
import Card from "react-bootstrap/Card";
import profile from "../../Assets/profile.png";
import { ImPointRight } from "react-icons/im";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";
import Accordion from 'react-bootstrap/Accordion';

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className=" mb-0">
          <p
            className="img-section"
          >
            <p style={{ width: "70%" }}>
              <h2 style={{ fontSize: "2.1em", color:"#595959" }}>
                <span className="purple">Introduction</span>
              </h2>
              Greetings! I’m Abdullah Memon from Pakistan. I was born I n 15th
              of Feb 2002 at a small city of Sindh, Nawabshah. I have completed
              all my educational activities from my home city with a aim in mind
              to become a software engineer. Currently I’m enrolled as a Student
              at Quaid-e-Awam University of Engineering Science and Technology
              Nawabshah.
            </p>
            <p style={{ width: "25%", justifyContent: "right" }} className="img-box">
              <img
                src={profile}
                alt="Profile Picture"
                className="about-profile"
              />
            </p>
          </p>

          <Accordion defaultActiveKey="0" className="about-contents">
          <Accordion.Item eventKey="0" style={{ textAlign: "justify" }} className="about-content-items">
            <Accordion.Header className="about-content-header">
              <h2 className="about-heading">Professional <span className="purple">Background</span></h2>
            </Accordion.Header>
            <Accordion.Body>
            With a solid background in Software Development, I currently serve
            as a part time Software Developer at FIDX Software House. Over the
            course of my career, I've have achieved my expertise in the area of:
            <br />
            <br />
            <ul>
              <li className="about-activity">
                <ImPointRight /> Web Application Development.
              </li>
              <li className="about-activity">
                <ImPointRight /> Web Designing.
              </li>
              <li className="about-activity">
                <ImPointRight /> Desktop Application Development.
              </li>
              <li className="about-activity">
                <ImPointRight /> Database Administrative.
              </li>
              <li className="about-activity">
                <ImPointRight /> Mobile Development.
              </li>
            </ul>
            </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1" style={{ textAlign: "justify" }} className="about-content-items">
            <Accordion.Header className="about-content-header">
              <h2 className="about-heading">Educational <span className="purple">Background</span></h2>
            </Accordion.Header>
            <Accordion.Body>
            My journey began with a foundation in education. <br />
            <br />
            <ul>
              <li>
                <span className="purple">Bachelors: </span>
                From <span className="purple">2020</span> to{" "}
                <span className="purple">2024</span> <br />
                Field: BE.Software Engineering
                <br />
                Last GPA (5th Semester): 3.91 out of 4 <br/> 
                From: <a href="www.quest.edu.pk">
                  Quaid-e-Awam University of Engineering Science and Technology
                  (Nawabshah)
                </a>
                <br />
                <br />
              </li>
              <li>
                <span className="purple">Intermediate: </span>
                From <span className="purple">2018</span> to{" "}
                <span className="purple">2020</span> <br />
                Catagory: Pre Engineering <br />
                Grade: A+ <br />
                From: Government Boys Collage Nawabshah <br />
                <br />
              </li>
              <li>
                <span className="purple">Matriculation: </span>
                From <span className="purple">2016</span> to{" "}
                <span className="purple">2018</span> <br />
                Catagory: Science <br />
                Grade: A <br />
                From: <a href="https://www.facebook.com/WFPSNawabshah/">
                  The Ways of Foundation Public School (Nawabshah)
                </a>
                <br />
                <br />
              </li>
            </ul>
            This educational background has been instrumental in shaping my
            approach to Follow my passion towards the field of software
            engineering.
            </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2" style={{ textAlign: "justify" }} className="about-content-items">
            <Accordion.Header className="about-content-header">
              <h2 className="about-heading">Working <span className="purple">Experience</span></h2>
            </Accordion.Header>
            <Accordion.Body>
            Throughout my career, I've had the privilege of contributing my
            knowledge in the areas of Project Management, Development,
            Requirement Gathering and Database side as a team leader, member as
            well as solo worker. These experiences have been pivotal in shaping
            my professional journey. <br />
            <br />
            <ul>
            <li>
                <span className="purple">Software Developer </span>
                (Internship) <br />
                From <span className="purple">2022 - 2023</span>
                <br />
                Type:
                <span className="purple"> On-site</span>
                <br />
                Projects:
                <br />
                <ul>
                  <li>Mobile Store Management (PoS & HR),</li>
                  <li>School Management (HR Management),</li>
                  <li>Super Mart Management System (HR & PoS) etc.</li>
                </ul>
              </li>
            </ul>
            </Accordion.Body>
            </Accordion.Item>
            </Accordion>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
