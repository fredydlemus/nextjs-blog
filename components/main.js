import styles from "./main.module.css";
import Link from "next/link";

export default function Main() {
  return (
    <main className={styles.siteMain}>
      <section className={styles.featured}>
        <h2>Destacados</h2>
        <div className={styles.featuredPost}>
          <Link href="#">
            <img src="" alt="Featured Post 1" />
          </Link>
          <h3>
            <Link href="#">Título del artículo destacado 1</Link>
          </h3>
          <p>Descripción del artículo destacado 1</p>
        </div>
        <div className={styles.featuredPost}>
          <Link href="#">
            <img src="" alt="Featured Post 1" />
          </Link>
          <h3>
            <Link href="#">Título del artículo destacado 2</Link>
          </h3>
          <p>Descripción del artículo destacado 2</p>
        </div>
      </section>
      <section className={styles.latestPosts}>
        <h2>Últimos artículos</h2>
        <div className={styles.post}>
          <Link href="#">
            <img src="" alt="Post 1" />
          </Link>
          <h3>
            <Link href="#">Título del artículo 1</Link>
          </h3>
          <p>Descripción del artículo 1</p>
        </div>
        <div className={styles.post}>
          <Link href="#">
            <img src="" alt="Post 1" />
          </Link>
          <h3>
            <Link href="#">Título del artículo 2</Link>
          </h3>
          <p>Descripción del artículo 2</p>
        </div>
        <div className={styles.post}>
          <Link href="#">
            <img src="" alt="Post 1" />
          </Link>
          <h3>
            <Link href="#">Título del artículo 3</Link>
          </h3>
          <p>Descripción del artículo 3</p>
        </div>
      </section>
    </main>
  );
}
