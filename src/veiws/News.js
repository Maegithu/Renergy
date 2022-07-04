import Link from 'next/link';
import { Icon } from '@iconify/react';
import styles from "../css/body.module.css";

export default function News(props) {
  console.log(props, "news-props");
  const { postData } = props;

  return (
    <div className={styles.news}>
      <h1 style={{ display: "flex", width: "100%", justifyContent: "center", color: "#4453a2" }}>Мэдээ мэдээлэл</h1>
      {
        postData.array.map((row, index) =>
          <div key={index} className={styles.grid}>
            <div className={styles.card}>
              {/* <Image src="/zurag/eco_home.jpg" alt="home" width={300} height={300} style={{ borderRadius: 8 }} /> */}
              <img src={row.zurag} alt="home" width={"100%"} height={200} style={{ borderRadius: 12 }} />
              <div className={styles.title}>
                <span style={{ margin: "10px 5px" }}>{row.garchig}</span>
                <br></br>
                {/* <p style={{ wordBreak: "break-word" }}>{row.tailbar}</p> */}
              </div>
              <div className={styles.description}>
                {row.medee}
              </div>
              <Link href={`/news/${row.path}`}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "end", margin: "1rem 0", cursor: "pointer" }}>
                  <span style={{ marginRight: 10, color: "#0070f3" }}>цааш унших</span>
                  <Icon icon="bytesize:arrow-right" width={15} height={15} style={{ color: "#0070f3" }} />
                </div>
              </Link>
            </div>
          </div>
        )
      }
    </div>
  )

}
