import Head from 'next/head'
import { getSortedPostsData } from '../lib/posts';
import Layout, { siteTitle } from '../src/Layout';
import Main from '../src/veiws/Main';

export default function Home({ allPostsData }) {

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Main data={allPostsData} />
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData
    }
  }
}