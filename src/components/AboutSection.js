import React from "react";
import kristina from "../img/kristinapaukshtite.jpg"

//Framer Motion
//initial -state of the h2 (where do i sart and where do i end up)
//swipe up effect
import { motion } from "framer-motion";
import { fade, titleAnimation, PhotoAnim } from "../Animation";

import { About, Description, Image, IMG, Hide, Button } from "../styles";
import Wave from "./Wave";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div className="title">
          <Hide>
            <motion.h2 variants={titleAnimation}> I work to make </motion.h2>{" "}
          </Hide>{" "}
          <Hide>
            <motion.h2 variants={titleAnimation}>
              my <span> dreams </span> come{" "}
            </motion.h2>{" "}
          </Hide>{" "}
          <Hide>
            <motion.h2 variants={titleAnimation}> true. </motion.h2>{" "}
          </Hide>{" "}
        </motion.div>{" "}
        <motion.p variants={fade}>
          Contact me for any photography ideas that you have. I have
          pro camera for amazing photos.{" "}
        </motion.p>{" "}
        <Button variants={fade}> Contact Me </Button>{" "}
      </Description>{" "}
      <Image>
        <IMG
          variants={PhotoAnim}
          initial="hidden"
          animate="show"
          src={kristina}
          alt="The guy with the camera"
        />
      </Image>{" "}
      <Wave />
    </About>
  );
};

//STYLED COMPONENTS

export default AboutSection;
