import Layout from "../src/Layout";
import Head from "next/head";
import News from "../src/veiws/News";
import { getPostData } from "../lib/posts";

export default function news(props) {
  return (
    <Layout>
      <Head>
        <title>{"Мэдээ, мэдээлэл"}</title>
      </Head>
      <News {...props} />
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const postData = await getPostData("news")
  return {
    props: {
      postData
    }
  }
}