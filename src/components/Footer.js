import Image from 'next/image';
import { Icon } from '@iconify/react';
import {
  PhoneFilled,
  MailFilled,
  FacebookFilled,
  InstagramFilled,
  TwitterOutlined
} from "@ant-design/icons";
import styles from "../css/home.module.css";

export default function Footer(props) {
  return (
    <>
      <div className={styles.section}>
        <Image src="/zurag/logo1.png" alt="Vercel Logo" width={180} height={80} />
        <div style={{ display: "flex", alignItems: "center", margin: "10px 0" }}>
          <Icon icon="icon-park-outline:handle-c" />
          <span style={{ marginLeft: 10 }}>2022.</span>
        </div>
        <div>Сэргээгдэх эрчим хүчний төв</div>
      </div>
      <div className={styles.section}>
        <div className={styles.footerLink}>Бидний тухай</div>
        <div className={styles.footerLink}>Судалгаа</div>
        <div className={styles.footerLink}>Холбоо барих</div>
        <div className={styles.footerLink}>Тусламж</div>
      </div>
      <div className={styles.section}>
        <div className={styles.footerLink}>Мэдээ мэдээлэл</div>
        <div className={styles.footerLink}>Үйл ажиллагаа</div>
      </div>
      <div className={styles.section}>
        <div style={{ margin: "1rem 0" }}>
          <PhoneFilled style={{ color: "#21272d" }} />
          <span style={{ marginLeft: 10 }}>+976 99999999</span>
        </div>
        <div style={{ margin: "1rem 0" }}>
          <MailFilled style={{ color: "#21272d" }} />
          <span style={{ marginLeft: 10 }}>renewableenergy@gmail.com</span>
        </div>
        <div style={{ margin: "1rem 0" }}>
          <Icon icon="carbon:location-filled" width={20} height={20} style={{ color: "#21272d" }} />
          <span style={{ marginLeft: 10 }}>Хан-Уул дүүрэг</span>
        </div>
        <div>
          <FacebookFilled className={styles.socialIcon} />
          <InstagramFilled className={styles.socialIcon} />
          <TwitterOutlined className={styles.socialIcon} />
        </div>
      </div>
    </>
  )

}