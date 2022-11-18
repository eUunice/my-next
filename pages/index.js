import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Mouse from "./compoent/mouse";
import TwoParallx from "./compoent/twoParallx";


export default function Home() {
  

  return (
    <>
      <Head>
      <title>互動設計</title>
      </Head>
      
      <Mouse />

      <TwoParallx />
    </>
  );
}
