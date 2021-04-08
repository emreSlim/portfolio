import React from "react";
import ProjectItem from "./ProjectItem";

export default function Portfolio({ data }) {
  if (data == null) return null;

  const projects = data.projects.map((project, index) => (
    <ProjectItem project={project} key={index} />
  ));

  return (
    <section id="portfolio">
      <div className="row">
        <div>
          <h1>Check Out Some of My Projects.</h1>

          <div id="portfolio-wrapper">{projects}</div>
        </div>
      </div>
    </section>
  );
}
