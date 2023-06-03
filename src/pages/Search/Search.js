import styles from "./Search.module.css";
import PostDetail from "../../components/postDetail";

//hooks
import { useQuery } from "../../hooks/useQuery";
import { useFetchDocs } from "../../hooks/useFetchDocument";
import { Link } from "react-router-dom";

const Search = () => {
  const query = useQuery();
  const search = query.get("q");

  const { docs: posts } = useFetchDocs("posts", search);

  return (
    <div className={styles.search_container}>
      <div>
        <h1>Resultados</h1>
        <div>
          {posts && posts.length === 0 && (
            <div className={styles.noposts}>
              <p>Não foram encontrados posts a partir da sua busca...</p>
              <Link to="/" className="btn btn-dark">
                VOLTAR
              </Link>
            </div>
          )}
          {posts &&
            posts.map((post) => <PostDetail key={post.id} post={post} />)}
        </div>
      </div>
    </div>
  );
};

export default Search;
