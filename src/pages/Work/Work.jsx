import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {Reset} from "styled-reset";
import styles from "./Work.module.css";

function Work() {
  const [works, setWorks] = useState([]);

  useEffect(() => {
    const fetchWorks = async () => {
      try {
        const response = await fetch("http://localhost:5173/api/portfolioWorks.json");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setWorks(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchWorks();
  }, []);

  return (
    <div className={styles.works}>
      <Reset />
      <div className={styles.worksTitle}>
        <h1>Projects</h1>
      </div>
      <div className={styles.workBody}>
        {works.map((work, index) => (
          <div className={styles.workCard} key={work.id}>
            <img className={styles.workImage} alt={work.name} src={work.image} />
            <div className={styles.workText}>
              <h3>{work.name}</h3>
              <p>
                <span>{work.subject}</span> • {work.technologies}
              </p>
              <p>{work.description2}</p>
              {index === 0 ? (
                <Link to={`/projects/${work.id}`} className={styles.readMoreButton}>
                  Read More
                </Link>
              ) : (
                <p style={{ color: "#94af9f", fontSize: "1.2rem"}}>Coming Soon</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Work;
