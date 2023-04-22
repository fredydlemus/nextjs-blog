import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import Date from "../../components/date";
import utilStyles from "../../styles/utils.module.css";
import styles from "./id.module.css";
import ReactMarkdown from "react-markdown";
import rehypePrism from "@mapbox/rehype-prism";
import Link from "next/link";

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
  const { title, description, image, date, contentMarkdown, shareImage } =
    postData;

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:image" content={shareImage} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={shareImage} />
      </Head>
      <article className={styles.postTitle}>
        <h1 className={styles.title}>{title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={date} />
        </div>
      </article>
      <div className={styles.postContainer}>
        <ReactMarkdown components={{}} rehypePlugins={[rehypePrism]}>
          {contentMarkdown}
        </ReactMarkdown>
      </div>
    </Layout>
  );
}
