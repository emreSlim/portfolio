import Zmage from "react-zmage";
import React from "react";

export default function Portfolio({ data }) {
  if (data == null) return null;

  const projects = data.projects.map((project, index) => {
    let projectImage = "images/portfolio/" + project.image;

    return (
      <div key={index} className="columns portfolio-item">
        <div className="item-wrap">
          <Zmage alt={project.title} src={projectImage} />
          <a style={{ textAlign: "center" }} href={project.url} target="blank">
            {project.title}
          </a>
        </div>
      </div>
    );
  });

  return (
    <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Projects.</h1>

          <div
            id="portfolio-wrapper"
            className="bgrid-quarters s-bgrid-thirds cf"
          >
            {projects}
          </div>
        </div>
      </div>
    </section>
  );
}
