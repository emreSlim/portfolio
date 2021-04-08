import React from "react";

export default function Footer({ data }) {
  if (data == null) return null;

  const networks = data.social.map((network) => {
    return (
      <li key={network.name}>
        <a href={network.url}>
          <i className={network.className}></i>
        </a>
      </li>
    );
  });

  return (
    <footer>
      <div className="row">
        <div className="twelve columns">
          <ul className="social-links">{networks}</ul>

          <ul className="copyright">
            <li>&copy; Copyright 2021 Nordic Giant</li>
            <li>
              Design by{" "}
              <a title="Styleshout" href="http://www.styleshout.com/">
                Styleshout
              </a>{" "}
              &{" "}
              <a
                title="Imran"
                href="https://www.linkedin.com/in/imran-qureshi-92b822154/"
              >
                Imran AKA Emre
              </a>
            </li>
          </ul>
        </div>
        <div id="go-top">
          <a className="smoothscroll" title="Back to Top" href="#home">
            <i className="icon-up-open"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
