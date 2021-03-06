import React, { useState } from "react";
import styled from "styled-components";
import { About } from "../styles";
import Toggle from "./Toggle";
import { AnimateSharedLayout } from "framer-motion";
import { useScroll } from "./useScroll";
import { fade } from "../Animation";

const FaqSection = () => {
  const [element, controlsAnim] = useScroll();
  return (
    <Faq variants={fade} ref={element} animate={controlsAnim} initial="hidden">
      <h2>
        Any Questions ? <span> FAQ </span>{" "}
      </h2>{" "}
      <AnimateSharedLayout>
        <Toggle title=" How do I start ?">
          <div className="answer">
            <p> Lorem ipsum dolor sit amet. </p>{" "}
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.Sed, rem.{" "}
            </p>{" "}
          </div>{" "}
        </Toggle>{" "}
        <Toggle title=" Daily schedule">
          <div className="answer">
            <p> Lorem ipsum dolor sit amet. </p>{" "}
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.Sed, rem.{" "}
            </p>{" "}
          </div>{" "}
        </Toggle>{" "}
        <Toggle title="Different Payment Methods">
          <div className="answer">
            <p> Lorem ipsum dolor sit amet. </p>{" "}
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.Sed, rem.{" "}
            </p>{" "}
          </div>{" "}
        </Toggle>{" "}
        <Toggle title="What Products do you offer ?">
          <div className="answer">
            <p> Lorem ipsum dolor sit amet. </p>{" "}
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.Sed, rem.{" "}
            </p>{" "}
          </div>{" "}
        </Toggle>{" "}
      </AnimateSharedLayout>{" "}
    </Faq>
  );
};

const Faq = styled(About)`
  display: block;

  span {
    display: block;
  }

  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }

  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem;
    width: 100%;
  }

  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }

  .answer {
    padding: 2rem 0rem;
  }

  p {
    padding: 1rem 0rem;
  }
`;

export default FaqSection;
