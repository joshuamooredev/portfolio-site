import React from "react";
import styles from "./Card.module.css";

export default function Card({
  title,
  description,
  tags,
  liveDemo,
  github,
  image,
  imagePosition = "center",
}) {
  const openInNewTab = () => {
    const newWindow = window.open(liveDemo, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };
  return (
    <div className={styles.neonWrapper}>
      <div
        className={styles.card}
        onClick={openInNewTab}
        role="link" // a11y: treat div like a link
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && openInNewTab()}
      >
        <div className={styles.imageWrapper}>
          <img
            src={image}
            alt={title}
            className={styles.image}
            style={{ objectPosition: imagePosition }}
          />
        </div>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.tags}>
          {tags.map((tag, index) => (
            <span key={index} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
        <div className={styles.links}>
          <a href={liveDemo} target="_blank" rel="noopener noreferrer">
            Live Demo
          </a>
          •
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            style={{ margin: "0em 0.5em" }}
          >
            {" " + " "} GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
