import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Vinit Todai </span>
            from <span className="purple"> India, </span>
           a Computer Engineer from India working on some really cool technologies in the fields of AI and Brain Computer Interfaces What you just saw is just one of the infinite possibilities of AI. Currently I work as a Software Developer at Barclays - the bank who invented the first ATM machine...!.
            <br />
            <br />
            I have been experimenting a lot on the AI and related fields such as Robotics, VR, AR, IOT, Brain computer interfaces. Participation in more than 15 national and international hackathons and more than 10 national project competitions and entrepreneurship summits, I believe that there is so much more to research and learn and give back to the community.
            <br />
            <br />
            Do checkout some of my projects here! And dont forget to checkout the terminal:)
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writting Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

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
