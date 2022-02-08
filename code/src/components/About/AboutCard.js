import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Vinit Mahendra Todai,  </span>
            a creative software engineer with over 2 years of experience in software development and artificial intelligence.<br/> <br/> I'm currently pursuing a Master's degree in Artificial Intelligence at Northwestern University, which is ranked among the top ten universities in the United States.
            Prior to this, I worked as a Software Developer at Barclays - the bank who invented the first ATM machine...!.
            <br />
            <br />
            I have been experimenting a lot in the field of Artificial Intelligence and and its applications in Robotics, Virtual Reality, Augmented Reality, Internet of Things, and Brain computer interfaces.
            <br />
            <br />
            I'm looking forward to working for an innovative firm where I can leverage my Artificial intelligence and machine learning expertise, as well as my prior experience as a software developer at Barclays. I want to work on challenging problems, create incredible products, and work for a company that is out to put a dent in the universe.
            <br/>
            Do checkout some of my projects here!
          </p>
          {/* <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writting Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul> */}

          {/* <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
