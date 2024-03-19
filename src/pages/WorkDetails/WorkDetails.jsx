import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Reset } from "styled-reset";
import styles from "./WorkDetails.module.css";

function WorkDetails() {
  const { workId } = useParams();
  const [work, setWork] = useState({});

  useEffect(() => {
    const fetchWork = async () => {
      const response = await fetch(`http://localhost:5173/api/portfolioWorks.json`);
      const data = await response.json();

      const selectedWork = data.find((work) => work.id === parseInt(workId));
      setWork(selectedWork || {});
    };

    fetchWork();
  }, [workId]);

  if (!work.id) {
    return null;
  }

  return (
    <div className={styles.workDetail} key={work.id}>
      <Reset />
      <div className={styles.workDetailWrapper}>
        <div className={styles.workDetailHeader}>
          <h1 className={styles.workDetailTitle}>{work.name}</h1>
          <div className={styles.workDetailInfo}>
            <p>
              <span>{work.subject}</span> • {work.technologies}
            </p>
          </div>
        </div>
        <div className={styles.divider}>
          <img className={styles.workDetailImg} alt="" src={work.image} />
          <div className={styles.topText}>
            <p className={styles.workDetailIntro}>{work.desIntro}</p>
            <a className={styles.projectLink} href={work.link} target="_blank" rel="noopener noreferrer">
              Project Repository
            </a>
          </div>
        </div>
        <div className={styles.cardGrid}>
          {work.desTitle.map((title, index) => (
            <div className={styles.card} key={index}>
              <p className={styles.workDetailSpan}>{title}</p>
              <p className={styles.workDetailDes}>{work.desP2[index]}</p>
            </div>
          ))}
        </div>
        <div className={styles.workVideo}>
          <video
            className={styles.workDetailVideo}
            src={work.video}
            controls
            autoPlay
            loop
            muted
          />
        </div>
        <p className={styles.workDetailConclusion}>{work.desConclusion}</p>
        <Link to="/projects" className={styles.viewButton}>
          Return to Projects
        </Link>
      </div>
    </div>
  );
}

export default WorkDetails;
