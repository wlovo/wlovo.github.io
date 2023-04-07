import React from "react";
import { Col, Row } from "react-bootstrap";

export interface TimelineHeaderProps {
  name: string;
  title: string;
  location: string;
  date: string;
}

const TimelineHeader = ({ name, title, location, date }: TimelineHeaderProps): JSX.Element => {
  return (
    <>
      <Row className="d-flex align-items-center headline-row">
        <Col xs={12} md className="desc-name">
          {name}
        </Col>
        <Col xs="auto" className="desc-info-text">
          {location}
        </Col>
      </Row>
      <Row className="d-flex align-items-center headline-row">
        <Col xs={12} md className="desc-title">
          {title}
        </Col>
        <Col xs="auto" className="desc-info-text">
          {date}
        </Col>
      </Row>
    </>
  );
};

export default TimelineHeader;
