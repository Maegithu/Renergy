import React from "react";
import Image from 'next/image'
import Link from 'next/link';
import styles from "../css/header.module.css";

const menu = [
  {
    id: "",
    value: "Нүүр",
  },
  {
    id: "about",
    value: "Бидний тухай",
  },
  {
    id: "renewableenergy",
    value: "Сэргээгдэх эрчим хүч",
  },
  {
    id: "news",
    value: "Мэдээ мэлээлэл",
  },
  {
    id: "education",
    value: "Боловсрол",
  },
  {
    id: "contact",
    value: "Холбоо барих",
  },
]

export default function Header(props) {
  return (
    <>
      <div className={styles.header}>
        <Image src="/zurag/logo1.png" alt="logo" height={80} width={180} />
        <div className={styles.menu}>
          {
            menu.map((item, index) =>
              <div key={index}>
                <Link href={`/${item.id}`}>
                  <span className={styles.menuItem}>{item.value}</span>
                </Link>
              </div>
            )
          }
        </div>
      </div>
    </>
  )

}