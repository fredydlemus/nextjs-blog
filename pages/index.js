import Head from "next/head";
<<<<<<< HEAD
import Link from "next/link";
=======
>>>>>>> 3775fad7ab57d712a75452d639846a83e87b698c
import Layout, { siteTitle } from "../components/layout";
import { getSortedPostsData } from "../lib/posts";
import Main from "../components/main";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <meta property="og:image" content={"/images/me.jpeg"} />
        <title>{siteTitle}</title>
      </Head>
      <Main allPostsData={allPostsData}></Main>
    </Layout>
  );
}
