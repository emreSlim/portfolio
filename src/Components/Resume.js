import React from "react";

export default function Resume({ data }) {
  if (data == null) return null;
  let { skillmessage, work, skills } = data;

  function getRandomColor() {
    let letters = "12345678";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 8)];
    }
    return color;
  }

  work = work.map(function (work, index) {
    return (
      <div key={work.company + index}>
        <h3>{work.company}</h3>
        <p className="info">
          {work.title}
          <span>&bull;</span> <em className="date">{work.years}</em>
        </p>
        <p>{work.description}</p>
      </div>
    );
  });

  skills = skills.map((skills, index) => {
    const backgroundColor = getRandomColor();
    const className = "bar-expand " + skills.name.toLowerCase();
    const width = skills.level;

    return (
      <li style={{ backgroundColor: "#aaa" }} key={skills.name + index}>
        <span style={{ width, backgroundColor }} className={className}></span>
        <em>{skills.name}</em>
      </li>
    );
  });

  return (
    <section id="resume">
      <div className="row work">
        <div className="three columns header-col">
          <h1>
            <span>Work</span>
          </h1>
        </div>

        <div className="nine columns main-col">{work}</div>
      </div>

      <div className="row skill">
        <div className="three columns header-col">
          <h1>
            <span>Skills</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <p>{skillmessage}</p>

          <div className="bars">
            <ul className="skills">{skills}</ul>
          </div>
        </div>
      </div>
    </section>
  );
}
