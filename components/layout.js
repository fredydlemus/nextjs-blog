import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Header from "./header";
import Footer from "./footer";
import { links } from "../lib/links";

const name = "Fredy Flores";
export const siteTitle = "fredydlemus.blog";

export default function Layout({ children, home }) {
  return (
    <>
      <Header />
      <Head>
        <link rel="icon" href="/images/binary-code.png"></link>
      </Head>
      {children}
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">Regresar al inicio</Link>
        </div>
      )}
      <Footer links={links} />
    </>
  );
}
