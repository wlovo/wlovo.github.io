import React from "react";
import Profile from "./Profile";
import Experience from "./Experience";
import Education from "./Education";

const Main = (): JSX.Element => {
  return (
    <div>
      <Profile />
      <Education />
      <Experience />
    </div>
  );
};

export default Main;
