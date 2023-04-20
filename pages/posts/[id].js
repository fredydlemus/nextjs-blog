import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import Date from "../../components/date";
import utilStyles from "../../styles/utils.module.css";
import styles from "./id.module.css";
import ReactMarkdown from "react-markdown";
import rehypePrism from "@mapbox/rehype-prism";

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article className={styles.postTitle}>
        <h1 className={styles.title}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
      </article>
      <div className={styles.postContainer}>
        <ReactMarkdown components={{}} rehypePlugins={[rehypePrism]}>
          {postData.contentMarkdown}
        </ReactMarkdown>
      </div>
    </Layout>
  );
}
