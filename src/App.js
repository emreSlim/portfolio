import React, { useEffect, useState } from "react";
import ReactGA from "react-ga";
import $ from "jquery";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";
import Portfolio from "./Components/Portfolio";

export default function App() {
  const [resumeData, setResumeData] = useState();

  useEffect(() => {
    ReactGA.initialize("UA-110570651-1");
    ReactGA.pageview(window.location.pathname);
    getResumeData();
  }, [setResumeData]);

  function getResumeData() {
    $.ajax({
      url: "./resumeData.json",
      dataType: "json",
      cache: false,
      success: setResumeData,
      error: function (xhr, status, err) {
        console.log(err);
        alert(err);
      },
    });
  }

  if (resumeData == null) return <p>loading..</p>;

  return (
    <div className="App">
      <Header data={resumeData.main} />
      <About data={resumeData.main} />
      <Resume data={resumeData.resume} />
      <Portfolio data={resumeData.portfolio} />
      <Contact data={resumeData.main} />
      <Footer data={resumeData.main} />
    </div>
  );
}
