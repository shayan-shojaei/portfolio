import "./Work.scss";

export default function Work() {
  return (
    <div className="page">
      <div className="page-content">
        <span className="page-route">work experience/</span>
        <div className="work">
          <WorkItem
            title="Back End Developer"
            organization="Supnex"
            startYear="2022"
            endYear="PRESENT"
            description="Supnex is an active company in the field of IT."
            points={[
              "Deliver performant software using modern software development tools and best-practices.",
              "Communicate among different teams to understand and satisfy business needs.",
            ]}
            technologies={[
              "NestJS",
              "MongoDB",
              "Node",
              "TypeScript",
              "JavaScript",
            ]}
          />

          <WorkItem
            title="Front End Developer"
            organization="Trayl"
            startYear="2020"
            endYear="2022"
            description="Trayl is an online intercity transportation solution."
            points={[
              "Used modern industry-standard technologies such as NextJS, React, GraphQL, Sass, etc.",
              "Used Git and GitHub as the version control system to better manager and share code across the team.",
              "Implemented completely custom components and styling to match the exact designs created.",
              "Identified and resolved website performance flags to optimize speed.",
              "Developed designs to meet specific requirements such as quick-loading sites with particular layouts.",
            ]}
            technologies={[
              "ReactJS",
              "NextJS",
              "Node",
              "GraphQL",
              "Webpack",
              "Sass",
              "JavaScript",
              "TypeScript",
              "HTML/CSS",
            ]}
          />

          <WorkItem
            title="Freelance Android App Developer"
            organization="Self-Employed"
            startYear="2016"
            endYear="2019"
            points={[
              "Created mobile applications using native technologies",
              "Wrote clear, concise code in Java and Kotlin.",
              "Used industry-standard libraries to improve performance and keep up to date with the latest versions of Android.",
              "Published 15+ Android apps from inception to deployment, supervising all phases.",
              "Successfully integrated push notifications into apps, bolstering user engagement.",
              "Provided dedicated support and timely issue resolution to clients following successful app launch.",
            ]}
            technologies={[
              "Android SDK",
              "Java",
              "Kotlin",
              "Andoird Studio",
              "Flutter",
              "React Native",
              "RxJava",
              "Firebase",
              "Retrofit",
            ]}
          />
        </div>
      </div>
    </div>
  );
}

const WorkItem = (props: {
  title: string;
  organization: string;
  startYear: string;
  endYear: string;
  description?: string;
  points?: string[];
  technologies?: string[];
}) => (
  <article className="work-item">
    <p>
      <h3>{props.title}</h3>
      <span>
        {props.organization} | {props.startYear} - {props.endYear}
      </span>
    </p>
    <span className={"work-item-description"}>{props.description}</span>
    {Array.isArray(props.points) && (
      <ul>
        {props.points.map((point) => (
          <li>{point}</li>
        ))}
      </ul>
    )}
    {Array.isArray(props.technologies) && (
      <div className="work-chips">
        <h4>Technologies</h4>
        {props.technologies.map((tech) => (
          <span className="work-chip">{tech}</span>
        ))}
      </div>
    )}
  </article>
);
