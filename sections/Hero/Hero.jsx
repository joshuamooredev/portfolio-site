import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>Front-End Developer</h2>
          <p>
            Crafting <span className={styles.highlight}>sleek</span>, responsive
            websites with <span className={styles.highlight}>precision</span>.
          </p>
        </div>
        <div className={styles.imageBox}>
          <div className={styles.neonWrapper}>
            <Image
              src="/images/hero/hero-profile.png"
              alt="Developer profile photo"
              width={180}
              height={180}
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
