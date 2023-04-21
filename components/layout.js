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
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      {children}
      <Footer links={links} />
    </>
  );
}
