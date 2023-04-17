import styles from "./footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.siteFooter}>
      <div className={styles.footerWidgets}>
        <div className={styles.footerWidget}>
          <h3>Widget 1</h3>
          <ul>
            <li>
              <Link href="#">Enlace 1</Link>
            </li>
            <li>
              <Link href="#">Enlace 2</Link>
            </li>
            <li>
              <Link href="#">Enlace 3</Link>
            </li>
          </ul>
        </div>
        <div className={styles.footerWidget}>
          <h3>Widget 2</h3>
          <ul>
            <li>
              <Link href="#">Enlace 1</Link>
            </li>
            <li>
              <Link href="#">Enlace 2</Link>
            </li>
            <li>
              <Link href="#">Enlace 3</Link>
            </li>
          </ul>
        </div>
        <div className={styles.footerWidget}>
          <h3>Widget 3</h3>
          <ul>
            <li>
              <Link href="#">Enlace 1</Link>
            </li>
            <li>
              <Link href="#">Enlace 2</Link>
            </li>
            <li>
              <Link href="#">Enlace 3</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.siteInfo}>
        <p>Derechos de autor © 2023 - Sitio web de ejemplo</p>
      </div>
    </footer>
  );
}
