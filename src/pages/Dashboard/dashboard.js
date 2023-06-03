import styles from "./dashboard.module.css";

import { Link } from "react-router-dom";

//hooks
import { useAuthValue } from "../../context/AuthContext";
import { useFetchDocs } from "../../hooks/useFetchDocument";
import { useDeleteDocument } from "../../hooks/useDeletDocument";

const Dashboard = () => {
  const { user } = useAuthValue();
  const uid = user.uid;

  //post do usuario
  const { docs: posts, loading } = useFetchDocs("posts", null, uid);

  const {deleteDocument} = useDeleteDocument("posts");

  if(loading) {
    return <p>Carregando...</p>
  }
  return (
    <section>
      <h1>Dashboard</h1>
      <p>gerencie seus posts</p>

      {posts && posts.length === 0 ? (
        <div className={styles.noposts}>
          <p>não foram encontrados posts</p>
          <Link to="/posts/create" className="btn">
            Criar primeiro posts
          </Link>
        </div>
      ) : (
        <>
          <div>
            <span>Titulo</span>
            <span>Ações</span>
          </div>
          {posts &&
            posts.map((post) => (
              <div key={post.id} className={styles.post_row}>
                <p>{post.title}</p>
                <div className={styles.buttons}>
                  <Link to={`/posts/${post.id}`} className="btn btn-outline">
                    Ver
                  </Link>
                  <Link
                    to={`/posts/edit/${post.id}`}
                    className="btn btn-outline"
                  >
                    Editar
                  </Link>
                  <button
                    onClick={() => deleteDocument(post.id)}
                    className="btn btn-outline btn-danger"
                  >
                    Excluir
                  </button>
                </div>
              </div>
            ))}
        </>
      )}
    </section>
  );
};

export default Dashboard;
