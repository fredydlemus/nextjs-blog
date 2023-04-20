import styles from "./footer.module.css";

export default function Footer({ links }) {
  return (
    <footer className={styles.siteFooter}>
      <div className={styles.footerWidgets}>
        {links.map(({ title, links }) => (
          <div className={styles.footerWidget} key={title}>
            <h3>{title}</h3>
            <ul>
              {links.map(({ href, icon, label }) => (
                <li key={href}>
                  <a href={href} target="_blank">
                    {icon}
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className={styles.siteInfo}>
        <p>2023 - fredydlemus</p>
      </div>
    </footer>
  );
}
