import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import athelete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import daria2 from "../img/dariashevtsova2.jpg";

//Animation
import { motion } from "framer-motion";
import {
  pageAnimation,
  fade,
  PhotoAnim,
  LineAnimation,
  slider,
  SliderContainer,
} from "../Animation";

import { useScroll } from "../components/useScroll";
import { slideSwoop } from "../Animation";
import ScrollTop from "../components/ScrollTop";

const OurWork = () => {
  const [element, controlsAnim] = useScroll();
  const [element2, controlsAnim2] = useScroll();
  return (
    <Work
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      style={{ background: "#282B28" }}
    >
      <motion.div variants={SliderContainer}>
        <Frame1 variants={slider}> </Frame1>{" "}
        <Frame2 variants={slider}> </Frame2>{" "}
        <Frame3 variants={slider}> </Frame3>{" "}
        <Frame4 variants={slider}> </Frame4>{" "}
      </motion.div>{" "}
      <Movie>
        <motion.h2 variants={fade}> The athlete </motion.h2>{" "}
        <motion.div variants={LineAnimation} className="line">
          {" "}
        </motion.div>{" "}
        <Link to="/work/the-athlete">
          <Hide>
            <motion.img variants={PhotoAnim} src={athelete} alt="Athlete" />
          </Hide>{" "}
        </Link>{" "}
      </Movie>{" "}
      <Movie
        ref={element}
        variants={fade}
        animate={controlsAnim}
        initial="hidden"
      >
        <h2> The Racer </h2>{" "}
        <motion.div variants={LineAnimation} className="line">
          {" "}
        </motion.div>{" "}
        <Link to="/work/the-racer">
          <img src={theracer} alt="The racer" />
        </Link>{" "}
      </Movie>{" "}
      <Movie
        ref={element2}
        variants={fade}
        animate={controlsAnim2}
        initial="hidden"
      >
        <h2> Good Times </h2>{" "}
        <motion.div variants={LineAnimation} className="line">
          {" "}
        </motion.div>{" "}
        <Link to="/work/good-times">
          <img src={daria2} alt="Good Times" />
        </Link>{" "}
      </Movie>{" "}
      <ScrollTop />
    </Work>
  );
};

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;

  h2 {
    padding: 1rem 0rem;
    color: white;
  }
`;

const Movie = styled(motion.div)`
  padding-bottom: 10rem;
  overflow: hidden;

  .line {
    height: 0.5rem;
    background: #3da5d9;
    margin-bottom: 3rem;
  }

  img {
    width: 100%;
    height: 85vh;
    object-fit: cover;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

//FRAME ANIMATION

const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #780000;
  z-index: 2;
`;

const Frame2 = styled(Frame1)`
  background: #fdf0d5;
`;

const Frame3 = styled(Frame1)`
  background: #003049;
`;

const Frame4 = styled(Frame1)`
  background: #669bbc;
`;

export default OurWork;
