import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Reset } from "styled-reset";
import styles from "./Homepage.module.css";
import natashaPicture from "/Users/natashacaruso/Desktop/EDIT/React/React Projects/Portfolio/src/assets/images/natashaPicture.jpeg";
import myResume from "/Users/natashacaruso/Desktop/EDIT/React/React Projects/Portfolio/src/assets/myResume.pdf";
import baloon from "/Users/natashacaruso/Desktop/EDIT/React/React Projects/Portfolio/src/assets/images/baloon.svg";

const Homepage = () => {
  const [showBaloon, setShowBaloon] = useState(false);
  const [posts, setPosts] = useState([]);
  const [works, setWorks] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("http://localhost:5173/api/blogPosts.json");
      const data = await response.json();
      setPosts(data);
    };
    const fetchWorks = async () => {
      const response = await fetch(
        "http://localhost:5173/api/portfolioWorks.json"
      );
      const data = await response.json();
      setWorks(data);
    };

    const timeoutId = setTimeout(() => {
      setShowBaloon(true);
    }, 2000);

    fetchPosts();
    fetchWorks();

    return () => clearTimeout(timeoutId);
  }, []);

  const displayedPosts = posts.slice(0, 2);

  return (
    <div className={styles.homepage}>
      <Reset />
      <div className={styles.profile}>
        <div className={styles.profileText}>
          <h1>Hi, I am Natasha,</h1>
          <h1>Front-end Developer</h1>
          <p>
            with a keen eye for design and a love for crafting seamless digital
            experiences. As you explore my portfolio, you will discover a
            collection of projects that showcase my proficiency in{" "}
            <span>HTML</span>, <span>CSS</span>, and <span>JavaScript</span>.
            Through each project, I strive to merge creativity with
            functionality, leaving a lasting impression that goes beyond
            aesthetics. Join me on this journey of innovation and design, where
            every line of code tells a story of my commitment to excellence in
            front-end development.
          </p>
          <a
            href={myResume}
            download="myResume.pdf"
            className={styles.resumeButton}
          >
            Download Resume
          </a>
        </div>
        <div className={styles.imageContainer}>
          <img
            src={natashaPicture}
            alt="Natasha"
            className={`${styles.profileImage} ${
              showBaloon && styles.imageVisible
            }`}
          />
          {showBaloon && (
            <img
              src={baloon}
              alt="Balloon"
              className={`${styles.baloonImage} ${styles.imageVisible}`}
            />
          )}
        </div>
      </div>
      <div className={styles.post}>
        <div className={styles.postHeader}>
          <h3>Recent Posts</h3>
          <Link to="/blog" className={styles.viewButton}>
            View All
          </Link>
        </div>
        <div className={styles.postBody}>
          {displayedPosts.map((post) => (
            <div className={styles.postCard} key={post.id}>
              <h3>{post.title}</h3>
              <p>
                <span>{post.date}</span> • {post.tags}
              </p>
              <img className={styles.blogImage} alt="" src={post.image[0]} />

              <p>{post.preview.slice(0, 200)}...</p>
              <Link to={`/blog/${post.id}`} className={styles.readMoreButton}>
                Read More
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.work}>
        <div className={styles.workHeader}>
          <h3>Featured Projects</h3>
          <Link to="/projects" className={styles.viewButton}>
            View All
          </Link>
        </div>
        <div className={styles.workBody}>
          {works.map((work, index) => (
            <div className={styles.workCard} key={work.id}>
              <img className={styles.workImage} alt="" src={work.image} />
              <div className={styles.workText}>
                <h3>{work.name}</h3>
                <p>
                  <span>{work.year}</span> • {work.subject}
                </p>
                <p>{work.description}</p>
                {index === 0 ? (
                  <Link
                    to={`/projects/${work.id}`}
                    className={styles.readMoreButton}
                  >
                    Read More
                  </Link>
                ) : (
                  <Link to="/projects" className={styles.readMoreButton}>
                    Read More
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
