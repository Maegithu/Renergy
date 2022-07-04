import React, { useEffect } from "react";
import Image from "next/image";
import styles from "../css/body.module.css";
import utilStyle from "../../styles/utils.module.css";
import Renewableenergy from "./Renewableenergy";
import Link from "next/link";
import News from "./News";

export default function Main(props) {
  const { data } = props;

  useEffect(() => {
    const interval = setInterval(() => {
      zuragUurchlukh();
    }, 8000);
    return () => clearInterval(interval);
  }, [])

  function zuragUurchlukh() {
    console.log("function");
    var BackgroundImg = [
      "/zurag/energy.jpg",
      "/zurag/panel.jpg",
      "/zurag/hydropower.jpg",
      // "/zurag/1.jpg",
      // "/zurag/solar_panel.jpg",
    ];
    var i = Math.floor((Math.random() * 3));
    document.getElementById("backgroundImage").style.backgroundImage = 'url("' + BackgroundImg[i] + '")';
  }

  // window.onscroll = function () {
  //   var header_navbar = document.querySelector(".navigation");
  //   var sticky = header_navbar.offsetTop;

  //   if (window.pageYOffset > sticky) {
  //     header_navbar.classList.add("sticky");
  //   } else {
  //     header_navbar.classList.remove("sticky");
  //   }



  //   // show or hide the back-top-top button
  //   var backToTop = document.querySelector(".back-to-top");
  //   if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
  //     backToTop.style.display = "flex";
  //   } else {
  //     backToTop.style.display = "none";
  //   }
  // };

  // // Get the navbar


  // // for menu scroll 
  // var pageLink = document.querySelectorAll('.page-scroll');

  // pageLink.forEach(elem => {
  //   elem.addEventListener('click', e => {
  //     e.preventDefault();
  //     document.querySelector(elem.getAttribute('href')).scrollIntoView({
  //       behavior: 'smooth',
  //       offsetTop: 1 - 60,
  //     });
  //   });
  // });
  // // section menu active
  // function onScroll(event) {
  //   var sections = document.querySelectorAll('.page-scroll');
  //   var scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

  //   for (var i = 0; i < sections.length; i++) {
  //     var currLink = sections[i];
  //     var val = currLink.getAttribute('href');
  //     var refElement = document.querySelector(val);
  //     var scrollTopMinus = scrollPos + 73;
  //     if (refElement.offsetTop <= scrollTopMinus && (refElement.offsetTop + refElement.offsetHeight > scrollTopMinus)) {
  //       document.querySelector('.page-scroll').classList.remove('active');
  //       currLink.classList.add('active');
  //     } else {
  //       currLink.classList.remove('active');
  //     }
  //   }
  // };

  // window.document.addEventListener('scroll', onScroll);

  return (
    <div className={styles.body}>
      <div id="backgroundImage" className={styles.zurag}>
        <div className={styles.titleXXL}>Сэргээгдэх эрчим хүчний төвд тавтай морилно уу</div>
      </div>
      <Renewableenergy />
      <News postData={data.find((x) => x.slug === "news")} />
    </div>
  )

}