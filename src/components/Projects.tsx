import BW from "../images/blog-website.png";
import FD from "../images/detecting-credit-card-fraud.png";
import PW from "../images/profile-website-pic.png";
import Section from "./Section";
import Tags, { TagProps } from "./Tags";

import isArray from "lodash/isArray";
import React from "react";
import { Card, Col, Container, NavLink, Row } from "react-bootstrap";

interface ProjectCardProps extends TagProps {
  name: string;
  desc: string | string[];
  img?: string;
  links?: [string, string][];
}

const projects: ProjectCardProps[] = [
  {
    name: "Personal Profile Website",
    img: PW as string,
    desc: [
      "This webpage!",
      "A simple, minimalist, and responsive website to talk about myself and my work.",
      "Showcases the use of React, Redux, Bootstrap, and SASS to create a responsive website.",
      // "Also demonstrates the process of deploying a static website to AWS.",
    ],
    links: [["GitHub", "https://github.com/wlovo/profile-site-frontend.react"]],
    tags: ["Typescript", "React", "Redux", "Bootstrap", "SASS"],
  },
  {
    name: "Blog App",
    img: BW as string,
    desc: [
      "A sample full-stack blog app built with React, Redux, and Bootstrap for the front-end and Express, Sequelize, and MySQL for the back-end.",
      "Showcases the Request/Response process through a RESTful API and CRUD operations on a modeled MySQL database.",
    ],
    links: [
      ["GitHub (React)", "https://github.com/wlovo/blog-app-frontend"],
      ["GitHub (Node)", "https://github.com/wlovo/blog-app-backend"],
    ],
    tags: ["Javascript", "Node.js", "React", "Redux", "Bootstrap", "Sequelize", "Express", "MySQL"],
  },
  {
    name: "Detecting credit card fraud",
    img: FD as string,
    desc: [
      "The research paper summarizing my research on detecting credit card fraud, analyzing modern stratagies, and proposing additional strategies to improve detection.",
      "Showcases the use of Python, Keras, TensorFlow, and various Machine Learning strategies to detect fraud.",
    ],
    links: [["JMU Scholarly Commons", "https://commons.lib.jmu.edu/honors202029/86/"]],
    tags: ["Python", "Keras", "TensorFlow", "Machine Learning", "Anomaly Detection", "Data Science", "Data Analytics"],
  },
  {
    name: "What's next?",
    desc: "Check out my GitHub for more projects and projects I'm working on.",
    links: [["My GitHub page", "https://github.com/wlovo"]],
    tags: ["Other"],
  },
];

const ProjectCard = ({ name, img, desc, links, tags }: ProjectCardProps) => {
  return (
    <Col xs={12} lg={6} className="project-card-col">
      <Card className="project-card">
        {img && <Card.Img src={img} />}
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{desc && isArray(desc) ? desc.join(" ") : desc}</Card.Text>
          {tags && <Tags tags={tags} />}
        </Card.Body>
        <Card.Footer>
          {links &&
            links.map((link) => {
              const [text, href] = link;
              return (
                <NavLink
                  key={text.toLowerCase().replace(/\s+/, "-")}
                  href={href}
                  target="_blank"
                  rel="nofollow noopener noreferrer">
                  {text}
                </NavLink>
              );
            })}
        </Card.Footer>
      </Card>
    </Col>
  );
};

const Projects = (): JSX.Element => (
  <Section id="projects" className="projects" title="Projects">
    <Container>
      <Row className="card-container">
        {projects.map((project) => (
          <ProjectCard key={project.name.toLowerCase().replace(/\s+/, "-")} {...project} />
        ))}
      </Row>
    </Container>
  </Section>
);

export default Projects;
