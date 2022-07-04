import Head from 'next/head'
import Layout, { siteTitle } from '../src/Layout'
import Link from "next/link";
import About from '../src/veiws/About';
import { getPostData } from '../lib/posts';

export default function about({ postData }) {

  console.log(postData, "postData");

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <About postData={postData} />
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const postData = await getPostData("about")
  return {
    props: {
      postData
    }
  }
}
