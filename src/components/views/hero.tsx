import React from "react";
import { Vstack, Title, Button } from "@components";
import styled, { breakpoints, css } from "@xstyled/styled-components";
import { motion } from "framer-motion";

const Hero = () => {
  const motionsProps = (delay) => ({
    initial: { opacity: 0, x: -10 },
    animate: { opacity: 1, x: 0 },
    transition: { delay, duration: 0.6 },
  });
  return (
    <HeroHolder>
      <Vstack space={2}>
        <Vstack space={1}>
          <motion.div {...motionsProps(0)}>
            <Title>Hello</Title>
          </motion.div>
          <H1 {...motionsProps(0.2)}>Obytes</H1>
        </Vstack>
        <P style={{ maxWidth: 500, lineHeight: "30px" }} {...motionsProps(0.4)}>
          I’m Ilyass Ben Hakim, and I’m a software engineer, self-taught frontend developer and UI UX designer.
        </P>
        <motion.div {...motionsProps(0.6)}>
          <Button to="https://ilyassbh.me">
            My<span> portfolio</span>
          </Button>
        </motion.div>
      </Vstack>
    </HeroHolder>
  );
};
const H1 = styled(motion.h1)`
  font-size: 64px;
  font-weight: 700;
`;

const P = styled(motion.p)`
  font-size: 17px;
  font-weight: 400;
`;
const HeroHolder = styled.div`
  ${breakpoints({
    lg: css`
      max-width: 500px;
      margin-left: 200px;
    `,
  })}
`;
export default Hero;
