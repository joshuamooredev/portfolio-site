import React from "react";
import styles from "./Projects.module.css";
import Card from "@/components/Card/Card";

const projects = [
  {
    title: "Impaction",
    description:
      "A platform gamifying real-world impact through blockchain tech.",
    tags: ["React", "GSAP", "Three.js"],
    liveDemo: "https://impaction.global",
    github: "https://github.com/Joshua551502/ImpactSite",
    image: "/images/projects/impaction_site_image.png",
    imagePosition: "top",
  },
  {
    title: "MetaFundWe",
    description:
      "A donation system built to verify and reward charitable giving.",
    tags: ["React", "CSS", "Three.js"],
    liveDemo: "https://metafundwe.com/",
    github: "https://github.com/MetaFundWe-Inc/cause_onboarding_metafundwe_v1",
    image: "/images/projects/metafundwe_site_image.png",
    imagePosition: "top",
  },
  {
    title: "Portfolio Site",
    description: "My personal site to showcase skills and selected work.",
    tags: ["Next.js", "Three.js", "CSS"],
    liveDemo: "https://your-taskmanager-demo.com",
    github: "https://github.com/Joshua551502/portfolio-site",
    image: "/images/projects/portfolio_site_image.png",
    imagePosition: "top",
  },
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
            image={project.image}
            imagePosition={project.imagePosition}
          />
        ))}
      </div>
    </div>
  );
}
