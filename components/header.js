import { useState } from "react";
import styles from "./header.module.css";
import Link from "next/link";

const categories = [
  {
    name: "Inicio",
    slug: "/",
  },
  {
    name: "Angular",
    slug: "/angular",
  },
];

export default function Header() {
  const [isMenuToggleOpen, setMenuToggleOpen] = useState(false);

  function toggleMenu() {
    setMenuToggleOpen(!isMenuToggleOpen);
  }

  return (
    <header className={styles.siteHeader}>
      <div className={styles.siteContainer}>
        <div className={styles.siteLogo}>
          <Link href="/">
            <h4>fredydlemus.blog</h4>
          </Link>
        </div>
        <button onClick={toggleMenu} className={styles.menuToggle}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        {isMenuToggleOpen && (
          <div className={styles.siteToggleNavigation}>
            <div className={styles.siteSearchToggle}>
              <form>
                <input type="text" placeholder="Buscar..." />
                <button type="submit">Buscar</button>
              </form>
            </div>
            <ul>
              {categories.map((category) => (
                <li>
                  <Link href={category.slug}>{category.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        )}
        <nav className={styles.siteNavigation}>
          <ul>
            {categories.map((category) => (
              <li>
                <Link href={category.slug}>{category.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className={styles.siteSearch}>
          <form>
            <input type="text" placeholder="Buscar..." />
            <button type="submit">Buscar</button>
          </form>
        </div>
      </div>
    </header>
  );
}
