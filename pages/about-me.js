import Layout from "../components/layout";
import styles from "./about-me.module.css";
import Image from "next/image";

const name = "Fredy Flores";

export default function AboutMe() {
  return (
    <Layout>
      <section className={styles.siteSection}>
        <div className={styles.siteContainer}>
          <div>
            <div>
              <Image
                priority
                src="/images/me.jpeg"
                height={144}
                width={144}
                alt={name}
              />
            </div>
            <h1>{name}</h1>
          </div>
          <p>
            Como ingeniero de software con experiencia en el desarrollo de
            aplicaciones web, siempre estoy buscando maneras de mejorar mis
            habilidades y conocimientos. Me encanta aprender sobre nuevas
            tecnologías y tendencias en el mundo del desarrollo de software y
            compartir mi conocimiento con otros. ¡Siempre estoy dispuesto a
            aprender y colaborar con otros ingenieros de software!
          </p>
          <p>
            Puedes conocer mas de mi visitando cualquiera de mis redes sociales.
          </p>
        </div>
      </section>
    </Layout>
  );
}
