import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Header from "./header";
import Footer from "./footer";
import { links } from "../lib/links";

const name = "Fredy Flores";
<<<<<<< HEAD
export const siteTitle = "fredydlemus";
=======
export const siteTitle = "fredydlemus.blog";
>>>>>>> 3775fad7ab57d712a75452d639846a83e87b698c

export default function Layout({ children, home }) {
  return (
    <>
      <Header />
      <Head>
        <link rel="icon" href="/images/binary-code.png"></link>
      </Head>
<<<<<<< HEAD
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/fredydlemus.jpeg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={name}
            />
            <h1 className={utilStyles.heading2X1}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <Image
                priority
                src="/images/fredydlemus.jpeg"
                className={utilStyles.borderCicle}
                height={108}
                width={108}
                alt={name}
              />
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/" className={utilStyles.colorInherit}>
                {name}
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
=======
      {children}
>>>>>>> 3775fad7ab57d712a75452d639846a83e87b698c
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">Regresar al inicio</Link>
        </div>
      )}
      <Footer links={links} />
    </>
  );
}
