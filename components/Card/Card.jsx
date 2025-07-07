import React from "react";
import styles from "./Card.module.css";

export default function Card({ title, description, tags, liveDemo, github, image, imagePosition = "center" }) {
  return (
    <div className={styles.neonWrapper}>
      <div className={styles.card}>
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
            <span key={index} className={styles.tag}>{tag}</span>
          ))}
        </div>
        <div className={styles.links}>
          <a href={liveDemo} target="_blank" rel="noopener noreferrer">Live Demo</a> •{" "}
          <a href={github} target="_blank" rel="noopener noreferrer">{" "} GitHub</a>
        </div>
      </div>
    </div>
  );
}
