import Head from 'next/head'
import Layout, { siteTitle } from '../src/Layout'
import Link from "next/link";
import Renewableenergy from '../src/veiws/Renewableenergy';

export default function Home({ allPostsData }) {

  return (
    <Layout home allPostsData={allPostsData}>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Renewableenergy />
    </Layout>
  )
}