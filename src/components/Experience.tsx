import Section from "./Section";
import Tags, { TagProps } from "./Tags";
import TimelineHeader, { TimelineHeaderProps } from "./TimelineHeader";

import { EventKey } from "@restart/ui/esm/types";
import isArray from "lodash/isArray";
import omit from "lodash/omit";
import React from "react";
import { Col, Container, ListGroup, Row, Tab } from "react-bootstrap";

interface ExperienceContentProps extends TimelineHeaderProps, TagProps {
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
      "Reduce our team's operational load by ~40% by developing self- service products to automate common requests",
      "Improved the time to create a remote development environment by ~70% by moving away from an internal solution to a native AWS solution",
      "Maintained 100% availability of an essential service during the migration of a dependency by designing and executing a blue- green deployment in coordination with various teams",
      "Performed other software engineering tasks such as write production code, code reviews for colleagues, enforce best practices, draft system designs, write documentation, troubleshoot and debug software.",
    ],
    tags: ["AWS", "Java", "Kotlin", "Go", "Typescript", "Node.js", "React", "Python", "CI/CD", "System Design", "Serverless Applications", "Devfile Open Standard"],
  },
  {
    key: "gen-impact",
    name: "Generate Impact",
    title: "Mid-Level Developer",
    location: "Harrisonburg, VA",
    date: "Oct 2018 - Oct 2019",
    desc: [
      "Contributed to 5+ full-stack web applications by writing code targeting various web-related technologies.",
      "Helped design 2 single-page applications by attending calls with stakeholders to understand and meet their business needs.",
      "Mentored 2 interns and 1 new employee.",
    ],
    tags: ["Javascript", "HTML", "CSS", "Node.js", "React", "MySQL", "Express", "Next.js", "Redux", "Jest"],
  },
];

const ExperienceContents = (props: ExperienceContentProps): JSX.Element => {
  const { desc, tags } = props;

  const descList = (desc: string[]): JSX.Element => (
    <ul>
      {desc.map((str: string) => (
        <li key={str.toLowerCase().replace(/\s+/, "-")}>{str}</li>
      ))}
    </ul>
  );

  return (
    <>
      <TimelineHeader {...omit(props, "desc", "tags")} />
      <Row>
        <Col className="exp-desc">{desc && isArray(desc) ? descList(desc) : desc}</Col>
      </Row>
      {tags && <Tags tags={tags} />}
    </>
  );
};

const Experience = (): JSX.Element => {
  const experienceTabs = experiences.map(({ key, name }) => (
    <ListGroup.Item key={key} action href={`#${key}`}>
      {name}
    </ListGroup.Item>
  ));

  const experienceTabContents = experiences.map((props: ExperienceProps) => {
    const { key } = props;

    return (
      <Tab.Pane key={key} eventKey={`#${key}`}>
        <ExperienceContents {...omit(props, "key")} />
      </Tab.Pane>
    );
  });

  return (
    <Section id="experience" className="experience" title="Professional Experience">
      <Container>
        <Tab.Container id="experience-list" defaultActiveKey={`#${experiences[0].key}`}>
          <Row>
            <Col xs={12} md="auto" className="mb-3 mb-md-auto">
              <ListGroup>{experienceTabs}</ListGroup>
            </Col>
            <Col md>
              <Tab.Content>{experienceTabContents}</Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    </Section>
  );
};

export default Experience;
