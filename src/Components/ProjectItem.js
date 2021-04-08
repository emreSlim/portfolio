import React, { useEffect, useRef, useState } from "react";
import { OverlayTrigger, Popover } from "react-bootstrap";
import { findDOMNode } from "react-dom";
import ReactPlayer from "react-player/file";
import screenfull from "screenfull";

export default function ProjectItem({ project }) {
  const [isPlaying, setIsPlaying] = useState(false);

  const [showControls, setControls] = useState(false);

  useEffect(() => {
    screenfull.on("change", screenfullChangeHandler);

    function screenfullChangeHandler() {
      setControls(screenfull.isFullscreen ? true : false);
    }
    return () => {
      screenfull.off("change", screenfullChangeHandler);
    };
  }, []);

  const [size, setSize] = useState(1);

  const popover = (title, category) => (
    <Popover
      id="popover-basic"
      style={{
        width: 330,
        padding: 5,
        border: "2px solid #888888",
        borderRadius: 5,
        backgroundColor: "#eeeeee",
      }}
    >
      <Popover.Title
        style={{
          textAlign: "center",
          backgroundColor: "#cccccc",
          borderBottom: "1px solid #aaaaaa",
        }}
        as="h3"
      >
        {title}
      </Popover.Title>
      <Popover.Content style={{ color: "#444444" }}>{category}</Popover.Content>
    </Popover>
  );

  const videoRef = useRef();

  const videoURL = "videos/" + project.video;

  function mouseOverHandler() {
    window.innerWidth > 440 && setSize(window.innerWidth > 600 ? 2.2 : 1.8);
    setIsPlaying(true);
  }
  function mouseOutHandler() {
    setSize(1);
    setTimeout(() => setIsPlaying(false), 100);
  }

  function dblClickHandler() {
    setIsPlaying(true);
    screenfull.request(findDOMNode(videoRef.current));
  }

  return (
    <div className="columns portfolio-item portfolio-item-container">
      <div
        className="item-wrap portfolio-item video-wrapper"
        style={{
          transform: `scale(${size})`,
          zIndex: isPlaying && 999,
          alignSelf: isPlaying && "self-end",
        }}
        onClick={dblClickHandler}
        onMouseEnter={mouseOverHandler}
        onMouseLeave={mouseOutHandler}
      >
        <ReactPlayer
          style={{ display: "flex" }}
          muted
          controls={showControls}
          ref={videoRef}
          loop={true}
          height="100%"
          width="100%"
          playing={isPlaying}
          url={videoURL}
        />
      </div>
      <div
        className="item-wrap link-wrapper"
        style={{ backgroundColor: "transparent" }}
      >
        <OverlayTrigger
          placement="auto"
          overlay={popover(project.title, project.category)}
        >
          <a
            className="project-title"
            style={{ color: "#fff" }}
            href={project.url}
            target="blank"
          >
            {project.title}
          </a>
        </OverlayTrigger>
      </div>
    </div>
  );
}
