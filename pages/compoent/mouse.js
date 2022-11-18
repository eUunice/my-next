import Image from "next/image";
import styles from "../../styles/Home.module.css";

import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from "react-parallax-mouse";

import Hourglass from "../image/Hourglass.png";
import morecirle from "../image/morecirle.png";
import th4 from "../image/th4.png";
import net from "../image/net.png";
import DefaultWhite from "../image/DefaultWhite.png";
import circle from "../image/circle.png";
import Group39856 from "../image/Group39856.png";
import N from "../image/N.png";
import thef2e from "../image/thef2e.png";

export default function Mouse() {
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
    // <div
    //   style={{
    //     height: "100vh",
    //     display: "flex",
    //     flexDirection: "column",
    //     justifyContent: "center",
    //     backgroundColor: "#1C1D5F",
    //   }}
    // >
      <MouseParallaxContainer globalFactorX={0.1} globalFactorY={0.1}
      containerStyle={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: "#1C1D5F",
      }}
      >
        <MouseParallaxChild
          factorX={0.3}
          factorY={0.1}
          style={{
            display: "flex",
            justifyContent: "space-around",
            position: "relative",
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

          <div style={{ position: "absolute", left: "15%", top: "89%" }}>
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
        </MouseParallaxChild>

        <MouseParallaxChild
          factorX={0.7}
          factorY={0.5}
          style={{
            // display: "flex",
            // justifyContent: 'space-around',
            position: "relative",
          }}
        >
          <Image src={net} alt="net" className={styles.net} />

          <div style={{ position: "absolute", right: "28%" }}>
            <Image src={DefaultWhite} alt="滑鼠" />
          </div>

          <MouseParallaxChild>
            <div
              style={{
                left: "75%",
                position: "relative",
              }}
            >
              <Image src={N} alt="N" />
            </div>
          </MouseParallaxChild>
        </MouseParallaxChild>
      </MouseParallaxContainer>
    // </div>
  );
}
