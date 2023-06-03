import React from "react";
import styles from "./post.module.css";
import { useFetchDocument } from "../../hooks/useFetchDocUnit";

//hooks
import { useParams } from "react-router-dom";

const Post = () => {
  const { id } = useParams();
  const { document: post, loading } = useFetchDocument("posts", id);
  return (
    <div>
      {loading && <p>carregando post</p>}
      {post && (
        <>
          <h1>{post.title}</h1>
          <img src={post.image} alt={post.title} width={500} /> 
          <p>{post.body}</p>
          <div className={styles.tags}>
            {post.tagsArr.map((tag) => (
              <p key={tag}><span>#</span>{tag}</p>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Post;
