import { motion } from "framer-motion";
import styled from "styled-components";

export const LoaderMapContent = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;


export const GridContainer = styled(motion.section)`
  position: relative;
  max-width: 125rem;
  width: 100%;
  margin: auto;
  display: grid;
  row-gap: 2rem;
  column-gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(50rem, 1fr));
  @media (max-width: 768px) {
    display: block;
    width: 90%;
  }
`;