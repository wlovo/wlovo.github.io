import Link, { LinkType } from "./Link";

import React from "react";

export interface KeyedLink extends LinkType {
  key: string;
}

interface JsonifiedFragmentProps {
  links: KeyedLink[];
}

const DBL_SPACE = "  ";

const JsonifiedFragment = ({ links }: JsonifiedFragmentProps): JSX.Element => {
  const jsonifiedLines = links.map((line, index) => {
    const { key } = line;

    return (
      <React.Fragment key={key}>
        {`${DBL_SPACE}"${key}": "`}
        <Link {...line} />
        {index < links.length - 1 ? '",\n' : '"'}
      </React.Fragment>
    );
  });

  return (
    <>
      &#123;{"\n"}
      {jsonifiedLines}
      {"\n"}&#125;
    </>
  );
};

export default JsonifiedFragment;
