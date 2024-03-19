import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Reset } from "styled-reset";
import styles from "./BlogPost.module.css";

function BlogPost() {
  const { postId } = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch(`http://localhost:5173/api/blogPosts.json`);
      const data = await response.json();

      const selectedPost = data.find((post) => post.id === parseInt(postId));

      setPost(selectedPost || {});
    };

    fetchPost();
  }, [postId]);

  if (!post.id) {
    return null;
  }

  return (
    <div className={styles.blogPost} key={post.id}>
      <Reset />
      <div className={styles.blogPostWrapper}>
        <div className={styles.blogPostHeader}>
          <h1 className={styles.blogPostTitle}>{post.title}</h1>
          <div className={styles.blogPostInfo}>
            <p>
              <span>Published:</span> {post.date} • {post.tags}
            </p>
          </div>
          <img className={styles.blogPostImg} alt="" src={post.image[0]} />
        </div>
        <p className={styles.blogPostIntro}>{post.desIntro}</p>
        <p className={styles.blogPostSpan}>{post.desP2Title}</p>
        <p className={styles.blogPostDes}>{post.desP2}</p>
        <p className={styles.blogPostSpan}>{post.desP3Title}</p>
        <p className={styles.blogPostDes}>
          <ol style={{ lineHeight: "2rem" }}>
            {post.desP3.map((item, index) => (
              <li key={index} style={{ marginBottom: "1rem" }}>
                {item}
              </li>
            ))}
          </ol>
        </p>
        <img className={styles.blogPostImg} alt="" src={post.image[1]} />
        <p className={styles.blogPostSpan}>{post.desP4Title}</p>
        {Array.isArray(post.desP4) ? (
          <p className={styles.blogPostDes}>
            <ol style={{ lineHeight: "2rem" }}>
              {post.desP4.map((item, index) => (
                <li key={index} style={{ marginBottom: "1rem" }}>
                  {item}
                </li>
              ))}
            </ol>
          </p>
        ) : (
          <p className={styles.blogPostDes}>{post.desP4}</p>
        )}
        <img className={styles.blogPostImg} alt="" src={post.image[2]} />
        <p className={styles.blogPostSpan}>{post.desP5Title}</p>
        {Array.isArray(post.desP5) ? (
          <p className={styles.blogPostDes}>
            <ol style={{ lineHeight: "2rem" }}>
              {post.desP5.map((item, index) => (
                <li key={index} style={{ marginBottom: "1rem" }}>
                  {item}
                </li>
              ))}
            </ol>
          </p>
        ) : (
          <p className={styles.blogPostDes}>{post.desP5}</p>
        )}
        <p className={styles.blogPostConclusion}>{post.desConclusion}</p>
        <Link to="/blog" className={styles.viewButton}>
          Return to Posts
        </Link>
      </div>
    </div>
  );
}

export default BlogPost;
