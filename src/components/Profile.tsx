import React from "react";
import { Container } from "react-bootstrap";
import Section from "./Section";

const profile: { [key: string]: string | string[] } = {
  fullName: "William H. Lovo",
  location: "Harrisonburg, VA",
  education: "James Madison University",
  major: "Computer Science",
  minors: ["Mathematics", "Data Analytics"],
  graduated: "May 2020",
  research: "Machine Learning",
};

const links: string[][] = [
  ["github", "https://github.com/wlovo", "wlovo"],
  ["linkedin", "https://linkedin.com/in/william-lovo/", "William Lovo"],
  ["research", "https://dl.acm.org/doi/10.1145/3323994.3369892", "POST"],
];

const Profile = (): JSX.Element => {
  const profileText = JSON.stringify(profile, null, 2);
  const linkText = (
    <>
      {"{\n"}
      {links.map(([key, link, display], index) => (
        <React.Fragment key={key}>
          {`  "${key}": "`}
          <a target="_blank" rel="nofollow noopener noreferrer" href={link}>
            {display}
          </a>
          {index < links.length - 1 ? '",\n' : '"\n'}
        </React.Fragment>
      ))}
      {"}"}
    </>
  );

  return (
    <Section id="profile" className="profile">
      <Container className="code-window" data-bs-theme="light">
        <Container className="console">
          <p className="entry">const wlovo = Person.find(&quot;William Lovo&quot;)</p>
          <p className="entry">wlovo.getProfile()</p>
          <pre className="response">{profileText}</pre>
          <p className="entry">wlovo.getLinks()</p>
          <pre className="response">{linkText}</pre>
          <p className="entry">wlovo.getResume()</p>
          <pre className="response">
            Coming soon!
            {/* {'{\n  "resume": "'}
            <a target="_blank" rel="nofollow noopener noreferrer" href={Resume}>
              Resume
            </a>
            {'"\n}'} */}
          </pre>
          <p className="entry">wlovo.nextProspect()</p>
        </Container>
      </Container>
    </Section>
  );
};

export default Profile;
