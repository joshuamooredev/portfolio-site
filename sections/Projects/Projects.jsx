import React from "react";
import styles from "./Projects.module.css";
import Card from "@/components/Card/Card";

const projects = [
  {
    title: "Portfolio Website",
    description: "Personal portfolio site showcasing my work.",
    tags: ["React", "CSS", "Three.js"],
    liveDemo: "https://your-portfolio-demo.com",
    github: "https://github.com/your-portfolio-repo"
  },
  {
    title: "Weather App",
    description: "A weather forecasting app using OpenWeatherMap API.",
    tags: ["React", "API", "Tailwind"],
    liveDemo: "https://your-weather-demo.com",
    github: "https://github.com/your-weather-repo"
  },
  {
    title: "Task Manager",
    description: "A productivity tool to manage daily tasks.",
    tags: ["Next.js", "MongoDB", "CSS"],
    liveDemo: "https://your-taskmanager-demo.com",
    github: "https://github.com/your-taskmanager-repo"
  }
];

export default function Projects() {
  return (
    <div className={styles.projects}>
      <h2 className={styles.title}>Featured Projects</h2>
      <div className={styles.cardContainer}>
        {projects.map((project, index) => (
          <Card
            key={index}
            title={project.title}
            description={project.description}
            tags={project.tags}
            liveDemo={project.liveDemo}
            github={project.github}
          />
        ))}
      </div>
    </div>
  );
}
