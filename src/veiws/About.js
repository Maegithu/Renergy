import React from "react";
import styles from "../css/about.module.css";

export default function About(props) {

  console.log(props, "props");

  return (
    <div className={styles.main}>
      <div className={styles.about}>
        <h1 style={{ margin: "10px 24px" }}>Бидний тухай</h1>
        <div className={styles.container} dangerouslySetInnerHTML={{ __html: props.postData.contentHtml }} />
      </div>
      <div className={styles.zuragContainer}>

      </div>
    </div>
  )

}
