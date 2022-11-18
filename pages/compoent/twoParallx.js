import Image from "next/image";
import styles from "../../styles/Home.module.css";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";

import Frame39281 from "../image/Frame39281.png";
import girl from "../image/girl.gif";
import X from '../image/X.png'
import plus from '../image/plus.png'
import line from '../image/line.png'
import Frame1115 from '../image/Frame1115.gif'
import two from '../image/two.gif'
import endtext from '../image/endtext.png'
import circleLine from '../image/circleLine.png'
import pngwing from '../image/pngwing.png'
import Subtract from '../image/Subtract.png'
import Subtract_right from '../image/Subtract_right.png'

export default function TwoParallx() {
  
  return (
   <Parallax
        pages={5}
        // className={styles.background}
        innerStyle={{
          background: "linear-gradient(180deg, #1C1D5F 0%, #FBADE7 100%)"
        }}
      >
        {/* First horizontal picture */}
        <ParallaxLayer
          offset={0}
          speed={1}
          factor={2.5}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          sticky={{ start: 0, end: 2.5 }}
        >
            <Image src={Frame39281} style={{marginTop: "20px",}}/>

            <div className={styles.qq}>
            <Image src={line} />
            <Image src={plus} />
            </div>
            
          <ParallaxLayer
            offset={0}
            speed={5}
            factor={0}
            horizontal={true}
            className={styles.girl}
          >
            <Image src={girl} width={1200} style={{marginTop: "200px", borderRadius:'3%', }}/>
          </ParallaxLayer>

          <ParallaxLayer
            offset={1}
            speed={5}
            // factor={0}
            horizontal={true}
            className={styles.girl}
          >
            <Image src={two} width={1200} style={{marginTop: "200px", borderRadius:'3%', }}/>
          </ParallaxLayer>

          {/* <ParallaxLayer
          offset={1}
          speed={0.5}
          factor={1}
        >
          <Image src={plus} />
        </ParallaxLayer> */}

          <ParallaxLayer
            offset={2}
            speed={5}
            // factor={0}
            horizontal={true}
            className={styles.girl}
          >
            <Image src={Frame1115} width={1200} style={{marginTop: "200px", borderRadius:'3%', }}/>
          </ParallaxLayer>


          {/* <ParallaxLayer
          offset={1}
          speed={0.5}
          factor={3}
          sticky={{ start: 0, end: 3.5 }}
          style={{
            // display: "flex",
            // justifyContent: 'space-around',
            position: "relative",
          }}
        >
          <Image src={circleLine} className={styles.leftPng}/>
        </ParallaxLayer> */}
      </ParallaxLayer>

      <ParallaxLayer
          offset={1}
          speed={0.5}
          factor={2.5}
          sticky={{ start: 0, end: 2.5 }}
          style={{
            position: "relative",
          }}
        >
          <Image src={circleLine} className={styles.leftPng}/>
        </ParallaxLayer>

          {/*  secoend title */}
      <ParallaxLayer
          offset={4}
          speed={0.5}
          factor={1}
          style={
            {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            }
          }
        sticky={{ start: 3.5, end: 4 }}
        >
          <Image src={endtext}   />

          {/* prople go */}
      <ParallaxLayer 
          offset={4}
          factor={2}
        sticky={{ start: 3, end: 4 }}
        style={
          {
          display: "flex",
          flexDirection: "row-reverse",
          alignItems: "flex-end",
          zIndex: '99',
          position: 'absolute',
          top: '50%',
          }
        }
        > 
          <Image src={Subtract} 
          className={styles.turtle}
          />
          <div  
          style={{
            right: "5%",
            position: "relative",
            width: '100%',
            bottom: "30%",
            }}>
          <Image src={Subtract_right} 
          className={styles.turtle} 
          />
          </div>
        </ParallaxLayer> 

        <ParallaxLayer 
          offset={4}
        sticky={{ start: 3, end: 4 }}
        style={
          {
          display: "flex",
          // flexDirection: "row-reverse",
          alignItems: "center",
          // zIndex: '99',
          // position: 'absolute',
          // top: '50%',
          justifyContent: 'center'
          }
        }
        > 
        
        <Image src={pngwing} ></Image>
        </ParallaxLayer>
            
      </ParallaxLayer>

        


        {/* <ParallaxLayer
          offset={1}
          speed={0.5}
          factor={1}
          style={{
            backgroundColor: "#232946",
          }}
        >
          <Image src={girl} width={1000}/>

        </ParallaxLayer> */}

        {/* <ParallaxLayer sticky={{ start: 0.5, end: 1 }}>
          <img
            className={styles.turtle}
            alt="turtle"
            src="https://freepngimg.com/thumb/mario_bros/90525-mario-art-super-bros-technology-png-download-free.png"
            style={{ width: "20%" }}
          />

          <h2> 2 烏龜 </h2>
        </ParallaxLayer> */}

        {/* <ParallaxLayer
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
        </ParallaxLayer> */}

        
      </Parallax>

  );
}
