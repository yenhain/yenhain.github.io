import React, {useState} from "react";


export default function ProjectCard({
  title,
  repoLink,
  demoLink,
  imgSrc,
  imgAlt,
  videoSrc,
  description,
  technologies,
  features,

}) {

  const [showVideo,setShowVideo] = useState(false)

  return (
    <div className="project-card">
      <h3>
        <a>
          {title}
        </a>
      </h3>
      {!showVideo ? (
        <img
          src={imgSrc}
          alt={imgAlt}
          style={{ cursor: videoSrc ? "pointer" : "default" }}
          onClick={() => videoSrc && setShowVideo(true)}
        />
      ) : (
        <video
          width="100%"
          controls
          autoPlay
          onEnded={() => setShowVideo(false)} // Return to image after video ends
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

      <p>
        <strong>Description:</strong> {description}
      </p>
      <p>
        <strong>Technologies:</strong> {technologies}
      </p>
      <ul>
        {features.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <a
        href={repoLink}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-link"
      >
        GitHub Repo
      </a>
      {demoLink && (
        <>
          <br />
          <br />
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-link"
          >
            Live Demo
          </a>
        </>
      )}
    </div>
  );
}
