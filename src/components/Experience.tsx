import React from "react";
import { Container, Tab, Row, Col, ListGroup } from "react-bootstrap";
import Section from "../components/Section";
import isArray from "lodash/isArray";
import TimelineHeader, { TimelineHeaderProps } from "./TimelineHeader";
import { EventKey } from "@restart/ui/esm/types";

interface TagContainerProps {
  tags: string[];
}

interface ExperienceContentProps extends TimelineHeaderProps, TagContainerProps {
  desc: string | string[];
}

interface ExperienceProps extends ExperienceContentProps {
  key: EventKey;
}

const experiences: ExperienceProps[] = [
  {
    key: "aws",
    name: "Amazon Web Services",
    title: "Software Development Engineer II",
    location: "Arlington, VA",
    date: "July 2020 - Present",
    desc: [
      "Performed typical software engineering tasks such as writing production code for various systems, implementing stakeholder requested features, enforcing coding best practices, reviewing code, drafting system designs, writing documentation for various systems, troubleshooting and debugging software to address software issues.",
      "Took the lead to design, plan, and implement the base of a new internal tool to simplify and accelerate the creation of containerized development environments utilizing AWS services, Go, and the Devfile open standard.",
      "Implemented various features in Java to the team’s primary service designed to accelerate developer efficiency by automating the lifecycle of 100,000+ internal cloud hosts used by 60,000+ developers.",
      "Mentored 8 new employees and 2 interns by guiding them through the architecture and infrastructure of the team's primary product, as well as coaching them through engineering/programming best practices, optimizing algorithm run times, holding workshops for various topics, and more.",
      "Migrated systems away from a deprecated dependencies while maintaining 100% uptime by designing + implementing new components to replace deprecated ones, writing unit and integration tests to ensure compatibility, coordinating the migration with multiple teams, generating metrics to measure impact, and releasing changes to an autoscaling system.",
    ],
    tags: ["AWS", "Java", "Go", "Kotlin"],
  },
  {
    key: "gen-impact",
    name: "Generate Impact",
    title: "Mid-Level Developer",
    location: "Harrisonburg, VA",
    date: "Oct 2018 - Oct 2019",
    desc: [
      "Helped design web applications based on client needs.",
      "Created full-stack web applications using web-related technologies.",
      "Participated in a hybrid agile development cycle",
      "Mentored interns and new employees.",
    ],
    tags: ["Javascript", "HTML", "CSS", "Node.js", "React", "MySQL", "Express", "Next.js", "Redux", "Jest"],
  },
  {
    key: "swift",
    name: "SWIFT",
    title: "Data Analytics Intern",
    location: "Manassas, VA",
    date: "Jun 2018 - Aug 2018",
    desc: [
      "Developed Spark applications in Scala to perform data analytics.",
      "Participated in an agile development cycle using JIRA, Confluence, and others.",
      "Created a proof-of-concept metrics engine to process big data.",
      "Studied data science concepts such as discovering, transforming, and modeling data.",
      "Acted in a leadership role to coordinate other interns in the program.",
    ],
    tags: ["Java", "Scala", "Spark", "SparkML", "Hadoop", "JUnit", "ScalaTest"],
  },
  // { key: '', name: '', title: '', location: '', date: '', desc: [''], tags: [''] },
];

const ExperienceContents = ({ name, title, location, date, desc, tags }: ExperienceContentProps): JSX.Element => {
  return (
    <>
      <TimelineHeader name={name} title={title} location={location} date={date} />
      <Row>
        <Col className="exp-desc">
          {desc && isArray(desc) ? (
            <ul>
              {desc.map((str) => (
                <li key={str.toLowerCase().replace(/\s+/, "-")}>{str}</li>
              ))}
            </ul>
          ) : (
            desc
          )}
        </Col>
      </Row>
      {tags && <TagContainer tags={tags} />}
    </>
  );
};

const TagContainer = ({ tags }: TagContainerProps): JSX.Element => (
  <Container fluid>
    <Row>
      {tags.map((tag) => (
        <Col key={tag.toLowerCase().replace(/\s+/, "-")} xs="auto" className="tag text-center">
          {tag}
        </Col>
      ))}
    </Row>
  </Container>
);

const Experience = (): JSX.Element => (
  <Section id="experience" className="experience" title="Experience">
    <Container>
      <Tab.Container id="experience-list" defaultActiveKey={`#${experiences[0].key}`}>
        <Row>
          <Col xs={12} md="auto" className="mb-3 mb-md-auto">
            <ListGroup>
              {experiences.map(({ key, name }) => (
                <ListGroup.Item key={key} action href={`#${key}`}>
                  {name}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
          <Col md>
            <Tab.Content>
              {experiences.map(({ key, name, title, location, date, desc, tags }) => (
                <Tab.Pane key={key} eventKey={`#${key}`}>
                  <ExperienceContents
                    name={name}
                    title={title}
                    location={location}
                    date={date}
                    desc={desc}
                    tags={tags}
                  />
                </Tab.Pane>
              ))}
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  </Section>
);

export default Experience;
