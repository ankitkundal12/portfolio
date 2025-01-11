import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Paying Guest Accomodation System"
              description="The Paying Guest Accommodation System is a web-based application designed to simplify the process of finding and managingpaying guest (PG) accommodations, Created 3 separate modules for Owner,User & Admin, Used MySQL for database management and storage purpose."
              ghLink="https://github.com/"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Job Finder App"
              description="The Job Finder App is a comprehensive mobile application designed to streamline the job search process for users. It connects jobseekers with potential employers, providing a platform where users can search for job openings, apply directly through the app, Enabled real time communication between employers and job seekers using Socket.Io."
              ghLink="https://github.com/"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="NFT Marketplace"
              description="Developed a decentralized NFT (Non-Fungible Token) marketplace that allows users to create, buy, sell, and trade digital assetssecurely and transparently on the blockchain, Utilized Ethereum smart contracts to handle transactions, ensuring trustless and transparent operations, Designed and implemented the NFT minting process, including metadata storage and image uploads to IPFS."
              ghLink="https://github.com/"
             // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
