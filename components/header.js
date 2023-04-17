import styles from "./header.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <header className={styles.siteHeader}>
      <div className={styles.siteLogo}>
        <Link href="/">
          <img src="/images/binary-code.png" alt="Logo del sitio" />
        </Link>
      </div>
      <button className={styles.menuToggle}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav className={styles.siteNavigation}>
        <ul>
          <li>
            <Link href="#">Inicio</Link>
          </li>
          <li>
            <Link href="#">Categoria 1</Link>
          </li>
          <li>
            <Link href="#">Categoria 2</Link>
          </li>
          <li>
            <Link href="#">Categoria 3</Link>
          </li>
          <li>
            <Link href="#">Categoria 4</Link>
          </li>
        </ul>
      </nav>
      <div className={styles.siteSearch}>
        <form>
          <input type="text" placeholder="Buscar..." />
          <button type="submit">Buscar</button>
        </form>
      </div>
    </header>
  );
}
