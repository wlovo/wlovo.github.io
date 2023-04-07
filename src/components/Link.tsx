import React from "react";

export interface LinkType {
  display: string;
  link: string;
}

const Link = ({ link, display }: LinkType) => {
  return (
    <a target="_blank" rel="nofollow noopener noreferrer" href={link}>
      {display}
    </a>
  );
};

export default Link;
