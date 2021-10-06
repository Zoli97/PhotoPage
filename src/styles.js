import styled from "styled-components";
import { motion } from "framer-motion";

export const About = styled.div `
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
`;

export const Description = styled.div `
  flex: 1;
  padding-right: 5rem;
  z-index: 2;

  h2 {
    font-weight: lighter;
  }
`;

export const Image = styled.div `
  flex: 1;
  overflow: hidden;
  z-index: 2;
`;

export const IMG = styled(motion.img)
`
  width: 100%;
  height: 80vh;
  object-fit: cover;
`;

export const Hide = styled.div `
  overflow: hidden;
`;

export const Button = styled(motion.button)
`
  margin-top: 1.2rem;
`;