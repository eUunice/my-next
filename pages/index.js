import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import { MouseParallax, ScrollParallax } from "react-just-parallax";
import {
  useParallax,
  ParallaxBanner,
  ParallaxBannerLayer,
  ParallaxProvider,
  useParallaxController,
} from "react-scroll-parallax";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";

import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from "react-parallax-mouse";

import smiley from "./image/smiley.png";
import Hourglass from "./image/Hourglass.png";
import morecirle from "./image/morecirle.png";
import th4 from "./image/th4.png";
import net from "./image/net.png";
import DefaultWhite from "./image/DefaultWhite.png";
import circle from "./image/circle.png";
import Group39856 from "./image/Group39856.png";
import N from './image/N.png'
import thef2e from './image/thef2e.png'

export default function Home() {
  // const Component =()=>{
  //   return  (
  //     <ParallaxBanner
  //       layers={[
  //         {image: '/image/pexels-pixabay-41949.jpg' , speed: -20 }
  //       ]}
  //     >
  //     </ParallaxBanner>
  //   )
  // }

  // const background = require('/image/smiley.png')

  return (
    <div>
      <div
        // className={styles.homebg}
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: "#1C1D5F",
        }}
      >
        <Head>
          <title> 互動式網頁設計</title>
        </Head>
        <MouseParallaxContainer
          globalFactorX={0.1}
          globalFactorY={0.1}
        >
          <MouseParallaxChild
            factorX={0.3}
            factorY={0.1}
            style={{
              display: "flex",
              justifyContent: "space-around",
              position: 'relative',
              zIndex: 99,
            }}
          >
            <Image src={Hourglass} />

            

            <div>
              <Image src={th4} alt="4th" className={styles.fourth} />
            </div>
            <MouseParallaxChild
              factorX={0.9}
              factorY={0.4}
              style={{
                // display: "flex",
                // justifyContent: 'flex-end',
                position: "relative",
                left: "5%",
              }}
            >
              <Image src={circle} alt="cirle" className={styles.circle} />
            </MouseParallaxChild>
            
            <div style={{position: 'absolute',
              left: '15%',
              top: '89%'}}>
            <Image src={Group39856} alt="半圓" />
            </div>
          
          </MouseParallaxChild>

          <MouseParallaxChild
            factorX={0}
            factorY={0}
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Image src={thef2e} alt="thef2e" />
            <Image src={morecirle} alt="morecirle" className={styles.morecircl} />

            <MouseParallaxChild>
            </MouseParallaxChild>

          </MouseParallaxChild>

          <MouseParallaxChild
            factorX={0.7}
            factorY={0.5}
            style={{
              // display: "flex",
              // justifyContent: 'space-around',
              position: 'relative',}}
          >
            <Image src={net} alt="net" className={styles.net}/>

          <div style={{position: 'absolute',
              right: '28%',
              }}>
            <Image src={DefaultWhite} alt="滑鼠" />
          </div>

            <MouseParallaxChild>
              <div style={{
              left: '75%',
              position: 'relative',}}>
            <Image src={N}  alt="N" />
              </div>
            </MouseParallaxChild>
              
          
          </MouseParallaxChild>

          
        </MouseParallaxContainer>
      </div>

      {/* <div className={styles.container}>

      
    <MouseParallax >
          <div
          className={styles.container}
            style={{ width: "100px", height: "100px", backgroundColor: "red" }}
          >
            <p>move</p>
          </div>
        </MouseParallax>

        <ScrollParallax>
          <p>I'm reacting to scroll</p>
        </ScrollParallax>
    </div> */}

      <Parallax
        pages={4}
        // style={{overflowY:'unset'}}
        className="bbbbbbbbbbbbg"
      >
        <ParallaxLayer
          // className={styles.main}
          offset={0}
          speed={1}
          factor={1}
          style={{
            // backgroundImage: `url(${world})`,
            // backgroundSize: 'cover',
            // backgroundPosition: 'center'
            backgroundColor: "#232946",
          }}
        >
          <h2> first </h2>
          <ParallaxLayer
            offset={1}
            speed={1}
            factor={1}
            style={{ opacity: 0.6, backgroundColor: "#232946" }}
          >
            <img
              alt="cloud"
              src="https://freepngimg.com/thumb/cloud/7-cloud-png-image.png"
              style={{ width: "50%", marginLeft: "20%" }}
            />
          </ParallaxLayer>
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: 0.5, end: 1 }}>
          <img
            className={styles.turtle}
            alt="turtle"
            src="https://freepngimg.com/thumb/mario_bros/90525-mario-art-super-bros-technology-png-download-free.png"
            style={{ width: "20%" }}
          />

          <h2> 2 烏龜 </h2>
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={0.5}
          factor={2}
          style={{
            backgroundColor: "#232946",
          }}
        >
          <img
            alt="cloud"
            src="https://freepngimg.com/thumb/cloud/7-cloud-png-image.png"
            style={{ width: "50%", marginLeft: "20%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={0.5}
          // factor={2}
          style={
            {
              // backgroundColor: "#8bd3dd" ,
            }
          }
        >
          <h2> second </h2>
        </ParallaxLayer>

        <ParallaxLayer
          offset={3}
          speed={0.5}
          // factor={2}
          style={{
            backgroundColor: "#8bd3dd",
          }}
        >
          <h2> second </h2>
        </ParallaxLayer>

        <ParallaxLayer
          offset={4}
          speed={0.5}
          // factor={2}
          style={
            {
              // backgroundColor: "#8bd3dd" ,
            }
          }
        >
          <h2> second </h2>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
  // <div className={styles.container}>

  //   <Head>
  //     <title>Create Next App</title>
  //     <meta name="description" content="Generated by create next app" />
  //     <link rel="icon" href="/favicon.ico" />
  //   </Head>

  //   <div className={styles.container}>
  //   <MouseParallax>

  //     <div style={{width:'100px', height:'100px', backgroundColor:'red'}}>
  //       <p>move</p>
  //     </div>
  //   </MouseParallax>

  //   <ScrollParallax>
  //     <p>I'm reacting to scroll</p>

  //   </ScrollParallax>
  //   </div>

  //   <main className={styles.main}>
  //     <h1 className={styles.title}>Welcome</h1>

  //     {/* <p className={styles.description}>
  //       Get started by editing{' '}
  //       <code className={styles.code}>pages/index.js</code>
  //     </p>

  //     <div className={styles.grid}>
  //       <a href="https://nextjs.org/docs" className={styles.card}>
  //         <h2>Documentation &rarr;</h2>
  //         <p>Find in-depth information about Next.js features and API.</p>
  //       </a>

  //       <a href="https://nextjs.org/learn" className={styles.card}>
  //         <h2>Learn &rarr;</h2>
  //         <p>Learn about Next.js in an interactive course with quizzes!</p>
  //       </a>

  //       <a
  //         href="https://github.com/vercel/next.js/tree/canary/examples"
  //         className={styles.card}
  //       >
  //         <h2>Examples &rarr;</h2>
  //         <p>Discover and deploy boilerplate example Next.js projects.</p>
  //       </a>

  //       <a
  //         href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //         className={styles.card}
  //       >
  //         <h2>Deploy &rarr;</h2>
  //         <p>
  //           Instantly deploy your Next.js site to a public URL with Vercel.
  //         </p>
  //       </a>
  //     </div> */}
  //   </main>

  //   <footer className={styles.footer}>
  //     <a
  //       href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
  //       target="_blank"
  //       rel="noopener noreferrer"
  //     >
  //       Powered by{" "}
  //       <span className={styles.logo}>
  //         <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
  //       </span>
  //     </a>
  //   </footer>
  // </div>
}
