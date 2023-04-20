import styles from "./main.module.css";
import Link from "next/link";
import Date from "../components/date";

export default function Main({ allPostsData }) {
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
        {allPostsData.map(({ id, date, title }) => (
          <div className={styles.post} key={id}>
            <Link href={`/posts/${id}`}>
              <img src="" alt="Post 1" />
            </Link>
            <h3>
              <Link href={`/posts/${id}`}>{title}</Link>
            </h3>
            <small className={styles.lightText}>
              <Date dateString={date} />
            </small>
            <p>Descripción del artículo 1</p>
          </div>
        ))}
      </section>
    </main>
  );
}
