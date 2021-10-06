import React from "react";
//Animation
import { AnimateSharedLayout, motion } from "framer-motion";
import { pageAnimation, titleAnimation } from "../Animation";
import styled from "styled-components";
import ContactToggle from "../components/ContactToggle";

const ContactUs = () => {
  return (
    <Contact
      style={{ background: "#282B28" }}
      variants={pageAnimation}
      exit="exit"
      initial="hidden"
      animate="show"
    >
      <Title>
        <Hide>
          <motion.h1 variants={titleAnimation}>
            {" "}
            Get in <span>touch.</span>{" "}
          </motion.h1>{" "}
        </Hide>
        <div className="line1"></div>
      </Title>

      <div>
        <AnimateSharedLayout>
          <Hide>
            <Social variants={titleAnimation}>
              <ContactToggle title="Socials">
                <Circle />

                <div className="loremIpsum">
                  <p> Lorem ipsum dolor sit amet. </p>{" "}
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.Sed,
                    rem.{" "}
                  </p>{" "}
                </div>
              </ContactToggle>
            </Social>
          </Hide>

          <Hide>
            <Social variants={titleAnimation}>
              <ContactToggle title="Send us a message">
                <Circle />

                <div className="loremIpsum">
                  <p> Lorem ipsum dolor sit amet. </p>{" "}
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.Sed,
                    rem.{" "}
                  </p>{" "}
                </div>
              </ContactToggle>
            </Social>
          </Hide>

          <Hide>
            <Social variants={titleAnimation}>
              <ContactToggle title="Drop an email">
                <Circle />
                <div className="loremIpsum">
                  <p> Lorem ipsum dolor sit amet. </p>{" "}
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.Sed,
                    rem.{" "}
                  </p>{" "}
                </div>
              </ContactToggle>
            </Social>
          </Hide>
        </AnimateSharedLayout>
      </div>
    </Contact>
  );
};

const Contact = styled(motion.div)`
  padding: 5rem 10rem;
  min-height: 90vh;
  @media (max-width: 1500px) {
    padding: 2rem;
  }
`;

const Title = styled.div`
  margin-bottom: 4rem;
  color: white;
`;

const Hide = styled(motion.div)`
  overflow: hidden;
`;

const Social = styled(motion.div)`
  display: flex;
  flex-direction: column;
  border-radius: 25px;

  h2 {
    margin: 2rem;
    color: white;
    font-size: 2.5rem;
  }

  .loremIpsum {
    padding: 2rem;
  }

  @media (max-width: 1500px) {
    margin: 1rem;
    font-size: 2.5rem;
  }
`;

const Circle = styled.div`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background: #fff;
  @media (max-width: 1500px) {
    display: none;
  }
`;

export default ContactUs;
