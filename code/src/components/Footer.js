import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiOutlineMedium

} from "react-icons/ai";
import { FaLinkedinIn, FaQuora, FaYoutube } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          {/* <h3>Designed and Developed by Soumyajit Behera</h3> */}
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} VT</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/vinit-todai"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://github.com/vinit-2997"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://medium.com/@vinit.todai"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiOutlineMedium />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/__vinit97__/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>

            <li className="social-icons">
              <a
                href="https://www.youtube.com/channel/UC6CY9eWy2U44DBoVoEUlCAw"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaYoutube />
              </a>
            </li>

            <li className="social-icons">
              <a
                href="https://twitter.com/vinit_7todai"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
            </li>

            <li className="social-icons">
              <a
                href="https://www.quora.com/profile/Vinit-Todai-1"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaQuora />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
