import Head from "next/head";
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
