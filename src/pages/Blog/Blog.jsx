import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {Reset} from "styled-reset";
import styles from "./Blog.module.css";

function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          "http://localhost:5173/api/blogPosts.json"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div className={styles.posts}>
      <Reset />
      <div className={styles.postsTitle}>
        <h1>Blog</h1>
      </div>
      <div className={styles.postBody}>
        {posts.map((post) => (
          <div className={styles.postCard} key={post.id}>
            <h3>{post.title}</h3>
            <p>
              <span>{post.date}</span> • {post.tags}
            </p>
            <div className={styles.blogImageContainer}>
              <img
                className={styles.blogImage}
                alt={post.title}
                src={post.image[0]}
              />
              <div className={styles.postPreview}>
                <p>{post.preview}</p>
                  <Link to={post.id ? `/blog/${post.id}` : "/error"} className={styles.readMoreButton}>
                  Read More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
