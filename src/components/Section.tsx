import React from "react";
import classNames from "classnames";
import { Container } from "react-bootstrap";

interface Props {
  children?: React.ReactNode;
  className?: string;
  id: string;
  title?: string;
}

const Section = ({ children, className, id, title }: Props): JSX.Element => (
  <Container fluid id={id} className={classNames("section", className)}>
    {title && <h3>{title}</h3>}
    {children}
  </Container>
);

export default Section;
