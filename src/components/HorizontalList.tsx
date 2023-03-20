import React from "react";
import { Col, Row } from "react-bootstrap";
import classNames from "classnames";

interface Props {
  list: string[];
}

const HorizontalList = ({ list }: Props): JSX.Element => (
  <Row as="ul" xs={1} md={2} xl={3} className={classNames("horizontal-list")}>
    {list &&
      list.map((item) => (
        <Col as="li" key={`${item}`}>
          {item}
        </Col>
      ))}
  </Row>
);
export default HorizontalList;
