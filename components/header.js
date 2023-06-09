import { useState } from "react";
import styles from "./header.module.css";
import Link from "next/link";
import { categories } from "../lib/categories";
import { BiMenu } from "react-icons/bi";
import { CgClose } from "react-icons/cg";

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
        {isMenuToggleOpen ? (
          <CgClose
            onClick={toggleMenu}
            color="white"
            size="2em"
            className={styles.menuToggle}
          />
        ) : (
          <BiMenu
            onClick={toggleMenu}
            color="white"
            size="2em"
            className={styles.menuToggle}
          />
        )}
        {isMenuToggleOpen && (
          <div className={styles.siteToggleNavigation}>
            <div className={styles.siteSearchToggle}>
              <form>
                <input type="text" placeholder="Buscar..." />
                <button type="submit">Buscar</button>
              </form>
            </div>
            <ul>
              {categories.map(({ name, slug, icon, show }) =>
                show ? (
                  <li key={name}>
                    <Link href={slug}>
                      {icon}
                      {name}
                    </Link>
                  </li>
                ) : null
              )}
            </ul>
          </div>
        )}
        <nav className={styles.siteNavigation}>
          <ul>
            {categories.map(({ name, slug, icon, show }) =>
              show ? (
                <li key={name}>
                  <Link href={slug}>
                    {icon}
                    {name}
                  </Link>
                </li>
              ) : null
            )}
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
