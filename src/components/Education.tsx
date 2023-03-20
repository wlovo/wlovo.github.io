import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Section from "./Section";
import TimelineHeader from "./TimelineHeader";
import HorizontalList from "./HorizontalList";

interface EducationInfoProps {
  title: string;
  text: string | string[];
}

const educationInfo: EducationInfoProps[] = [
  { title: "Minors", text: "Mathematics, Data Analytics" },
  { title: "Awards", text: "President's List, Madison Forever Scholarship" },
  { title: "Honors", text: "Summa Cum Laude, Honors College, Upsilon Pi Epsilon" },
];

const coursework: string[] = [
  "Algorithms Analysis and Design",
  "Software Analysis and Design",
  "Software Engineering",
  "Database Systems",
  "Web-based Information Systems",
  "Parallel and Distributed Systems",
  "Computer Systems",
  "Machine Learning",
];

const EducationInfo = ({ title, text }: EducationInfoProps): JSX.Element => (
  <Row className="d-flex align-items-center">
    <Col xs={12} md={2} xl={1}>
      <span className="education-info">{`${title}:`}</span>
    </Col>
    {text && (
      <Col xs={12} md={10} xl={11}>
        <span className="education-info-text">{text}</span>
      </Col>
    )}
  </Row>
);

const Education = (): JSX.Element => (
  <Section id="education" className="education" title="Education">
    <Container>
      <TimelineHeader
        name={"James Madison University"}
        title={"Computer Science, B.S."}
        location={"Harrisonburg, VA"}
        date={"May 2020"}
      />
      <Container fluid className="mb-3 mb-md-2">
        {educationInfo.map(({ title, text }: EducationInfoProps) => (
          <EducationInfo title={title} text={text} />
        ))}
      </Container>
      <Container fluid>
        <h6>Relevant Coursework:</h6>
        <HorizontalList list={coursework} />
      </Container>
    </Container>
  </Section>
);

export default Education;
