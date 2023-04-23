import Resume from "../files/Resume-4.0.pdf";
import JsonifiedFragment, { KeyedLink } from "./JsonifiedFragment";
import Section from "./Section";

import moment from "moment";
import React from "react";
import { Container } from "react-bootstrap";

const experienceDuration = moment.duration(moment().diff(moment("2019-06-01")))

const profile = {
  fullName: "William H. Lovo",
  location: "Harrisonburg, VA",
  experience: {
    time: `${experienceDuration.years()} years and ${experienceDuration.months()} months`,
    current: {
      company: "Amazon Web Services",
      title: "Software Development Engineer II",
      since: "July 2020",
    },
  },
  education: {
    name: "James Madison University",
    major: "Computer Science",
    research: "Machine Learning",
    graduated: "May 2020",
  },
};

const links: KeyedLink[] = [
  { key: "github", display: "wlovo", link: "https://github.com/wlovo" },
  { key: "linkedin", display: "William Lovo", link: "https://linkedin.com/in/william-lovo" },
  { key: "research", display: "POST", link: "https://dl.acm.org/doi/10.1145/3323994.3369892" },
];

const resume: KeyedLink = { key: "resume", display: "Resume", link: Resume as string };

const Profile = (): JSX.Element => {
  const profileFragment = JSON.stringify(profile, null, 2);

  return (
    <Section id="profile" className="profile">
      <Container className="code-window" data-bs-theme="light">
        <Container className="console">
          <p className="entry">const wlovo = Person.find(&quot;William Lovo&quot;)</p>
          <p className="entry">wlovo.getProfile()</p>
          <pre className="response">{profileFragment}</pre>
          <p className="entry">wlovo.getLinks()</p>
          <pre className="response">
            <JsonifiedFragment links={links} />
          </pre>
          <p className="entry">wlovo.getResume()</p>
          <pre className="response">
            <JsonifiedFragment links={[resume]} />
          </pre>
          <p className="entry">wlovo.nextProspect()</p>
        </Container>
      </Container>
    </Section>
  );
};

export default Profile;
