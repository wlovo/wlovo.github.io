import Section from "./Section";
import Tags, { TagProps } from "./Tags";

import isArray from "lodash/isArray";
import React from "react";
import { Card, Col, Container, NavLink, Row } from "react-bootstrap";

interface ProjectCardProps extends TagProps {
  name: string;
  img?: string;
  desc: string | string[];
  links: [string, string][];
}

const projects: ProjectCardProps[] = [
  {
    name: "Personal Profile Website",
    desc: [
      "This webpage!",
      "A simple, minimalist, and responsive website.",
      "Showcases the use of React, Redux, Bootstrap, and SASS to create a responsive website.",
      // "Also demonstrates the process of deploying a static website to AWS.",
    ],
    links: [["GitHub", "https://github.com/wlovo/profile-site-frontend.react"]],
    tags: ["Typescript", "React", "Redux", "Bootstrap", "SASS"],
  },
  {
    name: "Blog App",
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
];

const ProjectCard = ({ name, img, desc, links, tags }: ProjectCardProps) => {
  return (
    <Col xs={12} lg={6} className="project-card-col">
      <Card className="project-card">
        {img && <Card.Img src={img} />}
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{desc && isArray(desc) ? desc.map((d, i) => <p key={i}>{d}</p>) : desc}</Card.Text>
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
