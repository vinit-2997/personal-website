import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Vinit Todai,  </span>
            I am Vinit, a creative software engineer with over 2 years of experience in the corporate world.<br/> <br/> 
            I'm currently pursuing a Master's degree in Artificial Intelligence at Northwestern University, which is ranked among the top ten universities in the United States. Prior to this, I worked as a Software Developer at Barclays - the bank who invented the first ATM machine...!
            <br />
            <br />
            At Barclays, I had an incredible opportunity to work on the development of cutting-edge software solutions for Barclays Corporate Banking, which impacted the lives of millions of people worldwide.            <br />
            <br />
            I love to explore different technologies and have been experimenting a lot in the fields of Artificial Intelligence, Robotics, Virtual Reality, Augmented Reality, Internet of Things, and Brain computer interfaces.            <br/>
            <br />
            I'm looking forward to working for an innovative firm where I can leverage my expertise, as well as my prior experience as a software developer at Barclays. I want to work on challenging problems, create incredible products, and put a dent in the universe!
            Do checkout some of my projects here!
          </p>
          <br />
          <p style={{ textAlign: "justify" }}>

          <div style={{ borderTop: "2px solid #fff ", marginBottom: 20 }}></div>
          <h3><span className="white">Technical Skills:   </span></h3>

               <h6>-  <span className="purple">Languages </span> : Java, Python, C++, MySQL </h6> 
               <h6>- <span className="purple">Web Technologies </span> : Microservices, Spring, Hibernate, RESTful API, JSON, HTML, CSS, Javascript, Angular, Node.js </h6> 
               <h6>- <span className="purple">Frameworks/Tools </span> : Git, Eclipse, IntelliJ, Jenkins, Openshift, SonarQube, Jira, Agile Central </h6> 
          </p>

          {/* { <ul>
            <li className="about-activity">
            </li>
            <li className="about-activity">
              <ImPointRight /> Web Technologies: Microservices, Spring, Hibernate, RESTful API, JSON, HTML, CSS, Javascript, Angular, Node.js
            </li>
            <li className="about-activity">
              <ImPointRight /> Frameworks/Tools: Git, Eclipse, IntelliJ, Jenkins, Openshift, SonarQube, Jira, Agile Central
            </li>
          </ul> } */}


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
