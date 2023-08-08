import styles from "./main.module.css";
import Link from "next/link";
import Date from "../components/date";
import Image from "next/image";

export default function Main({ allPostsData }) {
  console.log(allPostsData);
  return (
    <main className={styles.siteMain}>
      <section>
        <h2>Últimos artículos</h2>
        <div className={styles.postContainer}>
          {allPostsData.map(({ id, date, title, description, shareImage }) => (
            <div className={styles.post} key={id}>
              <Link href={`/posts/${id}`}>
                <Image src={shareImage} width={144} height={144} />
              </Link>
              <h3>
                <Link href={`/posts/${id}`}>{title}</Link>
              </h3>
              <small className={styles.lightText}>
                <Date dateString={date} />
              </small>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
