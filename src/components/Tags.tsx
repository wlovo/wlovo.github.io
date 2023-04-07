import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export interface TagProps {
  tags: string[];
}

const Tags = ({ tags }: TagProps): JSX.Element => (
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

export default Tags;
