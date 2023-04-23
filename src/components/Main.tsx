import Education from "./Education";
import Experience from "./Experience";
import Profile from "./Profile";
import Projects from "./Projects";

import React from "react";

const Main = (): JSX.Element => {
  return (
    <div>
      <Profile />
      <Experience />
      <Education />
      <Projects />
    </div>
  );
};

export default Main;
