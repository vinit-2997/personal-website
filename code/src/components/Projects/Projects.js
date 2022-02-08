import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import BCI_Wheelchair from "../../Assets/Projects/BCI_Wheelchair.webp";
import brainport from "../../Assets/Projects/brainport.jpeg";
import brain_search from "../../Assets/Projects/brain_search.jpeg";
import BCI_Musical_lights from "../../Assets/Projects/BCI_Musical_lights.webp";
import Rpi_Bot from "../../Assets/Projects/Rpi-Bot.webp";
import BCI_VR from "../../Assets/Projects/BCI_VR.webp";
import Brain_Informatics from "../../Assets/Projects/Brain_Informatics.webp";
import gestureAssistant from "../../Assets/Projects/gestureAssistant.webp";
import NLP from "../../Assets/Projects/NLP.webp";
import Neighbour_Army from "../../Assets/Projects/Neighbour_Army.webp";
import tremble_1 from "../../Assets/Projects/tremble_1.webp";
import food from "../../Assets/Projects/food.webp";
import Minesweeper from "../../Assets/Projects/Minesweeper.webp";
import BCI_Robot from "../../Assets/Projects/BCI_Robot.webp";
import SparkAR from "../../Assets/Projects/SparkAR.webp";
import Home_Automation from "../../Assets/Projects/Home_Automation.webp";
import ASL from "../../Assets/Projects/ASL1.png";



import '/Users/vinit2997/Documents/GitHub/vinit-2997.github.io/code/src/components/Projects/style_proj.css';

function Projects() {
  return (
    <Container fluid className="project-section">



      <Tabs defaultActiveKey="bci" id="uncontrolled-tab-example" className="mb-3">

          <Tab eventKey="bci" title="Brain Computer Interface">


          <Container>
        {/* <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p> */}
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={BCI_Wheelchair}
              isBlog={false}
              title="BrainHack Wheelchair - Smart Brain Controlled Wheelchair"
              description="Reading your thoughts is now a reality! BrainHack Wheelchair is a Smart Wheelchair controlled with your Brain. JUST FOCUS to move FORWARD, and Blink your eyes twice to turn it LEFT !!"
              link="https://devpost.com/software/brainhack-wheelchair-smart-brain-controlled-wheelchair"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={brainport}
              isBlog={false}
              title="BrainPort - Teleport your Mind with your BRAIN!"
              description="A VR journey with your brain! Designed a VR environment in React 360 and integrated it with a brainwave headset, analyzing 5 brainwave bands in realtime and teleporting the user to 4 different locations in the virtual world with his thoughts, such as a beach or mountain!"
              link="https://devpost.com/software/brainport-teleport-your-mind-with-your-brain"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={brain_search}
              isBlog={false}
              title="BrainSearch"
              description="Ever thought of using your thought to control something? Think about it now! Presenting the first Browser Search powered with your BRAIN.. Yes, You thought it right..."
              link="https://devpost.com/software/brainsearch-browse-the-internet-with-your-brain"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={BCI_Musical_lights}
              isBlog={false}
              title="BrainHack Musical Lights"
              description="Musical Lights controlled with your Brainwaves and a Raspberry Pi."
              link="https://www.youtube.com/watch?v=mGudp1HcOf8&t=59s"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Rpi_Bot}
              isBlog={false}
              title="BrainHack Robo"
              description="Robot controlled with your Brainwaves and a Raspberry Pi controlled via Android App with Bluetooth or WiFi. It has smart Obstacle Avoidance and a Live Video Streaming with Motion Detection."
              link="https://devpost.com/software/brainhack-wheelchair-smart-brain-controlled-wheelchair"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={BCI_VR}
              isBlog={false}
              title="Mind-VR Interface"
              description="An Inteface between our Brain and Virtual World ! Controlling virtual things with your physical Mind !"
              link="https://devpost.com/software/brainport-teleport-your-mind-with-your-brain"
            />
          </Col>

  
     
        </Row>
      </Container>



          </Tab>  
          <Tab eventKey="ai" title="Artificial Intelligence / Machine Learning">




          <Container>
     
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Brain_Informatics}
              isBlog={false}
              title="Brain Informatics using Deep Learning"
              description="Deep Learning based automated system which classifies the Workload on soldiers from brainwave dataset based on 3 categories (Baseline, Low Workload, High Workload) using various Machine Learning algorithms such as Resilient Backpropagation ANN, Stacked Auto encoders, Support Vector Machines, LDA and Radial Basis Function(RBFs)"
              link="https://vinit-2997.github.io/projects.html#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ASL}
              isBlog={false}
              title="Sign Language Translator"
              description="Developed an American Sign Language translator with an accuracy of 96% using several ML algorithms such as Neural
              Network, Random Forest, KNN, SVM, Logistic Regression, and Naive Bayes on the Leap Motion Controller ASL dataset"
              link="https://devpost.com/software/sign-language-translator-7dm6x0"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gestureAssistant}
              isBlog={false}
              title="GestureAssistant"
              description="GestureAssistant - a Desktop Personal Virtual Assistant which understands your gestures(so it understands you:) ) and turns them into powerful commands which will automate your Desktop without you pressing a key..(but you will have to start the assistant yourself:))"
              link="https://devpost.com/software/gestureassistant-your-hand-based-virtual-assistant"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={NLP}
              isBlog={false}
              title="Natural Language Processor"
              description="Developed a deep learning based automated system which can extract the most significant words from a set of paragraphs"
              link="https://vinit-2997.github.io/projects.html#"
            />
          </Col>

  
     
        </Row>
      </Container>


          </Tab>

          <Tab eventKey="profile" title="Software">






          <Container>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Neighbour_Army}
              isBlog={false}
              title="Neighbor Army"
              description="Free deliveries from one neighbor to another during COVID
              Request free meals, order your usual groceries, or ask for other help you may need. A volunteer will bring your delivery right to your door. “Taking care of our neighbors is how we will get through this as a community. Neighbor Army shows that Aamchi Mumbai Cares.”"
              link="https://neighbor-army.now.sh/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tremble_1}
              isBlog={false}
              title="Tremble Turn"
              description="Navigation made Simple
              No need to look at the Phone for every turn ! The App sends a signal to two Smartwatchs at every turn which vibrates accordingly !"
              link="https://github.com/vinit-2997/tremble-turn"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={food}
              isBlog={false}
              title="LOC - Lord of Connoisseur"
              description="An online system for restraunt owners to bring their business online and for customers to buy food at the click of a button !"
              link="https://vinit-2997.github.io/projects.html#"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Minesweeper}
              isBlog={false}
              title="MineSweeper"
              description="Minesweeper is a single-player puzzle video game. The objective of the game is to clear a rectangular board containing hidden mines or bombs without detonating any of them, with help from clues about the number of neighboring mines in each field"
              link="https://vinit-2997.github.io/projects.html#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={BCI_Robot}
              isBlog={false}
              title="Whats the Word? - A Progressive Web Dictionary App"
              description="Progressive web applications (PWAs) are web applications that load like regular web pages or websites but can offer the user functionality such as working offline, push notifications, and device hardware access traditionally available only to native applications"
              link="https://github.com/vinit-2997/pwa_new"
            />
          </Col>
  
     
        </Row>
      </Container>

          </Tab>

          <Tab eventKey="contact" title="AR/VR/IOT">






          <Container>
    
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SparkAR}
              isBlog={false}
              title="AR Music Band"
              description="Virtual Musical Band in Augmented Reality
              Just stand in front of the camera, hold the virtual guitar, sing in the virtual mic, and create your own song live in front of audience without leaving your home! Built on top of Facebook's SparkAR platform. Do experience this right from your Instagram app in your smartphone!"
              link="https://www.instagram.com/ar/3279423348827878/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Home_Automation}
              isBlog={false}
              title="SHA - Smart Home Automator"
              description="Switch to a Smart Home!
              Switch on the lights, fans, television and a variety of things right with a touch. It can sense the temperature and adjust the cooling accordingly. A Live Video feed with Motion Detection to catch those Intruders !"
              link="https://vinit-2997.github.io/projects.html#"
            />
          </Col>
     
        </Row>
      </Container>

          </Tab>
    </Tabs>

    <Particle />

    </Container>
  );
}

export default Projects;
